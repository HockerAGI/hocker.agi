import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { SectionTitle } from "@/components/section-title";
import { CONTACT } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto comercial de Hocker AGI Technologies.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Contacto</div>
            <h1 className="hero-title">Hablemos de tu siguiente venta.</h1>
            <p className="hero-text">Cuéntanos qué necesitas y te respondemos por WhatsApp o email con una ruta concreta.</p>
            <div className="hero-actions">
              <a href={CONTACT.whatsapp} className="button button-primary button-big" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:${CONTACT.email}`} className="button button-secondary button-big">Email</a>
              <Link href="/callback" className="button button-secondary button-big">Pedir callback</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Formulario" title="Escribe y abre el canal correcto" description="Sin formularios infinitos ni procesos raros: directo a la conversación." />
          <LeadForm mode="contact" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3 section-grid">
            <article className="card card-pad service-card"><h3>Email</h3><p>{CONTACT.email}</p></article>
            <article className="card card-pad service-card"><h3>WhatsApp</h3><p>{CONTACT.whatsappPhone}</p></article>
            <article className="card card-pad service-card"><h3>Respuesta</h3><p>Directa y sin vueltas.</p></article>
          </div>
        </div>
      </section>
    </div>
  );
}
