import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("only main is allowed to trigger automatic Vercel deployments", () => {
  const config = JSON.parse(read("vercel.json"));
  assert.equal(config.git?.deploymentEnabled?.["*"], false);
  assert.equal(config.git?.deploymentEnabled?.main, true);
});

test("GitHub CI validates PRs without pushing obsolete hardening branches", () => {
  const workflow = read(".github/workflows/ci.yml");
  assert.match(workflow, /pull_request:/);
  assert.match(workflow, /branches:\s*\n\s*- main/);
  assert.doesNotMatch(workflow, /fix\/full-hardening-20260730/);
});
