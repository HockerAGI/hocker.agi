import type { Metadata } from "next";
import Link from "next/link";
import { PhaseTimeline } from "@/components/phase-timeline";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Fases",
  description: "Las 15 fases oficiales para diseñar, construir y lanzar la nueva plataforma Hocker AGI Technologies.",
};

export default function PhasesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Fases</div>
            <h1 className="hero-title">15 fases para lanzar la plataforma oficial.</h1>
            <p className="hero-text">
              De la base visual al despliegue, con una sola lógica de marca, producto y conversión.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Solicitar implementación</Link>
              <Link href="/ecosistema" className="button button-secondary button-big">Ver ecosistema</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Documento maestro"
            title="Cada fase tiene una misión concreta"
            description="No es relleno: es el mapa para que el sitio público, el portfolio y la operación privada avancen en orden."
          />
          <PhaseTimeline />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta">
            <div className="kicker">Implementación</div>
            <h2>Si una fase no mejora negocio, velocidad o claridad, no entra.</h2>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Arrancar proyecto</Link>
              <Link href="/portfolio" className="button button-secondary button-big">Ver portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
