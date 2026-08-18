# HOCKER TRIAD Web v2 — Design Specification

Status: **APPROVED**
Date: 2026-08-18
Repository: `HockerAGI/hocker.agi`
Base reconciled: `6c8265f290410880315e5addc2b8ce843c49e13f`

## Goal

Replace the rejected Precision Future presentation with a modern, cross-generational, mobile-first experience that communicates HOCKER through business value, product evidence and controlled technical depth. The design must improve conversion and recruitment without inventing product maturity, AGI autonomy, legal identity, metrics or professional evidence.

## Identity: HOCKER TRIAD

HOCKER TRIAD combines three controlled layers:

1. **Titanium** — identity and precision derived from the official HOCKER logo: obsidian, graphite, titanium/silver, deep HOCKER blue and electric blue.
2. **Cinematic** — selective emotion in hero, cases, portfolio and AGI storytelling; motion must explain hierarchy or feedback, never become permanent decoration.
3. **Modular** — navigation, content, product states, forms, accessibility and responsive behavior.

The proprietary motif is **The Hocker Cut**, a separate decorative diagonal inspired by the existing blue diagonal in the approved mark. It never modifies or substitutes the logo.

## Brand integrity

The owner-supplied official logo is the only source of company identity. No AI redraw, retyping, recoloring, vector reinterpretation, or geometric alteration is permitted.

The three owner-supplied source files are 1536×1536 JPEG RGB payloads despite their `.png` filenames. Their SHA-256 fingerprints are recorded in `docs/qa/hocker-triad-brand-provenance.md`. The runtime uses the approved graphite lockup byte-identically under `public/brand/hocker-agi-official-lockup.jpg`.

Product identities remain untouched. Existing product anti-redraw tests remain authoritative.

## Home architecture

The Home follows the funnel, not internal technical architecture:

1. **Awareness / Hero**
   - Brand: HOCKER AGI TECHNOLOGIES.
   - Hook: **Ideas que funcionan. Sistemas que evolucionan.**
   - Subcopy: **IA, software, automatización y marketing para convertir oportunidades en resultados.**
   - Primary CTA: `Explorar soluciones`.
   - Secondary action: `Ver lo que hacemos`.
   - Official logo composition; no `SYSTEM VIEW`, `GOVERNED`, `CONTROL PLANE`, debug console or permanent navigation dock.

2. **Intent / Consideration**
   - Question: **¿Qué quieres hacer crecer?**
   - Choices: conseguir clientes, vender más, crear app/plataforma, automatizar empresa, mejorar presencia digital, no sé por dónde empezar.
   - Interaction recommends solution territories without pretending to be an AGI runtime.

3. **Solutions**
   - Growth & Marketing.
   - Software & Producto.
   - IA & Automatización.
   - Estrategia & Transformación.
   - Copy leads with outcomes; implementation detail comes second.

4. **Products**
   - Heading: **Ideas que ya se volvieron producto.**
   - Ten official catalog products.
   - Hocker ONE may receive flagship emphasis, but every product retains original identity.
   - Public state is semantic: `VERIFIED`, `DOCUMENTED`, `IN_PROGRESS`, `TARGET`.

5. **Evidence**
   - Heading: **No solo lo decimos. Lo construimos.**
   - Evidence may include product, code, release, campaign, visual, metric or document only when source/context exists.

6. **AGIs**
   - Heading: **Inteligencia especializada. Coordinada como sistema.**
   - Mission selector is `VISUAL_ONLY`.
   - It does not invoke production runtime, private memory, repositories or material actions.
   - NOVA coordinates; specialist flows explain roles; Owner Gate remains explicit for material actions.

7. **Method**
   - Entender → Diseñar → Construir → Evolucionar.

8. **Founder bridge**
   - Short bridge to the professional portfolio, not autobiography.

9. **Conversion**
   - Heading: **¿Qué quieres crear?**
   - Lead form + email + optional WhatsApp continuation.

## Portfolio: Evidence Experience

`/portafolio` is not a web copy of the CV. It must answer **Can the claim be demonstrated?**

Hero:
- Armando Chávez.
- Hook: **Construyo ideas. Hago que funcionen.**
- Disciplines: IA · Producto · Desarrollo · Marketing · Creatividad.
- Professional headline from current CV: AI Automation Engineer · Performance Marketing Strategist · Full Stack Developer · Product & Creative Lead.

Consumption levels:
- 60-second recruiter scan.
- 5-minute proof exploration.
- Deep-dive cases.

Evidence navigator dimensions:
- IA & Automatización.
- Producto & Desarrollo.
- Growth & Marketing.
- Creative & Brand.
- Liderazgo & Operación.

Initial cases:
- **Hocker AGI Technologies** — flagship case with verified repository/product/release evidence.
- **Score Store** — documented from current CV; media and performance evidence remain pending owner-supplied assets.

