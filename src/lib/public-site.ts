export const PUBLIC_SITE = {
  brand: "Hocker AGI Technologies",
  legalName: "Hocker AGI Technologies",
  url: "https://hockeragi.vercel.app",
  title: "Hocker AGI Technologies | IA, automatización y marketing",
  description:
    "Diseñamos sistemas de inteligencia artificial, automatización, software y marketing para captar clientes, operar mejor y tomar decisiones con datos.",
  tagline: "Inteligencia aplicada para vender, operar y escalar.",
  locale: "es_MX",
  founder: "Armando Chávez",
  areaServed: "México y proyectos remotos",
  symbol: "/brand/hocker-agi-symbol.png",
  logo: "/brand/hocker-agi-horizontal.png",
  heroImage: "/brand/hocker-agi-hero.webp",
  ogImage: "/brand/hocker-agi-hero.webp",
  email: "contacto.hocker@gmail.com",
  phoneE164: "+526632091143",
  phoneDisplay: "+52 663 209 1143",
  whatsapp: "https://wa.me/526632091143",
  relatedSites: ["https://hockerads.com", "https://linkfly.to/hocker"],
} as const;

export const PUBLIC_NAV = [
  { href: "/soluciones", label: "Soluciones" },
  { href: "/apps", label: "Productos" },
  { href: "/portfolio", label: "Casos y capacidades" },
  { href: "/empresa", label: "Empresa" },
] as const;

export const PUBLIC_SERVICES = [
  {
    title: "Captación y publicidad",
    summary: "Campañas, landings, contenidos y seguimiento diseñados para convertir interés en oportunidades comerciales.",
    outcome: "Más conversaciones calificadas y trazabilidad del funnel.",
  },
  {
    title: "Automatización de procesos",
    summary: "Conectamos formularios, WhatsApp, correo, CRM, APIs y paneles para eliminar tareas repetitivas.",
    outcome: "Menor fricción operativa y respuestas más rápidas.",
  },
  {
    title: "Software y plataformas",
    summary: "Desarrollamos sitios, aplicaciones, dashboards y herramientas internas adaptadas al flujo real del negocio.",
    outcome: "Tecnología propia, clara y lista para evolucionar.",
  },
  {
    title: "Estrategia de IA aplicada",
    summary: "Definimos dónde usar agentes, automatización y analítica sin vender humo ni exponer información sensible.",
    outcome: "Decisiones técnicas alineadas con ventas, costos y reputación.",
  },
] as const;

export const PUBLIC_PRODUCTS = [
  {
    title: "Hocker ONE",
    label: "Control operativo",
    summary: "Plataforma central para visualizar indicadores, procesos, aprobaciones y herramientas empresariales.",
    image: "/apps/hocker-one/icon.png",
    href: "/apps/hocker-one",
  },
  {
    title: "Hocker Ads",
    label: "Marketing y adquisición",
    summary: "Estrategia, creatividad, automatización y analítica para campañas digitales orientadas a resultados.",
    image: "/apps/hocker-ads/icon.png",
    href: "/apps/hocker-ads",
  },
  {
    title: "Hocker Hub",
    label: "CRM y seguimiento",
    summary: "Contactos, conversaciones, pipeline y próximas acciones con contexto y responsables.",
    image: "/apps/hocker-hub/icon.png",
    href: "/apps/hocker-hub",
  },
  {
    title: "Hocker Wallet",
    label: "Wallet y pagos",
    summary: "Saldos, cobros, transferencias y subwallets especializadas para productos conectados.",
    image: "/apps/hocker-wallet/icon.png",
    href: "/apps/hocker-wallet",
  },
  {
    title: "Hocker Drive Cloud",
    label: "Información y respaldo",
    summary: "Documentos, activos y conocimiento preparados para búsqueda, respaldo y colaboración.",
    image: "/apps/hocker-drive-cloud/icon.png",
    href: "/apps/hocker-drive-cloud",
  },
  {
    title: "Hocker Supply",
    label: "Manufactura y fulfillment",
    summary: "Merch, proveedores, inventario, pedidos y entrega coordinados desde una sola solución.",
    image: "/apps/hocker-supply/icon.png",
    href: "/apps/hocker-supply",
  },
] as const;

export const COMMERCIAL_PROCESS = [
  { step: "01", title: "Diagnóstico", text: "Entendemos el objetivo, el proceso actual, los canales y las restricciones reales." },
  { step: "02", title: "Arquitectura", text: "Diseñamos la solución, el funnel, las integraciones y los indicadores que deben medirse." },
  { step: "03", title: "Implementación", text: "Construimos, conectamos, probamos y documentamos cada componente antes de liberarlo." },
  { step: "04", title: "Optimización", text: "Medimos calidad de lead, conversión, costos y rendimiento para mejorar lo que sí impacta." },
] as const;

export const PUBLIC_FAQS = [
  {
    question: "¿Trabajan solo con inteligencia artificial?",
    answer: "No. Integramos IA con estrategia, desarrollo, automatización, publicidad y operación. La tecnología se elige por el resultado que debe producir.",
  },
  {
    question: "¿Pueden conectar el sitio con WhatsApp y un CRM?",
    answer: "Sí. El formulario puede enviar el lead a WhatsApp y, cuando se configura un webhook, registrar la oportunidad en el CRM o flujo comercial elegido.",
  },
  {
    question: "¿Desarrollan soluciones a medida?",
    answer: "Sí. Podemos trabajar desde una landing de captación hasta una plataforma con paneles, APIs, automatizaciones y agentes especializados.",
  },
  {
    question: "¿Cómo se mide el resultado?",
    answer: "Definimos indicadores desde el inicio: visitas calificadas, tasa de conversión, CPL, CAC, tiempo de respuesta, oportunidades, ventas y ROAS cuando aplica.",
  },
] as const;
