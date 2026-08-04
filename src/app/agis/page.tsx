import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agentes especializados de inteligencia artificial",
  description: "Conoce cómo Hocker AGI organiza agentes especializados para marketing, automatización, análisis, seguridad y operación.",
  alternates: { canonical: "/agis" },
};

const capabilities = [
  { title: "Orquestación", text: "Coordina solicitudes, contexto, reglas y prioridades para que cada flujo tenga una salida consistente.", benefit: "Menos tareas sueltas y mayor continuidad." },
  { title: "Marketing y contenido", text: "Apoya investigación, planeación, variantes creativas, copies, reporting y aprendizaje de campañas.", benefit: "Producción más rápida con control de marca." },
  { title: "Ventas y seguimiento", text: "Califica solicitudes, prepara contexto y activa tareas de seguimiento sin sustituir decisiones comerciales críticas.", benefit: "Menor tiempo de respuesta y mejor trazabilidad." },
  { title: "Análisis y finanzas", text: "Consolida indicadores, detecta desviaciones y presenta información útil para priorizar acciones.", benefit: "Decisiones basadas en datos verificables." },
  { title: "Infraestructura y seguridad", text: "Supervisa integraciones, permisos, registros, disponibilidad y cumplimiento de reglas técnicas.", benefit: "Operación más controlada y auditable." },
  { title: "Conocimiento y memoria", text: "Organiza documentos y contexto autorizado para evitar comenzar desde cero en cada interacción.", benefit: "Respuestas coherentes y aprendizaje operativo." },
] as const;

export default function AgisPage() {
  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">AGENTES ESPECIALIZADOS</p>
          <h1 className="hero-title">Una arquitectura de IA por funciones, no un chatbot para todo.</h1>
          <p className="hero-text">
            Distribuimos tareas entre capacidades especializadas y mantenemos reglas de aprobación humana para acciones sensibles, financieras o legales.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Evaluar un caso de uso</Link>
            <Link href="/ecosistema" className="button button-secondary button-big">Conocer la arquitectura</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">CAPACIDADES PÚBLICAS</p>
              <h2>Especialización donde realmente aporta.</h2>
            </div>
            <p>La composición de agentes, modelos e integraciones se define según el proyecto. La información sensible de infraestructura no se expone en el sitio público.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <strong>{item.benefit}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container proposal-panel">
          <div>
            <p className="eyebrow">CONTROL Y GOBERNANZA</p>
            <h2>La autonomía se limita por reglas, permisos y evidencia.</h2>
            <p>Las acciones críticas requieren validación, trazabilidad y un responsable definido. Automatizar no significa perder el control.</p>
          </div>
          <Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link>
        </div>
      </section>
    </>
  );
}
