# HOCKER TRIAD Release Checklist

Date: 2026-08-18
Repository: `HockerAGI/hocker.agi`
Reviewed base: `6c8265f290410880315e5addc2b8ce843c49e13f`

## Local evidence completed

- [x] Current remote `main` SHA re-read before implementation.
- [x] Production contact truth re-read before implementation.
- [x] Correct public phone encoded once: `+52 664 209 1143` / `+526642091143`.
- [x] Verified website email preserved: `contacto.hocker@gmail.com`.
- [x] Three owner-supplied brand sources fingerprinted with SHA-256.
- [x] Runtime brand master is byte-identical to the approved graphite lockup and is exposed under a correctly typed `.jpg` path.
- [x] No logo redraw, retyping, recoloring or geometric reinterpretation.
- [x] Product logo source paths remain unchanged.
- [x] HOCKER TRIAD design tokens implemented.
- [x] Permanent mobile dock and floating WhatsApp removed from the new shell.
- [x] Approved Home hook and funnel implemented.
- [x] Product readiness uses explicit semantic states.
- [x] AGI experience is explicitly visual-only and preserves Owner Gate language.
- [x] Portfolio uses current CV structure as evidence context rather than a web-CV copy.
- [x] Pinocho remains `DOCUMENTED`; no expanded credit or result is invented.
- [x] HOCKER and Score Store case shells exist without fabricated proof.
- [x] Profile social URLs remain absent until official URLs are supplied.
- [x] CV download is not exposed while the supplied PDF contains an outdated phone.
- [x] Organization/Profile structured data avoids invented legal identity and invented `sameAs`.
- [x] Sitemap has no synthetic `lastModified`, `priority`, or `changeFrequency`.
- [x] Analytics taxonomy distinguishes corporate and recruiter funnels.
- [x] Optional analytics/ads remain consent-gated and preferences are revocable.
- [x] Lead handoff does not place submitted PII in the WhatsApp URL.
- [x] Lead endpoint preserves content type/origin/honeypot/timing validation and verifies actual body byte size.
- [x] Legacy Precision Future selectors/imports are absent from active source.
- [x] Source secret scan found no key/token/private-key pattern.
- [x] Critical normal-text contrast pairs are statically tested at >=4.5:1.
- [x] CSS parser reports no stylesheet parse errors.
- [x] Internal `@/` source imports resolve in the local implementation tree.
- [x] Local Node test suite: 34 tests / 34 pass before remote candidate publication.
- [x] Local TypeScript structural preflight passes using temporary framework stubs.
- [x] Proxy visual review completed at 320, 390, and 1440 representative layouts.

## Environment limitation — not falsely marked green

The execution container has Node 22.16, no project `node_modules`, an empty npm cache, and registry access is unavailable. Therefore these authoritative project checks must be executed by the repository CI on Node 24:

- [ ] `npm ci` against the repository lockfile.
- [ ] project ESLint with `eslint-config-next`.
- [ ] project TypeScript with the real Next/React/Node types.
- [ ] `next build`.
- [ ] local production server + `scripts/smoke-production.mjs` in CI.
- [ ] production/full dependency audits.
- [ ] authoritative browser QA against the exact CI-green preview.

The stub TypeScript pass is a preflight only; it is not a substitute for CI.

## Quota-safe remote gate

1. Candidate branch is `hocker-triad-ci-20260818` and is explicitly Vercel-disabled in `vercel.json`.
2. Open one PR only after the candidate diff is complete.
3. The existing GitHub Actions `verify` job runs once on the PR exact head.
4. If CI fails, collect all failures before one consolidated correction; candidate remains Vercel-disabled.
5. Only after exact-head CI green, create `hocker-triad-preview-20260818` at the same green code with Vercel enabled.
6. Verify preview routes, metadata, headers, runtime logs and visual behavior.
7. Merge only the exact verified code; verify production and roll back first if a material regression appears.

## Merge blockers

- tests/lint/typecheck/build/smoke/audit red;
- product brand regression;
- incorrect phone/email;
- unsupported product/AGI/legal claim;
- responsive overflow or overlap;
- inaccessible critical control;
- new High/Critical dependency finding outside documented audit policy;
- material preview runtime errors;
- inability to visually review the exact preview.
