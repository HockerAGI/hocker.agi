import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_SERVICES, PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Soluciones de IA, automatización, software y marketing",
  description: "Servicios de captación, automatización, software y estrategia de IA diseñados para mejorar conversión, operación y medición.",
  alternates: { canonical: "/soluciones" },
};

const funnel = [
  { stage: "Awareness", title: "Atraer atención relevante", text: "Mensaje, branding, contenido, SEO técnico y campañas para llegar a la audiencia correcta." },
  { stage: "Consideración", title: "Convertir interés en intención", text: "Landings, casos, demostraciones y automatizaciones que responden dudas y califican oportunidades." },
  { stage: "Conversión", title: "Reducir fricción para cerrar", text: "Formularios, WhatsApp, CRM, seguimiento y analítica conectados a una ruta comercial clara." },
  { stage: "Fidelización", title: "Aprender y mejorar", text: "Paneles, reportes, soporte y automatizaciones para sostener la relación y detectar nuevas oportunidades." },
] as const;

export default function SolutionsPage() {
  const whatsapp = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero conocer las soluciones de Hocker AGI para mi empresa.")}`;

  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">SOLUCIONES</p>
          <h1 className="hero-title">Tecnología alineada con el funnel, la operación y las ventas.</h1>
          <p className="hero-text">
            No comenzamos por una herramienta. Comenzamos por el problema, la etapa del cliente y el indicador que debe mejorar.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Solicitar propuesta</Link>
            <a href={whatsapp} className="button button-secondary button-big" target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">CAPACIDADES</p>
              <h2>Qué podemos construir contigo.</h2>
            </div>
            <p>El alcance final depende de objetivos, madurez del proceso, integraciones, datos disponibles y presupuesto.</p>
          </div>
          <div className="service-grid">
            {PUBLIC_SERVICES.map((service, index) => (
              <article key={service.title} className="service-card">
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <strong>{service.outcome}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FUNNEL COMPLETO</p>
            <h2>Cada pieza debe mover al cliente hacia la siguiente acción.</h2>
          </div>
          <div className="funnel-grid">
            {funnel.map((item) => (
              <article key={item.stage}>
                <span>{item.stage}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container proposal-panel">
          <div>
            <p className="eyebrow">PROPUESTA A MEDIDA</p>
            <h2>Define el objetivo. Nosotros diseñamos la ruta.</h2>
            <p>La propuesta incluye alcance, entregables, dependencias, tiempos, indicadores y condiciones de implementación.</p>
          </div>
          <Link href="/contacto" className="button button-primary button-big">Iniciar diagnóstico</Link>
        </div>
      </section>
    </>
  );
}
