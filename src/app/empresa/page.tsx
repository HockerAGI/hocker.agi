import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Empresa",
  description: "Conoce la visión, el método y la dirección de Hocker AGI Technologies, empresa mexicana de IA, automatización, software y marketing.",
  alternates: { canonical: "/empresa" },
};

const principles = [
  { title: "Claridad antes que complejidad", text: "Traducimos la tecnología a objetivos, decisiones y entregables comprensibles para dirección, marketing y operación." },
  { title: "Automatización con control", text: "Los flujos se diseñan con permisos, validaciones y responsables. La velocidad no debe eliminar la rendición de cuentas." },
  { title: "Diseño conectado al negocio", text: "La identidad visual, la experiencia y el contenido deben facilitar confianza, comprensión y conversión." },
  { title: "Evolución medible", text: "Cada etapa se valida con indicadores y evidencia antes de ampliar alcance, inversión o autonomía." },
] as const;

export default function CompanyPage() {
  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">EMPRESA</p>
          <h1 className="hero-title">Tecnología, creatividad y estrategia bajo una misma dirección.</h1>
          <p className="hero-text">
            Hocker AGI Technologies es una empresa mexicana enfocada en inteligencia artificial aplicada, automatización, desarrollo de plataformas y marketing digital.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Hablar de un proyecto</Link>
            <Link href="/portfolio" className="button button-secondary button-big">Ver capacidades</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container founder-grid company-founder-grid">
          <div>
            <p className="eyebrow">DIRECCIÓN</p>
            <h2>Armando Chávez, fundador y director creativo-tecnológico.</h2>
          </div>
          <div className="founder-copy">
            <p>
              Con más de siete años de experiencia en publicidad, producción digital, tecnología y medios, Armando dirige la estrategia y evolución del ecosistema Hocker. Su enfoque combina visión comercial, diseño, automatización y ejecución técnica.
            </p>
            <p>
              La empresa nace para resolver una brecha común: negocios con muchas herramientas, pero sin una arquitectura que conecte captación, operación, información y decisiones.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">PRINCIPIOS</p>
            <h2>Cómo se toman las decisiones.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.title}>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">FORMA DE TRABAJO</p>
              <h2>Un equipo extendido por especialidad.</h2>
            </div>
            <p>La dirección central define el objetivo y coordina diseño, desarrollo, marketing, automatización, análisis y cumplimiento según el alcance del proyecto.</p>
          </div>
          <div className="company-capability-row">
            <span>Estrategia</span>
            <span>Experiencia y branding</span>
            <span>Desarrollo</span>
            <span>Automatización</span>
            <span>Publicidad</span>
            <span>Analítica</span>
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container proposal-panel">
          <div>
            <p className="eyebrow">CONVERSACIÓN INICIAL</p>
            <h2>Un proyecto serio comienza con un diagnóstico honesto.</h2>
            <p>Revisamos el objetivo, la fricción actual, los datos disponibles y las dependencias antes de recomendar una solución.</p>
          </div>
          <Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link>
        </div>
      </section>
    </>
  );
}
