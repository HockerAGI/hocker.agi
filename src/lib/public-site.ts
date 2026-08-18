export const PUBLIC_SITE = {
  brand: "Hocker AGI Technologies",
  url: "https://hockeragi.vercel.app",
  title: "Hocker AGI Technologies | IA, automatización, software y crecimiento",
  description:
    "Diseñamos sistemas de inteligencia artificial, automatización, software y crecimiento digital para convertir procesos complejos en operaciones medibles.",
  tagline: "Inteligencia aplicada para vender, operar y escalar.",
  locale: "es_MX",
  founder: "Armando Chávez",
  founderProfile: "/portafolio",
  areaServed: "México y proyectos remotos",
  symbol: "/brand/hocker-agi-symbol.png",
  logo: "/brand/hocker-agi-horizontal.png",
  heroImage: "/brand/hocker-agi-hero.webp",
  ogImage: "/brand/hocker-agi-hero.webp",
  email: "contacto.hocker@gmail.com",
  phoneE164: "+526632091143",
  phoneDisplay: "+52 663 209 1143",
  whatsapp: "https://wa.me/526632091143",
} as const;

export const PUBLIC_NAV = [
  { href: "/soluciones", label: "Soluciones" },
  { href: "/apps", label: "Productos" },
  { href: "/agis", label: "AGIs" },
  { href: "/casos", label: "Casos" },
  { href: "/portafolio", label: "Portafolio" },
] as const;

export const PUBLIC_SERVICES = [
  {
    title: "IA aplicada y automatización",
    summary: "Diseñamos flujos donde la IA analiza, prepara y coordina trabajo con reglas, evidencia y control humano proporcional al riesgo.",
    outcome: "Menos fricción operativa y decisiones más rápidas sin perder gobernanza.",
  },
  {
    title: "Marketing, adquisición y contenido",
    summary: "Estrategia, campañas, contenido y medición conectados al funnel comercial y a la calidad real de las oportunidades.",
    outcome: "Mejor trazabilidad de CTR, CPL, CAC, conversión y ROAS cuando aplica.",
  },
  {
    title: "Software y producto digital",
    summary: "Construimos sitios, aplicaciones, paneles, APIs y herramientas internas alrededor del proceso real del usuario.",
    outcome: "Tecnología modular que puede evolucionar sin reconstruir todo desde cero.",
  },
  {
    title: "Integración y operación",
    summary: "Conectamos datos, CRM, mensajería, formularios, automatizaciones y servicios externos solo cuando existe una necesidad verificable.",
    outcome: "Menos herramientas aisladas, más continuidad y evidencia operativa.",
  },
] as const;

export const COMMERCIAL_PROCESS = [
  { step: "01", title: "Descubrir", text: "Definimos objetivo, usuario, fricción, restricciones y KPI antes de elegir tecnología." },
  { step: "02", title: "Diseñar", text: "Modelamos experiencia, arquitectura, datos, riesgos, integraciones y criterios de aceptación." },
  { step: "03", title: "Construir", text: "Implementamos por slices verticales, con pruebas, accesibilidad, seguridad y observabilidad." },
  { step: "04", title: "Validar", text: "Comparamos resultado, performance y evidencia antes de liberar o escalar." },
] as const;

export const PUBLIC_FAQS = [
  {
    question: "¿HOCKER es una agencia o una empresa de software?",
    answer: "Trabajamos en la intersección de estrategia, producto, inteligencia artificial, automatización, marketing y software. El alcance se define por el problema que debe resolverse, no por una categoría rígida.",
  },
  {
    question: "¿Las AGIs ejecutan acciones sin supervisión?",
    answer: "No para acciones materiales. El modelo operativo separa razonamiento, propuesta, aprobación, ejecución y evidencia; las acciones sensibles conservan controles y responsables explícitos.",
  },
  {
    question: "¿Pueden desarrollar una solución a medida?",
    answer: "Sí. Podemos partir de un diagnóstico y construir desde una landing o automatización hasta una plataforma modular, siempre definiendo primero alcance, riesgos, datos e indicadores.",
  },
  {
    question: "¿Cómo se mide el resultado?",
    answer: "Según el proyecto usamos métricas de adquisición, conversión, calidad de lead, tiempos operativos, rendimiento técnico, disponibilidad, costos y retorno. No publicamos mejoras porcentuales sin evidencia del caso.",
  },
] as const;
