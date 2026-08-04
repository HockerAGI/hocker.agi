import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { LeadForm } from "@/components/lead-form";
import {
  COMMERCIAL_PROCESS,
  PUBLIC_FAQS,
  PUBLIC_PRODUCTS,
  PUBLIC_SERVICES,
  PUBLIC_SITE,
} from "@/lib/public-site";

export const metadata: Metadata = {
  title: "IA, automatización y marketing | Hocker AGI",
  description: PUBLIC_SITE.description,
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PUBLIC_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  const whatsappUrl = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero conocer cómo Hocker AGI puede ayudar a mi empresa."
  )}`;

  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero commercial-hero">
        <div className="container hero-grid commercial-hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">INTELIGENCIA ARTIFICIAL APLICADA AL NEGOCIO</p>
            <h1>Automatiza la operación. Convierte más. Decide con datos.</h1>
            <p className="hero-text">
              Hocker AGI Technologies integra estrategia, inteligencia artificial, software y marketing para transformar procesos dispersos en un sistema comercial medible.
            </p>
            <div className="hero-actions">
              <Link href="/contacto" className="button button-primary button-big">Solicitar diagnóstico</Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary button-big">Hablar por WhatsApp</a>
            </div>
            <ul className="trust-list" aria-label="Capacidades principales">
              <li>Captación y seguimiento de leads</li>
              <li>Automatización de procesos</li>
              <li>Plataformas y software a medida</li>
              <li>Publicidad y analítica</li>
            </ul>
          </div>

          <div className="brand-stage" aria-label="Identidad de Hocker AGI Technologies">
            <div className="brand-stage-glow" />
            <Image
              src={PUBLIC_SITE.heroImage}
              alt="Hocker AGI Technologies: inteligencia artificial, automatización, marketing y software"
              width={1600}
              height={900}
              sizes="(max-width: 900px) 100vw, 52vw"
              className="brand-stage-logo brand-stage-hero"
              priority
            />
            <div className="brand-stage-note">
              <span>Sistema empresarial conectado</span>
              <strong>Estrategia + IA + Automatización + Software</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Propuesta de valor">
        <div className="container proof-grid">
          <div><strong>Una sola estrategia</strong><span>Sin herramientas aisladas ni mensajes contradictorios.</span></div>
          <div><strong>Procesos conectados</strong><span>Formulario, WhatsApp, CRM, campañas y operación.</span></div>
          <div><strong>Métricas de negocio</strong><span>Leads, conversión, costos, ventas y tiempos de respuesta.</span></div>
          <div><strong>Control humano</strong><span>Automatización con reglas, permisos y revisión.</span></div>
        </div>
      </section>

      <section className="section" id="soluciones">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">SOLUCIONES</p>
              <h2>La tecnología debe resolver una fricción concreta.</h2>
            </div>
            <p>Partimos del objetivo comercial y construimos únicamente los componentes necesarios para alcanzarlo.</p>
          </div>
          <div className="service-grid">
            {PUBLIC_SERVICES.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <strong>{service.outcome}</strong>
              </article>
            ))}
          </div>
          <div className="section-actions">
            <Link href="/soluciones" className="text-link">Ver todas las soluciones <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section section-contrast" id="metodo">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">MÉTODO HOCKER</p>
            <h2>De una necesidad difusa a un sistema ejecutable.</h2>
            <p>El proyecto se diseña con alcance, responsables, métricas y una ruta de validación antes de escalar.</p>
          </div>
          <ol className="process-grid">
            {COMMERCIAL_PROCESS.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="productos">
        <div className="container">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">PRODUCTOS DEL ECOSISTEMA</p>
              <h2>Una arquitectura modular que puede crecer con la empresa.</h2>
            </div>
            <p>Cada producto resuelve un frente específico y puede conectarse con los demás sin exponer la operación interna.</p>
          </div>
          <div className="product-grid product-grid-expanded">
            {PUBLIC_PRODUCTS.map((product) => (
              <article className="product-card" key={product.title}>
                <Image src={product.image} alt={`Icono oficial de ${product.title}`} width={160} height={160} className="product-logo" />
                <div>
                  <span>{product.label}</span>
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                  <Link href={product.href}>Conocer producto <span aria-hidden="true">→</span></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-actions">
            <Link href="/apps" className="button button-secondary">Explorar todos los productos</Link>
            <Link href="/ecosistema" className="button button-secondary">Conocer la tecnología</Link>
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container founder-grid">
          <div>
            <p className="eyebrow">DIRECCIÓN ESTRATÉGICA</p>
            <h2>Visión creativa, lógica comercial y ejecución técnica.</h2>
          </div>
          <div className="founder-copy">
            <h3>Armando Chávez · Fundador</h3>
            <p>
              Hocker AGI Technologies reúne experiencia en publicidad, producción digital, automatización y desarrollo para construir soluciones completas, no piezas aisladas.
            </p>
            <Link href="/empresa" className="text-link">Conocer la empresa <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section" id="preguntas">
        <div className="container faq-layout">
          <div className="section-head sticky-head">
            <p className="eyebrow">PREGUNTAS FRECUENTES</p>
            <h2>Antes de comenzar.</h2>
            <p>Respuestas directas sobre alcance, integración y medición.</p>
          </div>
          <div className="faq-list">
            {PUBLIC_FAQS.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section conversion-section" id="contacto">
        <div className="container conversion-grid">
          <div className="conversion-copy">
            <p className="eyebrow">SIGUIENTE PASO</p>
            <h2>Cuéntanos qué quieres mejorar.</h2>
            <p>
              Recibirás una conversación inicial para identificar el problema, la oportunidad y la ruta más razonable. Sin promesas infladas y sin obligarte a contratar.
            </p>
            <div className="contact-direct">
              <a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{PUBLIC_SITE.phoneDisplay}</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
