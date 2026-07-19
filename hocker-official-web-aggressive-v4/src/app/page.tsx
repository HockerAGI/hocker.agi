import type { Metadata } from "next";
import Link from "next/link";
import { AppExplorer } from "@/components/app-explorer";
import { AgiGrid } from "@/components/agi-grid";
import { FaqList } from "@/components/faq-list";
import { HeroCards } from "@/components/hero-cards";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { SectionTitle } from "@/components/section-title";
import { StatusTiles } from "@/components/status-tiles";
import { APPS, PORTFOLIO, SERVICES, SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Inicio",
  description: SITE.tagline,
};

export default function HomePage() {
  return (
    <div className="hko-home">
      <section className="hero page-hero hko-hero">
        <div className="container hero-grid hero-grid-home">
          <div className="hero-copy hko-hero-copy">
            <div className="kicker">Sitio oficial · ecosistema comercial</div>
            <h1 className="hero-title hko-hero-title">
              <span className="gradient">Construyo sistemas que venden.</span>
            </h1>
            <p className="hero-text hko-hero-text">
              IA, marketing y software para convertir más rápido, automatizar mejor y escalar con control.
            </p>
            <div className="hero-actions hko-hero-actions">
              <Link href="/portfolio" className="button button-primary button-big">Ver portfolio</Link>
              <Link href="/contacto" className="button button-secondary button-big">Cotizar</Link>
              <a href="https://wa.me/526632091143" className="button button-secondary button-big" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <div className="tag-row hko-hero-tags">
              <span className="tag"><strong>Marketing</strong> · Ads y funnels</span>
              <span className="tag"><strong>Developer</strong> · Apps y APIs</span>
              <span className="tag"><strong>AGIs</strong> · NOVA y especialistas</span>
            </div>
          </div>
          <HeroCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Resumen"
            title="Marca pública clara. Ecosistema privado serio."
            description="Una web comercial con salida directa a portfolio, contacto y soluciones sin ruido ni vueltas."
          />
          <StatusTiles />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Soluciones"
            title="Servicios pensados para cerrar"
            description="Cada servicio tiene una promesa clara y un camino corto a la conversión."
          />
          <div className="grid-3 section-grid">
            {SERVICES.map((service) => (
              <article key={service.slug} className="card card-pad service-card">
                <div className="tag-row" style={{ marginBottom: 12 }}>
                  <span className="tag tag-soft">{service.group}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <p className="result">{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Apps"
            title="Cada app con branding propio"
            description="Misma importancia visual, función clara y lectura comercial inmediata."
          />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="AGIs"
            title="NOVA dirige. 16 especialistas operan."
            description="Una red de AGIs reales para estrategia, marketing, seguridad, finanzas, legal e infraestructura."
          />
          <AgiGrid />
          <div className="section-spacer" />
          <p className="section-note">Las AGIs trabajan con roles separados, memoria filtrada y aprobaciones cuando una acción es sensible.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Tu perfil para vacantes y leads"
            description="Marketing + developer + creativo en una sola vista profesional."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Preguntas rápidas"
            title="Directo al punto"
            description="Respuestas cortas para bajar fricción y acelerar el contacto."
          />
          <FaqList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta hko-final-cta">
            <div className="kicker">Contacto</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              Si quieres vender mejor, automatizar más o lanzar una marca seria, aquí empieza.
            </h2>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link href="/contacto" className="button button-primary">Hablemos</Link>
              <Link href="/apps" className="button button-secondary">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
