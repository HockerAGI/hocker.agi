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
  const active = isExceptionActive(now);
  const memo = new Map();

  function derivesOnlyFromReviewedNanoid(name, visiting = new Set()) {
    if (memo.has(name)) return memo.get(name);
    if (visiting.has(name)) return false;
    const vulnerability = vulnerabilities[name];
    if (!vulnerability || !BLOCKING_SEVERITIES.has(String(vulnerability.severity).toLowerCase())) return false;

    if (name === "nanoid" && active && hasExactNanoidAdvisory(vulnerability)) {
      memo.set(name, true);
      return true;
    }

    if (directViaEntries(vulnerability).length > 0) {
      memo.set(name, false);
      return false;
    }

    const dependencies = stringViaEntries(vulnerability);
    if (dependencies.length === 0) {
      memo.set(name, false);
      return false;
    }

    const nextVisiting = new Set(visiting);
    nextVisiting.add(name);
    const allowed = dependencies.every((dependency) => derivesOnlyFromReviewedNanoid(dependency, nextVisiting));
    memo.set(name, allowed);
    return allowed;
  }

  const blocking = [];
  const exceptions = [];

  for (const [name, vulnerability] of Object.entries(vulnerabilities)) {
    if (!BLOCKING_SEVERITIES.has(String(vulnerability?.severity).toLowerCase())) continue;

    if (derivesOnlyFromReviewedNanoid(name)) {
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
    exceptionExpired: !active,
  };
}
