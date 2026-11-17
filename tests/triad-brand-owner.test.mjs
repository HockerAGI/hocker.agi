import test from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root=fileURLToPath(new URL("..",import.meta.url));
const logo=join(root,"public/brand/hocker-agi-official-transparent.png");
const symbol=join(root,"public/brand/hocker-agi-symbol-transparent-512.png");
test("official transparent assets match owner originals byte-for-byte",()=>{
  const sha=file=>createHash("sha256").update(readFileSync(file)).digest("hex");
  assert.equal(sha(logo),"7f48ad29a8c57a62973d85c3184625fd770d83474fe7152f8a57fe8c2d3b6bcb");
  assert.equal(sha(symbol),"f5672892a23db02458912b4a896f32a887f12e299506fae2096d62b7d1b7d7a1");
});
test("transparent logo and symbol retain original dimensions and alpha",async()=>{
  for(const [file,w,h] of [[logo,1024,1024],[symbol,512,512]]){
    const m=await sharp(file).metadata();
    assert.equal(m.width,w);assert.equal(m.height,h);assert.equal(m.hasAlpha,true);
  }
});
test("the public site exclusively uses owner-approved transparent identity",()=>{
  const site=readFileSync(join(root,"src/lib/public-site.ts"),"utf8");
  assert.match(site,/hocker-agi-official-transparent\.png/);
  assert.match(site,/hocker-agi-symbol-transparent-512\.png/);
  assert.match(site,/og-image\.png/);
  assert.doesNotMatch(site,/hocker-agi-official-lockup\.jpg/);
});
