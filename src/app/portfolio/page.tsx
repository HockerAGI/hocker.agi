import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { PORTFOLIO } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio de trabajo, casos reales y perfil híbrido de marketing + developer + creativo.",
};

export default function PortfolioPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">Portafolio</div>
            <div className="detail-layout" style={{ alignItems: "center" }}>
              <div>
                <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
                  Mi trabajo mezcla negocio, creatividad y código
                </h1>
                <p className="hero-text" style={{ maxWidth: 900 }}>
                  El portfolio debe vender una combinación poco común pero muy útil: marketing, automatización,
                  desarrollo full stack, diseño y dirección creativa para que la marca no solo se vea bien, sino que
                  venda mejor.
                </p>
                <div className="hero-actions">
                  <Link href="/contacto" className="button button-primary">Contratar / Cotizar</Link>
                  <a
                    href="https://wa.me/526632091143"
                    className="button button-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp directo
                  </a>
                </div>
              </div>
              <Image
                src="/brand/hocker-agi-technologies.png"
                alt="Hocker AGI Technologies"
                width={420}
                height={420}
                className="hero-logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Perfil"
            title="AI Automation Engineer · Performance Marketing Strategist · Full Stack Developer"
            description="Resumen comercial del CV para explicar rápido quién eres y qué resuelves."
          />
          <div className="grid-3 section-grid">
            <article className="card card-pad">
              <h3>Marketing con resultados</h3>
              <p>Meta Ads, TikTok Ads, LinkedIn Ads, funnels, CRO, remarketing y generación de leads.</p>
            </article>
            <article className="card card-pad">
              <h3>Desarrollo con visión de negocio</h3>
              <p>Next.js, React, Node.js, Supabase, APIs, paneles operativos y automatización conectada.</p>
            </article>
            <article className="card card-pad">
              <h3>Creativo y audiovisual</h3>
              <p>Dirección creativa, edición, branding, contenido, motion y postproducción de alto nivel.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Qué entrego"
            title="Servicios que sí aterrizan en negocio"
            description="No es solo producción visual o solo desarrollo. Es una mezcla que ayuda a vender, automatizar y lanzar mejor."
          />
          <div className="grid-4 section-grid">
            <article className="card card-pad">
              <h3>Webs y landings</h3>
              <p>Una página clara, rápida y con narrativa comercial para convertir visitas en contacto.</p>
            </article>
            <article className="card card-pad">
              <h3>Campañas y contenido</h3>
              <p>Piezas, hooks y campañas pensadas para atraer atención y generar leads o ventas.</p>
            </article>
            <article className="card card-pad">
              <h3>Automatización</h3>
              <p>Conexión de APIs, CRM, flujos y paneles para ahorrar tiempo y ordenar la operación.</p>
            </article>
            <article className="card card-pad">
              <h3>Ecosistemas</h3>
              <p>App + AGIs + estructura comercial para que todo funcione como un sistema y no como piezas sueltas.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Casos"
            title="Portfolio por tipo de impacto"
            description="Cada bloque muestra problema, rol, stack y resultado."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="kicker">Siguiente paso</div>
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
