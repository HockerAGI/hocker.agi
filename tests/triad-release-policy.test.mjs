import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const config = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));

test("candidate branch cannot create a Vercel deployment before CI is green", () => {
  assert.equal(config.git.deploymentEnabled["hocker-triad-ci-20260818"], false);
  assert.equal(config.git.deploymentEnabled["hocker-triad-preview-20260818"], true);
});
