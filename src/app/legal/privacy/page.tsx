import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Privacidad del sitio",
  description: "Información de privacidad aplicable al sitio, formularios y medición opcional de Hocker AGI Technologies.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return <main className="section legal-page"><div className="container narrow-container"><p className="vnext-kicker">LEGAL / PRIVACIDAD</p><h1>Privacidad del sitio</h1><p className="legal-updated">Última actualización: 18 de agosto de 2026</p><div className="legal-content">
    <section><h2>1. Identidad y alcance</h2><p>Hocker AGI Technologies se utiliza en este sitio como marca del proyecto y del ecosistema. Este texto describe las prácticas del canal web y no debe interpretarse como evidencia de una razón social, RFC o representación jurídica que todavía no estén verificados públicamente. Para solicitudes relacionadas con privacidad utiliza <a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a>.</p></section>
    <section><h2>2. Datos que puede recibir el sitio</h2><p>Nombre, empresa, correo, teléfono, necesidad, rango de inversión, mensaje, página de origen y parámetros de campaña. Para seguridad y diagnóstico también puede procesarse información técnica limitada como navegador y fecha de envío.</p></section>
    <section><h2>3. Finalidades</h2><p>La información se utiliza para responder solicitudes, preparar diagnósticos o propuestas, dar seguimiento solicitado, prevenir abuso y medir el sitio únicamente cuando exista consentimiento para categorías opcionales.</p></section>
    <section><h2>4. Proveedores y transferencias</h2><p>El sitio puede depender de servicios de hosting, correo, mensajería, analítica o automatización. Una integración solo se considera activa cuando está configurada. No afirmamos aquí un catálogo de subencargados que no haya sido verificado.</p></section>
    <section id="cookies"><h2>5. Preferencias y medición</h2><p>Las funciones necesarias operan sin activar analítica ni publicidad opcionales. Puedes aceptar o rechazar esas categorías y modificar la decisión posteriormente mediante el control “Cambiar preferencias” visible en el sitio.</p></section>
    <section><h2>6. Conservación y seguridad</h2><p>Los datos se conservan únicamente durante el tiempo necesario para atender la finalidad aplicable y obligaciones que correspondan. El sitio aplica controles técnicos razonables; ningún servicio conectado a Internet puede garantizar riesgo cero.</p></section>
    <section><h2>7. Solicitudes de privacidad</h2><p>Puedes solicitar acceso, corrección, cancelación, oposición, revocación o limitación escribiendo a la dirección de contacto. La respuesta y verificación deberán ser proporcionales a la solicitud y al marco legal aplicable.</p></section>
    <section><h2>8. Versión integral</h2><p>Antes de una operación contractual o tratamiento regulado, la documentación aplicable deberá identificar al responsable jurídico, domicilio, bases, transferencias, encargados, retención y mecanismos formales que correspondan a la jurisdicción y producto.</p></section>
  </div><div className="section-actions"><Link href="/contacto" className="button button-primary">Contactar</Link><Link href="/legal/terms" className="button button-secondary">Términos de uso</Link></div></div></main>;
}
