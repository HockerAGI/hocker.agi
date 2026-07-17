import type { Metadata } from "next";
import Link from "next/link";
import { StatusTiles } from "@/components/status-tiles";

export const metadata: Metadata = {
  title: "Status",
  description: "Estado público del ecosistema Hocker AGI Technologies.",
};

export default function StatusPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel">
            <div className="kicker">Status</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
              Un vistazo rápido al ecosistema
            </h1>
            <p className="hero-text" style={{ maxWidth: 860 }}>
              Esta página funciona como una ventana pública simple: muestra lo importante y evita saturar con ruido.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary">Quiero trabajar contigo</Link>
              <Link href="/portfolio" className="button button-secondary">Ver portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StatusTiles />
        </div>
      </section>
    </div>
  );
}
