import Link from "next/link";
import { HeroCards } from "@/components/hero-cards";
import { SectionTitle } from "@/components/section-title";
import { AppExplorer } from "@/components/app-explorer";
import { AgiGrid } from "@/components/agi-grid";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { FaqList } from "@/components/faq-list";
import { StatusTiles } from "@/components/status-tiles";
import { APPS, PORTFOLIO, SERVICES, SITE } from "@/lib/site-data";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="kicker">Sitio oficial · Ecosistema comercial</div>
            <h1 className="hero-title">
              <span className="gradient">{SITE.brand}</span>
            </h1>
            <p className="hero-text">
              {SITE.tagline} Si necesitas una marca que venda, una web que convierta y una base de IA que sí opere,
              aquí está el punto de entrada correcto. Hocker ONE organiza, NOVA coordina y las AGIs convierten la
              intención en sistema.
            </p>
            <div className="hero-actions">
              <Link href="/portfolio" className="button button-primary">Ver portafolio</Link>
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
            eyebrow="Lo que puedes contratar"
            title="Seis rutas que resuelven negocio de verdad"
            description="No se trata solo de verse bien. Se trata de vender más, ahorrar tiempo, ordenar operación y construir activos digitales que sí funcionen."
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
            description="Las apps se presentan con la misma importancia visual y comercial. Cada una resuelve algo distinto y puede crecer como módulo independiente."
          />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="NOVA y las AGIs"
            title="AGIs explicadas de forma simple para clientes reales"
            description="NOVA dirige. Las demás AGIs hacen el trabajo especializado. Así el sistema se entiende, se vende y se opera mejor."
          />
          <div className="detail-layout">
            <div className="card card-pad">
              <h3 style={{ fontSize: 24 }}>Cómo trabajan</h3>
              <p>
                El sistema propone, organiza y prepara acciones. Cuando algo es sensible, el flujo pide aprobación.
                Eso evita caos, mejora trazabilidad y hace que la experiencia sea más confiable.
              </p>
              <div className="tag-row">
                <span className="tag">Comprensión</span>
                <span className="tag">Organización</span>
                <span className="tag">Aprobación</span>
                <span className="tag">Evidencia</span>
              </div>
              <hr className="divider" />
              <p>
                En lenguaje humano: NOVA entiende la intención; Syntia sincroniza; Vertx protege; Hostia conecta;
                Numia ordena dinero; Jurix cuida el cumplimiento; y las AGIs creativas y operativas ejecutan por función.
              </p>
              <Link href="/agis" className="button button-secondary" style={{ width: "fit-content" }}>
                Ver todas las AGIs
              </Link>
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
            eyebrow="Portafolio"
            title="Perfil híbrido: marketing + developer + creativo"
            description="El portfolio debe mostrar tanto resultados de negocio como capacidad técnica y visual. Esto vende mejor que un CV plano."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Respuestas cortas para clientes y leads"
            description="La web debe explicar rápido qué haces, cómo funciona el ecosistema y por qué Hocker no es una agencia genérica."
          />
          <FaqList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="kicker">Cierre comercial</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              ¿Quieres una marca, un sistema o una web que sí venda?
            </h2>
            <p style={{ margin: 0, maxWidth: 820, color: "#c7d2fe", lineHeight: 1.8 }}>
              Hocker AGI Technologies puede funcionar como agencia, estudio, laboratorio de IA o ecosistema completo.
              Lo importante es que el mensaje sea claro, el diseño sea premium y el valor se entienda en segundos.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Hablemos de tu proyecto</Link>
              <a
                href="https://wa.me/526632091143"
                className="button button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp directo
              </a>
              <Link href="/apps" className="button button-secondary">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
