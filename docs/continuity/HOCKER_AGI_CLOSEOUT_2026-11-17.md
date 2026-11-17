# HOCKER AGI — continuidad y reconciliación de ramas

**Corte:** 2026-11-17 (America/Tijuana)  
**Alcance de escritura:** `HockerAGI/hocker.agi` exclusivamente.  
**Fuente de autoridad:** producción observada → `main` → tests/contratos → documentación. Otros repos HOCKER solo se consultan cuando afectan esta web.

## 1. Baseline de cierre (antes del PR de mantenimiento)

| Control | Evidencia |
| --- | --- |
| Repositorio / rama | `HockerAGI/hocker.agi / main` |
| SHA productivo auditado | `a6d00aa32da98a6fee4e8b39c888f3cc95571553` |
| Release de identidad | [PR #57](https://github.com/HockerAGI/hocker.agi/pull/57), fusionado por squash |
| CI del candidato | [GitHub Actions #44154876174](https://github.com/HockerAGI/hocker.agi/actions/runs/44154876174), job `verify` = success |
| Vercel producción | `dpl_8s7jaQv9jHa9ZagHjSccuKdGCbFb`, `READY`, target `production`, mismo SHA |
| Dominio provisional | https://hockeragi.vercel.app |
| GitHub backlog del sitio | 0 PR y 0 issues abiertos detectados al corte |
| Stack verificado | Node 24; Next 16.4.6; React 19.3.1; Sharp 0.35.5; Oxlint 1.94.0 |
| Integridad marca | Activos originales transparentes integrados en #57; no regenerar ni alterar masters |

**Aclaración temporal:** este SHA y deployment son el **baseline observado del cierre**, no un valor dinámico. Si este documento se integra mediante un PR posterior, comprobar el nuevo SHA de `main` y deployment real antes de dar por cerrado ese release.

## 2. Reconciliación de 12 ramas heredadas

La comparación se realizó desde el SHA productivo exacto, con `git fetch`, `git diff`, comparación de contenidos y consulta de PR anteriores. La divergencia de commits por sí sola **no** demuestra un cambio faltante: los merges squash reescriben la historia.

| Rama | Hallazgo y decisión |
| --- | --- |
| `fix/transparent-brand-logo-20261117` | **Equivalente:** `git diff --quiet main rama` devuelve 0. Contenido idéntico al merge squash #57; candidata segura para eliminación de ref. |
| `dependabot/github_actions/actions/setup-node-7.1.0` | **Cambio útil localizado:** actualiza pin de `actions/setup-node` desde `820762786026740c76f36085b0efc47a31fe5020` a `949feb2413d6458794dcd2491c4babbbce0c15c1` (v7.1.0). Incorporar SOLO el pin en PR aislado sobre `main`; no fusionar workflow antiguo. |
| `fix/public-surface-security-20260905` | **Seguridad incorporada parcialmente/sustituida:** `next.config.ts`, `public/.well-known/security.txt`, términos y privacidad tienen el mismo blob que `main`. Otros cambios de UX/lead/contenido son históricos frente a TRIAD y requieren revisión individual antes de posible portación; no merge global. |
| `hardening/production-readiness-20260807` | **Controles ya incorporados:** `SECURITY.md` y `.github/CODEOWNERS` son idénticos a `main`. El workflow y paquetes son previos al gate seguro actual; no revertirlos. |
| `fix/legal-identity-9` | **No incorporar:** contiene afirmaciones de titularidad y domicilio sin prueba jurídica suficiente y un aviso resumido. Mantener en histórico hasta validación de identidad fiscal/legal; no publicar datos no verificados. |
| `fix/lead-form-external-navigation-20260811` | **No incorporar:** flujo previo que preabre WhatsApp e incluye campos del lead en URL; el `main` actual tiene el tratamiento posterior del PR #55 de captura/handoff y evita declaraciones de éxito sin captura. |
| `fix/commercial-site-overhaul-20260804` | **Histórica:** trabajo de rediseño anterior. La web TRIAD y el release #57 son la línea de autoridad actual; no recuperar páginas antiguas por merge masivo. |
| `chore/dependency-refresh-20260804` | **Histórica:** versiones y lockfile anteriores al release auditado de Next/Oxlint; no regresar dependencias. |
| `chore/dependency-refresh-validation-20260804` | **Histórica:** workflow experimental y `vercel.json` de validación antigua. Mantener configuración `main` y un solo deploy productivo. |
| `fix/ci-react-hooks-20260804` | **Histórica:** checks y ajustes React previos a Oxlint y tests vigentes. No replicar CI anterior. |
| `validation/hocker-agi-eslint16-fix-base-20260811` | **Histórica:** actualización ESLint anterior a la sustitución por Oxlint; no reintegrar cadena vulnerable. |
| `codex/remove-duplicate-tree-20260730` | **Histórica:** branch de estructura previa con cambios amplios y workflow antiguo; evitar restaurar el árbol duplicado. |

**Limpieza de refs:** la conexión GitHub usada en este cierre no expone `delete_ref`/borrado remoto de ramas. Por tanto, **ninguna rama se declara eliminada sin comprobación**. La primera candidata probada es `fix/transparent-brand-logo-20261117`. Para las demás, conservar el registro de divergencias y borrar únicamente con acceso GitHub que permita verificar la ref exacta y su respaldo en la historia/PR.

## 3. Seguridad, legalidad, CI y regresiones

- **Seguridad web:** CSP, HSTS, X-Frame-Options, Referrer-Policy, política de reporting y `security.txt` están en `main`. No deshabilitar auditorías ni alterar validaciones para cerrar alertas.
- **Dependencias:** mantener `npm ci`, tests, Oxlint con `--deny-warnings`, TypeScript, build, smoke y audits de producción y desarrollo.
- **Legal:** las afirmaciones de persona física/moral, RFC, domicilio fiscal, representación y derechos marcarios requieren documentos verificables y revisión competente antes de publicarse. El trabajo en la rama legal no prueba estos datos.
- **Funnel/lead:** el endpoint no debe confirmar una captura inexistente; conservar consentimiento y ofrecer handoff que no filtre PII innecesariamente.
- **Assets:** masters transparentes preservados; referencias responsivas e iconografía del release #57 no deben sustituirse.
- **Vercel:** cambios a `main` solo después de gates verdes; un deployment de producción por release; registrar SHA exacto, READY, rutas, assets y ausencia de errores críticos.

## 4. Prueba y verificación del baseline

- Repositorio clonado en sandbox aislado exactamente desde `a6d00aa32da98a6fee4e8b39c888f3cc95571553`, sin escrituras en producción.
- `npm ci --include=optional`, `npm test`, `npm run lint`, `npm run typecheck`, `npm run build`, auditoría de producción y auditoría completa terminaron con código de salida 0 en el sandbox.
- Comprobación de `hockeragi.vercel.app`: HTTP 200 para home, apps, AGIs, portfolio, contacto, privacidad, términos, sitemap, robots, logo transparente y favicon. Verificados encabezados de seguridad básicos.
- El pase previo documentado en #57 incluye Playwright sobre 8 anchos (320–1920 px); para nuevas modificaciones de UI repetir la matriz y accesibilidad automática/manual antes de afirmar conformidad WCAG.

## 5. Gate de cierre y continuidad de futuras tareas

1. Leer `main` real, PR/branches, deployment activo y último CI **antes** de proponer otro cambio.
2. Aplicar solo diferencias netas útiles en una rama corta; para workflow `setup-node` no importar snapshots viejos.
3. Exigir `npm ci` + test + lint + typecheck + build + smoke + 2 audits + QA aplicable.
4. Fusionar únicamente con CI aprobado y revisión exigida; ningún merge directo para saltar política.
5. Validar Vercel `production READY` en el **SHA del merge** y guardar trazabilidad.
6. Si una operación está bloqueada por permisos/herramientas, marcarla como pendiente; no declarar éxito.
7. Toda nueva reconciliación respeta el aislamiento: otras aplicaciones/repositories HOCKER permanecen de solo lectura.

## 6. Referencias

- [Sitio](https://hockeragi.vercel.app)
- [Main](https://github.com/HockerAGI/hocker.agi/tree/main)
- [PR #55](https://github.com/HockerAGI/hocker.agi/pull/55)
- [PR #56](https://github.com/HockerAGI/hocker.agi/pull/56)
- [PR #57](https://github.com/HockerAGI/hocker.agi/pull/57)
- [Despliegue baseline](https://vercel.com/hockeragi/hocker.agi/8s7jaQv9jHa9ZagHjSccuKdGCbFb)

## Actualización de certificación visual 2026-11-17

Se realizó una **nueva** QA Chromium + axe-core de la web publicada y del candidato de correcciones accesibles. La evidencia completa, métricas, límites y pruebas están en [Validación final de accesibilidad](../qa/hocker-agi-accessibility-2026-11-17.md). Esta actualización complementa, sin sobrescribir, los SHA/deployments históricos del baseline descrito arriba. El estado productivo de la corrección requiere confirmar CI y despliegue del PR correspondiente antes de considerarla publicada.
