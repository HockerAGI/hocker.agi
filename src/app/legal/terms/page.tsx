import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = { title: "Términos de uso del sitio", description: "Condiciones informativas de uso del sitio público de Hocker AGI Technologies.", alternates: { canonical: "/legal/terms" } };

export default function TermsPage() {
  return <main className="section legal-page"><div className="container narrow-container"><p className="vnext-kicker">LEGAL / USO DEL SITIO</p><h1>Términos de uso</h1><p className="legal-updated">Última actualización: 18 de agosto de 2026</p><div className="legal-content">
    <section><h2>1. Objeto</h2><p>Este sitio presenta información sobre la marca Hocker AGI Technologies, el ecosistema, capacidades, productos y formas de contacto. Su contenido público es informativo.</p></section>
    <section><h2>2. No constituye una oferta vinculante</h2><p>Alcance, entregables, tiempos, costos, licencias, soporte, identidad de la parte contratante y responsabilidades deberán constar en una propuesta o contrato específico. El sitio no acredita por sí mismo una entidad jurídica o autorización regulatoria.</p></section>
    <section><h2>3. Productos en diferentes etapas</h2><p>El catálogo incluye productos y capacidades con distintos niveles de madurez. Una descripción de propósito no equivale a disponibilidad general, autorización financiera, licencia de juego, certificación de seguridad ni integración activa con un tercero.</p></section>
    <section><h2>4. Resultados y métricas</h2><p>Publicidad, automatización, IA o software pueden apoyar procesos y medición, pero no garantizan ventas, posiciones en buscadores, rentabilidad ni resultados específicos. Cualquier resultado publicado deberá estar respaldado por evidencia y contexto.</p></section>
    <section><h2>5. Propiedad intelectual</h2><p>Las marcas, logotipos, textos, interfaces y materiales propios no pueden copiarse, revenderse o presentarse como propios sin autorización. Los derechos sobre entregables contratados se definirán en el acuerdo correspondiente.</p></section>
    <section><h2>6. Uso permitido y terceros</h2><p>No se permite vulnerar el sitio, automatizar envíos abusivos, introducir código malicioso o suplantar identidades. Las plataformas externas mantienen sus propios términos, disponibilidad y políticas; una mención pública no significa una integración contractual activa.</p></section>
    <section><h2>7. Privacidad</h2><p>El tratamiento de información recibida desde este canal se describe en la página de <Link href="/legal/privacy">privacidad</Link>. Los instrumentos integrales aplicables a una relación contractual deberán completar la identidad y requisitos jurídicos correspondientes.</p></section>
    <section><h2>8. Contacto</h2><p>Para aclaraciones escribe a <a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a>.</p></section>
  </div><div className="section-actions"><Link href="/contacto" className="button button-primary">Solicitar información</Link><Link href="/legal/privacy" className="button button-secondary">Privacidad</Link></div></div></main>;
}
