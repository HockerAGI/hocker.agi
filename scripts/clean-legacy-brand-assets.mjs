import fs from "node:fs/promises";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");
const slugs = [
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

const legacyFiles = slugs.flatMap((slug) => [
  path.join(publicDir, "apps", slug, "logo.png"),
  path.join(publicDir, "apps", slug, "cover.png"),
]);
legacyFiles.push(path.join(publicDir, "brand", "hocker-agi-technologies.png"));

let removed = 0;
for (const file of legacyFiles) {
  try {
    await fs.rm(file);
    removed += 1;
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") continue;
    throw error;
  }
}

console.log(`Removed ${removed} legacy brand assets.`);
