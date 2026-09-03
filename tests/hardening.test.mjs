import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("official site uses patched framework and image processor", async () => {
  const pkg = JSON.parse(await read("package.json"));
  assert.equal(pkg.dependencies.next, "16.3.3");
  assert.equal(pkg.dependencies.react, "19.2.8");
  assert.equal(pkg.dependencies["react-dom"], "19.2.8");
  assert.equal(pkg.dependencies.sharp, "0.35.3");
});

test("official site sends baseline security headers", async () => {
  const config = await read("next.config.ts");
  for (const header of [
    "Content-Security-Policy",
    "frame-ancestors 'none'",
    "Referrer-Policy",
    "X-Content-Type-Options",
    "Permissions-Policy",
  ]) {
    assert.match(config, new RegExp(header.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("public contact uses the confirmed phone number", async () => {
  const source = await read("src/lib/public-site.ts");
  assert.match(source, /\+526642091143/);
  assert.match(source, /\+52 664 209 1143/);
  assert.doesNotMatch(source, /6632091143/);
});
