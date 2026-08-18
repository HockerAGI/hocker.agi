# HOCKER TRIAD Web v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Precision Future with the approved HOCKER TRIAD corporate and Evidence Experience design while preserving product truth, security, brand integrity, responsive behavior and release discipline.

**Architecture:** Keep the existing Next.js App Router project and dependency baseline. Separate presentation (`src/components`, `src/design-system`) from public truth/content (`src/content`, `src/lib`) and from conversion/analytics. Other HOCKER repositories remain read-only context and are never mutated by this plan.

**Tech Stack:** Next.js 16.3.1, React 19.2.8, TypeScript 5.9.x, Node 24.x, CSS design system, existing GitHub Actions and Vercel integration.

**Spec:** `docs/superpowers/specs/2026-08-18-hocker-triad-web-v2-design.md`

## Global Constraints

- Only `HockerAGI/hocker.agi` may be modified.
- Correct phone: `+52 664 209 1143` / `+526642091143`.
- Verified website email: `contacto.hocker@gmail.com`.
- Official company logo may be cropped/resized/transcoded/canvased only; no redraw/retype/recolor/geometric reinterpretation.
- Product logos must not be redrawn or normalized.
- No fake metrics, clients, maturity, autonomous AGI execution, legal identity or regulatory claims.
- Missing professional evidence assets are added after implementation; no fake visual placeholders.
- No dependency major upgrade as part of design work.
- Candidate branch must remain Vercel-disabled until exact-head GitHub CI is green.
- Merge only after exact preview is reviewed.

---

### Task 1: Reconcile base and protect release quota

**Files:** `.github/workflows/ci.yml`, `vercel.json`

**Produces:** exact base SHA, candidate branch name, preview branch name, deployment gate.

- [x] Re-read `main` and confirm base `6c8265f290410880315e5addc2b8ce843c49e13f`.
- [x] Read CI triggers and confirm PR opens one `verify` run.
- [x] Add `vercel.json` with `hocker-triad-ci-20260818: false` and `hocker-triad-preview-20260818: true`.
- [x] Add a static test that asserts candidate deployment is disabled.
- [ ] Before PR, confirm no Vercel deployment exists for candidate branch.

### Task 2: Establish official brand provenance

**Files:** `public/brand/hocker-agi-official-lockup.jpg`, `docs/qa/hocker-triad-brand-provenance.md`, `tests/triad-brand-owner.test.mjs`

**Produces:** byte-identical runtime brand master and hash regression gate.

- [x] Fingerprint all three owner-supplied files.
- [x] Verify the approved graphite lockup bytes match the historical `public/brand/logo.png` Git blob.
- [x] Expose the same blob under the correctly typed `.jpg` path.
- [x] Add SHA-256 regression test.
- [x] Keep all product identity paths untouched.

### Task 3: Add HOCKER TRIAD design system

**Files:** `src/design-system/tokens.css`, `typography.css`, `layout.css`, `motion.css`, `utilities.css`, `src/app/globals.css`

**Produces:** obsidian/titanium/blue token system, responsive layouts, bounded typography, reduced motion.

- [x] Write tests for required tokens, bounded typography and reduced motion.
- [x] Implement semantic color/spacing/radius/motion tokens.
- [x] Implement mobile-first navigation/content/product/evidence/form layouts.
- [x] Implement 380/430/720/980/1800 behavior and safe-area handling.
- [ ] Exact browser preview must validate all representative widths before merge.

### Task 4: Replace the site shell

**Files:** `src/components/site-shell.tsx`, `src/components/navigation/*`, `src/components/brand/*`, `src/components/ui/*`

**Produces:** desktop navigation, mobile panel, official lockup, footer and reusable actions.

- [x] Remove permanent mobile dock and floating WhatsApp.
- [x] Use official lockup in header/footer/brand stage without retyping the wordmark.
- [x] Implement 48px mobile menu control and keyboard-visible focus.
- [x] Implement Hocker Cut as separate decorative element.

### Task 5: Centralize public truth

**Files:** `src/lib/public-site.ts`, `src/lib/product-readiness.ts`, `src/lib/site-data.ts`, `src/content/solutions/*`

**Produces:** canonical contact data, ten-product catalog, explicit maturity states, solution territories and intents.

- [x] Replace all public contact values with correct phone and verified email.
- [x] Encode product readiness as `VERIFIED|DOCUMENTED|IN_PROGRESS|TARGET`.
- [x] Preserve original product identity assets.
- [x] Add intent and solution content keyed by business outcome.

### Task 6: Implement approved Home funnel

**Files:** `src/app/page.tsx`, `src/components/editorial/*`, `src/components/conversion/intent-selector.tsx`, `src/components/products/product-gallery.tsx`, `src/components/evidence/proof-strip.tsx`

**Produces:** approved hero, intent selector, solutions, product gallery, proof, AGI segment, method, founder bridge and conversion.

- [x] Replace old hero with `Ideas que funcionan. Sistemas que evolucionan.`
- [x] Add `¿Qué quieres hacer crecer?` intent interaction.
- [x] Add four solution territories.
- [x] Add asymmetric product gallery with Hocker ONE flagship treatment.
- [x] Add evidence strip with no fabricated metrics.
- [x] Add final `¿Qué quieres crear?` conversion block.

### Task 7: Implement governed AGI public experience

**Files:** `src/app/agis/page.tsx`, `src/content/agi/public-missions.ts`, `src/components/agi/*`

**Produces:** visual-only mission selector and specialist flow.

- [x] Define representative missions.
- [x] Label execution `VISUAL_ONLY`.
- [x] Explain NOVA coordination and specialist roles.
- [x] Preserve material-action/Owner-Gate language.
- [x] Do not add runtime/API dependency to `nova.agi` or Hocker One.

