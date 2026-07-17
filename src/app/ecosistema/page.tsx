import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { AgiGrid } from "@/components/agi-grid";
import { AppExplorer } from "@/components/app-explorer";
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
          <div className="panel">
            <div className="kicker">Ecosistema</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              NOVA al centro. Las apps alrededor. El negocio en movimiento.
            </h1>
            <p className="hero-text" style={{ maxWidth: 900 }}>
              Esta vista explica el ecosistema sin tecnicismos: qué hace cada app, qué AGIs la soportan y cómo todo
              se conecta para vender, automatizar y operar mejor.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Quiero este ecosistema</Link>
              <Link href="/apps" className="button button-secondary">Ver todas las apps</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Mapa vivo" title="Apps con identidad propia" description="Cada producto tiene su función, su branding y su lugar dentro del sistema." />
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
          <div className="panel">
            <div className="kicker">Ruta comercial</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              Puedes contratar una app, una solución completa o una arquitectura completa de marca + IA.
            </h2>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link href="/contacto" className="button button-primary">Cotizar proyecto</Link>
              <Link href="/portfolio" className="button button-secondary">Ver portafolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
