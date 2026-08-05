import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const root = path.resolve(new URL("..", import.meta.url).pathname);
const productSlugs = [
  "hocker-one",
  "hocker-ads",
  "hocker-hub",
  "hocker-drive-cloud",
  "hocker-wallet",
  "chido-casino",
  "trackhok",
  "nexpa",
  "hocker-up",
  "hocker-supply",
];

const expectedAssets = [
  ["icon.png", 512, 512, "png"],
  ["icon-maskable.png", 512, 512, "png"],
  ["logo-horizontal.png", 1600, 600, "png"],
  ["logo-stacked.png", 1200, 1200, "png"],
  ["cover.webp", 1600, 900, "webp"],
  ["og-image.webp", 1200, 630, "webp"],
];

async function assertImage(file, width, height, format) {
  const metadata = await sharp(file).metadata();
  assert.equal(metadata.width, width, `${file} width`);
  assert.equal(metadata.height, height, `${file} height`);
  assert.equal(metadata.format, format, `${file} format`);
}

test("every public product ships a faithful technical identity kit", async () => {
  for (const slug of productSlugs) {
    const directory = path.join(root, "public", "apps", slug);
    const svg = await readFile(path.join(directory, "icon.svg"), "utf8");
    assert.match(svg, /<image href="icon\.png"/);
    assert.doesNotMatch(svg, /<path\b/);

    for (const [name, width, height, format] of expectedAssets) {
      await assertImage(path.join(directory, name), width, height, format);
    }
  }
});

test("the official company identity has responsive site assets", async () => {
  await assertImage(path.join(root, "public", "brand", "hocker-agi-symbol.png"), 720, 720, "png");
  await assertImage(path.join(root, "public", "brand", "hocker-agi-horizontal.png"), 1800, 650, "png");
  await assertImage(path.join(root, "public", "brand", "hocker-agi-hero.webp"), 1600, 900, "webp");
  await assertImage(path.join(root, "public", "icon.png"), 512, 512, "png");
  await assertImage(path.join(root, "public", "apple-icon.png"), 512, 512, "png");
});

test("legacy square logos and provisional covers are removed", async () => {
  for (const slug of productSlugs) {
    for (const name of ["logo.png", "cover.png"]) {
      await assert.rejects(access(path.join(root, "public", "apps", slug, name)));
    }
  }
  await assert.rejects(access(path.join(root, "public", "brand", "hocker-agi-technologies.png")));
});
