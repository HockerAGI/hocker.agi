import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad del sitio oficial de Hocker AGI Technologies.",
};

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="panel legal-panel">
          <div className="kicker">Legal</div>
          <h1 className="hero-title">Aviso de privacidad</h1>
          <p className="hero-text">Tus datos se usan solo para responder, cotizar y dar seguimiento comercial.</p>
          <div className="legal-list">
            <p>1. Recopilamos únicamente datos que compartes en contacto o callback.</p>
            <p>2. Los usamos para comunicación, soporte y propuesta comercial.</p>
            <p>3. No vendemos tus datos.</p>
            <p>4. Puedes solicitar corrección o eliminación desde contacto.</p>
          </div>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Contactar</Link>
            <Link href="/legal/terms" className="button button-secondary button-big">Términos</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
