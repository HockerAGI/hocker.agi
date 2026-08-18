import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read=(path)=>readFileSync(new URL(`../${path}`,import.meta.url),"utf8");
function luminance(hex){const values=hex.replace("#","").match(/../g).map(value=>Number.parseInt(value,16)/255).map(value=>value<=.04045?value/12.92:((value+.055)/1.055)**2.4);return .2126*values[0]+.7152*values[1]+.0722*values[2]}
function contrast(a,b){const[high,low]=[luminance(a),luminance(b)].sort((x,y)=>y-x);return(high+.05)/(low+.05)}
test("critical text color pairs meet normal-text AA contrast",()=>{assert.ok(contrast("#aab2c0","#010102")>=4.5);assert.ok(contrast("#06101b","#569ce5")>=4.5);assert.ok(contrast("#4d5664","#eef1f5")>=4.5);assert.ok(contrast("#185e9d","#eef1f5")>=4.5);assert.ok(contrast("#f4f7fb","#246fbd")>=4.5)});
test("mobile and reduced-motion protections remain explicit",()=>{const layout=read("src/design-system/layout.css"),motion=read("src/design-system/motion.css");assert.match(layout,/min-width:48px;min-height:48px/);assert.match(layout,/@media\(max-width:380px\)/);assert.match(layout,/safe-area-inset-bottom/);assert.doesNotMatch(layout,/mobile-dock/);assert.match(motion,/prefers-reduced-motion:reduce/)});
