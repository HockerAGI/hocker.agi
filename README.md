# Hocker AGI Technologies — Sitio oficial

Sitio corporativo y comercial de Hocker AGI Technologies, desarrollado con Next.js y desplegado en Vercel.

## Objetivos

- Presentar soluciones de inteligencia artificial, automatización, software y marketing.
- Comunicar productos con lenguaje dirigido a clientes y usuarios.
- Captar oportunidades mediante formulario, WhatsApp y un webhook opcional de CRM.
- Mantener SEO técnico, datos estructurados, seguridad y experiencia responsive.
- Separar la comunicación pública de la documentación operativa o confidencial.

## Desarrollo local

```bash
npm install
npm run dev
```

Validación de producción:

```bash
npm run build
```

## Variables de entorno

Consulta `.env.example`.

- `LEADS_WEBHOOK_URL`: endpoint HTTPS de CRM o automatización.
- `LEADS_WEBHOOK_TOKEN`: token opcional para autenticar el webhook.
- `NEXT_PUBLIC_GA_ID`: identificador opcional de Google Analytics.
- `NEXT_PUBLIC_META_PIXEL_ID`: identificador opcional de Meta Pixel.

Los scripts de analítica se cargan únicamente después del consentimiento del usuario.

## Captación

El formulario valida datos, registra la fuente y parámetros UTM, aplica controles básicos contra spam y continúa la conversación en WhatsApp. Cuando existe un webhook configurado, también envía el evento `lead.created` al sistema comercial autorizado.

## Despliegue

La rama `main` está conectada al proyecto de Vercel. Los pull requests generan un preview protegido y no indexable para revisión antes de producción.

## Contacto público

- Correo: contacto.hocker@gmail.com
- WhatsApp: +52 663 209 1143
