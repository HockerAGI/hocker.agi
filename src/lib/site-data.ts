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
  tagline: "IA, software y marketing que venden.",
  description:
    "Sitio oficial comercial de Hocker AGI Technologies: apps, AGIs, automatización, portafolio y soluciones digitales premium.",
  url: "https://hockeragi.vercel.app",
};

export const CONTACT = {
  email: "hocker.agi@gmail.com",
  whatsapp: "https://wa.me/526632091143",
  whatsappPhone: "6632091143",
  vercel: "https://hockeragi.vercel.app",
};

export const PROFILE = {
  name: "Armando Chávez",
  title: "AI Automation Engineer | Performance Marketing Strategist | Full Stack Developer | Product & Creative Lead",
  summary:
    "Fundador de Hocker AGI Technologies. Combina marketing, automatización, desarrollo y creatividad para construir sistemas que venden, operan y escalan.",
  bullets: [
    "Ads, funnels y performance real",
    "Apps, paneles y automatización full stack",
    "Branding, contenido y dirección creativa",
  ],
};

export const STATS = [
  { value: "10", label: "Apps y módulos", detail: "Productos conectados al ecosistema Hocker." },
  { value: "16", label: "AGIs especializadas", detail: "Especialistas reales por función y con rol claro." },
  { value: "6", label: "Servicios comerciales", detail: "Rutas que venden estrategia, desarrollo y automatización." },
  { value: "6", label: "Casos en portfolio", detail: "Pruebas reales de marketing, código y creatividad." },
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
    logo: "/apps/hocker-one/logo.png",
    icon: "/apps/hocker-one/icon.png",
    cover: "/apps/hocker-one/cover.png",
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
    logo: "/apps/hocker-ads/logo.png",
    icon: "/apps/hocker-ads/icon.png",
    cover: "/apps/hocker-ads/cover.png",
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
    logo: "/apps/hocker-hub/logo.png",
    icon: "/apps/hocker-hub/icon.png",
    cover: "/apps/hocker-hub/cover.png",
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
    logo: "/apps/hocker-drive-cloud/logo.png",
    icon: "/apps/hocker-drive-cloud/icon.png",
    cover: "/apps/hocker-drive-cloud/cover.png",
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
    logo: "/apps/hocker-wallet/logo.png",
    icon: "/apps/hocker-wallet/icon.png",
    cover: "/apps/hocker-wallet/cover.png",
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
    logo: "/apps/chido-casino/logo.png",
    icon: "/apps/chido-casino/icon.png",
    cover: "/apps/chido-casino/cover.png",
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
    logo: "/apps/trackhok/logo.png",
    icon: "/apps/trackhok/icon.png",
    cover: "/apps/trackhok/cover.png",
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
    logo: "/apps/nexpa/logo.png",
    icon: "/apps/nexpa/icon.png",
    cover: "/apps/nexpa/cover.png",
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
    logo: "/apps/hocker-up/logo.png",
    icon: "/apps/hocker-up/icon.png",
    cover: "/apps/hocker-up/cover.png",
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
    logo: "/apps/hocker-supply/logo.png",
    icon: "/apps/hocker-supply/icon.png",
    cover: "/apps/hocker-supply/cover.png",
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
  { slug: "revia", name: "REVIA", role: "Arquitecto comercial", purpose: "Motor comercial autónomo para ingresos, respuesta y cierre.", category: "strategy", accent: "#60a5fa", human: "El motor de ventas del ecosistema.", worksWith: ["NOVA", "Numia", "Hostia"] },
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


export type PhaseItem = {
  number: number;
  title: string;
  summary: string;
  deliverable: string;
};

export const PHASES: PhaseItem[] = [
  {
    number: 1,
    title: 'Fundamentos del sistema',
    summary: 'Lenguaje visual, filosofía de marca y reglas base de la experiencia.',
    deliverable: 'Manifiesto visual, mapa de información y tokens iniciales.',
  },
  {
    number: 2,
    title: 'Master Design System',
    summary: 'Componentes reutilizables para que todo se sienta de la misma familia.',
    deliverable: 'Buttons, cards, nav, forms, states y patrones compartidos.',
  },
  {
    number: 3,
    title: 'Frontend arquitectura',
    summary: 'App Router, Server/Client separation y rutas por dominio funcional.',
    deliverable: 'Layouts persistentes, navegación adaptativa y rutas profundas.',
  },
  {
    number: 4,
    title: 'Motion, accesibilidad, SEO y performance',
    summary: 'La capa premium: velocidad, contraste, jerarquía y descubribilidad.',
    deliverable: 'Core Web Vitals, metadata, schema y navegación accesible.',
  },
  {
    number: 5,
    title: 'PWA, APK Android, WebAPK y TWA',
    summary: 'Una sola base para web instalable, experiencia nativa y deep linking.',
    deliverable: 'Manifest, offline parcial, instalación y experiencia móvil nativa.',
  },
  {
    number: 6,
    title: 'Deploy, QA, observabilidad y gobernanza',
    summary: 'La plataforma debe operar con CI/CD, métricas y rollback claro.',
    deliverable: 'GitHub Actions, Vercel, Supabase, logs y plan de reversa.',
  },
  {
    number: 7,
    title: 'Home comercial cinematográfica',
    summary: 'Hero corto, capítulos claros y una transformación entendible.',
    deliverable: 'Portada pública que vende el ecosistema sin saturación.',
  },
  {
    number: 8,
    title: 'Soluciones',
    summary: 'Servicios agrupados como soluciones reales con CTA y propósito.',
    deliverable: 'Bloques comerciales para marketing, software, AGI e infraestructura.',
  },
  {
    number: 9,
    title: 'Apps con landing propia',
    summary: 'Cada producto se presenta como módulo independiente con branding propio.',
    deliverable: 'Páginas por app, evidencia visual, beneficios y conversión.',
  },
  {
    number: 10,
    title: 'AGIs en organigrama vivo',
    summary: 'NOVA al centro y especialistas por función en una red entendible.',
    deliverable: 'Vista de AGIs con rol, relación y aplicación asociada.',
  },
  {
    number: 11,
    title: 'Mapa del ecosistema',
    summary: 'La plataforma completa se ve como un sistema operativo empresarial.',
    deliverable: 'Visual de niveles: núcleo, apps, AGIs, portfolio, empresa y live.',
  },
  {
    number: 12,
    title: 'Portfolio documental',
    summary: 'Tu perfil como marketing + developer + creative, listo para vacantes y leads.',
    deliverable: 'Casos, trayectoria, stack, resultados y acceso a CV/GitHub/LinkedIn.',
  },
  {
    number: 13,
    title: 'Empresa y doctrina',
    summary: 'Valores, visión, modelo de trabajo, ética y explicación de NOVA.',
    deliverable: 'Página institucional con lenguaje claro y premium.',
  },
  {
    number: 14,
    title: 'Contacto y REVIA',
    summary: 'Un asistente comercial para convertir interés en conversación y venta.',
    deliverable: 'Diagnóstico guiado, CRM, WhatsApp y correo conectados.',
  },
  {
    number: 15,
    title: 'Live, footer y automatización',
    summary: 'Panel público, navegación final, legal y automatizaciones de cierre.',
    deliverable: 'Status visible, enlaces clave y rutas de seguimiento comercial.',
  },
] as const;
