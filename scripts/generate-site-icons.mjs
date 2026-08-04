import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const root = process.cwd();
const publicDir = path.join(root, "public");
const symbolPath = path.join(publicDir, "brand", "hocker-agi-symbol.png");
const heroPath = path.join(publicDir, "brand", "hocker-agi-hero.webp");

const symbol = await fs.readFile(symbolPath);
const favicon = await sharp(symbol)
  .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toBuffer();
await fs.writeFile(path.join(publicDir, "icon.png"), favicon);

const maskSymbol = await sharp(symbol)
  .resize(374, 374, { fit: "contain" })
  .png()
  .toBuffer();
const appleIcon = await sharp({
  create: { width: 512, height: 512, channels: 4, background: { r: 3, g: 10, b: 22, alpha: 1 } },
})
  .composite([{ input: maskSymbol, left: 69, top: 69 }])
  .png({ compressionLevel: 9 })
  .toBuffer();
await fs.writeFile(path.join(publicDir, "apple-icon.png"), appleIcon);

const social = await sharp(heroPath)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .png({ compressionLevel: 9 })
  .toBuffer();
await fs.writeFile(path.join(publicDir, "og-image.png"), social);

console.log("Generated official site icon, maskable Apple icon and legacy social image.");
