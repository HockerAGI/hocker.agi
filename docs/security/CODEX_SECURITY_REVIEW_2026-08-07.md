# HOCKER Web — Codex Security Review — 2026-08-07

## Status

**Connector-assisted standard security review. No production deployment or merge is authorized.**

This review follows the installed Codex Security standard methodology. The native Codex Security worker/scan-ID runtime is not exposed in this ChatGPT environment, so source inspection used the authenticated GitHub connector. Coverage is **partial / connector-assisted**.

Repository: `HockerAGI/hocker.agi`
Version: hardening candidate branch `hardening/production-readiness-20260807`

## Threat model

### Assets
- Corporate/public brand surface and user trust.
- Contact/conversion flows.
- Analytics/marketing integrations.
- Vercel deployment integrity and environment configuration.

### Trust boundaries
- Public browser → Next.js application.
- Application → Google Analytics / Meta endpoints allowed by CSP.
- GitHub branch/PR → Vercel Preview/Production.

### Security invariants
- Public pages must not expose server secrets.
- Third-party scripts/connections are explicitly allowlisted.
- Responses must resist framing, MIME sniffing and insecure transport.
- Deployments originate from reviewed/versioned source.

## Validated controls

1. Security headers define CSP, HSTS, Referrer Policy, X-Content-Type-Options, X-Frame-Options, Permissions Policy, COOP and CORP.
2. Production console removal reduces accidental client-side operational leakage.
3. Dependency graph was remediated and CI now covers complete dependency auditing in the hardening branch.
4. GitHub Actions are pinned to immutable commits, checkout credentials are not persisted, and CODEOWNERS/Dependabot/SECURITY policy are present.
5. Existing build/typecheck/lint/smoke coverage was preserved by hardening.

## Residual findings

### P2 — CSP still permits inline script/style execution
The current CSP includes `script-src 'unsafe-inline'` and `style-src 'unsafe-inline'`. No exploit was established from the reviewed public/static surface, and Next.js/tooling can require inline constructs, but the directive weakens CSP as an XSS containment layer.

**Recommendation:** before adding authenticated/admin surfaces or richer user-generated input, move toward nonce/hash-based scripts and remove `unsafe-inline` where framework behavior permits it. Keep Google/Meta domains narrowly scoped.

### P2 — marketing third-party surface must remain explicit
Google Tag Manager/Analytics and Meta endpoints are intentionally allowlisted. Any future pixel, tag manager, chat widget or form SaaS should require an explicit privacy/security review rather than widening `script-src`/`connect-src` generically.

## Coverage

Reviewed high-risk surfaces include framework/dependency posture, response security headers, third-party CSP boundaries and CI/supply-chain controls. GitHub connector search did not identify a material server API surface in the sampled current tree; this is not an exhaustive proof that none exists. This review does not assert native full-repository worker coverage.
