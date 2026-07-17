import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto oficial de Hocker AGI Technologies para proyectos, ventas y alianzas.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">Contacto</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              Hablemos de tu proyecto
            </h1>
            <p className="hero-text" style={{ maxWidth: 860 }}>
              Si necesitas una web, un sistema, una automatización o una estrategia comercial con IA, aquí empieza.
              La respuesta ideal es rápida, clara y orientada a convertir.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:hocker.agi@gmail.com">Enviar email</a>
              <a className="button button-secondary" href="https://wa.me/526632091143" target="_blank" rel="noreferrer">
                Abrir WhatsApp
              </a>
              <Link className="button button-secondary" href="/portfolio">Ver portafolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Canales" title="Conexión directa" description="La web debe facilitar el siguiente paso y no esconder el contacto." />
          <div className="grid-3 section-grid">
            <article className="card card-pad">
              <h3>Email</h3>
              <p><a href="mailto:hocker.agi@gmail.com">hocker.agi@gmail.com</a></p>
            </article>
            <article className="card card-pad">
              <h3>WhatsApp</h3>
              <p><a href="https://wa.me/526632091143" target="_blank" rel="noreferrer">663 209 1143</a></p>
            </article>
            <article className="card card-pad">
              <h3>Sitio oficial</h3>
              <p><a href="https://hockeragi.vercel.app" target="_blank" rel="noreferrer">hockeragi.vercel.app</a></p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
