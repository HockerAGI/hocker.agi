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
  tagline: "IA, marketing y software que venden, automatizan y escalan.",
  description:
    "Hocker AGI Technologies: sitio oficial comercial con apps, AGIs, automatización, portafolio y soluciones digitales premium.",
  url: "https://hockeragi.vercel.app",
};

export const SOCIALS = [
  { label: "Email", href: "mailto:hocker.agi@gmail.com" },
  { label: "WhatsApp", href: "https://wa.me/526632091143" },
  { label: "Sitio oficial", href: "https://hockeragi.vercel.app" },
];

export const STATS = [
  { value: "16", label: "AGIs reales", detail: "Cada una con un rol claro y una función concreta." },
  { value: "10", label: "Apps y módulos", detail: "Productos listos para vender, operar y escalar." },
  { value: "6", label: "Servicios", detail: "Rutas comerciales directas para clientes potenciales." },
  { value: "1", label: "Portfolio central", detail: "Tu perfil combinado de marketing, desarrollo y creatividad." },
] as const;

export const APPS: AppItem[] = [
  {
    slug: "hocker-one",
    title: "Hocker ONE",
    short: "Command OS",
    tagline: "Centro de control del ecosistema.",
    summary: "Panel maestro para ver, organizar y ejecutar el ecosistema completo sin perder claridad.",
    group: "control",
    accent: "#60a5fa",
    badge: "Control",
    logo: "/ecosystem/apps/hocker-one/logo.png",
    icon: "/ecosystem/apps/hocker-one/icon.png",
    cover: "/ecosystem/apps/hocker-one/cover.png",
    audience: "Operación, dirección y toma de decisiones.",
    highlights: ["Estado vivo", "Aprobaciones", "NOVA integrado"],
    agis: ["NOVA", "Syntia", "Vertx"],
    status: "live",
  },
  {
    slug: "hocker-ads",
    title: "Hocker Ads",
    short: "Publicidad IA",
    tagline: "Campañas y creatividad que convierten.",
    summary: "Publicidad, contenidos y automatización para vender más con menos fricción.",
    group: "marketing",
    accent: "#22d3ee",
    badge: "Ads",
    logo: "/ecosystem/apps/hocker-ads/logo.png",
    icon: "/ecosystem/apps/hocker-ads/icon.png",
    cover: "/ecosystem/apps/hocker-ads/cover.png",
    audience: "Negocios que necesitan leads y ventas.",
    highlights: ["Meta Ads", "Contenido", "Funnels"],
    agis: ["Nova Ads", "Candy Ads", "Pro IA"],
    status: "building",
  },
  {
    slug: "hocker-hub",
    title: "Hocker Hub",
    short: "CRM inteligente",
    tagline: "Ventas, seguimiento y soporte en un solo lugar.",
    summary: "Clientes, leads, pipeline, seguimiento y operación comercial con más orden.",
    group: "crm",
    accent: "#a78bfa",
    badge: "CRM",
    logo: "/ecosystem/apps/hocker-hub/logo.png",
    icon: "/ecosystem/apps/hocker-hub/icon.png",
    cover: "/ecosystem/apps/hocker-hub/cover.png",
    audience: "Equipos comerciales y de atención.",
    highlights: ["Leads", "CRM", "Seguimiento"],
    agis: ["NOVA", "Revia", "Numia"],
    status: "building",
  },
  {
    slug: "hocker-drive-cloud",
    title: "Hocker Drive Cloud",
    short: "Memoria y nube",
    tagline: "Archivos, evidencia y respaldo con contexto.",
    summary: "Nube privada para guardar activos, memoria, evidencia y trabajo del ecosistema.",
    group: "cloud",
    accent: "#38bdf8",
    badge: "Cloud",
    logo: "/ecosystem/apps/hocker-drive-cloud/logo.png",
    icon: "/ecosystem/apps/hocker-drive-cloud/icon.png",
    cover: "/ecosystem/apps/hocker-drive-cloud/cover.png",
    audience: "Operación, documentación y almacenamiento seguro.",
    highlights: ["Respaldo", "Búsqueda", "Sincronía"],
    agis: ["Syntia", "Hostia"],
    status: "building",
  },
  {
    slug: "hocker-wallet",
    title: "Hocker Wallet",
    short: "Finanzas y pagos",
    tagline: "Control financiero con orden y trazabilidad.",
    summary: "Capa financiera para pagos, presupuestos, facturación y control operativo.",
    group: "wallet",
    accent: "#fbbf24",
    badge: "Wallet",
    logo: "/ecosystem/apps/hocker-wallet/logo.png",
    icon: "/ecosystem/apps/hocker-wallet/icon.png",
    cover: "/ecosystem/apps/hocker-wallet/cover.png",
    audience: "Operación financiera y compliance.",
    highlights: ["Pagos", "Presupuestos", "Facturación"],
    agis: ["Numia", "Jurix", "Vertx"],
    status: "blocked",
  },
  {
    slug: "chido-casino",
    title: "Chido Casino",
    short: "Gaming responsable",
    tagline: "Entretenimiento estratégico con control.",
    summary: "Vertical de gaming con reglas claras, experiencia premium y supervisión ética.",
    group: "entertainment",
    accent: "#f97316",
    badge: "Chido",
    logo: "/ecosystem/apps/chido-casino/logo.png",
    icon: "/ecosystem/apps/chido-casino/icon.png",
    cover: "/ecosystem/apps/chido-casino/cover.png",
    audience: "Usuarios y operación gaming.",
    highlights: ["Responsable", "Métricas", "Supervisión"],
    agis: ["Curvewind", "Chido Wins", "Chido Gerente"],
    status: "protected",
  },
  {
    slug: "trackhok",
    title: "Trackhok",
    short: "Monitoreo",
    tagline: "Rastreo, alertas y lectura operativa.",
    summary: "Monitoreo autorizado para nodos, alertas, rutas y estado del sistema.",
    group: "operations",
    accent: "#34d399",
    badge: "Ops",
    logo: "/ecosystem/apps/trackhok/logo.png",
    icon: "/ecosystem/apps/trackhok/icon.png",
    cover: "/ecosystem/apps/trackhok/cover.png",
    audience: "Logística, telemetría y seguimiento.",
    highlights: ["Rutas", "Alertas", "Nodos"],
    agis: ["Trackhok", "Vertx"],
    status: "protected",
  },
  {
    slug: "nexpa-app",
    title: "NEXPA",
    short: "Protección",
    tagline: "Privacidad y bienestar digital.",
    summary: "Seguridad ética para supervisión, control y prevención con límites claros.",
    group: "security",
    accent: "#fb7185",
    badge: "Security",
    logo: "/ecosystem/apps/nexpa-app/logo.png",
    icon: "/ecosystem/apps/nexpa-app/icon.png",
    cover: "/ecosystem/apps/nexpa-app/cover.png",
    audience: "Seguridad familiar y operativa.",
    highlights: ["Consentimiento", "Protección", "Alertas"],
    agis: ["NEXPA", "Vertx", "Jurix"],
    status: "protected",
  },
  {
    slug: "hocker-up",
    title: "Hocker Up",
    short: "Learning y comunidad",
    tagline: "Aprender, compartir y crecer.",
    summary: "Espacio de red social, eLearning y mentoría con valor de comunidad.",
    group: "operations",
    accent: "#06b6d4",
    badge: "Up",
    logo: "/ecosystem/apps/hocker-up/logo.png",
    icon: "/ecosystem/apps/hocker-up/icon.png",
    cover: "/ecosystem/apps/hocker-up/cover.png",
    audience: "Creadores, alumnos y marcas.",
    highlights: ["Cursos", "Mentoría", "Comunidad"],
    agis: ["Syntia", "Candy Ads", "Revia"],
    status: "building",
  },
  {
    slug: "hocker-supply",
    title: "Hocker Supply",
    short: "Operación",
    tagline: "Pedidos, productos y trazabilidad.",
    summary: "Módulo de supply y control para inventario, productos y pedidos.",
    group: "operations",
    accent: "#eab308",
    badge: "Supply",
    logo: "/ecosystem/apps/hocker-supply/logo.png",
    icon: "/ecosystem/apps/hocker-supply/icon.png",
    cover: "/ecosystem/apps/hocker-supply/cover.png",
    audience: "Operación y logística comercial.",
    highlights: ["Inventario", "Pedidos", "Seguimiento"],
    agis: ["Hostia", "Numia", "Vertx"],
    status: "building",
  },
];

