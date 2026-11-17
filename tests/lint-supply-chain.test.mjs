import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
const read=(path)=>readFileSync(new URL(`../${path}`,import.meta.url),"utf8");

test("lint keeps security and React/Next rules without vulnerable ESLint transitive packages",()=>{
  const pkg=JSON.parse(read("package.json"));
  assert.equal(pkg.scripts.lint,"oxlint . --deny-warnings");
  assert.match(pkg.devDependencies.oxlint,/^1\.\d+\.\d+$/);
  for (const pkgName of ["eslint","eslint-config-next","@next/eslint-plugin-next"])
    assert.equal(pkg.devDependencies[pkgName],undefined);
  assert.equal(existsSync(new URL("../eslint.config.mjs",import.meta.url)),false);
  const cfg=JSON.parse(read(".oxlintrc.json"));
  for (const domain of ["react","typescript","nextjs","jsx-a11y","import"])
    assert.ok(cfg.plugins.includes(domain),`Missing lint plugin: ${domain}`);
  assert.equal(cfg.rules["react/rules-of-hooks"],"error");
  assert.equal(cfg.rules["react/exhaustive-deps"],"error");
  assert.equal(cfg.options.denyWarnings,true);
});

test("CI still executes strict lint and independent production/full audits",()=>{
  const ci=read(".github/workflows/ci.yml");
  assert.match(ci,/run: npm run lint/);
  assert.match(ci,/run: node scripts\/audit-dependencies\.mjs --omit-dev/);
  assert.match(ci,/run: node scripts\/audit-dependencies\.mjs\s*$/m);
});
