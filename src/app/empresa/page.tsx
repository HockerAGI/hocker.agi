import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Conoce la visión, el método y la dirección de Hocker AGI Technologies: IA aplicada, automatización, producto digital, software y marketing.",
  alternates: { canonical: "/empresa" },
};

const principles = [
  { title: "Evidencia antes que narrativa", text: "Una capacidad se comunica como disponible únicamente cuando existe implementación, configuración o prueba que la respalde." },
  { title: "Automatización con control", text: "Razonar, aprobar, ejecutar y verificar son responsabilidades separadas. La velocidad no elimina la rendición de cuentas." },
  { title: "Diseño conectado al negocio", text: "Experiencia, marca, contenido y tecnología se diseñan alrededor de objetivos, restricciones y métricas reales." },
  { title: "Evolución modular", text: "Los productos crecen por etapas y se separan solo cuando seguridad, regulación, escala u operación lo justifican." },
] as const;

export default function CompanyPage() {
  return <>
    <section className="vnext-page-hero"><div className="container vnext-page-grid"><div><p className="vnext-kicker">EMPRESA</p><h1>Tecnología, creatividad y estrategia bajo una misma dirección.</h1><p className="vnext-lead">Hocker AGI Technologies es la marca que articula un ecosistema de productos digitales, automatización e inteligencia artificial aplicada, construido con una regla central: no confundir visión con capacidad verificada.</p><div className="hero-actions"><Link href="/contacto" className="button button-primary button-big">Hablar de un proyecto</Link><Link href="/portafolio" className="button button-secondary button-big">Ver portafolio</Link></div></div><aside className="vnext-state-panel"><span>OPERATING PRINCIPLE</span><strong>Build → Verify → Scale</strong><p>La evolución se gobierna por evidencia, riesgo y capacidad real de operación.</p></aside></div></section>
    <section className="section"><div className="container vnext-founder-grid"><div><p className="vnext-kicker">DIRECCIÓN</p><h2>Armando Chávez, fundador.</h2></div><div><p>Su perfil conecta estrategia digital, producción audiovisual, marketing, producto e IA aplicada. La dirección del ecosistema busca convertir necesidades de negocio en sistemas claros, medibles y capaces de evolucionar.</p><Link href="/portafolio" className="text-link">Abrir perfil profesional <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="section vnext-surface-section"><div className="container"><div className="vnext-section-heading"><p className="vnext-kicker">PRINCIPIOS</p><h2>Cómo se toman las decisiones.</h2></div><div className="principle-grid">{principles.map((principle) => <article key={principle.title}><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div></div></section>
    <section className="section"><div className="container vnext-two-column"><div className="vnext-section-heading"><p className="vnext-kicker">FORMA DE TRABAJO</p><h2>Una dirección, múltiples especialidades.</h2></div><div className="company-capability-row"><span>Estrategia</span><span>Producto</span><span>Experiencia y branding</span><span>Desarrollo</span><span>Automatización</span><span>Publicidad</span><span>Analítica</span><span>Gobernanza de IA</span></div></div></section>
    <section className="section vnext-surface-section"><div className="container proposal-panel"><div><p className="vnext-kicker">CONVERSACIÓN INICIAL</p><h2>Un proyecto serio comienza con un diagnóstico verificable.</h2><p>Revisamos objetivo, fricción, datos, riesgos y dependencias antes de recomendar una solución.</p></div><Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link></div></section>
  </>;
}
