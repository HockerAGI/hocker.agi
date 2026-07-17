export type AppGroup = "control" | "marketing" | "wallet" | "crm" | "cloud" | "security" | "entertainment" | "operations";
export type ServiceGroup = "growth" | "build" | "automation" | "strategy";
export type PortfolioGroup = "marketing" | "developer" | "creative";

export type AppItem = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  summary: string;
  group: AppGroup;
  accent: string;
  badge: string;
  logo: string;
  icon: string;
  cover: string;
  audience: string;
  highlights: string[];
  agis: string[];
  status: string;
};

export type AgiItem = {
  slug: string;
  name: string;
  role: string;
  purpose: string;
  category: string;
  accent: string;
  human: string;
  worksWith: string[];
};

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  outcome: string;
  audience: string;
  group: ServiceGroup;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: PortfolioGroup;
  role: string;
  summary: string;
  stack: string[];
  result: string;
  year: string;
};

export const SITE = {
  brand: "Hocker AGI Technologies",
  tagline: "Marketing, software y agentes IA que venden, automatizan y escalan.",
  description:
    "Sitio oficial comercial de Hocker AGI Technologies: ecosistema de apps, AGIs, automatización, portafolio y soluciones digitales premium.",
  url: "https://hockeragi.vercel.app",
};

export const SOCIALS = [
  { label: "Email", href: "mailto:hocker.agi@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/526632091143" },
  { label: "Sitio oficial", href: "https://hockeragi.vercel.app" },
];

export const STATS = [
  { value: "10", label: "Apps y módulos", detail: "Productos conectados al ecosistema Hocker." },
  { value: "16", label: "AGIs especializadas", detail: "Especialistas por función y con rol claro." },
  { value: "6", label: "Servicios comerciales", detail: "Rutas que venden estrategia, desarrollo y automatización." },
  { value: "6", label: "Casos en portfolio", detail: "Pruebas reales de marketing, código y creatividad." },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    slug: "estrategia-marketing-ia",
    title: "Estrategia de marketing con IA",
    summary: "Diseñamos campañas, contenido y funnels para vender más con menos fricción.",
    outcome: "Más leads, mejor conversión y mensajes más claros para cada audiencia.",
    audience: "Marcas, negocios y proyectos que quieren crecer con orden.",
    group: "growth",
  },
  {
    slug: "webs-apps-y-panels",
    title: "Webs, apps y paneles",
    summary: "Construcción de sitios y herramientas operativas modernas, rápidas y fáciles de usar.",
    outcome: "Una experiencia digital que sí se siente premium y sí convierte.",
    audience: "Empresas que necesitan presencia, control y escalabilidad.",
    group: "build",
  },
  {
    slug: "automatizacion-integraciones",
    title: "Automatización e integraciones",
    summary: "Conectamos APIs, webhooks, CRM, pagos y flujos internos para ahorrar tiempo.",
    outcome: "Menos trabajo manual y más procesos automáticos con trazabilidad.",
    audience: "Equipos que necesitan operar mejor sin contratar más gente.",
    group: "automation",
  },
  {
    slug: "ecosistemas-agentes",
    title: "Ecosistemas de agentes IA",
    summary: "Definimos AGIs por función: creatividad, seguridad, legal, finanzas y operación.",
    outcome: "Cada IA hace su parte y el sistema completo trabaja como un equipo.",
    audience: "Empresas que quieren una arquitectura de IA seria y entendible.",
    group: "strategy",
  },
  {
    slug: "brand-productization",
    title: "Branding y productización",
    summary: "Convertimos ideas en marcas, módulos y productos que se entienden rápido.",
    outcome: "Una identidad clara que vende mejor y se recuerda más.",
    audience: "Lanzamientos, startups, productos digitales y verticales nuevos.",
    group: "growth",
  },
  {
    slug: "portfolio-creative",
    title: "Producción creativa ejecutiva",
    summary: "Diseño, audiovisual, copy y contenido de marca con enfoque comercial.",
    outcome: "Mensajes más sólidos, piezas más lindas y un look más profesional.",
    audience: "Marcas que necesitan verse bien y sonar mejor.",
    group: "build",
  },
];

