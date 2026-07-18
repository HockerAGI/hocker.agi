import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { SectionTitle } from "@/components/section-title";
import { PORTFOLIO, PROFILE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Armando Chávez: marketing, desarrollo, automatización y creatividad.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Portfolio</div>
            <h1 className="hero-title">{PROFILE.name}</h1>
            <p className="hero-text">{PROFILE.title}</p>
            <p className="hero-text">{PROFILE.summary}</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Postular / contratar</Link>
              <a href="https://wa.me/526632091143" className="button button-secondary button-big" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="mailto:hocker.agi@gmail.com" className="button button-secondary button-big">Email directo</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Perfil" title="Marketing + Developer + Creative" description="Hecho para vacantes y para leads: resume quién eres y qué resuelves." />
          <div className="grid-3 section-grid">
            {PROFILE.bullets.map((bullet) => (
              <article key={bullet} className="card card-pad service-card">
                <h3>{bullet}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Casos" title="Pruebas reales de capacidad" description="Marketing, desarrollo, automatización y creatividad en una sola superficie." />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>
    </div>
  );
}
