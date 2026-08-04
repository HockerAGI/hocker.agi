import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Contacto y diagnóstico comercial",
  description: "Solicita un diagnóstico de automatización, marketing, software o inteligencia artificial para tu empresa.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  const whatsapp = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero solicitar un diagnóstico para mi empresa."
  )}`;

  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">CONTACTO</p>
          <h1 className="hero-title">Convirtamos una necesidad en un plan concreto.</h1>
          <p className="hero-text">
            Comparte el objetivo, el proceso que quieres mejorar y el canal por el que prefieres recibir respuesta. Te diremos qué conviene construir, automatizar o descartar.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container conversion-grid">
          <div className="conversion-copy">
            <p className="eyebrow">RESPUESTA COMERCIAL</p>
            <h2>Sin formularios eternos ni propuestas genéricas.</h2>
            <p>
              Revisamos el contexto y continuamos la conversación por WhatsApp o correo. El diagnóstico inicial no implica contratación.
            </p>
            <div className="contact-direct">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: {PUBLIC_SITE.phoneDisplay}</a>
              <a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a>
            </div>
            <ul className="trust-list contact-trust-list">
              <li>Objetivo y alcance claros</li>
              <li>Ruta técnica explicada</li>
              <li>Indicadores definidos</li>
              <li>Privacidad y control</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
