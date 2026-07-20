import type { Metadata } from "next";
import Link from "next/link";
import { StatusTiles } from "@/components/status-tiles";

export const metadata: Metadata = {
  title: "Live",
  description: "Panel público en vivo del ecosistema Hocker AGI Technologies.",
};

const rows = [
  ["Estado", "Operativo y en expansión"],
  ["Web", "Hocker AGI Technologies"],
  ["APIs", "Conectadas por diseño"],
  ["Cloud", "Vercel + Supabase + repos"],
  ["Ruta", "De lead a onboarding"],
  ["Soporte", "WhatsApp y correo"],
];

export default function LivePage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Live</div>
            <h1 className="hero-title">Estado público del sistema.</h1>
            <p className="hero-text">Una vista clara para entender que el ecosistema está vivo, conectado y listo para vender.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Hablar con nosotros</Link>
              <Link href="/status" className="button button-secondary button-big">Ver status</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StatusTiles />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 section-grid">
            {rows.map(([label, value]) => (
              <article key={label} className="card card-pad">
                <div className="kicker">{label}</div>
                <p className="result">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
