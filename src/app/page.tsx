import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { APPS } from "@/lib/site-data";
import { COMMERCIAL_PROCESS, PUBLIC_FAQS, PUBLIC_SERVICES, PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "IA, automatización, software y crecimiento",
  description: PUBLIC_SITE.description,
  alternates: { canonical: "/" },
};

const proof = [
  ["10", "productos en el catálogo HOCKER"],
  ["16", "AGIs especializadas bajo gobierno"],
  ["01", "control plane para acciones materiales"],
  ["∞", "arquitectura modular para evolucionar"],
] as const;

export default function HomePage() {
  const whatsappUrl = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero evaluar un proyecto con Hocker AGI Technologies.")}`;

  return (
    <>
      <section className="vnext-hero">
        <div className="container vnext-hero-grid">
          <div className="vnext-hero-copy">
            <p className="vnext-kicker">HOCKER AGI TECHNOLOGIES / INTELIGENCIA APLICADA</p>
            <h1>Sistemas inteligentes para convertir complejidad en crecimiento.</h1>
            <p className="vnext-lead">Conectamos estrategia, IA, software, automatización y marketing en soluciones que pueden medirse, gobernarse y evolucionar.</p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Evaluar un proyecto</Link>
              <Link href="/portafolio" className="button button-secondary button-big">Ver portafolio</Link>
            </div>
            <div className="vnext-hero-meta" aria-label="Principios de HOCKER">
              <span>Evidencia antes que narrativa</span><span>Diseño modular</span><span>Control humano proporcional al riesgo</span>
            </div>
          </div>

          <div className="vnext-system-view" aria-label="Modelo operativo de HOCKER">
            <div className="vnext-system-head"><span>HOCKER / SYSTEM VIEW</span><span>GOVERNED</span></div>
            <div className="vnext-system-core">
              <div className="vnext-core-mark"><Image src={PUBLIC_SITE.symbol} alt="Isotipo oficial de Hocker AGI Technologies" width={220} height={220} priority /></div>
              <div className="vnext-core-copy"><span>CONTROL PLANE</span><strong>HOCKER ONE</strong><small>Aprobación · evidencia · operación</small></div>
            </div>
            <div className="vnext-system-flow" aria-label="Flujo de IA gobernada"><span>OBJETIVO</span><i aria-hidden="true">→</i><span>NOVA</span><i aria-hidden="true">→</i><span>ESPECIALISTAS</span><i aria-hidden="true">→</i><span>EVIDENCIA</span></div>
            <div className="vnext-system-footer"><span>Material actions → Owner Gate</span><span>Public layer / no secrets</span></div>
          </div>
        </div>
        <div className="container vnext-proof-grid">{proof.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="section vnext-surface-section" id="soluciones">
        <div className="container">
          <div className="vnext-section-heading vnext-split-heading"><div><p className="vnext-kicker">SOLUCIONES</p><h2>La tecnología entra después de entender el problema.</h2></div><p>Diseñamos el mínimo sistema capaz de producir el resultado esperado y dejamos una base preparada para crecer.</p></div>
          <div className="vnext-service-grid">{PUBLIC_SERVICES.map((service, index) => <article key={service.title}><span className="vnext-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.summary}</p><strong>{service.outcome}</strong></article>)}</div>
          <div className="section-actions"><Link href="/soluciones" className="text-link">Explorar soluciones <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>

      <section className="section" id="productos">
        <div className="container">
          <div className="vnext-section-heading vnext-split-heading"><div><p className="vnext-kicker">PRODUCTOS DEL ECOSISTEMA</p><h2>Diez productos. Una lógica de plataforma.</h2></div><p>Cada producto tiene un dominio propio. Su disponibilidad pública depende de evidencia, controles, integraciones y regulación aplicable.</p></div>
          <div className="vnext-product-grid">{APPS.map((app, index) => <Link href={`/apps/${app.slug}`} className="vnext-product-card" key={app.slug}><div className="vnext-product-top"><span>0{index + 1}</span><Image src={app.icon} alt={`Identidad oficial de ${app.title}`} width={96} height={96} /></div><div><small>{app.badge}</small><h3>{app.title}</h3><p>{app.short}</p></div><span className="vnext-product-arrow" aria-hidden="true">↗</span></Link>)}</div>
          <div className="section-actions"><Link href="/apps" className="button button-secondary">Ver catálogo completo</Link><Link href="/ecosistema" className="button button-secondary">Entender el ecosistema</Link></div>
        </div>
      </section>

      <section className="section vnext-agi-band">
        <div className="container vnext-agi-grid">
          <div><p className="vnext-kicker">AGIs / MODELO OPERATIVO</p><h2>Especialistas coordinados. Acciones gobernadas.</h2><p>NOVA coordina contexto y especialización. Las capacidades de alto impacto no se convierten en ejecución material sin políticas, aprobación y evidencia.</p><Link href="/agis" className="button button-primary">Ver cómo funciona</Link></div>
          <ol className="vnext-orchestration"><li><span>01</span><div><strong>Solicitud</strong><p>Objetivo, contexto y restricciones.</p></div></li><li><span>02</span><div><strong>NOVA</strong><p>Orquesta y selecciona capacidades.</p></div></li><li><span>03</span><div><strong>AGIs especialistas</strong><p>Analizan y estructuran propuestas.</p></div></li><li><span>04</span><div><strong>Owner Gate</strong><p>Gobierna acciones materiales cuando corresponde.</p></div></li></ol>
        </div>
      </section>

      <section className="section"><div className="container"><div className="vnext-section-heading"><p className="vnext-kicker">MÉTODO HOCKER</p><h2>Diseñar, probar y escalar sin perder la verdad operativa.</h2></div><ol className="vnext-process-grid">{COMMERCIAL_PROCESS.map((item) => <li key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol></div></section>
      <section className="section vnext-founder-band"><div className="container vnext-founder-grid"><div><p className="vnext-kicker">FUNDADOR / PORTAFOLIO</p><h2>Estrategia, creatividad y tecnología bajo una misma dirección.</h2></div><div><h3>Armando Chávez “Hocker”</h3><p>Perfil multidisciplinario en estrategia digital, producto, IA aplicada, marketing y producción audiovisual.</p><Link href="/portafolio" className="text-link">Abrir portafolio profesional <span aria-hidden="true">→</span></Link></div></div></section>
      <section className="section" id="preguntas"><div className="container vnext-faq-grid"><div className="vnext-section-heading"><p className="vnext-kicker">FAQ</p><h2>Lo que debe quedar claro antes de iniciar.</h2></div><div className="faq-list">{PUBLIC_FAQS.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></div></section>
      <section className="section vnext-conversion" id="contacto"><div className="container conversion-grid"><div className="conversion-copy"><p className="vnext-kicker">SIGUIENTE PASO</p><h2>Define el problema. Nosotros ayudamos a diseñar el sistema.</h2><p>Comparte el objetivo, el contexto y las restricciones. No prometemos resultados que no podamos medir ni capacidades que todavía no estén verificadas.</p><div className="contact-direct"><a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{PUBLIC_SITE.phoneDisplay}</a></div></div><LeadForm /></div></section>
    </>
  );
}
