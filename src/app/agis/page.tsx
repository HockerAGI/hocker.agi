import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { AgiGrid } from "@/components/agi-grid";

export const metadata: Metadata = {
  title: "AGIs",
  description: "Explicación simple de NOVA y las AGIs del ecosistema Hocker.",
};

export default function AgisPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">AGIs</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              NOVA dirige. Las demás AGIs especializan el trabajo.
            </h1>
            <p className="hero-text" style={{ maxWidth: 920 }}>
              Explicado de forma sencilla: una IA central coordina y varias AGIs por función resuelven creatividad,
              infraestructura, seguridad, legal, finanzas y operación.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Quiero una demo</Link>
              <Link href="/ecosistema" className="button button-secondary">Ver ecosistema</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Cómo trabajan" title="Una red de especialistas" description="El sistema no intenta que una sola IA haga todo; reparte tareas para vender y operar mejor." />
          <div className="grid-2 section-grid">
            <article className="card card-pad">
              <h3>NOVA como cerebro</h3>
              <p>NOVA entiende contexto, decide prioridades y coordina la conversación y el flujo operativo.</p>
            </article>
            <article className="card card-pad">
              <h3>AGIs por rol</h3>
              <p>Cada AGI hace una función clara: creatividad, seguridad, finanzas, infraestructura, legal u operación.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AgiGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="kicker">Por qué importa</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              Esta arquitectura hace que el sistema sea más claro, más vendible y más escalable.
            </h2>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link href="/contacto" className="button button-primary">Hablar sobre AGIs</Link>
              <Link href="/soluciones" className="button button-secondary">Ver soluciones</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
