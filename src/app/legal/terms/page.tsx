import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos de uso del sitio oficial de Hocker AGI Technologies.",
};

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="panel legal-panel">
          <div className="kicker">Legal</div>
          <h1 className="hero-title">Términos y condiciones</h1>
          <p className="hero-text">Este sitio presenta servicios, apps y portfolio de Hocker AGI Technologies.</p>
          <div className="legal-list">
            <p>1. El contenido es informativo y comercial.</p>
            <p>2. Las soluciones se cotizan según alcance, tiempos y recursos.</p>
            <p>3. El acceso privado es independiente y puede requerir autorización.</p>
            <p>4. El uso de datos de contacto se limita al seguimiento comercial y soporte.</p>
          </div>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Contacto</Link>
            <Link href="/legal/privacy" className="button button-secondary button-big">Privacidad</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
