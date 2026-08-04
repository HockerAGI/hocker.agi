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
  if (!app) return { title: "Producto" };
  return {
    title: app.title,
    description: app.summary,
    alternates: { canonical: `/apps/${app.slug}` },
    openGraph: {
      title: app.title,
      description: app.summary,
      images: [{ url: app.cover, alt: app.title }],
    },
  };
}

export default async function AppDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = APPS.find((item) => item.slug === slug);
  if (!app) return notFound();

  return (
    <>
      <section className="page-hero commercial-page-hero product-detail-hero">
        <div className="container detail-layout product-detail-layout">
          <div>
            <p className="eyebrow">{app.badge}</p>
            <h1 className="hero-title">{app.title}</h1>
            <p className="hero-text">{app.summary}</p>
            <div className="product-public-tags">
              <span>{app.audience}</span>
              <span>{app.availability}</span>
            </div>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Solicitar evaluación</Link>
              <Link href="/apps" className="button button-secondary button-big">Ver productos</Link>
            </div>
          </div>
          <div className="product-cover-wrap">
            <Image
              src={app.cover}
              alt={`Vista conceptual de ${app.title}`}
              width={760}
              height={560}
              className="hero-cover product-detail-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">PROPÓSITO</p>
              <h2>{app.tagline}</h2>
            </div>
            <p>{app.summary}</p>
          </div>

          <div className="product-benefit-grid">
            {app.highlights.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <p>Esta capacidad se configura según el proceso, los permisos, las integraciones y los indicadores definidos para el proyecto.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container product-fit-grid">
          <div>
            <p className="eyebrow">DISEÑADO PARA</p>
            <h2>{app.audience}</h2>
          </div>
          <div>
            <h3>Implementación modular</h3>
            <p>
              El producto puede operar como solución independiente o conectarse con captación, CRM, automatización, datos y paneles cuando existe una necesidad validada.
            </p>
            <h3>Información responsable</h3>
            <p>
              Los detalles de infraestructura, credenciales, reglas de seguridad y dependencias internas se comparten únicamente dentro del alcance autorizado.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container proposal-panel">
          <div>
            <p className="eyebrow">SIGUIENTE PASO</p>
            <h2>Confirma si este producto encaja con tu operación.</h2>
            <p>Revisamos el proceso actual, el resultado esperado, las integraciones y el nivel de personalización antes de cotizar.</p>
          </div>
          <Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link>
        </div>
      </section>
    </>
  );
}
