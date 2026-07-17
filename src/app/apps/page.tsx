import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";
import { APPS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Apps",
  description: "Apps del ecosistema Hocker AGI Technologies con branding propio y función comercial clara.",
};

export default function AppsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">Apps</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              Todas las apps con la misma importancia
            </h1>
            <p className="hero-text" style={{ maxWidth: 900 }}>
              Cada producto tiene su propio submódulo, su propia lógica y su propia identidad visual para que el
              ecosistema se vea sólido y no como una mezcla genérica.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Quiero una demo</Link>
              <Link href="/soluciones" className="button button-secondary">Ver soluciones</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Catálogo" title="Submódulos del ecosistema" description="A cada app se le da su espacio, su función y su página propia." />
          <div className="grid-3 section-grid">
            {APPS.map((app) => (
              <article key={app.slug} className="card card-pad app-card">
                <div className="app-top">
                  <Image src={app.logo} alt={app.title} width={88} height={88} className="app-logo" />
                  <div className="app-title">
                    <strong>{app.title}</strong>
                    <span>{app.tagline}</span>
                  </div>
                </div>
                <p>{app.summary}</p>
                <p style={{ marginTop: -4, color: "white" }}>
                  <strong>Ideal para:</strong> {app.audience}
                </p>
                <div className="tag-row">
                  <span className="tag"><strong>{app.badge}</strong></span>
                  <span className="tag">{app.status}</span>
                </div>
                <Link href={`/apps/${app.slug}`} className="button button-secondary" style={{ width: "fit-content" }}>
                  Abrir módulo
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel">
            <div className="kicker">Siguiente paso</div>
            <h2 style={{ margin: 0, fontSize: "clamp(30px, 5vw, 54px)" }}>
              Si quieres una app real, la diseñamos para vender, operar y escalar.
            </h2>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <Link href="/contacto" className="button button-primary">Hablemos de tu app</Link>
              <Link href="/portfolio" className="button button-secondary">Ver portfolio</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