export const APPS: AppItem[] = [
  {
    slug: "hocker-one",
    title: "Hocker ONE",
    short: "Hocker ONE",
    tagline: "Centro de mando del ecosistema.",
    summary: "Panel maestro para operar el sistema, ver el estado general y coordinar el trabajo de NOVA y las AGIs.",
    group: "control",
    accent: "#60a5fa",
    badge: "Core",
    logo: "/brand/hocker-agi-technologies.png",
    icon: "/brand/hocker-agi-technologies.png",
    cover: "/brand/hocker-agi-technologies.png",
    audience: "Operación interna, owner y administración.",
    highlights: ["Estado en vivo", "Aprobaciones", "Evidencia", "Nodos y comandos"],
    agis: ["NOVA", "Syntia", "Vertx"],
    status: "live",
  },
  {
    slug: "hocker-ads",
    title: "Hocker Ads",
    short: "Hocker Ads",
    tagline: "Marketing y campañas con IA.",
    summary: "Agencia IA para anuncios, contenido, branding y performance marketing con entregables claros.",
    group: "marketing",
    accent: "#fb7185",
    badge: "Growth",
    logo: "/apps/hocker-ads/logo.png",
    icon: "/apps/hocker-ads/logo.png",
    cover: "/apps/hocker-ads/logo.png",
    audience: "Negocios que quieren vender con anuncios y contenido mejor hechos.",
    highlights: ["Meta Ads", "TikTok Ads", "Funnels", "Creatividad y copy"],
    agis: ["Nova Ads", "Candy Ads", "PRO IA"],
    status: "live",
  },
  {
    slug: "hocker-hub",
    title: "Hocker Hub",
    short: "Hocker Hub",
    tagline: "CRM inteligente para ventas y soporte.",
    summary: "Gestiona contactos, oportunidades, seguimiento y atención con una vista clara del negocio.",
    group: "crm",
    accent: "#a78bfa",
    badge: "CRM",
    logo: "/apps/hocker-hub/logo.png",
    icon: "/apps/hocker-hub/icon.png",
    cover: "/apps/hocker-hub/logo.png",
    audience: "Equipos comerciales, soporte y operaciones.",
    highlights: ["CRM", "Atención", "Seguimiento", "Automatización"],
    agis: ["Numia", "Jurix", "Syntia"],
    status: "integration",
  },
  {
    slug: "hocker-wallet",
    title: "Hocker Wallet",
    short: "Hocker Wallet",
    tagline: "Capa financiera del ecosistema.",
    summary: "Centraliza ingresos, cobros, movimientos y control financiero con enfoque de negocio.",
    group: "wallet",
    accent: "#38bdf8",
    badge: "Fintech",
    logo: "/apps/hocker-wallet/logo.png",
    icon: "/apps/hocker-wallet/logo.png",
    cover: "/apps/hocker-wallet/logo.png",
    audience: "Operación financiera, pagos y control interno.",
    highlights: ["Subwallets", "Pagos", "ROI", "Auditoría"],
    agis: ["Numia", "Jurix", "Vertx"],
    status: "integration",
  },
  {
    slug: "hocker-drive-cloud",
    title: "Hocker Drive Cloud",
    short: "Drive Cloud",
    tagline: "Nube privada y sincronizada.",
    summary: "Almacenamiento y respaldo con enfoque privado, organizado y listo para trabajo en equipo.",
    group: "cloud",
    accent: "#22d3ee",
    badge: "Cloud",
    logo: "/apps/hocker-drive-cloud/logo.png",
    icon: "/apps/hocker-drive-cloud/icon.png",
    cover: "/apps/hocker-drive-cloud/logo.png",
    audience: "Equipos que necesitan archivos, backup y acceso ordenado.",
    highlights: ["Backup", "Sincronía", "Privacidad", "Acceso rápido"],
    agis: ["Hostia", "Syntia", "Vertx"],
    status: "integration",
  },
  {
    slug: "trackhok",
    title: "Trackhok",
    short: "Trackhok",
    tagline: "Seguimiento y predicción operativa.",
    summary: "Observa, rastrea y anticipa eventos de flota, personas o contexto operativo.",
    group: "operations",
    accent: "#f59e0b",
    badge: "Ops",
    logo: "/apps/trackhok/logo.png",
    icon: "/apps/trackhok/icon.png",
    cover: "/apps/trackhok/logo.png",
    audience: "Operaciones, movilidad y control inteligente.",
    highlights: ["Rastreo", "Alertas", "Predicción", "Panel de control"],
    agis: ["Trackhok", "Vertx", "Syntia"],
    status: "integration",
  },
  {
    slug: "nexpa",
    title: "NEXPA",
    short: "NEXPA",
    tagline: "Seguridad, control y monitoreo.",
    summary: "Módulo para seguridad del ecosistema, control contextual y respuestas discretas.",
    group: "security",
    accent: "#34d399",
    badge: "Secure",
    logo: "/apps/nexpa/logo.png",
    icon: "/apps/nexpa/icon.png",
    cover: "/apps/nexpa/logo.png",
    audience: "Familias, equipos y activos que requieren protección.",
    highlights: ["Seguridad", "Control remoto", "Monitoreo", "Alertas"],
    agis: ["Vertx", "NEXPA", "Jurix"],
    status: "integration",
  },
  {
    slug: "chido-casino",
    title: "Chido Casino",
    short: "Chido Casino",
    tagline: "Experiencia gaming / apuestas con IA.",
    summary: "Vertical de entretenimiento con IA, reglas claras y operación separada del core comercial.",
    group: "entertainment",
    accent: "#fb923c",
    badge: "Gaming",
    logo: "/apps/chido-casino/logo.png",
    icon: "/apps/chido-casino/logo.png",
    cover: "/apps/chido-casino/logo.png",
    audience: "Entretenimiento digital con enfoque de marca y control.",
    highlights: ["Diseño neón", "AGIs de operación", "Wallet", "Métricas"],
    agis: ["Chido Gerente", "Chido Wins", "Curvewind"],
    status: "live",
  },
  {
    slug: "hocker-up",
    title: "Hocker Up",
    short: "Hocker Up",
    tagline: "Red social + aprendizaje.",
    summary: "Espacio para comunidad, contenido, educación y crecimiento con identidad Hocker.",
    group: "operations",
    accent: "#fb7185",
    badge: "Community",
    logo: "/apps/hocker-up/logo.png",
    icon: "/apps/hocker-up/logo.png",
    cover: "/apps/hocker-up/logo.png",
    audience: "Creadores, alumnos y comunidad del ecosistema.",
    highlights: ["Comunidad", "Cursos", "Contenido", "Conexión"],
    agis: ["Candy Ads", "Syntia", "NOVA"],
    status: "integration",
  },
  {
    slug: "hocker-supply",
    title: "Hocker Supply",
    short: "Hocker Supply",
    tagline: "Tienda y catálogo operativo.",
    summary: "Módulo para productos, pedidos y estructura comercial conectada al ecosistema.",
    group: "operations",
    accent: "#f59e0b",
    badge: "Commerce",
    logo: "/apps/hocker-supply/logo.png",
    icon: "/apps/hocker-supply/icon.png",
    cover: "/apps/hocker-supply/logo.png",
    audience: "Compras, catálogos y ventas de productos o servicios.",
    highlights: ["Catálogo", "Pedidos", "Conversión", "Operación"],
    agis: ["Numia", "Jurix", "Hostia"],
    status: "integration",
  },
];

