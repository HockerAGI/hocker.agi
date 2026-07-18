import type { Metadata } from "next";
import Link from "next/link";
import { AppExplorer } from "@/components/app-explorer";
import { AgiGrid } from "@/components/agi-grid";
import { FaqList } from "@/components/faq-list";
import { HeroCards } from "@/components/hero-cards";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { SectionTitle } from "@/components/section-title";
import { StatusTiles } from "@/components/status-tiles";
import { APPS, FAQS, PORTFOLIO, SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Hocker AGI Technologies: IA, marketing y software que venden, automatizan y escalan.",
};

export default function HomePage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">Hocker AGI Technologies</div>
            <div className="detail-layout" style={{ alignItems: "center" }}>
              <div>
                <h1 className="hero-title" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
                  IA, marketing y software que venden.
                </h1>
                <p className="hero-text" style={{ maxWidth: 820 }}>
                  NOVA coordina. Las AGIs especializan. Las apps convierten. Todo con control, claridad y una marca
                  que sí se siente premium.
                </p>
                <div className="hero-actions">
                  <Link href="/portfolio" className="button button-primary">Ver portfolio</Link>
                  <a
                    href="https://wa.me/526632091143"
                    className="button button-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cotizar por WhatsApp
                  </a>
                  <Link href="/ecosistema" className="button button-secondary">Explorar ecosistema</Link>
                </div>
                <div className="tag-row">
                  <span className="tag"><strong>Marketing</strong> · Ads, funnels y branding</span>
                  <span className="tag"><strong>Developer</strong> · Apps, APIs y automatización</span>
                  <span className="tag"><strong>AGIs</strong> · NOVA y especialistas</span>
                </div>
              </div>
              <HeroCards />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Propuesta comercial"
            title="Una plataforma para vender, construir y operar todo desde una sola marca"
            description="La web oficial debe explicar el valor real del ecosistema, enseñar qué hace cada solución y llevar al usuario al siguiente paso sin confusión."
          />
          <StatusTiles />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Qué resolvemos"
            title="Servicios cortos, claros y vendibles"
            description="Menos texto. Más valor. Más claridad para cualquier tipo de cliente."
          />
          <div className="grid-3 section-grid">
            {SERVICES.map((service) => (
              <article key={service.slug} className="card card-pad">
                <div className="tag-row" style={{ marginBottom: 14 }}>
                  <span className="tag">{service.group}</span>
                </div>
                <h3 style={{ fontSize: 21 }}>{service.title}</h3>
                <p>{service.summary}</p>
                <p style={{ color: "white" }}>{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Apps del ecosistema"
            title="Cada app tiene su propia identidad y su propia función"
            description="Se presentan con la misma importancia visual y comercial. Cada una resuelve algo distinto y puede crecer como módulo independiente."
          />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="NOVA y las AGIs"
            title="AGIs explicadas de forma simple"
            description="NOVA dirige. Las demás AGIs hacen el trabajo especializado. Así el sistema se entiende, se vende y se opera mejor."
          />
          <div className="detail-layout">
            <div className="card card-pad">
              <h3 style={{ fontSize: 24 }}>Cómo trabajan</h3>
              <p>
                El sistema propone, organiza y prepara acciones. Cuando algo es sensible, el flujo pide aprobación.
                Eso evita caos, mejora trazabilidad y hace que la experiencia sea más confiable.
              </p>
              <div className="hero-actions">
                <Link href="/agis" className="button button-primary">Ver AGIs</Link>
                <Link href="/contacto" className="button button-secondary">Hablar con nosotros</Link>
              </div>
            </div>
            <div className="card card-pad">
              <AgiGrid />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Tu lado marketing + developer + creativo"
            description="Perfil pensado para vender capacidad real, no solo títulos."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Preguntas rápidas"
            title="Sin humo, sin vueltas"
            description="Respuestas cortas para bajar fricción y aumentar confianza."
          />
          <FaqList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="kicker">Contacto</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              Si quieres vender mejor, automatizar más o construir una experiencia premium, aquí empieza.
            </h2>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link href="/contacto" className="button button-primary">Hablemos de tu proyecto</Link>
              <Link href="/apps" className="button button-secondary">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
