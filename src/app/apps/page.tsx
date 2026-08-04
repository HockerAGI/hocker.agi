import type { Metadata } from "next";
import Link from "next/link";
import { AppExplorer } from "@/components/app-explorer";
import { APPS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Productos y plataformas",
  description: "Conoce los productos de Hocker AGI Technologies para operación, marketing, CRM, nube, seguridad y automatización.",
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">PRODUCTOS</p>
          <h1 className="hero-title">Módulos diseñados para resolver funciones concretas.</h1>
          <p className="hero-text">
            El ecosistema puede implementarse por etapas. Cada producto cubre una necesidad de negocio y se conecta únicamente cuando aporta valor operativo.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link>
            <Link href="/ecosistema" className="button button-secondary button-big">Ver cómo se conectan</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">CATÁLOGO</p>
              <h2>Una solución por frente de trabajo.</h2>
            </div>
            <p>La disponibilidad, alcance e integraciones se confirman durante el diagnóstico. No todos los módulos son necesarios para todos los proyectos.</p>
          </div>
          <AppExplorer apps={APPS} />
        </div>
      </section>
    </>
  );
}
