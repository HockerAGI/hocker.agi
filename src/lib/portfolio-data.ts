export const FOUNDER_PROFILE = {
  name: "Armando Chávez",
  alias: "Hocker",
  headline: "Estrategia digital · IA aplicada · Producto · Producción audiovisual",
  summary: "Perfil multidisciplinario enfocado en convertir estrategia, creatividad y tecnología en productos, campañas y sistemas digitales ejecutables.",
  location: "México",
  email: "contacto.hocker@gmail.com",
  socials: { linkedin: null, github: null, behance: null, instagram: null, youtube: null, vimeo: null } as Record<string, string | null>,
} as const;

export const PROFESSIONAL_EXPERIENCE = [
  { title: "Hocker AGI Technologies", role: "Fundador · Product & AI Strategy", period: "Proyecto en desarrollo activo", summary: "Dirección de producto, arquitectura funcional, identidad, marketing, automatización y coordinación de un ecosistema modular de software e IA." },
  { title: "Único Uniformes", role: "Social Media Manager · Asesor comercial", period: "Experiencia profesional", summary: "Estrategia de contenido, presencia digital, comunicación de marca y acompañamiento comercial para conectar marketing con oportunidades de venta." },
  { title: "Producción digital y audiovisual", role: "Edición · Diseño · Narrativa visual", period: "Formación y proyectos", summary: "Trabajo multidisciplinario en edición, producción, motion, narrativa y adaptación de contenidos a objetivos y plataformas digitales." },
] as const;

export const SELECTED_WORK = [
  { id: "hocker-ecosystem", title: "Ecosistema HOCKER", kicker: "Producto · IA · Arquitectura", challenge: "Convertir múltiples ideas de producto y agentes especializados en una arquitectura coherente, gobernable y escalable.", contribution: "Dirección de producto, definición funcional, experiencia, branding, prioridades, arquitectura de información y criterios de negocio.", evidence: "Repositorios, documentación operativa, interfaces y productos en diferentes etapas de implementación." },
  { id: "hocker-one", title: "Hocker ONE", kicker: "Control plane · Gobernanza de IA", challenge: "Centralizar visibilidad, aprobaciones, proyectos y coordinación de capacidades de IA sin convertir razonamiento en ejecución irrestricta.", contribution: "Visión de producto, lógica de Owner Gate, estructura operativa, UX y evolución del sistema de control.", evidence: "Control plane implementado y en evolución activa con gates técnicos y de seguridad explícitos." },
  { id: "hocker-ads", title: "Hocker Ads", kicker: "Growth · Marketing · Producto", challenge: "Diseñar una plataforma que conecte servicios de marketing, creatividad, ventas y tecnología sin depender de una sola plataforma publicitaria.", contribution: "Arquitectura comercial, catálogo de servicios, experiencia, estrategia de funnel, agentes especializados y modelo de crecimiento.", evidence: "Fundación de producto y contratos locales en desarrollo; capacidades remotas se habilitan únicamente al superar sus gates." },
  { id: "unico-uniformes", title: "Marketing y operación comercial", kicker: "Social Media · Ventas", challenge: "Conectar comunicación digital y necesidades comerciales en una operación real.", contribution: "Planeación de contenido, comunicación de marca, atención y apoyo al proceso comercial.", evidence: "Experiencia profesional documentada; métricas específicas se comparten solo cuando existe evidencia y autorización." },
] as const;

export const SKILL_GROUPS = [
  { title: "Estrategia y growth", items: ["Funnel", "Paid media", "CRO", "Social Media", "Investigación", "Go-to-market"] },
  { title: "Producto y tecnología", items: ["Product thinking", "IA aplicada", "Automatización", "Next.js", "Supabase", "APIs", "UX/UI"] },
  { title: "Creatividad", items: ["Dirección creativa", "Branding", "Edición", "Motion", "Storytelling", "Contenido"] },
  { title: "Operación", items: ["Documentación", "QA", "Analítica", "Procesos", "Ventas", "Coordinación multidisciplinaria"] },
] as const;
