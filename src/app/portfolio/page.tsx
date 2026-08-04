import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { PORTFOLIO } from "@/lib/site-data";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Casos y capacidades",
  description: "Capacidades de Hocker AGI Technologies en marketing, desarrollo, automatización, experiencia digital y dirección creativa.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const whatsapp = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent("Hola, revisé las capacidades de Hocker AGI y quiero hablar de un proyecto.")}`;

  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">CASOS Y CAPACIDADES</p>
          <h1 className="hero-title">Estrategia, ejecución técnica y dirección creativa.</h1>
          <p className="hero-text">
            Esta sección reúne áreas de trabajo y tipos de proyecto. Las cifras, resultados y evidencias específicas se comparten cuando existe autorización del cliente o documentación verificable.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Solicitar propuesta</Link>
            <a href={whatsapp} className="button button-secondary button-big" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">ÁREAS DE TRABAJO</p>
              <h2>Una visión multidisciplinaria para proyectos conectados.</h2>
            </div>
            <p>Marketing, producto, automatización y contenido se coordinan para que la experiencia pública y la operación interna respondan al mismo objetivo.</p>
          </div>
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container proposal-panel">
          <div>
            <p className="eyebrow">EVIDENCIA BAJO CONTEXTO</p>
            <h2>Solicita ejemplos relacionados con tu industria o necesidad.</h2>
            <p>Durante la conversación podemos mostrar arquitectura, procesos, piezas o demostraciones pertinentes sin divulgar información confidencial.</p>
          </div>
          <Link href="/contacto" className="button button-primary button-big">Solicitar ejemplos</Link>
        </div>
      </section>
    </>
  );
}
