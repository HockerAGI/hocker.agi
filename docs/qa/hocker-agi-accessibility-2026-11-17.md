# HOCKER AGI — Validación UX, navegación y accesibilidad

**Fecha:** 2026-11-17  
**Repositorio:** `HockerAGI/hocker.agi` exclusivamente  
**Baseline de producción:** `d27275f56fca018ba60d473d5b3530aeb7be259e`  
**Ámbito del candidato:** enlace de marca en cabecera, contraste de contenido legal y dos tests de regresión. Sin modificaciones a los PNG maestros, funnel, analítica, APIs, productos ni otros repositorios.

## Defectos reales detectados

Se ejecutó Playwright Chromium y axe-core en un Vercel Sandbox aislado sobre la web productiva:

- En 8 rutas, el enlace `.brand-link` presentaba `label-content-name-mismatch`. El texto visible `HOCKER / AGI TECHNOLOGIES` estaba marcado `aria-hidden` y el `aria-label` no pasaba la regla automática label-in-name.
- En `/legal/privacy` y `/legal/terms`, el texto `.h-eyebrow` heredaba el azul claro pensado para fondos oscuros. axe-core midió **1.54:1** frente al fondo legal claro, por debajo de **4.5:1** exigido para texto normal.
- La acción `.button-secondary` de las páginas legales heredaba texto casi blanco sobre un fondo claro: axe-core observó **1.01:1**, también por debajo del requisito.

## Corrección mínima

1. El enlace del logotipo toma su nombre accesible del **wordmark visible** y no de un `aria-label` divergente; el isotipo en imagen es decorativo (`alt=""`) porque el mismo enlace ya incluye texto de marca. No se altera ningún píxel de los activos originales.
2. `layout.css` fija `#185e9d` para el eyebrow en `.legal-page` y texto `#1d2430` con fondo `#fff` para botones secundarios solo dentro de `.legal-page`. Ningún estilo oscuro global cambia.
3. Dos pruebas estáticas de regresión impiden revertir inadvertidamente la semántica y el ajuste de color.

## Validación del candidato compilado

El candidato se construyó en un Vercel Sandbox con Node 24; se ejecutaron sin errores:

- `npm ci --include=optional`
- `npm test` incluyendo las dos pruebas nuevas
- `npm run lint` (Oxlint estricto)
- `npm run typecheck`
- `npm run build`
- `node scripts/audit-dependencies.mjs --omit-dev`
- `node scripts/audit-dependencies.mjs`
- Smoke de rutas, redirecciones, branding, datos públicos y verificación Meta: PASS

QA real del servidor local compilado `http://127.0.0.1:3100`:

- Anchos **320, 360, 390, 430, 768, 1024, 1440 y 1920 px**, con movimiento reducido.
- **28 combinaciones** de páginas/viewport: 0 HTTP no-200, 0 desbordamientos horizontales, 0 imágenes visibles rotas, un `h1` por página, idioma `es-MX`.
- **16 ejecuciones de axe-core** (390 y 1440 px × 8 rutas), con `wcag2a,wcag2aa,wcag21a,wcag21aa,wcag22aa`: **0 violaciones automáticas**.
- Rutas incluidas: `/`, `/soluciones`, `/apps`, `/agis`, `/portfolio`, `/contacto`, `/legal/privacy`, `/legal/terms`.
- Pruebas funcionales: menú móvil abre, Escape cierra, navegación a Productos funciona; consentimiento `Solo necesarias` persiste `analytics=false`, `ads=false` y no inserta scripts de medición opcionales; **no se enviaron formularios ni leads reales**.
- 0 excepciones JavaScript detectadas durante las visitas comprobadas.

**Límite de certificación:** axe-core y Chromium no reemplazan pruebas manuales con lector de pantalla, Safari/WebKit/Firefox, zoom y revisión completa de todos los estados. **No se declara conformidad WCAG 2.2 AA total** con estas comprobaciones; se documentan exactamente los controles realizados.

## Reglas para publicación

`GitHub branch → PR → CI verde exact-head → merge → CI de main verde → Vercel production READY en SHA exacto → smoke productivo y revisión de errores`.

## Ramas heredadas

La limpieza lógica y decisiones de las 12 ramas está registrada en `docs/continuity/HOCKER_AGI_CLOSEOUT_2026-11-17.md`. El conector GitHub activo no ofrece borrado de refs; la existencia de 13 ramas históricas adicionales tras #58 no se confunde con PR pendientes ni con cambios sin publicar. No eliminar mediante comandos o API sin verificar equivalencia, contribuciones e historial.
