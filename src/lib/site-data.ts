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
    summary: "Panel central para visualizar operación, indicadores y herramientas en una experiencia ordenada.",
    group: "control",
    accent: "#60a5fa",
    badge: "Control",
    logo: "/apps/hocker-one/logo.png",
    icon: "/apps/hocker-one/icon.png",
    cover: "/apps/hocker-one/cover.png",
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
    logo: "/apps/hocker-ads/logo.png",
    icon: "/apps/hocker-ads/icon.png",
    cover: "/apps/hocker-ads/cover.png",
    audience: "Marcas y negocios que necesitan captar demanda.",
    highlights: ["Campañas", "Contenido", "Funnels"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-hub",
    title: "Hocker Hub",
    short: "CRM y seguimiento",
    tagline: "Leads, clientes y oportunidades en una sola vista.",
    summary: "Sistema para organizar contactos, conversaciones, pipeline, tareas y seguimiento comercial.",
    group: "crm",
    accent: "#a78bfa",
    badge: "CRM",
    logo: "/apps/hocker-hub/logo.png",
    icon: "/apps/hocker-hub/icon.png",
    cover: "/apps/hocker-hub/cover.png",
    audience: "Equipos comerciales, soporte y atención al cliente.",
    highlights: ["Leads", "Pipeline", "Seguimiento"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-drive-cloud",
    title: "Hocker Drive Cloud",
    short: "Información y respaldo",
    tagline: "Archivos, evidencia y conocimiento con continuidad.",
    summary: "Organización de documentos, activos y conocimiento para facilitar búsqueda, respaldo y colaboración.",
    group: "cloud",
    accent: "#38bdf8",
    badge: "Cloud",
    logo: "/apps/hocker-drive-cloud/logo.png",
    icon: "/apps/hocker-drive-cloud/icon.png",
    cover: "/apps/hocker-drive-cloud/cover.png",
    audience: "Equipos que necesitan ordenar información y mantener continuidad.",
    highlights: ["Respaldo", "Búsqueda", "Colaboración"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-wallet",
    title: "Hocker Wallet",
    short: "Control financiero",
    tagline: "Presupuestos, pagos y evidencia financiera con orden.",
    summary: "Concepto de producto para centralizar movimientos, presupuestos, comprobantes y flujos autorizados.",
    group: "wallet",
    accent: "#fbbf24",
    badge: "Finanzas",
    logo: "/apps/hocker-wallet/logo.png",
    icon: "/apps/hocker-wallet/icon.png",
    cover: "/apps/hocker-wallet/cover.png",
    audience: "Operaciones que requieren trazabilidad financiera.",
    highlights: ["Presupuestos", "Pagos", "Comprobantes"],
    availability: "Próxima apertura",
  },
  {
    slug: "chido-casino",
    title: "Chido Casino",
    short: "Entretenimiento digital",
    tagline: "Experiencia de gaming con controles y comunicación responsable.",
    summary: "Vertical de entretenimiento digital presentada con enfoque de experiencia, transparencia y cumplimiento aplicable.",
    group: "entertainment",
    accent: "#f97316",
    badge: "Gaming",
    logo: "/apps/chido-casino/logo.png",
    icon: "/apps/chido-casino/icon.png",
    cover: "/apps/chido-casino/cover.png",
    audience: "Proyectos de entretenimiento sujetos a evaluación legal y técnica.",
    highlights: ["Experiencia", "Métricas", "Responsabilidad"],
    availability: "Información bajo solicitud",
  },
  {
    slug: "trackhok",
    title: "Trackhok",
    short: "Monitoreo y logística",
    tagline: "Ubicación, rutas y alertas para operaciones autorizadas.",
    summary: "Producto de seguimiento operativo para visualizar ubicaciones, eventos y rutas dentro de casos de uso legítimos.",
    group: "operations",
    accent: "#34d399",
    badge: "Operación",
    logo: "/apps/trackhok/logo.png",
    icon: "/apps/trackhok/icon.png",
    cover: "/apps/trackhok/cover.png",
    audience: "Logística, activos, flotas y seguimiento con consentimiento.",
    highlights: ["Rutas", "Alertas", "Telemetría"],
    availability: "Información bajo solicitud",
  },
  {
    slug: "nexpa-app",
    title: "NEXPA",
    short: "Bienestar digital",
    tagline: "Controles de seguridad y bienestar con límites claros.",
    summary: "Concepto de protección digital diseñado para escenarios autorizados, transparencia, privacidad y control responsable.",
    group: "security",
    accent: "#fb7185",
    badge: "Seguridad",
    logo: "/apps/nexpa/logo.png",
    icon: "/apps/nexpa/icon.png",
    cover: "/apps/nexpa/cover.png",
    audience: "Familias y organizaciones con casos de uso legítimos y consentidos.",
    highlights: ["Consentimiento", "Prevención", "Alertas"],
    availability: "Información bajo solicitud",
  },
  {
    slug: "hocker-up",
    title: "Hocker Up",
    short: "Aprendizaje y comunidad",
    tagline: "Formación, mentoría y comunidad en un entorno conectado.",
    summary: "Plataforma conceptual para cursos, contenidos, perfiles, mentoría y participación de comunidad.",
    group: "operations",
    accent: "#06b6d4",
    badge: "Learning",
    logo: "/apps/hocker-up/logo.png",
    icon: "/apps/hocker-up/icon.png",
    cover: "/apps/hocker-up/cover.png",
    audience: "Creadores, alumnos, mentores y marcas educativas.",
    highlights: ["Cursos", "Mentoría", "Comunidad"],
    availability: "Implementación bajo alcance",
  },
  {
    slug: "hocker-supply",
    title: "Hocker Supply",
    short: "Inventario y pedidos",
    tagline: "Productos, pedidos e inventario con trazabilidad.",
    summary: "Módulo conceptual para organizar catálogo, existencias, solicitudes, pedidos y seguimiento operativo.",
    group: "operations",
    accent: "#eab308",
    badge: "Supply",
    logo: "/apps/hocker-supply/logo.png",
    icon: "/apps/hocker-supply/icon.png",
    cover: "/apps/hocker-supply/cover.png",
    audience: "Operaciones comerciales, almacenes y logística.",
    highlights: ["Inventario", "Pedidos", "Seguimiento"],
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
