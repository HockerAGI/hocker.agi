import type { Metadata } from "next";
import Link from "next/link";
import { AppExplorer } from "@/components/app-explorer";
import { AgiGrid } from "@/components/agi-grid";
import { FaqList } from "@/components/faq-list";
import { HeroCards } from "@/components/hero-cards";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { SectionTitle } from "@/components/section-title";
import { StatusTiles } from "@/components/status-tiles";
import { APPS, PHASES, PORTFOLIO, SERVICES, SITE } from "@/lib/site-data";

const levels = [
  {
    title: "Núcleo",
    text: "NOVA coordina toda la operación y define prioridades.",
  },
  {
    title: "Apps",
    text: "Cada módulo resuelve una necesidad de negocio distinta.",
  },
  {
    title: "AGIs",
    text: "Especialistas por función para operar con más orden.",
  },
  {
    title: "Portfolio",
    text: "Tu experiencia real para vacantes y leads.",
  },
  {
    title: "Empresa",
    text: "Una marca que vende, explica y ejecuta.",
  },
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
              <span className="gradient">Construyo empresas que aprenden, piensan y operan mediante IA.</span>
            </h1>
            <p className="hero-text hko-hero-text">
              NOVA orquesta, las AGIs especializan y las apps convierten. Todo bajo una sola marca, una sola lógica y una sola ruta comercial.
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
          <SectionTitle
            eyebrow="Nivel 0"
            title="NOVA es el núcleo. Todo nace desde aquí."
            description="No es un chatbot: es el cerebro que explica cómo trabaja toda la empresa."
          />
          <div className="grid-3 section-grid">
            {levels.map((level) => (
              <article key={level.title} className="card card-pad service-card">
                <div className="kicker">{level.title}</div>
                <p>{level.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Capítulo 1"
            title="¿Qué hace Hocker?"
            description="No una agencia, no una software house, no una consultora: una empresa que crea infraestructura empresarial mediante AGI."
          />
          <StatusTiles />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Capítulo 2"
            title="El problema de operar como hoy"
            description="Personas, procesos, errores, tiempo, costo y pérdidas cuando el sistema no piensa contigo."
          />
          <div className="grid-3 section-grid">
            {[
              ["Personas", "Dependencia manual y comunicación dispersa."],
              ["Procesos", "Pasos sueltos que consumen tiempo."],
              ["Pérdidas", "Fugas de oportunidad, control y margen."],
            ].map(([title, text]) => (
              <article key={title} className="card card-pad">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Capítulo 3"
            title="Después de Hocker"
            description="Empresa → NOVA → AGIs → Apps → Automatización → Resultados."
          />
          <div className="grid-3 section-grid">
            {[
              ["NOVA", "Dirige la estrategia y las decisiones."],
              ["AGIs", "Especialistas por función."],
              ["Apps", "Módulos que venden y operan."],
            ].map(([title, text]) => (
              <article key={title} className="card card-pad">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 2"
            title="Soluciones"
            description="Servicios cortos, concretos y vendibles."
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
            eyebrow="Nivel 3"
            title="Apps"
            description="Cada app con su propia mini landing, su propia identidad y su propio objetivo comercial."
          />
          <AppExplorer apps={APPS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 4"
            title="AGIs"
            description="No una lista: un organigrama vivo de especialistas conectados con NOVA."
          />
          <AgiGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 5"
            title="Ecosistema"
            description="Todo conectado: empresa, NOVA, AGIs, apps, clientes, cloud y servidores."
          />
          <div className="grid-3 section-grid">
            {[
              ["Empresa", "La marca que vende y organiza."],
              ["Cloud", "Infraestructura y despliegue."],
              ["Usuarios", "La experiencia que convierte."],
            ].map(([title, text]) => (
              <article key={title} className="card card-pad">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-spacer" />
          <Link href="/fases" className="button button-secondary">Ver las 15 fases</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 6"
            title="Portfolio"
            description="No parece CV. Parece documental."
          />
          <PortfolioExplorer items={PORTFOLIO} />
        </div>
      </section>

      <section className="section">
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

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 8"
            title="Fases"
            description="15 fases para construir, lanzar y sostener el sistema."
          />
          <div className="grid-3 section-grid">
            {PHASES.slice(0, 6).map((phase) => (
              <article key={phase.number} className="card card-pad">
                <div className="kicker">Fase {phase.number}</div>
                <h3>{phase.title}</h3>
                <p>{phase.summary}</p>
              </article>
            ))}
          </div>
          <div className="section-spacer" />
          <Link href="/fases" className="button button-secondary">Abrir mapa completo</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 9"
            title="Contacto"
            description="Un asistente comercial, no un formulario simple."
          />
          <div className="grid-2 section-grid">
            <article className="card card-pad">
              <h3>REVIA</h3>
              <p>Pregunta, perfila, ordena y manda a CRM, correo, WhatsApp y seguimiento.</p>
            </article>
            <article className="card card-pad">
              <h3>Pipeline</h3>
              <p>El contacto se convierte en oportunidad con una ruta clara de cierre.</p>
            </article>
          </div>
          <div className="section-spacer" />
          <Link href="/contacto" className="button button-primary">Pedir diagnóstico IA</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Nivel 10"
            title="Live"
            description="Panel público: estado, servicios, APIs, cloud, uptime y roadmap."
          />
          <div className="grid-3 section-grid">
            {[
              ["Estado", "Operativo y en expansión"],
              ["Uptime", "Visible al público"],
              ["Roadmap", "Sincronizado con el producto"],
            ].map(([title, text]) => (
              <article key={title} className="card card-pad">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="section-spacer" />
          <Link href="/live" className="button button-secondary">Abrir panel live</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Preguntas rápidas"
            title="Sin humo, sin vueltas"
            description="Respuestas cortas para bajar fricción y acelerar el contacto."
          />
          <FaqList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta hko-final-cta">
            <div className="kicker">Cierre</div>
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