export const AGIS: AgiItem[] = [
  {
    slug: "nova",
    name: "NOVA",
    role: "Dirección central",
    purpose: "Coordina el ecosistema, prioriza, pide aprobación y organiza el trabajo general.",
    category: "gobernanza",
    accent: "#60a5fa",
    human: "La voz ejecutiva que entiende la intención y ordena el sistema.",
    worksWith: ["Syntia", "Vertx", "Hostia", "Numia"],
  },
  {
    slug: "syntia",
    name: "Syntia",
    role: "Memoria y sincronización",
    purpose: "Conecta información entre AGIs, conserva contexto y mantiene el modo espejo.",
    category: "infraestructura",
    accent: "#a78bfa",
    human: "La que mantiene todo alineado y recuerda lo importante.",
    worksWith: ["NOVA", "Hostia", "Jurix"],
  },
  {
    slug: "vertx",
    name: "Vertx",
    role: "Seguridad y blindaje",
    purpose: "Protege accesos, integraciones y operaciones sensibles del ecosistema.",
    category: "infraestructura",
    accent: "#34d399",
    human: "La capa de seguridad que evita errores y frena riesgos.",
    worksWith: ["NOVA", "Jurix", "Trackhok"],
  },
  {
    slug: "hostia",
    name: "Hostia",
    role: "Infraestructura y APIs",
    purpose: "Administra hosting, tokens, integraciones, servicios y despliegues.",
    category: "infraestructura",
    accent: "#22d3ee",
    human: "La encargada de conectar sistemas y dejarlos vivos en producción.",
    worksWith: ["Vertx", "Syntia", "Numia"],
  },
  {
    slug: "numia",
    name: "Numia",
    role: "Finanzas y control",
    purpose: "Ordena pagos, ROI, contabilidad y lógica financiera del ecosistema.",
    category: "negocio",
    accent: "#f59e0b",
    human: "La que pone orden en números, costos, cobros y rentabilidad.",
    worksWith: ["Jurix", "Hocker Wallet", "Hocker Hub"],
  },
  {
    slug: "jurix",
    name: "Jurix",
    role: "Legal y cumplimiento",
    purpose: "Revisa contratos, políticas, permisos y límites legales del sistema.",
    category: "negocio",
    accent: "#fb7185",
    human: "La que traduce negocio a cumplimiento y protege la operación.",
    worksWith: ["Numia", "Vertx", "Hocker ONE"],
  },
  {
    slug: "candy-ads",
    name: "Candy Ads",
    role: "Creatividad visual",
    purpose: "Diseña piezas, ideas, hooks y estética comercial para campañas.",
    category: "creativa",
    accent: "#fb7185",
    human: "La que convierte ideas en piezas atractivas y memorables.",
    worksWith: ["Nova Ads", "PRO IA", "Hocker Ads"],
  },
  {
    slug: "nova-ads",
    name: "Nova Ads",
    role: "Publicidad y performance",
    purpose: "Maneja campañas, estructura audiencias y ayuda a convertir mejor.",
    category: "creativa",
    accent: "#7dd3fc",
    human: "La que vende con datos, mensajes y ejecución publicitaria.",
    worksWith: ["Candy Ads", "Numia", "Hocker Ads"],
  },
  {
    slug: "pro-ia",
    name: "PRO IA",
    role: "Video y contenido",
    purpose: "Prepara guiones, piezas audiovisuales y producción creativa.",
    category: "creativa",
    accent: "#c084fc",
    human: "La que produce contenido más rápido y con más intención comercial.",
    worksWith: ["Candy Ads", "Nova Ads", "HeyGen"],
  },
  {
    slug: "curvewind",
    name: "Curvewind",
    role: "Predicción estratégica",
    purpose: "Ayuda a estimar escenarios, priorizar decisiones y optimizar rutas.",
    category: "estratégica",
    accent: "#38bdf8",
    human: "La que sopesa opciones y empuja la estrategia correcta.",
    worksWith: ["Numia", "Chido Wins", "NOVA"],
  },
  {
    slug: "trackhok",
    name: "Trackhok",
    role: "Rastreo y control",
    purpose: "Supervisa eventos, ubicación, estado y señales relevantes de operación.",
    category: "operativa",
    accent: "#f97316",
    human: "La que vigila movimiento, cambios y alertas de campo.",
    worksWith: ["Vertx", "NEXPA", "NOVA"],
  },
  {
    slug: "nexpa",
    name: "NEXPA",
    role: "Seguridad contextual",
    purpose: "Controla accesos, protección y monitoreo discreto.",
    category: "operativa",
    accent: "#34d399",
    human: "La que cuida el entorno y responde sin hacer ruido.",
    worksWith: ["Vertx", "Trackhok", "Jurix"],
  },
  {
    slug: "chido-wins",
    name: "Chido Wins",
    role: "Predicción de juego",
    purpose: "Apoya el análisis y la estructura operativa de entretenimiento.",
    category: "operativa",
    accent: "#f59e0b",
    human: "La que convierte la operación de juego en algo más ordenado.",
    worksWith: ["Curvewind", "Chido Gerente", "Numia"],
  },
  {
    slug: "chido-gerente",
    name: "Chido Gerente",
    role: "Operación del casino",
    purpose: "Administra usuarios, flujos y control operativo del vertical Chido.",
    category: "operativa",
    accent: "#fb923c",
    human: "La que pone disciplina en la operación diaria.",
    worksWith: ["Chido Wins", "Numia", "Jurix"],
  },
  {
    slug: "shadow",
    name: "Shadows",
    role: "Microtareas efímeras",
    purpose: "Despliegan funciones temporales y desaparecen al terminar.",
    category: "especial",
    accent: "#94a3b8",
    human: "Pequeñas IAs para tareas específicas y de corta vida.",
    worksWith: ["NOVA", "Syntia", "Vertx"],
  },
  {
    slug: "aegis",
    name: "AEGIS",
    role: "Principios y ética",
    purpose: "Marca límites, protege la experiencia y conserva coherencia.",
    category: "especial",
    accent: "#f8fafc",
    human: "La brújula moral del ecosistema.",
    worksWith: ["NOVA", "Jurix", "Vertx"],
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "armando-creative-tech",
    title: "Armando Chávez — Perfil híbrido",
    category: "developer",
    role: "AI Automation Engineer · Performance Marketing Strategist · Full Stack Developer",
    summary: "Perfil profesional enfocado en IA, automatización, marketing de performance y desarrollo full stack con visión creativa.",
    stack: ["Next.js", "React", "Node.js", "Supabase", "Meta Ads", "TikTok Ads"],
    result: "Una propuesta clara para vender, construir y operar con criterio técnico y comercial.",
    year: "2026",
  },
  {
    slug: "hocker-agi-technologies",
    title: "Hocker AGI Technologies",
    category: "developer",
    role: "Founder & AI Systems Architect",
    summary: "Sitio oficial, panel maestro, apps, AGIs y arquitectura comercial del ecosistema.",
    stack: ["Next.js", "Supabase", "Vercel", "MCP", "Branding"],
    result: "Una base comercial y operativa para vender, automatizar y escalar el ecosistema.",
    year: "2026",
  },
  {
    slug: "grupo-aries",
    title: "Grupo Aries",
    category: "marketing",
    role: "Social Media Manager / Developer",
    summary: "Gestión integral de redes, estrategia de contenido y crecimiento local de marca.",
    stack: ["Contenido", "Community", "Branding", "Ads"],
    result: "Más orden, mejor presencia y soporte a operación comercial.",
    year: "2025",
  },
  {
    slug: "monsat",
    title: "Monsat Monitoreo Satelital",
    category: "marketing",
    role: "Marketing Digital | Content Manager",
    summary: "Campañas de generación de leads y contenido estratégico para una marca técnica.",
    stack: ["Lead Gen", "Funnels", "Meta Ads", "LinkedIn Ads"],
    result: "Mejor segmentación y mensajes más enfocados a conversión.",
    year: "2023-2025",
  },
  {
    slug: "seitcom-12-volts",
    title: "SEITCOM & 12 Volts Shop",
    category: "creative",
    role: "Social Media Manager | Content Manager",
    summary: "Producción de contenido y anuncios para Meta Ads y TikTok Ads.",
    stack: ["Reels", "Ads", "Motion", "Content"],
    result: "Narrativa visual más clara y piezas más consistentes.",
    year: "2021-2023",
  },
  {
    slug: "netflix-pinocchio",
    title: "Netflix / Pinocho",
    category: "creative",
    role: "Editor Audiovisual (Stop Motion)",
    summary: "Participación en postproducción audiovisual para una producción de alto nivel.",
    stack: ["Postproducción", "Edición", "Stop Motion"],
    result: "Experiencia editorial de estándar internacional.",
    year: "2021-2022",
  },
];

