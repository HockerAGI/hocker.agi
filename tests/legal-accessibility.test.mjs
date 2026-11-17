import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const header = readFileSync("src/components/navigation/site-header.tsx", "utf8");
const layout = readFileSync("src/design-system/layout.css", "utf8");

test("brand link uses visible wordmark as its accessible label", () => {
  assert.match(header, /<Link className="brand-link" href="\/">/);
  assert.match(header, /<span className="brand-wordmark">/);
  assert.match(header, /alt=""/);
  assert.doesNotMatch(header, /className="brand-link"[^>]*aria-label=/);
  assert.doesNotMatch(header, /className="brand-wordmark"[^>]*aria-hidden=/);
});

test("light legal surfaces override dark-theme eyebrow and button contrast", () => {
  assert.match(layout, /\.legal-page \.h-eyebrow\{color:#185e9d\}/);
  assert.match(layout, /\.legal-page \.button-secondary\{color:#1d2430;background:#fff;border-color:#88909e\}/);
});

const consent = readFileSync("src/components/analytics-consent.tsx", "utf8");

test("privacy preferences manage focus entry, tab cycling, and restoration", () => {
  assert.match(consent, /dialogRef\.current/);
  assert.match(consent, /dialog\?\.focus\(\)/);
  assert.match(consent, /event\.key !== "Tab"/);
  assert.match(consent, /openerRef\.current\?\.isConnected/);
  assert.match(consent, /ref=\{dialogRef\} tabIndex=\{-1\}/);
});