export const AGIS: AgiItem[] = [
  { slug: "nova", name: "NOVA", role: "Núcleo estratégico", purpose: "Coordina el ecosistema y decide prioridades.", category: "central", accent: "#60a5fa", human: "La mente que ordena todo.", worksWith: ["Syntia", "Vertx", "Jurix"] },
  { slug: "syntia", name: "Syntia", role: "Memoria espejo", purpose: "Sincroniza contexto, aprendizaje y continuidad.", category: "memory", accent: "#7dd3fc", human: "La memoria viva del sistema.", worksWith: ["NOVA", "Hostia", "Numia"] },
  { slug: "vertx", name: "Vertx", role: "Seguridad y auditoría", purpose: "Protege, firma, revisa y bloquea riesgos.", category: "security", accent: "#22c55e", human: "El escudo del ecosistema.", worksWith: ["Hostia", "Jurix", "Numia"] },
  { slug: "jurix", name: "Jurix", role: "Legal y compliance", purpose: "Ordena reglas, contratos, privacidad y cumplimiento.", category: "compliance", accent: "#f59e0b", human: "La capa legal de confianza.", worksWith: ["Numia", "NEXPA", "Chido Gerente"] },
  { slug: "curvewind", name: "Curvewind", role: "Estrategia y predicción", purpose: "Lee escenarios, tendencias y riesgo.", category: "strategy", accent: "#a78bfa", human: "El radar de decisiones.", worksWith: ["Nova Ads", "Numia", "Chido Wins"] },
  { slug: "numia", name: "Numia", role: "Finanzas y ROI", purpose: "Controla costos, ROI y rentabilidad.", category: "finance", accent: "#fbbf24", human: "La mente financiera.", worksWith: ["Jurix", "Hostia", "Revia"] },
  { slug: "nova-ads", name: "Nova Ads", role: "Publicidad IA", purpose: "Planifica campañas y optimiza anuncios.", category: "marketing", accent: "#22d3ee", human: "La operadora de medios.", worksWith: ["Candy Ads", "Pro IA", "Curvewind"] },
  { slug: "candy-ads", name: "Candy Ads", role: "Creatividad visual", purpose: "Diseña branding, piezas y dirección visual.", category: "creative", accent: "#fb7185", human: "La fábrica de impacto visual.", worksWith: ["Nova Ads", "Pro IA", "Syntia"] },
  { slug: "pro-ia", name: "Pro IA", role: "Video y motion", purpose: "Produce reels, video, audio y motion.", category: "creative", accent: "#c084fc", human: "El estudio audiovisual del sistema.", worksWith: ["Candy Ads", "Nova Ads", "Vertx"] },
  { slug: "hostia", name: "Hostia", role: "Infraestructura", purpose: "Administra dominios, APIs, deploys y hosting.", category: "infra", accent: "#38bdf8", human: "La infraestructura que sostiene todo.", worksWith: ["Vertx", "Syntia", "Trackhok"] },
  { slug: "trackhok", name: "Trackhok", role: "Monitoreo autorizado", purpose: "Lee señales, alertas y estado operativo.", category: "ops", accent: "#34d399", human: "Los ojos del ecosistema.", worksWith: ["Hostia", "Vertx", "Numia"] },
  { slug: "nexpa", name: "NEXPA", role: "Protección y privacidad", purpose: "Cuida bienestar digital y límites éticos.", category: "security", accent: "#fb7185", human: "La guardiana de privacidad.", worksWith: ["Vertx", "Jurix", "Trackhok"] },
  { slug: "chido-wins", name: "Chido Wins", role: "Juego y predicción", purpose: "Predice y optimiza el vertical gaming.", category: "entertainment", accent: "#f97316", human: "La mente de estrategia lúdica.", worksWith: ["Curvewind", "Numia", "Chido Gerente"] },
  { slug: "chido-gerente", name: "Chido Gerente", role: "Operación gaming", purpose: "Administra bonos, usuarios, métricas y flujo.", category: "entertainment", accent: "#facc15", human: "La operación del vertical Chido.", worksWith: ["Chido Wins", "Numia", "Jurix"] },
  { slug: "shadows", name: "Shadows", role: "Microtareas efímeras", purpose: "Crea módulos temporales para pruebas o tareas cortas.", category: "ops", accent: "#94a3b8", human: "La capa invisible de soporte.", worksWith: ["NOVA", "Syntia", "Vertx"] },
  { slug: "revia", name: "Revia", role: "Arquitecto comercial", purpose: "Automatiza ingresos, respuesta y cierre comercial.", category: "strategy", accent: "#60a5fa", human: "El motor de ventas del ecosistema.", worksWith: ["NOVA", "Numia", "Hostia"] },
];

