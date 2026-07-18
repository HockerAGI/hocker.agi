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
    <div>
      <section className="hero page-hero">
        <div className="container hero-grid hero-grid-home">
          <div className="hero-copy">
            <div className="kicker">Sitio oficial · Ecosistema comercial</div>
            <h1 className="hero-title">
              <span className="gradient">IA, software y marketing que venden.</span>
            </h1>
            <p className="hero-text">
              NOVA coordina. Las AGIs especializan. Las apps convierten.
              Menos humo, más sistema.
            </p>
            <div className="hero-actions">
              <Link href="/portfolio" className="button button-primary button-big">Ver portfolio</Link>
              <Link href="/apps" className="button button-secondary button-big">Ver apps</Link>
              <a href="https://wa.me/526632091143" className="button button-secondary button-big" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <div className="tag-row">
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
            title="Todo conectado, pero fácil de entender"
            description="Una marca pública clara, un portfolio real y una puerta directa al ecosistema privado."
          />
          <StatusTiles />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Servicios"
            title="Lo que vendes en una sola frase"
            description="Servicios cortos, concretos y listos para cerrar ventas sin perder tiempo."
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
            title="Cada app con su propia cara"
            description="Misma importancia, branding propio y función clara para que el ecosistema se vea sólido y vendible."
          />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="AGIs"
            title="NOVA al centro, especialistas alrededor"
            description="Una red de 16 AGIs con roles reales para estrategia, marketing, seguridad, finanzas, legal e infraestructura."
          />
          <AgiGrid />
          <div className="section-cta-inline">
            <Link href="/agis" className="button button-secondary">Ver mapa de AGIs</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Tu perfil mezcla marketing, desarrollo y dirección creativa"
            description="Diseñado para vacantes y para leads: muestra quién eres, qué construyes y cómo piensas."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Preguntas"
            title="Respuestas cortas, cero humo"
            description="Para que el usuario entienda rápido qué vendes y cómo trabajas."
          />
          <FaqList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta">
            <div className="kicker">Siguiente paso</div>
            <h2>Si quieres una web, app o sistema que sí venda, aquí empieza.</h2>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Cotizar proyecto</Link>
              <Link href="/callback" className="button button-secondary button-big">Pedir callback</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
