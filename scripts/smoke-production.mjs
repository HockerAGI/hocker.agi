import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3100";

async function waitForServer() {
  let lastError;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`${baseUrl}/`, { redirect: "manual" });
      if (response.ok) return;
      lastError = new Error(`Unexpected readiness status ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw lastError ?? new Error("Production server did not become ready");
}

async function assertPage(pathname, requiredText) {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
  assert.equal(response.status, 200, `${pathname} should return HTTP 200`);
  const html = await response.text();
  assert.match(html, new RegExp(requiredText, "i"), `${pathname} should contain ${requiredText}`);
}

async function assertAsset(pathname, expectedType) {
  const response = await fetch(`${baseUrl}${pathname}`, { redirect: "manual" });
  assert.equal(response.status, 200, `${pathname} should return HTTP 200`);
  assert.match(response.headers.get("content-type") ?? "", expectedType, `${pathname} content type`);
  const body = await response.arrayBuffer();
  assert.ok(body.byteLength > 1_000, `${pathname} should contain a non-empty optimized asset`);
}

await waitForServer();

for (const [pathname, text] of [
  ["/", "Automatiza la operación"],
  ["/apps", "Una solución por frente de trabajo"],
  ["/apps/hocker-one", "Hocker ONE"],
  ["/apps/hocker-wallet", "subwallets"],
  ["/apps/hocker-supply", "Hocker Supply"],
  ["/apps/nexpa", "NEXPA"],
]) {
  await assertPage(pathname, text);
}

for (const [pathname, type] of [
  ["/brand/hocker-agi-hero.webp", /image\/webp/i],
  ["/brand/hocker-agi-symbol.png", /image\/png/i],
  ["/apps/hocker-hub/icon.png", /image\/png/i],
  ["/apps/hocker-supply/cover.webp", /image\/webp/i],
  ["/apps/hocker-wallet/og-image.webp", /image\/webp/i],
]) {
  await assertAsset(pathname, type);
}

const legacyNexpa = await fetch(`${baseUrl}/apps/nexpa-app`, { redirect: "manual" });
assert.ok([307, 308].includes(legacyNexpa.status), "legacy NEXPA route should redirect permanently");
const redirectLocation = legacyNexpa.headers.get("location");
assert.ok(redirectLocation, "legacy NEXPA redirect should include a Location header");
assert.equal(new URL(redirectLocation, baseUrl).pathname, "/apps/nexpa", "legacy NEXPA redirect destination");

console.log("Production smoke checks passed for pages, product routes, redirects and brand assets.");
