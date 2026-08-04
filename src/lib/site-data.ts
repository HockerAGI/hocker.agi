export type AppGroup =
  | "control"
  | "marketing"
  | "wallet"
  | "crm"
  | "cloud"
  | "security"
  | "entertainment"
  | "operations";

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
  ogImage: string;
  audience: string;
  highlights: string[];
  availability: string;
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

export const APPS: AppItem[] = [
  {
    slug: "hocker-one",
    title: "Hocker ONE",
    short: "Control operativo",
    tagline: "Centro de control para procesos, métricas y aprobaciones.",
    summary: "Plataforma central para visualizar indicadores, procesos, aprobaciones y herramientas empresariales desde una sola experiencia.",
    group: "control",
    accent: "#60a5fa",
    badge: "Control",
    logo: "/apps/hocker-one/logo-horizontal.png",
    icon: "/apps/hocker-one/icon.png",
    cover: "/apps/hocker-one/cover.webp",
    ogImage: "/apps/hocker-one/og-image.webp",
    audience: "Dirección, operación y equipos que necesitan visibilidad.",
    highlights: ["Paneles", "Aprobaciones", "Indicadores"],
    availability: "Disponible para evaluación",
  },
  {
    slug: "hocker-ads",
    title: "Hocker Ads",
    short: "Marketing y adquisición",
    tagline: "Campañas, creatividad y seguimiento orientados a conversión.",
    summary: "Estrategia publicitaria, contenidos, landings y analítica para generar oportunidades comerciales medibles.",
    group: "marketing",
    accent: "#22d3ee",
    badge: "Marketing",
    logo: "/apps/hocker-ads/logo-horizontal.png",
    icon: "/apps/hocker-ads/icon.png",
    cover: "/apps/hocker-ads/cover.webp",
    ogImage: "/apps/hocker-ads/og-image.webp",
    audience: "Marcas y negocios que necesitan captar demanda.",
    highlights: ["Campañas", "Contenido", "Funnels"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-hub",
    title: "Hocker Hub",
    short: "CRM y seguimiento",
    tagline: "Leads, clientes y oportunidades en una sola vista.",
    summary: "Centraliza contactos, conversaciones, tareas, pipeline y seguimiento comercial para que cada oportunidad tenga contexto, responsable y próxima acción.",
    group: "crm",
    accent: "#38bdf8",
    badge: "CRM",
    logo: "/apps/hocker-hub/logo-horizontal.png",
    icon: "/apps/hocker-hub/icon.png",
    cover: "/apps/hocker-hub/cover.webp",
    ogImage: "/apps/hocker-hub/og-image.webp",
    audience: "Equipos comerciales, soporte y atención al cliente.",
    highlights: ["Leads", "Pipeline", "Seguimiento"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-drive-cloud",
    title: "Hocker Drive Cloud",
    short: "Información y respaldo",
    tagline: "Archivos, evidencia y conocimiento con continuidad.",
    summary: "Organiza documentos, activos, evidencias y conocimiento empresarial para facilitar búsqueda, respaldo, colaboración y continuidad operativa.",
    group: "cloud",
    accent: "#8b7cf6",
    badge: "Cloud",
    logo: "/apps/hocker-drive-cloud/logo-horizontal.png",
    icon: "/apps/hocker-drive-cloud/icon.png",
    cover: "/apps/hocker-drive-cloud/cover.webp",
    ogImage: "/apps/hocker-drive-cloud/og-image.webp",
    audience: "Equipos que necesitan ordenar información y mantener continuidad.",
    highlights: ["Respaldo", "Búsqueda", "Colaboración"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-wallet",
    title: "Hocker Wallet",
    short: "Wallet y pagos",
    tagline: "Pagos, saldos y subwallets para productos y operaciones conectadas.",
    summary: "Aplicación móvil y web para administrar saldos, movimientos, cobros, transferencias y subwallets especializadas como Chido Wallet, sujeta a integraciones, cumplimiento y disponibilidad.",
    group: "wallet",
    accent: "#fbbf24",
    badge: "Finanzas",
    logo: "/apps/hocker-wallet/logo-horizontal.png",
    icon: "/apps/hocker-wallet/icon.png",
    cover: "/apps/hocker-wallet/cover.webp",
    ogImage: "/apps/hocker-wallet/og-image.webp",
    audience: "Personas, comercios y productos digitales que necesitan una capa financiera conectable.",
    highlights: ["Saldos", "Pagos", "Subwallets"],
    availability: "Desarrollo por etapas",
  },
  {
    slug: "chido-casino",
    title: "Chido Casino",
    short: "Entretenimiento digital",
    tagline: "Experiencia de gaming con controles y comunicación responsable.",
    summary: "Plataforma de entretenimiento digital con juegos, promociones, wallet y herramientas de soporte, sujeta a disponibilidad, jurisdicción y cumplimiento aplicable.",
    group: "entertainment",
    accent: "#f97316",
    badge: "Gaming",
    logo: "/apps/chido-casino/logo-horizontal.png",
    icon: "/apps/chido-casino/icon.png",
    cover: "/apps/chido-casino/cover.webp",
    ogImage: "/apps/chido-casino/og-image.webp",
    audience: "Personas adultas en mercados donde el servicio sea legal y esté disponible.",
    highlights: ["Experiencia", "Promociones", "Responsabilidad"],
    availability: "Información bajo solicitud",
  },
  {
    slug: "trackhok",
    title: "Trackhok",
    short: "Monitoreo y logística",
    tagline: "Ubicación, rutas y alertas para operaciones autorizadas.",
    summary: "Seguimiento de activos, flotas, rutas y eventos operativos mediante ubicación autorizada, alertas y telemetría.",
    group: "operations",
    accent: "#cbd5e1",
    badge: "Operación",
    logo: "/apps/trackhok/logo-horizontal.png",
    icon: "/apps/trackhok/icon.png",
    cover: "/apps/trackhok/cover.webp",
    ogImage: "/apps/trackhok/og-image.webp",
    audience: "Logística, activos, flotas y seguimiento con consentimiento.",
    highlights: ["Rutas", "Alertas", "Telemetría"],
    availability: "Información bajo solicitud",
  },
  {
    slug: "nexpa",
    title: "NEXPA",
    short: "Bienestar digital",
    tagline: "Controles de seguridad y bienestar con límites claros.",
    summary: "Herramientas de seguridad y bienestar digital para familias y organizaciones, diseñadas alrededor del consentimiento, la prevención, las alertas y el control responsable.",
    group: "security",
    accent: "#32d5e8",
    badge: "Seguridad",
    logo: "/apps/nexpa/logo-horizontal.png",
    icon: "/apps/nexpa/icon.png",
    cover: "/apps/nexpa/cover.webp",
    ogImage: "/apps/nexpa/og-image.webp",
    audience: "Familias y organizaciones con casos de uso legítimos y consentidos.",
    highlights: ["Consentimiento", "Prevención", "Alertas"],
    availability: "Información bajo solicitud",
  },
  {
    slug: "hocker-up",
    title: "Hocker Up",
    short: "Aprendizaje y comunidad",
    tagline: "La red social donde aprendes, creces y evolucionas con inteligencia.",
    summary: "Plataforma de aprendizaje y comunidad para cursos, mentorías, perfiles profesionales, contenidos y colaboración entre creadores, alumnos y marcas.",
    group: "operations",
    accent: "#7c6cff",
    badge: "Learning",
    logo: "/apps/hocker-up/logo-horizontal.png",
    icon: "/apps/hocker-up/icon.png",
    cover: "/apps/hocker-up/cover.webp",
    ogImage: "/apps/hocker-up/og-image.webp",
    audience: "Creadores, alumnos, mentores y marcas educativas.",
    highlights: ["Cursos", "Mentoría", "Comunidad"],
    availability: "Próximamente",
  },
  {
    slug: "hocker-supply",
    title: "Hocker Supply",
    short: "Manufactura, merch y fulfillment",
    tagline: "De la idea al producto: producción, inventario y entrega.",
    summary: "Solución para desarrollar mercancía y productos bajo demanda, coordinar proveedores, catálogo, pedidos, inventario, logística y entrega.",
    group: "operations",
    accent: "#ff8a1f",
    badge: "Supply",
    logo: "/apps/hocker-supply/logo-horizontal.png",
    icon: "/apps/hocker-supply/icon.png",
    cover: "/apps/hocker-supply/cover.webp",
    ogImage: "/apps/hocker-supply/og-image.webp",
    audience: "Marcas, creadores y negocios que necesitan producir y distribuir mercancía.",
    highlights: ["On demand", "Merch", "Supply chain"],
    availability: "Implementación bajo alcance",
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    slug: "performance-marketing",
    title: "Performance marketing",
    category: "marketing",
    role: "Estrategia, campañas, funnels y optimización.",
    summary: "Diseño de rutas de adquisición con mensajes, activos y medición alineados a objetivos comerciales.",
    stack: ["Meta Ads", "TikTok Ads", "CRO"],
    result: "Capacidad para conectar tráfico, conversión y seguimiento.",
    year: "2026",
  },
  {
    slug: "full-stack-panels",
    title: "Paneles y aplicaciones",
    category: "developer",
    role: "Interfaces, datos y flujos operativos.",
    summary: "Construcción de productos web y paneles diseñados alrededor del proceso real del usuario.",
    stack: ["Next.js", "React", "Supabase"],
    result: "Base técnica modular para operación y evolución.",
    year: "2026",
  },
  {
    slug: "automation-flows",
    title: "Automatización",
    category: "developer",
    role: "APIs, webhooks, formularios y CRM.",
    summary: "Conexión de sistemas para reducir tareas manuales, tiempos de respuesta y pérdida de contexto.",
    stack: ["APIs", "Webhooks", "IA"],
    result: "Flujos medibles con responsables y puntos de control.",
    year: "2026",
  },
  {
    slug: "brand-systems",
    title: "Sistemas de marca",
    category: "creative",
    role: "Branding, diseño y narrativa comercial.",
    summary: "Identidades y piezas visuales que mejoran reconocimiento, claridad y consistencia entre canales.",
    stack: ["Branding", "Copy", "Motion"],
    result: "Comunicación más coherente y reconocible.",
    year: "2026",
  },
  {
    slug: "audiovisual",
    title: "Producción audiovisual",
    category: "creative",
    role: "Edición, narrativa, ritmo y adaptación por plataforma.",
    summary: "Contenido diseñado para captar atención y comunicar una propuesta con claridad.",
    stack: ["Premiere", "Motion", "Story"],
    result: "Piezas adaptadas a objetivos y formatos digitales.",
    year: "2025",
  },
  {
    slug: "ecosystem-architecture",
    title: "Arquitectura de producto",
    category: "developer",
    role: "Módulos, información, integraciones y experiencia.",
    summary: "Diseño de plataformas conectables que separan funciones públicas, operativas y administrativas.",
    stack: ["Arquitectura", "Documentación", "Producto"],
    result: "Ruta clara para implementar por etapas sin saturación.",
    year: "2026",
  },
];
