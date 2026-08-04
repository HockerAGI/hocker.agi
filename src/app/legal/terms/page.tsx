import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos de uso del sitio y condiciones generales de información comercial de Hocker AGI Technologies.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <main className="section legal-page">
      <div className="container narrow-container">
        <p className="eyebrow">LEGAL</p>
        <h1>Términos y condiciones</h1>
        <p className="legal-updated">Última actualización: 4 de agosto de 2026</p>

        <div className="legal-content">
          <section>
            <h2>1. Objeto del sitio</h2>
            <p>
              Este sitio presenta información comercial sobre {PUBLIC_SITE.brand}, sus capacidades, productos y formas de contacto. La navegación implica la aceptación de estos términos en lo aplicable al uso del sitio.
            </p>
          </section>

          <section>
            <h2>2. Información y propuestas</h2>
            <p>
              El contenido público es informativo y no constituye una oferta vinculante. Alcance, entregables, tiempos, costos, licencias, soporte y responsabilidades se definen en una propuesta o contrato específico aceptado por las partes.
            </p>
          </section>

          <section>
            <h2>3. Resultados y métricas</h2>
            <p>
              Las estrategias de publicidad, automatización o software pueden mejorar procesos y capacidad de medición, pero no garantizan ventas, posiciones en buscadores, rentabilidad ni resultados específicos. El desempeño depende de factores como oferta, mercado, presupuesto, datos, cumplimiento y operación del cliente.
            </p>
          </section>

          <section>
            <h2>4. Propiedad intelectual</h2>
            <p>
              Marcas, logotipos, textos, interfaces y materiales propios están protegidos por la legislación aplicable. No se permite copiarlos, revenderlos, descompilarlos o presentarlos como propios sin autorización. Los derechos sobre entregables contratados se definirán en el acuerdo correspondiente.
            </p>
          </section>

          <section>
            <h2>5. Uso permitido</h2>
            <p>
              Queda prohibido intentar vulnerar el sitio, automatizar envíos abusivos, introducir código malicioso, suplantar identidades o utilizar la información para actividades ilícitas. Podemos bloquear solicitudes que comprometan seguridad, privacidad o cumplimiento.
            </p>
          </section>

          <section>
            <h2>6. Servicios de terceros</h2>
            <p>
              Algunas soluciones pueden integrarse con Vercel, WhatsApp, Google, Meta, CRMs, proveedores de nube u otras plataformas. Cada servicio externo mantiene sus propios términos, disponibilidad y políticas; Hocker AGI Technologies no controla interrupciones o cambios realizados por esos terceros.
            </p>
          </section>

          <section>
            <h2>7. Privacidad</h2>
            <p>
              El tratamiento de datos personales se rige por el <Link href="/legal/privacy">aviso de privacidad</Link>. El usuario debe proporcionar información verdadera y contar con autorización para compartir datos de terceros.
            </p>
          </section>

          <section>
            <h2>8. Contacto</h2>
            <p>
              Para aclaraciones sobre estos términos escribe a <a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a>.
            </p>
          </section>
        </div>

        <div className="section-actions">
          <Link href="/contacto" className="button button-primary">Solicitar información</Link>
          <Link href="/legal/privacy" className="button button-secondary">Aviso de privacidad</Link>
        </div>
      </div>
    </main>
  );
}
