import type { Metadata } from "next";
import Link from "next/link";
import { AppExplorer } from "@/components/app-explorer";
import { SectionTitle } from "@/components/section-title";
import { APPS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apps",
  description: "Apps del ecosistema Hocker AGI Technologies con branding propio y función comercial clara.",
};

export default function AppsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Apps</div>
            <h1 className="hero-title">Una app por necesidad. Un módulo por negocio.</h1>
            <p className="hero-text">Cada producto tiene su propia identidad visual y su propia función dentro del ecosistema.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Quiero una demo</Link>
              <Link href="/portfolio" className="button button-secondary button-big">Ver portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Catálogo" title="Submódulos del ecosistema" description="Cada app resuelve algo distinto y puede crecer como pieza independiente." />
          <AppExplorer apps={APPS} />
        </div>
      </section>
    </div>
  );
}
