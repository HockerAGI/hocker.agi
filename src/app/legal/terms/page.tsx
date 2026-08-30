import type { Metadata } from "next";
import { PUBLIC_SITE } from "@/lib/public-site";
export const metadata: Metadata = { title: "Términos y condiciones" };
export default function TermsPage() {
  return (
    <div className="container section">
      <h1>Términos y condiciones</h1>
      <p><strong>Marca:</strong> {PUBLIC_SITE.commercialName}</p>
      <p><strong>Titular:</strong> {PUBLIC_SITE.legalName}, {PUBLIC_SITE.legalType}</p>
      <p>Contenido informativo. Disponibilidad sujeta a alcance y regulación.</p>
    </div>
  );
}