export const FAQS = [
  {
    q: "¿Qué es NOVA?",
    a: "NOVA es la mente central del ecosistema. Entiende la intención, ordena el trabajo y coordina a las demás AGIs para que todo tenga sentido.",
  },
  {
    q: "¿Qué son las AGIs en Hocker?",
    a: "Son especialistas por función. Cada una se encarga de una parte concreta: seguridad, legal, creatividad, finanzas, infraestructura, rastreo o estrategia.",
  },
  {
    q: "¿Qué es Hocker ONE?",
    a: "Es el panel maestro del ecosistema. Ahí ves el estado general, las aprobaciones, la evidencia y el control operativo.",
  },
  {
    q: "¿Puedo contratar solo una parte?",
    a: "Sí. El sitio está pensado para vender servicios, apps o soluciones completas, pero también proyectos pequeños o un solo módulo.",
  },
  {
    q: "¿El portfolio es solo diseño o también desarrollo?",
    a: "Es ambas cosas. El perfil mezcla marketing, desarrollo, automatización, creatividad y operación técnica.",
  },
  {
    q: "¿Se puede conectar a trabajo real?",
    a: "Sí. La idea es que el sitio oficial no solo explique, sino que lleve a contacto, portafolio, acceso privado y soluciones concretas.",
  },
  {
    q: "¿Cómo arranco un proyecto contigo?",
    a: "Me escribes por email o WhatsApp, me cuentas qué necesitas vender, automatizar o construir y te propongo la ruta más rápida.",
  },
];
