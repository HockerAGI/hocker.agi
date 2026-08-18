import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("official site uses patched framework and image processor", async () => {
  const pkg = JSON.parse(await read("package.json"));
  assert.equal(pkg.dependencies.next, "16.3.1");
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
