import type { Metadata } from "next";
import { PUBLIC_SITE } from "@/lib/public-site";
export const metadata: Metadata = { title: "Aviso de privacidad" };
export default function PrivacyPage() {
  return (
    <div className="container section">
      <h1>Aviso de privacidad</h1>
      <p><strong>Responsable:</strong> {PUBLIC_SITE.legalName} operando como {PUBLIC_SITE.commercialName}.</p>
      <p><strong>Domicilio:</strong> Tuxtla Gutiérrez, Chiapas. Domicilio completo a disposición en medios privados.</p>
      <p><strong>Finalidad:</strong> Contacto comercial y evaluación de proyectos.</p>
      <p>Marca pública: {PUBLIC_SITE.brand}. Este es el sitio oficial de {PUBLIC_SITE.shortBrand || "HOCKER"}.</p>
      <p>ARCO: {PUBLIC_SITE.email}</p>
    </div>
  );
}