export const SERVICES: ServiceItem[] = [
  { slug: "webs-landings", title: "Webs y landings", summary: "Páginas rápidas, claras y pensadas para convertir.", outcome: "Más leads y mejor narrativa.", audience: "Marcas que necesitan vender rápido.", group: "build" },
  { slug: "ads-content", title: "Ads y contenido", summary: "Campañas, creativos y hooks con enfoque comercial.", outcome: "Mayor alcance con mensaje claro.", audience: "Negocios que quieren atraer demanda.", group: "growth" },
  { slug: "automation", title: "Automatización", summary: "APIs, CRMs, flujos y paneles conectados.", outcome: "Menos trabajo manual y más control.", audience: "Operaciones que quieren orden.", group: "automation" },
  { slug: "apps-panels", title: "Apps y paneles", summary: "Sistemas para operar, seguir y decidir mejor.", outcome: "Visión real del negocio.", audience: "Equipos que necesitan una base sólida.", group: "build" },
  { slug: "ecosystems", title: "Ecosistemas", summary: "Apps + AGIs + branding bajo una sola arquitectura.", outcome: "Todo conectado y entendible.", audience: "Marcas con visión de plataforma.", group: "strategy" },
  { slug: "portfolio", title: "Portfolio y consultoría", summary: "Tu historia de marketing, desarrollo y creatividad.", outcome: "Confianza y cierre más rápido.", audience: "Clientes que quieren ver evidencia.", group: "strategy" },
];

