import type { Metadata } from "next";
import Link from "next/link";
import { AgiGrid } from "@/components/agi-grid";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "AGIs",
  description: "NOVA y las AGIs del ecosistema Hocker, explicadas de forma simple.",
};

export default function AgisPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">AGIs</div>
            <h1 className="hero-title">
              NOVA dirige. Las demás AGIs hacen el trabajo fino.
            </h1>
            <p className="hero-text">Cada una resuelve una función clara: estrategia, marketing, seguridad, legal, finanzas o infraestructura.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Hablar del ecosistema</Link>
              <Link href="/apps" className="button button-secondary button-big">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Mapa real" title="16 AGIs con función concreta" description="No son nombres decorativos; son piezas del sistema con rol y trabajo definidos." />
          <AgiGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta">
            <div className="kicker">Valor</div>
            <h2>Más orden, más claridad, más velocidad para vender y operar.</h2>
            <div className="hero-actions">
              <Link href="/ecosistema" className="button button-primary button-big">Ver ecosistema</Link>
              <Link href="/soluciones" className="button button-secondary button-big">Ver soluciones</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