Career narrative:
- Crear — NANODREX, 2020–2021.
- Comunicar — SEITCOM & 12 Volts Shop, 2021–2023.
- Producir — Proyecto Pinocho, 2021–2022.
- Convertir — Monsat Monitoreo Satelital, 2023–2025.
- Construir — Grupo Aries, 2025.
- Orquestar — Hocker AGI Technologies, current.

Pinocho must remain `DOCUMENTED`; public copy is limited to the CV-supported role **Editor Audiovisual (Stop Motion), parte del equipo de postproducción**. Do not add awards, seniority, supervisory role, film credits or results without evidence.

Evidence states:
- `VERIFIED`
- `DOCUMENTED`
- `PRIVATE`
- `IN_PROGRESS`
- `ARCHIVED`

No arbitrary skill percentages. Tools are subordinate to outcomes and cases.

The CV download remains disabled until a corrected PDF exists because the supplied PDF contains an outdated phone. Social URLs remain null until official URLs are supplied.

## Current professional truth

Correct public phone: `+52 664 209 1143` / `+526642091143`.
Verified website email: `contacto.hocker@gmail.com`.
Education: Licenciatura en Producción Digital, Universidad del Valle de Puebla, 2016–2020.
Declared certifications: Adobe Premiere Avanzado; Meta Ads Manager B2B, B2C; Social Media Manager; LinkedIn B2B.

## Navigation

Desktop maximum primary destinations:
- Soluciones
- Productos
- Tecnología
- Casos
- Empresa
- CTA Hablemos

Mobile uses a hamburger/panel. No permanent bottom dock.

## Visual system

Core tokens:
- Obsidian.
- Titanium 950/900/800/700/600.
- Silver / muted text / ice.
- Deep HOCKER blue / HOCKER blue / electric blue.
- Semantic green/amber/red only for state meaning.

The site is predominantly dark but may use light and signature-blue sections to create rhythm. Cards are not the universal unit; use editorial blocks, product tiles, evidence details and data surfaces only when structure benefits.

Typography uses a legible system sans baseline. Display personality comes from scale, spacing and composition, not a sci-fi font. Mobile display sizes are bounded with `clamp()`.

## Responsive and accessibility

Component-driven responsive behavior must be validated at representative widths: 320, 360, 390, 430, 768, 1024, 1280, 1440, 1920, 2560, 3840 CSS px.

Required modes: portrait, landscape where relevant, keyboard, touch, 200% zoom/reflow, safe areas and `prefers-reduced-motion`.

Baseline target: WCAG 2.2 AA. Critical normal text contrast must be >=4.5:1. Interactive targets should be at least 48px where design permits.

Release regressions include horizontal scrolling on small mobile, word-per-line hero wrapping, clipped/altered logos, overlapping privacy/menu/form controls, hover-only functionality, persistent bottom nav, low-contrast critical copy, fake evidence or console/debug language in the corporate hero.

## SEO and discovery

- Maintain `lang="es-MX"`, canonical URLs, robots and sitemap.
- Organization schema must remain factual and must not invent `legalName`, RFC, address, legal representative or regulatory status.
- `/portafolio` uses `ProfilePage` with `Person`.
- `sameAs` is omitted while social URLs are null.
- Sitemap contains core routes, product routes and portfolio case routes.
- Do not synthesize `lastModified`; no `priority` or `changeFrequency` hints.
- Content serves human intent first; no meta keywords or unnecessary FAQ rich-result schema.

## Privacy and leads

Consent key: `hocker.consent.v2`.
Necessary functions always operate; analytics and advertising are optional and revocable.

Lead endpoint preserves JSON/content-size/origin/contact/consent/honeypot/timing validation. WhatsApp continuation must not serialize the submitted PII payload into the URL.

Known residual risks remain explicit: no distributed rate limiter yet; CSP still contains `unsafe-inline`; client `startedAt` is only a heuristic; optional webhook delivery is not queued.

## Performance

No new animation framework is required. Prefer CSS and small client components. Keep most content server-rendered. Images must preserve aspect ratio and use responsive sizing. Cinematic treatment may not compromise Core Web Vitals.

Release goals, not pre-release claims:
- LCP <= 2.5s p75.
- INP <= 200ms p75.
- CLS <= 0.1.
- Lighthouse Performance >=95 target.
- Accessibility 100 lab target, without equating that score to WCAG compliance.

## Release policy

GitHub Actions validates; it is not used for iterative development. Vercel must not deploy the candidate before exact-head CI is green.

Candidate branch: `hocker-triad-ci-20260818` — Vercel disabled.
Preview branch: `hocker-triad-preview-20260818` — created only from the exact CI-green code and Vercel enabled.

Merge to `main` only after tests, lint, typecheck, build, smoke, audits, exact preview review and runtime/header verification are green. If production regresses materially, rollback first and investigate second.
