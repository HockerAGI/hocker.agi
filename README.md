# Hocker AGI Technologies - Sitio oficial

Sitio corporativo, comercial y de evidencia profesional de Hocker AGI Technologies, desarrollado con Next.js y desplegado en Vercel.

## Experiencia pública

La experiencia visual vigente se define por **HOCKER TRIAD**:

- **Titanium**: identidad, precisión y materialidad derivadas del logo oficial.
- **Cinematic**: impacto selectivo en hero, producto, AGIs y portafolio.
- **Modular**: claridad, responsive, accesibilidad, contenido y conversión.

Hooks principales:

- Corporativo: `Ideas que funcionan. Sistemas que evolucionan.`
- Portafolio: `Construyo ideas. Hago que funcionen.`

La comunicación pública separa capacidad, madurez y evidencia. No se publican métricas, integraciones, estados regulatorios, autonomía de AGIs o identidades jurídicas sin respaldo verificable.

## Objetivos

- Presentar soluciones de inteligencia artificial, automatización, software y marketing por resultado de negocio.
- Comunicar los diez productos del catálogo con su identidad original y un estado público verificable.
- Explicar el modelo de AGIs sin exponer secretos ni presentar ejecución material autónoma.
- Captar oportunidades mediante formulario, correo y continuidad opcional por WhatsApp.
- Mantener SEO técnico, datos estructurados, privacidad revocable, seguridad y experiencia mobile-first.
- Mantener `/portafolio` como Evidence Experience profesional, separada del contenido corporativo de `/casos`.

## Desarrollo local

Instalación reproducible:

```bash
npm ci
npm run dev
```

Gate local recomendado antes de publicar una rama:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Validación de la build:

```bash
npm run start -- -p 3100
BASE_URL=http://127.0.0.1:3100 node scripts/smoke-production.mjs
node scripts/audit-dependencies.mjs --omit-dev
node scripts/audit-dependencies.mjs
```

## Variables de entorno

Consulta `.env.example`.

- `LEADS_WEBHOOK_URL`: endpoint HTTPS opcional de CRM o automatización.
- `LEADS_WEBHOOK_TOKEN`: token opcional para autenticar el webhook.
- `NEXT_PUBLIC_GA_ID`: identificador opcional de Google Analytics.
- `NEXT_PUBLIC_META_PIXEL_ID`: identificador opcional de Meta Pixel.

Los scripts de analítica y publicidad se cargan únicamente después del consentimiento correspondiente.

## Captación y privacidad

El formulario valida límites, formato, origen, honeypot, tiempo mínimo, datos de contacto y consentimiento. El payload completo se procesa únicamente en `/api/leads`; la continuidad por WhatsApp utiliza un mensaje breve y no serializa el formulario completo en la URL.

Las preferencias opcionales de analítica/publicidad son revocables desde el control de privacidad.

## Marca

El runtime TRIAD usa el lockup grafito oficial proporcionado por el propietario, byte por byte, bajo `public/brand/hocker-agi-official-lockup.jpg`. Su procedencia y los SHA-256 de las tres fuentes oficiales entregadas están registrados en `docs/qa/hocker-triad-brand-provenance.md`. No se redibuja, reescribe, recolorea ni reinterpreta geométricamente el logo.

Las identidades de producto conservan los masters/restauraciones ya protegidos por las pruebas de marca del repositorio.

## Documentación de diseño y QA

- `docs/superpowers/specs/2026-08-18-hocker-triad-web-v2-design.md`
- `docs/superpowers/plans/2026-08-18-hocker-triad-web-v2.md`
- `docs/qa/hocker-triad-visual-baseline.md`
- `docs/qa/hocker-triad-release-checklist.md`

## Política de release

GitHub Actions y Vercel son gates finales, no herramientas de iteración visual. El candidato se consolida primero y **no debe desplegarse a Vercel hasta que el CI del exact head esté verde**. El merge a `main` solo procede después de verificar el preview del mismo código.

## Contacto público

- Correo: contacto.hocker@gmail.com
- WhatsApp: +52 664 209 1143