export const PORTFOLIO: PortfolioItem[] = [
  { slug: "performance-marketing", title: "Performance Marketing", category: "marketing", role: "Meta Ads, TikTok, LinkedIn, funnels y CRO.", summary: "Estrategia de adquisición con foco en leads y conversión.", stack: ["Meta Ads", "TikTok Ads", "CRO"], result: "Narrativa comercial clara y ejecutable.", year: "2026" },
  { slug: "full-stack-panels", title: "Paneles y apps", category: "developer", role: "Next.js, React, Node y Supabase.", summary: "Interfaces operativas y sistemas conectados para negocio.", stack: ["Next.js", "React", "Supabase"], result: "Producto listo para operar y escalar.", year: "2026" },
  { slug: "automation-flows", title: "Automatización IA", category: "developer", role: "APIs, webhooks, CRMs y agentes.", summary: "Procesos automáticos para ahorrar tiempo y reducir error.", stack: ["APIs", "Webhooks", "IA"], result: "Operación más rápida y ordenada.", year: "2026" },
  { slug: "brand-systems", title: "Brand systems", category: "creative", role: "Branding, piezas y dirección visual.", summary: "Identidad comercial pensada para vender sin perder estilo.", stack: ["Branding", "Copy", "Motion"], result: "Marca más nítida y memorable.", year: "2026" },
  { slug: "audiovisual", title: "Audiovisual", category: "creative", role: "Edición, narrativa y ritmo.", summary: "Contenido con enfoque de atención, claridad y acabado pro.", stack: ["Premiere", "Motion", "Story"], result: "Piezas más fuertes para redes y ventas.", year: "2025" },
  { slug: "ecosystem-architecture", title: "Arquitectura de ecosistema", category: "developer", role: "Apps, AGIs y portales bajo una sola lógica.", summary: "Diseño de un sistema conectable y comercialmente entendible.", stack: ["Arquitectura", "Docs", "Ecosistema"], result: "Base real para Hocker AGI.", year: "2026" },
];

export const FAQS = [
  { q: "¿Qué es NOVA?", a: "La mente central que coordina el ecosistema y organiza el trabajo entre AGIs y apps." },
  { q: "¿Qué hacen las AGIs?", a: "Cada una resuelve una función concreta: creatividad, finanzas, legal, infraestructura, seguridad o estrategia." },
  { q: "¿Venden solo software?", a: "No. Venden apps, automatización, marketing, creatividad y sistemas completos." },
  { q: "¿Se puede entrar al panel?", a: "Sí, pero el acceso privado vive separado del sitio público." },
  { q: "¿Trabajan por módulos?", a: "Sí. Cada solución puede contratarse por separado o como ecosistema completo." },
];