### Task 8: Implement Evidence Experience portfolio

**Files:** `src/app/portafolio/page.tsx`, `src/app/portafolio/[slug]/page.tsx`, `src/content/portfolio/*`, `src/components/portfolio/*`, `src/components/evidence/*`

**Produces:** recruiter scan, proof navigator, selected work, career evolution, evidence wall, methodology, capabilities and cases.

- [x] Encode current CV headline, experience, education and declared certifications.
- [x] Keep social URLs null.
- [x] Keep CV download disabled until corrected PDF exists.
- [x] Add HOCKER flagship case and Score Store documented case.
- [x] Keep Pinocho `DOCUMENTED` and restrict wording to CV-supported scope.
- [x] Implement evidence states and expandable evidence context.
- [x] Add career narrative Crear → Comunicar → Producir → Convertir → Construir → Orquestar.

### Task 9: Preserve/strengthen lead and privacy boundaries

**Files:** `src/components/lead-form.tsx`, `src/app/api/leads/route.ts`, `src/components/analytics-consent.tsx`, legal pages

**Produces:** consent-gated measurement, revocation, bounded lead endpoint and PII-minimized WhatsApp continuation.

- [x] Keep `hocker.consent.v2` category consent and revocation.
- [x] Keep GA/Meta optional and consent-gated.
- [x] Enforce declared + actual 16KiB request boundary.
- [x] Enforce JSON, same origin/cross-site rejection, honeypot, timing, contact and consent validation.
- [x] Remove complete form payload from WhatsApp URL.
- [x] Update privacy/terms truth language.

### Task 10: SEO and structured data

**Files:** `src/app/layout.tsx`, `robots.ts`, `sitemap.ts`, `manifest.ts`, `src/lib/seo/schema.ts`

**Produces:** factual Organization/WebSite/ProfilePage schemas and deterministic sitemap.

- [x] Keep Organization without `legalName` or unsupported legal identity.
- [x] Add ProfilePage/Person for `/portafolio`.
- [x] Omit `sameAs` until official social URLs exist.
- [x] Include portfolio deep cases in sitemap.
- [x] Keep sitemap free of synthetic freshness/priority/changeFrequency.

### Task 11: Analytics taxonomy

**Files:** `src/lib/analytics/events.ts`, interactive components

**Produces:** vendor-neutral dataLayer events with funnel context.

- [x] Define hero, goal, solution, product, case, evidence, AGI, lead and WhatsApp events.
- [x] Mark recruiter events with `funnel: recruiter`.
- [x] Keep `cv_downloaded` reserved until corrected CV is actually downloadable.

### Task 12: Remove Precision Future dead code

**Files:** old CSS/components/data modules

**Produces:** active tree with no Precision Future shell/imports.

- [x] Remove `commercial.css`, `polish.css`, `vnext.css`, `legacy-vnext.css`.
- [x] Remove obsolete vNext demo/explorer/title components.
- [x] Remove legacy `portfolio-data.ts` after all consumers move to typed portfolio content.
- [x] Do not delete product assets or product brand tests.

### Task 13: Expand regression/smoke tests

**Files:** `tests/*.test.mjs`, `scripts/smoke-production.mjs`

**Produces:** truth, contact, brand, structure, accessibility, analytics, lead, SEO and production route checks.

- [x] Add current-CV/evidence tests.
- [x] Add critical static AA contrast tests.
- [x] Add alias/source route integrity tests.
- [x] Update old `vnext-truth` contract to TRIAD.
- [x] Update smoke paths/content/official JPEG lockup expectations.

### Task 14: Documentation and changed-surface security review

**Files:** `README.md`, `docs/qa/*`, `docs/security/HOCKER_TRIAD_SECURITY_REVIEW_2026-08-18.md`

**Produces:** truthful QA limitations, brand provenance, release checklist and residual-risk record.

- [x] Document local environment limitations instead of claiming unavailable checks.
- [x] Record local proxy visual baseline and negative regressions.
- [x] Record P1 distributed rate limiting gap and P2 CSP/timing/webhook residuals.
- [x] Document quota-safe release gate.

### Task 15: Exact candidate CI gate

**Files:** no new design files; exact candidate ref only.

**Produces:** real Node 24 CI evidence.

- [ ] Re-read `main` immediately before PR and reconcile if moved.
- [ ] Confirm candidate has no Vercel deployment.
- [ ] Compare `main...candidate` and inspect every changed path.
- [ ] Open one PR.
- [ ] Wait for the exact-head `verify` job.
- [ ] If red, collect every failure and make one consolidated correction while Vercel remains disabled.
- [ ] Require tests, lint, typecheck, build, smoke and both audits green.

### Task 16: Preview, merge and production verification

**Produces:** one exact-head preview, verified merge and production release.

- [ ] Create `hocker-triad-preview-20260818` only from CI-green code with Vercel enabled.
- [ ] Confirm exactly one preview deployment corresponds to that code.
- [ ] Review Home and Portfolio at representative mobile/desktop widths; reject overflow, overlap, clipped mark, low contrast, hover-only control or technical-console regression.
- [ ] Verify routes, redirects, canonical/meta/schema, security headers and runtime logs.
- [ ] Re-read `main` and confirm no unexpected divergence before merge.
- [ ] Merge only the code verified by CI and preview.
- [ ] Verify production routes, contact truth, headers and logs.
- [ ] If a material production regression appears, rollback to the prior stable deployment/commit first.
- [ ] After release, deliver the exact missing evidence-asset inventory to the owner by project, format, dimensions and purpose.
