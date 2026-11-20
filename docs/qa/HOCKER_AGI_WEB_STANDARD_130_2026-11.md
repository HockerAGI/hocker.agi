# Auditoría del estándar web internacional 2026 — HOCKER AGI

**Base documental:** *Estándar integral para un sitio web de clase mundial*, investigación al 17-11-2026, 23 páginas, 130 controles.  
**Proyecto auditado:** exclusivamente `HockerAGI/hocker.agi`.  
**SHA productivo de partida:** `bfcc21d5d01a9faf5688edefe0f077a9212a8b7b`.  
**Naturaleza del sitio:** web corporativa B2B, captación de interés y muestra informativa de productos/AGIs; no checkout ni cuentas SaaS propias.

## Criterio de aceptación

Aplicabilidad por función/territorio/riesgo, no lista de integraciones indiscriminadas. Diferenciar:
1. **Acreditado** mediante código, tests y/o pruebas de producción.
2. **Implementado parcialmente** con controles adicionales no medidos o no documentados.
3. **Pendiente evidencia del owner**: identidad jurídica, procesos de privacidad/retención, terceros, contratos, RTO/RPO y métricas reales.
4. **No aplica actualmente**: PCI, pagos, suscripciones, marketplace, moderación UGC y otros elementos que esta web no ejecuta.
5. **Condicional por jurisdicción**: GDPR, CCPA, LGPD, EU AI Act, EAA, DSA; confirmar ámbito antes de activar controles legales sectoriales.

## Evidencia técnica del baseline

- El `main` productivo de referencia coincidió con Vercel `READY`; sin PR abiertos antes del cambio.
- `npm ci`, 59 tests existentes, lint estricto, TypeScript, build, auditoría de producción y auditoría completa: aprobados sin vulnerabilidades high/critical reportadas.
- Lighthouse (laboratorio, no CWV de campo): home móvil **97/100/100/100** (performance/accessibility/best-practices/SEO), home desktop **100/100/100/100**, contacto móvil **96/98/100/100** y privacidad móvil **96/100/100/100**. LCP de home móvil **2,069 ms** y CLS **0** bajo las condiciones de esa ejecución.
- 23 URLs del sitemap: HTTP 200, title, description, Open Graph y H1. La canonical de home aparece normalizada sin barra final, equivalente a la URL raíz.
- El backend de leads aislado responde 403 cross-site, 415 media type, 400 JSON inválido y 413 ante un cuerpo sobredimensionado.
- Vercel `filter_project_envs` devolvió **0 variables y 0 variables de producción ocultas**. El backend devuelve 503 con `captured:false` sin `LEADS_WEBHOOK_URL`: no afirmar captura automatizada.
- La inspección de las 23 páginas detectó tres saltos `h1 → h3` (casos, ecosistema, contacto). Sin JavaScript, el formulario anterior quedaba en `GET /contacto`, exponiendo potencialmente campos en la URL.

## Cambios de alcance mínimo de este PR

1. **Cabeceras accesibles:** introducir `h2` estructural (visible solo para lectores de pantalla) antes de tarjetas en casos y ecosistema. Conservar tipografía y componente AGI compartido.
2. **Sin falsa captura:** en `/contacto`, mostrar formulario únicamente cuando exista `LEADS_WEBHOOK_URL`; sin receptor, ofrecer contacto directo por WhatsApp/correo, conservando CSS y funnel. Cuando el receptor se configure y se haga build/deploy, reaparece el formulario original.
3. **No PII en GET degradado:** fijar `method="post"` y `action="/api/leads"` en el formulario; con JS habilitado el manejador actual sigue enviando JSON con `fetch`, sin cambiar la API.

## Validación aislada del candidato

- **62/62** regresiones Node, Oxlint (0 warnings/0 errores), TypeScript, Next build y ambas auditorías de dependencias: PASS.
- Playwright Chromium sobre compilación local: **58 combinaciones ruta/viewport**, sin errores HTTP, desbordamiento, imágenes rotas, errores JS ni saltos de encabezados.
- **16** ejecuciones axe-core WCAG 2/2.1/2.2 A/AA etiquetadas: cero violaciones automáticas detectadas.
- Contacto sin configuración: 0 formularios no operativos, enlaces de correo/WhatsApp visibles; sin JavaScript, la alternativa sigue accesible.
- Las pruebas anteriores de seguridad, rutas, branding y consentimiento permanecen como regresiones en CI.

## Pendientes externos que NO deben falsearse con código

**P0 / legales y comerciales**
- Configurar y probar un destino real para `LEADS_WEBHOOK_URL` si se desea captura automática (o adoptar contacto directo como canal oficial); documentar responsable de recepción, consentimiento, retención y supresión.
- Validar **identidad jurídica del responsable** y el texto integral de privacidad bajo LFPDPPP 2025 con asesoría competente; actualmente se identifica la marca, pero no se acreditan todos los datos jurídicos.
- Establecer procedimiento ARCO/DSAR, data map, periodos de retención y eliminación, registro de proveedores/transferencias y evidencia de decisiones de consentimiento.
- Evidenciar backups/restauración, RPO/RTO y plan de continuidad según criticidad comercial.

**P1 / verificaciones pendientes**
- Medir Core Web Vitals de campo p75, por móvil/escritorio: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1. Lighthouse de laboratorio no sustituye RUM/CrUX.
- Revisión WCAG 2.2 AA manual con lector de pantalla, zoom 200/400%, teclado completo y WebKit/Safari; axe y score 100 no son certificación WCAG.
- Definir CSP más restrictiva sin romper scripts legítimos (actual `unsafe-inline`), ASVS por alcance, DAST/escaneo de secretos, y rate limits medidos para `/api/leads`; no forzar cambios ciegos.
- Definir budgets de JS/terceros, alertas/SLO, registro de proveedores y revisión de políticas de crawlers de IA. No declarar ISO/PCI/EAA/AI Act obligatorios globales sin verificación de alcance.

## Gate de liberación

No merge sin GitHub Actions verde en SHA exacto, revisión de observaciones, Vercel `READY` ligado al commit y post-deploy smoke de rutas, semántica, contacto y consentimiento. Un release; sin tocar otros repositorios ni alterar activos maestros.

**Limitación:** este documento es un registro de auditoría técnica; no acredita por sí solo conformidad jurídica o certificaciones independientes. Actualizar el SHA y deployment reales en el PR fusionado después del release.
