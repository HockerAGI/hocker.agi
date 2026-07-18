import type { Metadata } from "next";
import Link from "next/link";
import { AgiGrid } from "@/components/agi-grid";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "AGIs",
  description: "NOVA y las AGIs del ecosistema Hocker, explicadas de forma simple.",
};

export default function AgisPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">AGIs</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              NOVA dirige. Las demás AGIs especializan el trabajo.
            </h1>
            <p className="hero-text" style={{ maxWidth: 860 }}>
              Una IA central coordina y varias AGIs por función resuelven creatividad, infraestructura, seguridad,
              legal, finanzas y operación.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Hablar del ecosistema</Link>
              <Link href="/apps" className="button button-secondary">Ver apps</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Mapa real"
            title="16 AGIs con rol claro"
            description="Cada una aporta una función concreta. No son nombres decorativos: son piezas del sistema."
          />
          <AgiGrid />
        </div>
      </section>
    </div>
  );
}
