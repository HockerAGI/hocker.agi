# Temporary dependency security exception: NanoID through PostCSS

- **Advisory:** GHSA-2v37-7h3g-55p8 / CVE-2026-67213
- **Severity reported by npm audit:** High
- **Decision:** temporary scoped exception; fail closed for every other High/Critical advisory
- **Expires:** 2026-09-15T00:00:00Z
- **Owner:** Hocker AGI Technologies / web security maintenance

## Evidence and reachability

The HOCKER corporate site does not import `nanoid` directly. Repository search finds it only in dependency metadata/overrides.

PostCSS 8.5.x imports `nanoid/non-secure` in `lib/input.js` and calls `nanoid(6)` only to create an internal identifier when no source filename exists. The published NanoID advisory describes an infinite-loop condition requiring `customAlphabet` or `customRandom` to receive a size of `0`. That attacker-controlled call path is not used by this site or by the PostCSS call shown above.

Primary references reviewed:

- GitHub Advisory Database: `https://github.com/advisories/GHSA-2v37-7h3g-55p8`
- PostCSS 8.5.25 `lib/input.js`: `https://raw.githubusercontent.com/postcss/postcss/8.5.25/lib/input.js`
- NanoID package/release history: `https://www.npmjs.com/package/nanoid?activeTab=versions`
- NanoID changelog: `https://github.com/ai/nanoid/blob/main/CHANGELOG.md`

## Why we do not force a major override

At review time, npm exposes `3.3.16` as the supported `legacy` 3.x line while the audit metadata requests a non-existent `3.3.18` threshold. NanoID 4 removed CommonJS support, while PostCSS currently depends on the 3.x line. Forcing NanoID 5/6 across that dependency contract without upstream support would create a compatibility risk and would not be an evidence-based security fix.

## CI policy

`scripts/audit-dependencies.mjs` parses `npm audit --json`. It permits the exception only when a blocking path resolves recursively and exclusively to the exact NanoID advisory above. This matters because npm can represent the same advisory at different levels of the dependency graph, such as `Next -> PostCSS -> NanoID`.

The gate requires all of the following:

1. the leaf advisory is exactly GHSA-2v37-7h3g-55p8;
2. every parent in the accepted chain contains only string references to already accepted dependencies and no direct advisory object;
3. the current time is before the expiration timestamp;
4. there are no unrelated High or Critical vulnerabilities.

A direct advisory on Next, PostCSS or any other parent is never inherited into this exception and fails CI.

## Removal criteria

Remove this exception immediately when one of these becomes true:

- the supported PostCSS dependency chain publishes a compatible patched NanoID version;
- PostCSS removes/replaces the affected dependency;
- the application introduces direct NanoID usage or any attacker-controlled size path;
- new evidence changes the reachability assessment.
