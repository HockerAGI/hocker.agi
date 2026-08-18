export const NANOID_POSTCSS_EXCEPTION = Object.freeze({
  advisory: "GHSA-2v37-7h3g-55p8",
  cve: "CVE-2026-67213",
  expiresAt: "2026-09-15T00:00:00.000Z",
  reason: "PostCSS uses nanoid/non-secure only as nanoid(6) for an internal source identifier; the advisory requires attacker-controlled size=0 through customAlphabet/customRandom.",
});

const BLOCKING_SEVERITIES = new Set(["high", "critical"]);

function directViaEntries(vulnerability) {
  return Array.isArray(vulnerability?.via)
    ? vulnerability.via.filter((entry) => entry && typeof entry === "object")
    : [];
}

function stringViaEntries(vulnerability) {
  return Array.isArray(vulnerability?.via)
    ? vulnerability.via.filter((entry) => typeof entry === "string")
    : [];
}

function hasExactNanoidAdvisory(vulnerability) {
  return directViaEntries(vulnerability).some((entry) => {
    const url = typeof entry.url === "string" ? entry.url : "";
    const title = typeof entry.title === "string" ? entry.title : "";
    return url.includes(NANOID_POSTCSS_EXCEPTION.advisory) || title.includes(NANOID_POSTCSS_EXCEPTION.cve);
  });
}

function isExceptionActive(now) {
  return now.getTime() < new Date(NANOID_POSTCSS_EXCEPTION.expiresAt).getTime();
}

export function evaluateAuditReport(report, now = new Date()) {
  const vulnerabilities = report?.vulnerabilities && typeof report.vulnerabilities === "object"
    ? report.vulnerabilities
    : {};
  const nanoid = vulnerabilities.nanoid;
  const nanoidException = Boolean(
    nanoid &&
    BLOCKING_SEVERITIES.has(String(nanoid.severity).toLowerCase()) &&
    hasExactNanoidAdvisory(nanoid) &&
    isExceptionActive(now)
  );

  const blocking = [];
  const exceptions = [];

  for (const [name, vulnerability] of Object.entries(vulnerabilities)) {
    if (!BLOCKING_SEVERITIES.has(String(vulnerability?.severity).toLowerCase())) continue;

    if (name === "nanoid" && nanoidException) {
      exceptions.push({ name, advisory: NANOID_POSTCSS_EXCEPTION.advisory });
      continue;
    }

    const derivedOnlyFromNanoid = name === "postcss" &&
      nanoidException &&
      directViaEntries(vulnerability).length === 0 &&
      stringViaEntries(vulnerability).length > 0 &&
      stringViaEntries(vulnerability).every((entry) => entry === "nanoid");

    if (derivedOnlyFromNanoid) {
      exceptions.push({ name, advisory: NANOID_POSTCSS_EXCEPTION.advisory });
      continue;
    }

    blocking.push({
      name,
      severity: vulnerability?.severity ?? "unknown",
      via: vulnerability?.via ?? [],
      nodes: vulnerability?.nodes ?? [],
    });
  }

  return {
    ok: blocking.length === 0,
    blocking,
    exceptions,
    exceptionExpired: !isExceptionActive(now),
  };
}
