import type { Metadata } from "next";
import Link from "next/link";
import { AgiGrid } from "@/components/agi-grid";
import { AppExplorer } from "@/components/app-explorer";
import { SectionTitle } from "@/components/section-title";
import { APPS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ecosistema",
  description: "Mapa comercial y operativo del ecosistema Hocker AGI Technologies.",
};

export default function EcosystemPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Ecosistema</div>
            <h1 className="hero-title">NOVA al centro. Las apps alrededor. El negocio en movimiento.</h1>
            <p className="hero-text">Una vista simple para entender qué hace cada app, qué AGIs la soportan y cómo todo se conecta.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Quiero este ecosistema</Link>
              <Link href="/apps" className="button button-secondary button-big">Ver todas las apps</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Mapa vivo" title="Apps con identidad propia" description="Cada producto tiene su lugar, su branding y su función." />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="AGIs" title="Especialistas por función" description="NOVA coordina y las AGIs hacen el trabajo especializado por área." />
          <AgiGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta">
            <div className="kicker">Ruta comercial</div>
            <h2>Puedes contratar una app, una solución completa o una arquitectura de marca + IA.</h2>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Cotizar proyecto</Link>
              <Link href="/portfolio" className="button button-secondary button-big">Ver portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
