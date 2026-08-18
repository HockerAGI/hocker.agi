import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { FOUNDER_PROFILE, PROFESSIONAL_EXPERIENCE, SELECTED_WORK, SKILL_GROUPS } from "@/lib/portfolio-data";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Armando Chávez · Portafolio profesional",
  description: "Portafolio profesional de Armando Chávez: estrategia digital, IA aplicada, producto, marketing y producción audiovisual.",
  alternates: { canonical: "/portafolio" },
  openGraph: { title: "Armando Chávez · Portafolio profesional", description: FOUNDER_PROFILE.summary, url: `${PUBLIC_SITE.url}/portafolio`, images: [{ url: PUBLIC_SITE.ogImage, width: 1600, height: 900, alt: "Portafolio profesional de Armando Chávez" }], type: "profile" },
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${PUBLIC_SITE.url}/portafolio#profile`,
  url: `${PUBLIC_SITE.url}/portafolio`,
  name: "Armando Chávez · Portafolio profesional",
  mainEntity: { "@type": "Person", name: FOUNDER_PROFILE.name, alternateName: FOUNDER_PROFILE.alias, jobTitle: "Fundador · Estrategia digital, IA aplicada y producto", description: FOUNDER_PROFILE.summary, worksFor: { "@id": `${PUBLIC_SITE.url}/#organization` } },
};

export default function PortafolioPage() {
  const socialLinks = Object.entries(FOUNDER_PROFILE.socials).filter((entry): entry is [string, string] => Boolean(entry[1]));
  return <>
    <Script id="founder-profile-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
    <section className="vnext-portfolio-hero"><div className="container vnext-portfolio-grid"><div><p className="vnext-kicker">PORTAFOLIO PROFESIONAL / ARMANDO CHÁVEZ</p><h1>Creatividad, negocio y tecnología en una sola dirección.</h1><p className="vnext-lead">{FOUNDER_PROFILE.summary}</p><div className="vnext-role-line">{FOUNDER_PROFILE.headline}</div><div className="hero-actions"><a className="button button-primary button-big" href={`mailto:${FOUNDER_PROFILE.email}?subject=Solicitud%20de%20CV%20-%20Armando%20Chávez`}>Solicitar CV</a><Link className="button button-secondary button-big" href="#trabajo">Ver trabajo seleccionado</Link></div></div><aside className="vnext-profile-card" aria-label="Perfil profesional resumido"><span className="vnext-profile-index">AC / 01</span><strong>Armando Chávez “Hocker”</strong><p>Estrategia digital, producto, IA aplicada y producción audiovisual.</p><dl><div><dt>Base</dt><dd>México</dd></div><div><dt>Enfoque</dt><dd>Producto + Growth</dd></div><div><dt>Trabajo</dt><dd>Digital / Remoto</dd></div></dl></aside></div></section>
    <section className="section" id="trabajo"><div className="container"><div className="vnext-section-heading"><p className="vnext-kicker">TRABAJO SELECCIONADO</p><h2>Casos explicados por problema, decisión y evidencia.</h2><p>No publico métricas, créditos o resultados que no pueda respaldar.</p></div><div className="vnext-case-stack">{SELECTED_WORK.map((item, index) => <article className="vnext-case" key={item.id}><div className="vnext-case-number">0{index + 1}</div><div><span>{item.kicker}</span><h3>{item.title}</h3></div><div className="vnext-case-details"><p><strong>Reto.</strong> {item.challenge}</p><p><strong>Contribución.</strong> {item.contribution}</p><p><strong>Evidencia.</strong> {item.evidence}</p></div></article>)}</div></div></section>
    <section className="section vnext-surface-section"><div className="container vnext-two-column"><div className="vnext-section-heading"><p className="vnext-kicker">EXPERIENCIA</p><h2>Perfil multidisciplinario, ejecución conectada.</h2></div><div className="vnext-timeline">{PROFESSIONAL_EXPERIENCE.map((item) => <article key={item.title}><span>{item.period}</span><h3>{item.title}</h3><strong>{item.role}</strong><p>{item.summary}</p></article>)}<article><span>2016–2020</span><h3>Universidad del Valle de Puebla</h3><strong>Producción y Animación Digital</strong><p>Formación en producción digital, narrativa visual, diseño, animación y medios audiovisuales.</p></article></div></div></section>
    <section className="section"><div className="container"><div className="vnext-section-heading"><p className="vnext-kicker">CAPACIDADES</p><h2>Un perfil para equipos que necesitan conectar disciplinas.</h2></div><div className="vnext-skill-grid">{SKILL_GROUPS.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>
    <section className="section vnext-contact-band"><div className="container vnext-contact-grid"><div><p className="vnext-kicker">CONTACTO PROFESIONAL</p><h2>¿Necesitas CV, referencias o evidencia adicional?</h2><p>La página queda preparada para conectar LinkedIn, GitHub, Behance, Instagram, YouTube o Vimeo cuando se proporcionen los perfiles oficiales.</p></div><div className="vnext-contact-actions"><a className="button button-primary button-big" href={`mailto:${FOUNDER_PROFILE.email}`}>Contactar</a>{socialLinks.length > 0 ? socialLinks.map(([network, url]) => <a key={network} href={url} target="_blank" rel="noopener noreferrer">{network}</a>) : <span>Redes profesionales pendientes de conectar</span>}</div></div></section>
  </>;
}
