import type { Metadata } from "next";
import Link from "next/link";
import { AppExplorer } from "@/components/app-explorer";
import { AgiGrid } from "@/components/agi-grid";
import { HeroCards } from "@/components/hero-cards";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { SectionTitle } from "@/components/section-title";
import { PhaseTimeline } from "@/components/phase-timeline";
import { LeadForm } from "@/components/lead-form";
import { StatusTiles } from "@/components/status-tiles";
import { APPS, PORTFOLIO, SERVICES, SITE } from "@/lib/site-data";

const quickLinks = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#apps", label: "Apps" },
  { href: "#agis", label: "AGIs" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#empresa", label: "Empresa" },
  { href: "#contacto", label: "Contacto" },
];

const before = [
  "Personas sueltas",
  "Procesos manuales",
  "Errores y fricción",
  "Tiempo perdido",
  "Costo alto",
  "Pérdidas invisibles",
];

const after = [
  "NOVA al centro",
  "AGIs especializadas",
  "Apps que convierten",
  "Automatización real",
  "Seguimiento y control",
  "Resultados medibles",
];

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
            <div className="kicker">Plataforma unificada del ecosistema</div>
            <h1 className="hero-title hko-hero-title">
              <span className="gradient">No desarrollamos software. Construimos empresas que aprenden, piensan y operan mediante IA.</span>
            </h1>
            <p className="hero-text hko-hero-text">
              NOVA coordina. Las AGIs especializan. Las apps convierten. Todo bajo una sola marca, una sola lógica y una sola ruta comercial.
            </p>
            <div className="hero-actions hko-hero-actions">
              <Link href="/ecosistema" className="button button-primary button-big">Explorar ecosistema</Link>
              <Link href="/contacto" className="button button-secondary button-big">Solicitar diagnóstico IA</Link>
              <Link href="/portfolio" className="button button-secondary button-big">Ver portfolio</Link>
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
          <div className="chapter-rail" aria-label="Capítulos">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="chapter-pill">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="nucleo">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 0"
            title="NOVA es el núcleo. Todo nace desde aquí."
            description="No es un chatbot: es el cerebro que explica cómo trabaja toda la empresa."
          />
          <StatusTiles />
        </div>
      </section>

      <section className="section" id="soluciones">
        <div className="container">
          <SectionTitle
            eyebrow="Capítulo 1"
            title="Problema actual → Sistema Hocker"
            description="La experiencia del sitio debe mostrar el salto claro entre operar manualmente y operar con un sistema unificado."
          />
          <div className="story-grid section-grid">
            <article className="card card-pad story-card">
              <div className="kicker">Hoy</div>
              <div className="tag-row">
                {before.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
              <p style={{ marginTop: 16 }}>Negocio fragmentado, decisiones lentas y operación sin una mente central.</p>
            </article>
            <article className="card card-pad story-card">
              <div className="kicker">Con Hocker</div>
              <div className="tag-row">
                {after.map((item) => <span className="tag tag-soft" key={item}>{item}</span>)}
              </div>
              <p style={{ marginTop: 16 }}>Una sola lógica que ordena, vende, automatiza y da seguimiento al negocio.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 2"
            title="Soluciones"
            description="Servicios cortos, concretos y vendibles. Cada uno tiene un objetivo de negocio claro."
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

      <section className="section" id="apps">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 3"
            title="Apps"
            description="Cada app con su propia mini landing, identidad y propósito comercial."
          />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section" id="agis">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 4"
            title="AGIs"
            description="Un organigrama vivo de especialistas conectados con NOVA."
          />
          <AgiGrid />
        </div>
      </section>

      <section className="section" id="ecosistema">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 5"
            title="Ecosistema"
            description="Empresa, NOVA, AGIs, apps, clientes, cloud y servidores: todo conectado y legible."
          />
          <div className="story-grid section-grid">
            {[
              ["Empresa", "La marca que vende y organiza."],
              ["Cloud", "Infraestructura y despliegue."],
              ["Clientes", "La experiencia que convierte."],
              ["Usuarios", "Las personas que entran al sistema."],
            ].map(([title, text]) => (
              <article key={title} className="card card-pad">
                <div className="kicker">{title}</div>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-spacer" />
          <Link href="/fases" className="button button-secondary">Ver las 15 fases</Link>
        </div>
      </section>

      <section className="section" id="portfolio">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 6"
            title="Portfolio"
            description="No parece CV. Parece documental. Marketing, desarrollo, automatización y creatividad en una sola superficie."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section" id="empresa">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 7"
            title="Empresa"
            description="Historia, valores, visión, doctrina y modelo de trabajo."
          />
          <div className="grid-2 section-grid">
            <article className="card card-pad">
              <h3>Qué somos</h3>
              <p>Hocker AGI Technologies es una plataforma unificada de IA, marketing y software.</p>
            </article>
            <article className="card card-pad">
              <h3>Cómo trabajamos</h3>
              <p>NOVA coordina, las AGIs especializan y las apps convierten.</p>
            </article>
          </div>
          <div className="section-spacer" />
          <Link href="/empresa" className="button button-secondary">Ver empresa</Link>
        </div>
      </section>

      <section className="section" id="fases">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 8"
            title="Fases"
            description="15 fases para construir, lanzar y sostener el sistema."
          />
          <PhaseTimeline limit={6} />
          <div className="section-spacer" />
          <Link href="/fases" className="button button-secondary">Abrir mapa completo</Link>
        </div>
      </section>

      <section className="section" id="contacto">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 9"
            title="Contacto"
            description="REVIA convierte el interés en conversación, seguimiento y cierre."
          />
          <div className="detail-layout">
            <LeadForm />
            <div className="card card-pad story-panel">
              <div>
                <div className="kicker">Ruta comercial</div>
                <h3 style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>Atracción → Diagnóstico → Agenda → CRM → Venta</h3>
                <p>Una sola superficie para convertir leads sin perder contexto ni velocidad.</p>
              </div>
              <div className="tag-row">
                <span className="tag"><strong>Email</strong> · hocker.agi@gmail.com</span>
                <span className="tag"><strong>WhatsApp</strong> · 663 209 1143</span>
                <span className="tag tag-soft"><strong>Vercel</strong> · hockeragi.vercel.app</span>
              </div>
              <Link href="/callback" className="button button-primary button-big" style={{ width: 'fit-content' }}>Pedir callback</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
