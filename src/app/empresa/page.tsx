import type { Metadata } from "next";
import Link from "next/link";
import { PROFILE, SITE } from "@/lib/site-data";

const pillars = [
  {
    title: "Qué somos",
    text: "Hocker AGI Technologies es una plataforma unificada de IA, marketing y software pensada para vender y operar mejor.",
  },
  {
    title: "Cómo trabajamos",
    text: "NOVA coordina, las AGIs especializan y las apps convierten. Todo bajo una sola marca y un solo criterio.",
  },
  {
    title: "Qué defendemos",
    text: "Claridad, trazabilidad, performance, privacidad, y una experiencia premium de verdad.",
  },
  {
    title: "A quién servimos",
    text: "Marcas, empresas y equipos que necesitan más ventas, mejor operación y más orden.",
  },
];

export const metadata: Metadata = {
  title: "Empresa",
  description: "Historia, visión y doctrina de Hocker AGI Technologies.",
};

export default function CompanyPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="panel hero-panel">
            <div className="kicker">Empresa</div>
            <h1 className="hero-title">Una empresa que piensa como sistema operativo.</h1>
            <p className="hero-text">La marca, la tecnología y el negocio están diseñados para trabajar como una sola pieza.</p>
            <div className="hero-actions">
              <Link href="/portfolio" className="button button-primary button-big">Ver quién soy</Link>
              <Link href="/agis" className="button button-secondary button-big">Ver AGIs</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2 section-grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card card-pad">
                <div className="kicker">{pillar.title}</div>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel panel-cta">
            <div className="kicker">Perfil</div>
            <h2>{PROFILE.name}</h2>
            <p className="hero-text">{PROFILE.summary}</p>
            <div className="tag-row">
              {PROFILE.bullets.map((bullet) => (
                <span key={bullet} className="tag tag-soft">{bullet}</span>
              ))}
            </div>
            <p className="section-note">Sitio oficial: {SITE.url}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
