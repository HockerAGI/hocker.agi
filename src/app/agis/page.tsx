import type { Metadata } from "next";
import Link from "next/link";
import { AgiOperatingDemo } from "@/components/agi-operating-demo";

export const metadata: Metadata = {
  title: "AGIs especializadas y gobernanza de IA",
  description: "Conoce el modelo operativo de HOCKER: NOVA coordina especialistas y las acciones materiales se gobiernan mediante políticas, evidencia y Owner Gate.",
  alternates: { canonical: "/agis" },
};

const agents = [
  ["NOVA", "Orquestación", "Coordina contexto, misión y especialistas dentro de límites definidos."],
  ["SYNTIA", "Memoria", "Organiza contexto y conocimiento autorizado con trazabilidad."],
  ["VERTX", "Seguridad", "Revisa integridad, riesgos técnicos y evidencia de seguridad."],
  ["NUMIA", "FinOps", "Analiza costos, presupuestos y señales financieras sin mover fondos."],
  ["REVIA", "Revenue", "Prepara calificación, seguimiento y contexto comercial."],
  ["NOVA ADS", "Growth", "Especializa análisis y planeación de adquisición y campañas."],
] as const;

export default function AgisPage() {
  return <>
    <section className="vnext-page-hero vnext-agi-hero"><div className="container vnext-page-grid"><div><p className="vnext-kicker">16 AGIs / ESPECIALIZACIÓN GOBERNADA</p><h1>Una IA no necesita hacerlo todo para aportar más.</h1><p className="vnext-lead">HOCKER separa responsabilidades: NOVA coordina, especialistas analizan y las acciones materiales permanecen sujetas a controles, aprobación y evidencia.</p><div className="hero-actions"><Link href="#demo" className="button button-primary button-big">Ver demostración</Link><Link href="/contacto" className="button button-secondary button-big">Evaluar caso de uso</Link></div></div><aside className="vnext-state-panel"><span>PUBLIC OPERATING MODEL</span><strong>Reason → Review → Evidence → Gate</strong><p>La interfaz pública no expone secretos, credenciales ni herramientas internas.</p></aside></div></section>
    <section className="section" id="demo"><div className="container"><div className="vnext-section-heading vnext-split-heading"><div><p className="vnext-kicker">DEMOSTRACIÓN DEL MODELO OPERATIVO</p><h2>Así se distribuye una misión.</h2></div><p>Es una simulación de interfaz basada en el modelo actual. No invoca runtimes ni ejecuta acciones productivas.</p></div><AgiOperatingDemo /></div></section>
    <section className="section vnext-surface-section"><div className="container"><div className="vnext-section-heading"><p className="vnext-kicker">ESPECIALISTAS REPRESENTATIVOS</p><h2>Dominios claros, permisos mínimos.</h2></div><div className="vnext-agent-grid">{agents.map(([name, domain, text]) => <article key={name}><span>{domain}</span><h3>{name}</h3><p>{text}</p></article>)}</div><p className="vnext-trust-note">El registro operativo actual mantiene las 16 AGIs con ejecución material deshabilitada desde la capa de razonamiento. El Owner Gate de Hocker One conserva autoridad sobre acciones sensibles.</p></div></section>
    <section className="section"><div className="container vnext-governance-grid"><div><p className="vnext-kicker">GOBERNANZA</p><h2>Razonar no equivale a ejecutar.</h2></div><div className="vnext-rule-list"><p><strong>01 · Mínimo privilegio.</strong> Cada capacidad recibe únicamente el contexto y las herramientas necesarias.</p><p><strong>02 · Salida estructurada.</strong> Propuestas, evidencia y riesgos se separan de cualquier efecto externo.</p><p><strong>03 · Owner Gate.</strong> Las acciones materiales pasan por controles y aprobación proporcional al riesgo.</p><p><strong>04 · Trazabilidad.</strong> La evidencia importa tanto como la respuesta.</p></div></div></section>
  </>;
}
