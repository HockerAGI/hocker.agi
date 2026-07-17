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
          <div className="panel">
            <div className="kicker">Soluciones</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              Servicios que se entienden rápido y se compran más fácil
            </h1>
            <p className="hero-text" style={{ maxWidth: 900 }}>
              El sitio debe vender resultados, no solo tecnología: más ventas, menos trabajo manual, mejor marca y
              sistemas claros para crecer.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Cotizar ahora</Link>
              <a href="https://wa.me/526632091143" className="button button-secondary" target="_blank" rel="noreferrer">
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Servicios" title="Lo que puedes contratar" description="Desde estrategia hasta desarrollo y automatización, con entregables claros y enfoque comercial." />
          <div className="grid-2 section-grid">
            {SERVICES.map((service) => (
              <article key={service.slug} className="card card-pad">
                <div className="tag-row" style={{ marginBottom: 12 }}>
                  <span className="tag">{service.group}</span>
                  <span className="tag">{service.audience}</span>
                </div>
                <h3 style={{ fontSize: 24 }}>{service.title}</h3>
                <p>{service.summary}</p>
                <p style={{ color: "white" }}>{service.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="kicker">Cierre comercial</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              Si quieres una solución premium, Hocker la convierte en una ruta clara de negocio.
            </h2>
            <p style={{ margin: 0, maxWidth: 860, color: "#c7d2fe", lineHeight: 1.8 }}>
              La idea es simple: explicar bien, ejecutar bien y vender mejor. Así se construye una web o un sistema que
              no se siente genérico.
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link href="/portfolio" className="button button-primary">Ver portafolio</Link>
              <Link href="/apps" className="button button-secondary">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
