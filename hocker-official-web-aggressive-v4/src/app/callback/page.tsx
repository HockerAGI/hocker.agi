import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Callback",
  description: "Solicita una llamada con Hocker AGI Technologies.",
};

export default function CallbackPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Callback</div>
            <h1 className="hero-title">Te llamamos con una propuesta real.</h1>
            <p className="hero-text">Si quieres cerrar más rápido, deja tus datos y abrimos WhatsApp o email con la propuesta lista.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Ir a contacto</Link>
              <Link href="/portfolio" className="button button-secondary button-big">Ver portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Solicitar" title="Callback comercial" description="Ideal para leads que prefieren una llamada en lugar de un formulario largo." />
          <LeadForm mode="callback" />
        </div>
      </section>
    </div>
  );
}
