import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("framework and image versions are explicit and aligned", async () => {
  const pkg = JSON.parse(await read("package.json"));
  for (const name of ["next", "react", "react-dom", "sharp"]) {
    assert.match(pkg.dependencies[name], /^\d+\.\d+\.\d+$/, name + " must be pinned to an exact version");
  }
  assert.equal(pkg.dependencies.react, pkg.dependencies["react-dom"]);
  assert.equal(pkg.overrides.sharp, pkg.dependencies.sharp);
  assert.equal(pkg.engines.node, "24.x");
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
