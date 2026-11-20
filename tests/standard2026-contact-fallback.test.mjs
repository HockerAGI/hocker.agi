import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const contact = readFileSync("src/app/contacto/page.tsx", "utf8");
const leads = readFileSync("src/components/lead-form.tsx", "utf8");
const cases = readFileSync("src/app/casos/page.tsx", "utf8");
const ecosystem = readFileSync("src/app/ecosistema/page.tsx", "utf8");

test("contact page exposes direct contact when webhook delivery is absent", () => {
  assert.match(contact, /captureConfigured=Boolean\(process\.env\.LEADS_WEBHOOK_URL\)/);
  assert.match(contact, /captureConfigured\?<LeadForm\/>:/);
  assert.match(contact, /PUBLIC_SITE\.whatsapp/);
  assert.match(contact, /mailto:\$\{PUBLIC_SITE\.email\}/);
  assert.match(contact, /formulario de registro no está disponible/);
});

test("contact forms never default to GET, protecting fields from query strings", () => {
  assert.match(leads, /<form className="lead-form" method="post" action="\/api\/leads"/);
  assert.match(leads, /onSubmit=\{submitLead\}/);
});

test("case and ecosystem routes have a section heading before card h3 titles", () => {
  assert.match(cases, /<h2 className="sr-only">Casos seleccionados<\/h2>/);
  assert.match(ecosystem, /<h2 className="sr-only">Capacidades, gobernanza y evidencia<\/h2>/);
});
