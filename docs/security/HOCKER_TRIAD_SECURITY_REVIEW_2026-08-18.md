# HOCKER TRIAD — Security Review 2026-08-18

Status: changed-surface static review + repository regression gates. Native Codex Security scan runtime was not exposed in this ChatGPT execution environment.

Base reviewed: `6c8265f290410880315e5addc2b8ce843c49e13f`
Scope: `HockerAGI/hocker.agi` only

## Threat model

The public site accepts anonymous Internet traffic, renders public company/product/portfolio content, stores optional browser consent preferences, may load configured measurement scripts after consent, and accepts lead submissions that can be forwarded server-side to an optional authorized webhook.

Assets protected: lead PII and consent state; webhook URL/token environment variables; brand integrity and truthful claims; public route integrity; analytics consent boundaries; production deployment integrity.

Attacker capabilities considered: arbitrary public HTTP requests; malformed/oversized/cross-site lead requests; spam/bot traffic; crafted URLs/UTM parameters; public-output secret inference; supply-chain changes through dependencies/CI.

## Security-positive changes

1. `/api/leads` retains declared content-length, JSON content type, origin, honeypot, timing, field-length, contact-format and consent checks.
2. It additionally rejects `Sec-Fetch-Site: cross-site` and verifies actual UTF-8 body size after reading it.
3. WhatsApp handoff no longer serializes submitted PII into the URL.
4. Optional analytics/advertising remain disabled until the matching consent category is granted; revocation remains available through `hocker.consent.v2`.
5. No new npm dependency is introduced; existing dependency audit policy remains authoritative.
6. CSP, HSTS, frame denial, no-sniff, referrer, permissions, COOP and CORP headers are preserved from the base configuration.
7. Structured data does not add an unverified legal name, social profile, customer, metric or regulatory claim.
8. The approved company lockup is used byte-identically; product source paths remain protected against redraws.

## Known residual risks

### P1 — Distributed abuse control

The lead endpoint does not implement a distributed rate limiter. Application validation does not replace Vercel Firewall/rate limiting/BotID or equivalent centralized controls. This release does not claim otherwise.

### P2 — CSP inline execution

The existing CSP retains `unsafe-inline` for script/style compatibility. Removing it requires a separate nonce/hash design and regression cycle. TRIAD preserves the existing policy rather than weakening it or declaring it strict.

### P2 — Client timing heuristic

`startedAt` is browser-provided and forgeable. It is a low-cost spam signal, not bot attestation.

### P2 — Optional webhook availability

If `LEADS_WEBHOOK_URL` is configured and unavailable, the endpoint can return `captured: false`; WhatsApp/email continuity remains independent. Queueing/alerting is separate operational work.

## Release condition

This review is not merge approval by itself. The exact remote head must still pass repository tests, ESLint, TypeScript, Next production build, smoke tests, dependency audits, exact-head Vercel preview review, and runtime/header verification.
