import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { PORTFOLIO } from "@/lib/site-data";

export const metadata: Metadata = { title: "Casos y capacidades de HOCKER", description: "Áreas de trabajo y capacidades de Hocker AGI Technologies en producto, automatización, marketing, software y creatividad.", alternates: { canonical: "/casos" } };

export default function CasesPage() {
  return <><section className="vnext-page-hero"><div className="container narrow-container"><p className="vnext-kicker">CASOS / CAPACIDADES</p><h1>La evidencia primero. La narrativa después.</h1><p className="vnext-lead">Mostramos capacidades y trabajo verificable sin convertir prototipos, planes o información confidencial en resultados inventados.</p></div></section><section className="section"><div className="container"><div className="vnext-section-heading"><p className="vnext-kicker">ÁREAS DE TRABAJO</p><h2>Producto, crecimiento, automatización y creatividad.</h2></div><PortfolioExplorer items={PORTFOLIO} /><div className="section-actions"><Link href="/contacto" className="button button-primary">Solicitar un caso relacionado</Link></div></div></section></>;
}
