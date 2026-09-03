import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("TRIAD privacy control does not cover page content", async () => {
  const component = await read("src/components/analytics-consent.tsx");
  assert.match(component, /privacy-control/);
  assert.doesNotMatch(component, /privacy-preferences-trigger[^\n]*position:\s*fixed/i);
  assert.match(component, /event\.key === "Escape"/);
});

test("public portfolio does not expose implementation backlog", async () => {
  const page = await read("src/app/portafolio/page.tsx");
  const hero = await read("src/components/portfolio/portfolio-hero.tsx");
  const cases = await read("src/content/portfolio/cases.ts");
  assert.doesNotMatch(page, /materiales pendientes|se incorporarán cuando|propietario entregue/i);
  assert.doesNotMatch(hero, /archivo corregido|número histórico/i);
  assert.doesNotMatch(cases, /El CV documenta el alcance/i);
  assert.match(hero, /Solicitar CV/);
});

test("footer preserves official square lockup aspect", async () => {
  const footer = await read("src/components/navigation/site-footer.tsx");
  assert.ok(footer.includes("width={1536} height={1536}"));
});
