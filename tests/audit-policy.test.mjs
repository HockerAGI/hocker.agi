import test from "node:test";
import assert from "node:assert/strict";
import { evaluateAuditReport } from "../scripts/audit-policy.mjs";

const advisory = {
  source: 123456,
  name: "nanoid",
  dependency: "nanoid",
  title: "nanoid before 5.1.6 contains an infinite loop via CVE-2026-67213",
  url: "https://github.com/advisories/GHSA-2v37-7h3g-55p8",
  severity: "high",
};

function report(extra = {}) {
  return {
    vulnerabilities: {
      nanoid: { name: "nanoid", severity: "high", via: [advisory], effects: ["postcss"], nodes: ["node_modules/nanoid"] },
      postcss: { name: "postcss", severity: "high", via: ["nanoid"], effects: ["next"], nodes: ["node_modules/postcss"] },
      next: { name: "next", severity: "high", via: ["postcss"], effects: [], nodes: ["node_modules/next"] },
      ...extra,
    },
  };
}

test("temporary NanoID exception follows only the reviewed transitive chain", () => {
  const result = evaluateAuditReport(report(), new Date("2026-08-18T10:00:00Z"));
  assert.equal(result.ok, true);
  assert.deepEqual(result.exceptions.map((item) => item.name).sort(), ["nanoid", "next", "postcss"]);
});

test("temporary exception fails closed after expiry", () => {
  const result = evaluateAuditReport(report(), new Date("2026-09-15T00:00:00Z"));
  assert.equal(result.ok, false);
  assert.equal(result.exceptionExpired, true);
});

test("unrelated high severity advisories always block CI", () => {
  const result = evaluateAuditReport(report({ other: { name: "other", severity: "high", via: [{ url: "https://example.invalid/GHSA-other" }], nodes: ["node_modules/other"] } }), new Date("2026-08-18T10:00:00Z"));
  assert.equal(result.ok, false);
  assert.equal(result.blocking.some((item) => item.name === "other"), true);
});

test("a direct high advisory on a parent package is never inherited into the exception", () => {
  const directNextAdvisory = { source: 999, name: "next", dependency: "next", title: "Direct Next advisory", url: "https://example.invalid/GHSA-next", severity: "high" };
  const result = evaluateAuditReport(report({ next: { name: "next", severity: "high", via: ["postcss", directNextAdvisory], nodes: ["node_modules/next"] } }), new Date("2026-08-18T10:00:00Z"));
  assert.equal(result.ok, false);
  assert.equal(result.blocking.some((item) => item.name === "next"), true);
});
