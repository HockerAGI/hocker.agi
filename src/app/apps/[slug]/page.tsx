import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APPS } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS.find((item) => item.slug === slug);
  if (!app) return { title: "App" };
  return {
    title: app.title,
    description: app.summary,
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = APPS.find((item) => item.slug === slug);
  if (!app) return notFound();

  const accent = app.accent;

  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">{app.badge}</div>
            <div className="detail-layout" style={{ alignItems: "center" }}>
              <div>
                <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
                  {app.title}
                </h1>
                <p className="hero-text" style={{ maxWidth: 860 }}>
                  {app.summary}
                </p>
                <div className="tag-row">
                  <span className="tag"><strong>Audiencia:</strong> {app.audience}</span>
                  <span className="tag"><strong>Status:</strong> {app.status}</span>
                </div>
              </div>
              <Image
                src={app.logo}
                alt={app.title}
                width={420}
                height={420}
                className="hero-logo"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 section-grid">
            <article className="card card-pad">
              <h2 style={{ fontSize: 26 }}>Qué resuelve</h2>
              <p>{app.tagline}</p>
              <p>{app.summary}</p>
              <div className="tag-row">
                {app.highlights.map((h) => <span className="tag" key={h}>{h}</span>)}
              </div>
            </article>
            <article className="card card-pad" style={{ borderColor: accent, boxShadow: "0 30px 90px rgba(0,0,0,.45)" }}>
              <h2 style={{ fontSize: 26 }}>Ideal para</h2>
              <p>{app.audience}</p>
              <p>
                Este módulo está diseñado para verse y sentirse como una pieza independiente, pero dentro de una red
                común de mando, seguridad y trazabilidad.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 section-grid">
            <article className="card card-pad">
              <h2 style={{ fontSize: 26 }}>AGIs que lo soportan</h2>
              <p>{app.agis.join(" · ")}</p>
              <p>
                Cada app se explica con lenguaje simple para negocio, pero por debajo trabaja con especialistas que
                hacen una parte concreta del sistema.
              </p>
            </article>
            <article className="card card-pad">
              <h2 style={{ fontSize: 26 }}>Qué gana el cliente</h2>
              <p>Más claridad, una experiencia más premium y una estructura de producto que se puede vender mejor.</p>
              <div className="hero-actions">
                <Link href="/contacto" className="button button-primary">Quiero este módulo</Link>
                <Link href="/apps" className="button button-secondary">Ver más apps</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
