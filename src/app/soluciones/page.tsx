import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { SERVICES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Soluciones",
  description: "Servicios, paquetes y soluciones comerciales de Hocker AGI Technologies.",
};

export default function SolutionsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Soluciones</div>
            <h1 className="hero-title">Servicios claros. Resultados vendibles.</h1>
            <p className="hero-text">Menos texto, más valor: vender más, automatizar mejor y operar con menos fricción.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Cotizar ahora</Link>
              <a href="https://wa.me/526632091143" className="button button-secondary button-big" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Servicios" title="Qué puedes contratar" description="Desde estrategia hasta desarrollo y automatización, con entregables claros." />
          <div className="grid-2 section-grid">
            {SERVICES.map((service) => (
              <article key={service.slug} className="card card-pad service-card">
                <div className="tag-row" style={{ marginBottom: 12 }}>
                  <span className="tag tag-soft">{service.group}</span>
                  <span className="tag tag-soft">{service.audience}</span>
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
          <div className="panel panel-cta">
            <div className="kicker">Cierre comercial</div>
            <h2>Si quieres una solución premium, Hocker la convierte en una ruta clara de negocio.</h2>
            <div className="hero-actions">
              <Link href="/portfolio" className="button button-primary button-big">Ver portfolio</Link>
              <Link href="/apps" className="button button-secondary button-big">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
