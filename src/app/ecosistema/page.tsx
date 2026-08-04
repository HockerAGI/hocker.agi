import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecosistema tecnológico",
  description: "Arquitectura pública de Hocker AGI Technologies: experiencia, automatización, datos, inteligencia y control conectados.",
  alternates: { canonical: "/ecosistema" },
};

const layers = [
  { title: "Experiencia", text: "Sitios, aplicaciones, formularios, WhatsApp y paneles con una navegación coherente para clientes y equipos." },
  { title: "Automatización", text: "Flujos que conectan solicitudes, notificaciones, seguimiento, tareas y sistemas autorizados." },
  { title: "Datos", text: "Información organizada para medir adquisición, conversión, operación y servicio sin mezclar contextos sensibles." },
  { title: "Inteligencia", text: "Agentes especializados que analizan, redactan, clasifican y recomiendan dentro de reglas definidas." },
  { title: "Gobernanza", text: "Permisos, aprobaciones, registros y políticas para conservar control humano y trazabilidad." },
] as const;

export default function EcosystemPage() {
  return (
    <>
      <section className="page-hero commercial-page-hero">
        <div className="container narrow-container">
          <p className="eyebrow">ECOSISTEMA</p>
          <h1 className="hero-title">Una arquitectura conectada, visible y gobernable.</h1>
          <p className="hero-text">
            La propuesta Hocker integra experiencia digital, automatización, información e inteligencia. Cada capa puede implementarse por separado y conectarse cuando el negocio lo necesita.
          </p>
          <div className="hero-actions">
            <Link href="/contacto" className="button button-primary button-big">Diseñar una arquitectura</Link>
            <Link href="/apps" className="button button-secondary button-big">Ver productos</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">CAPAS PÚBLICAS</p>
              <h2>Todo conectado, sin convertir el negocio en una caja negra.</h2>
            </div>
            <p>La arquitectura interna, credenciales, reglas sensibles y detalles de seguridad se documentan fuera del sitio público y se comparten únicamente con autorización.</p>
          </div>
          <div className="architecture-stack">
            {layers.map((layer, index) => (
              <article key={layer.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">PRINCIPIOS DE IMPLEMENTACIÓN</p>
            <h2>Modular, medible y preparado para evolucionar.</h2>
          </div>
          <div className="principle-grid">
            <article><h3>Empieza por el cuello de botella</h3><p>No se instala todo. Se resuelve primero la fricción con mayor impacto.</p></article>
            <article><h3>Conecta después de validar</h3><p>Las integraciones se agregan cuando el flujo principal ya funciona y puede medirse.</p></article>
            <article><h3>Controla las acciones sensibles</h3><p>Pagos, datos, decisiones legales y publicaciones críticas requieren permisos claros.</p></article>
            <article><h3>Documenta para no depender</h3><p>Procesos, configuraciones y responsabilidades se registran para facilitar soporte y continuidad.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container proposal-panel">
          <div>
            <p className="eyebrow">ARQUITECTURA A MEDIDA</p>
            <h2>Construye solo las capas que tu empresa puede aprovechar.</h2>
            <p>El diagnóstico identifica prioridades, dependencias, riesgos y una secuencia de implementación realista.</p>
          </div>
          <Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link>
        </div>
      </section>
    </>
  );
}
