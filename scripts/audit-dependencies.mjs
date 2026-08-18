import { spawnSync } from "node:child_process";
import { evaluateAuditReport, NANOID_POSTCSS_EXCEPTION } from "./audit-policy.mjs";

const omitDev = process.argv.includes("--omit-dev");
const args = ["audit", "--json"];
if (omitDev) args.push("--omit=dev");

const result = spawnSync("npm", args, {
  encoding: "utf8",
  env: process.env,
  maxBuffer: 12 * 1024 * 1024,
});

if (result.error) {
  console.error("Unable to execute npm audit:", result.error.message);
  process.exit(1);
}

let report;
try {
  report = JSON.parse(result.stdout || "{}");
} catch (error) {
  console.error("npm audit did not return valid JSON.");
  if (result.stderr) console.error(result.stderr.trim());
  process.exit(1);
}

const evaluation = evaluateAuditReport(report);
if (!evaluation.ok) {
  console.error("Blocking high/critical dependency vulnerabilities detected:");
  for (const item of evaluation.blocking) console.error(`- ${item.name}: ${item.severity}`);
  process.exit(1);
}

if (evaluation.exceptions.length > 0) {
  console.warn(
    `Temporary reviewed exception ${NANOID_POSTCSS_EXCEPTION.advisory} (${NANOID_POSTCSS_EXCEPTION.cve}) accepted until ${NANOID_POSTCSS_EXCEPTION.expiresAt}.`
  );
  console.warn(NANOID_POSTCSS_EXCEPTION.reason);
  console.warn("Any other high/critical advisory still fails this gate.");
} else {
  console.log("No high/critical dependency vulnerabilities detected.");
}
