# HOCKER TRIAD Visual Baseline

Date: 2026-08-18
Scope: `HockerAGI/hocker.agi`
Status: local implementation review; authoritative browser preview pending the exact CI-green remote candidate.

## Negative regression baseline

The owner-provided production screenshots showed the failure modes this release must not reproduce:

- mobile hero text dominating multiple viewports;
- low-contrast secondary copy on black;
- full-width/oversized CTA treatment competing with content;
- permanent bottom dock consuming viewport height;
- privacy controls colliding visually with navigation;
- `SYSTEM VIEW` / control-plane console language presented as the corporate hero;
- dense borders/panels that make the corporate site feel like an internal dashboard.

These are release regressions, not subjective preferences.

## Approved visual direction

HOCKER TRIAD uses:

1. Titanium for identity and materiality.
2. Cinematic selectively for hero, cases, portfolio, and AGI storytelling.
3. Modular structure for navigation, responsive layout, forms, products, and evidence.

The official owner-supplied HOCKER logo remains geometrically unchanged. The Hocker Cut is a separate decorative motif derived from the existing diagonal and never substitutes for the logo.

## Local proxy review

A browser-like local Chromium review was attempted first, but this execution environment blocks navigation with `net::ERR_BLOCKED_BY_ADMINISTRATOR`. Direct headless Chromium also did not produce a stable page render. Because visual approval must not be fabricated, browser verification remains pending.

As a non-authoritative layout proxy, simplified screen CSS was rendered with WeasyPrint and inspected as images. These proxy renders are intentionally excluded from the repository and are not product screenshots.

Representative checks completed:

- 320 px Home first view: hero remains readable; no horizontal composition is required; official logo remains contained; primary and secondary actions have space to wrap without taking the full screen.
- 390 px Home first view: headline is bounded and the brand stage appears after the proposition rather than replacing it.
- 390 px Portfolio first view: hook, disciplines, recruiter positioning, actions, and profile signal fit without the previous oversized-title failure.
- 1440 px Home first view: proposition and official brand stage maintain clear 2-column hierarchy; the light intent section creates a deliberate rhythm change.
- 1440 px Portfolio first view: the evidence-led narrative reads as a professional portfolio rather than a duplicate CV.

## Responsive implementation rules

The CSS explicitly contains breakpoints/behavior for:

- <=380 px small mobile;
- <=430 px bounded display typography;
- <=720 px mobile content/navigation;
- <=980 px compact/tablet navigation and composition;
- >=1800 px large-display spacing.

The final preview must still be checked at 320, 360, 390, 430, 768, 1024, 1280, 1440, 1920, 2560, and 3840 CSS px before merge. Static/proxy review does not replace that gate.

## Contrast correction discovered during review

The initial light-section eyebrow reused `#9ecbff`, which produced insufficient contrast against `#eef1f5`. The final design overrides light-section eyebrow/link accents with darker HOCKER blue values and uses near-white copy on the brightest end of the blue section gradient. Static contrast tests now enforce >=4.5:1 for critical normal-text pairs.

## Preview acceptance criteria

The exact CI-green preview is rejected if any of the following is visible:

- horizontal scrolling at 320-430 px;
- clipped logo or altered logo proportions;
- headline wrapping into an unreadable word-per-line pattern;
- persistent bottom navigation;
- overlapping privacy/menu/form controls;
- low-contrast text below AA target;
- fake evidence imagery or unsupported metrics;
- product logos redrawn or normalized;
- console/debug terminology above the corporate fold;
- hover-only functionality on touch layouts.
