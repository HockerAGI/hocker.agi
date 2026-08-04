import type { Metadata } from "next";
import Link from "next/link";
import { PUBLIC_SITE } from "@/lib/public-site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad aplicable al sitio, formularios y medición de Hocker AGI Technologies.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="section legal-page">
      <div className="container narrow-container">
        <p className="eyebrow">LEGAL</p>
        <h1>Aviso de privacidad</h1>
        <p className="legal-updated">Última actualización: 4 de agosto de 2026</p>

        <div className="legal-content">
          <section>
            <h2>1. Responsable</h2>
            <p>
              {PUBLIC_SITE.brand} es responsable del tratamiento de los datos personales recabados mediante este sitio. Para asuntos de privacidad puedes escribir a {" "}
              <a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a>.
            </p>
          </section>

          <section>
            <h2>2. Datos que podemos recabar</h2>
            <p>
              Nombre, empresa, correo, teléfono, necesidad, rango de inversión, mensaje, página de origen y parámetros de campaña. También podemos recibir datos técnicos limitados, como navegador y fecha de envío, para seguridad y diagnóstico.
            </p>
          </section>

          <section>
            <h2>3. Finalidades</h2>
            <p>
              Usamos la información para responder solicitudes, preparar diagnósticos o propuestas, dar seguimiento comercial, prestar servicios contratados, prevenir abuso del formulario y medir el rendimiento del sitio cuando existe consentimiento.
            </p>
          </section>

          <section>
            <h2>4. Encargados y transferencias</h2>
            <p>
              Los datos pueden procesarse mediante proveedores de hosting, automatización, correo, mensajería, analítica o CRM que actúan por cuenta de Hocker AGI Technologies. No vendemos datos personales. Una transferencia adicional se realizará únicamente cuando sea necesaria para prestar el servicio o exista obligación legal.
            </p>
          </section>

          <section>
            <h2>5. Cookies y medición</h2>
            <p>
              El sitio puede usar almacenamiento local para recordar preferencias. Google Analytics y Meta Pixel solo se cargan después de que el usuario acepta la medición opcional. Rechazarla no limita el acceso al sitio ni al formulario.
            </p>
          </section>

          <section>
            <h2>6. Conservación y seguridad</h2>
            <p>
              Conservamos los datos durante el tiempo necesario para atender la relación comercial, cumplir obligaciones y resolver aclaraciones. Aplicamos controles razonables de acceso, cifrado en tránsito y validación del formulario; ningún sistema conectado a internet puede garantizar riesgo cero.
            </p>
          </section>

          <section>
            <h2>7. Derechos de acceso, rectificación, cancelación y oposición</h2>
            <p>
              Puedes solicitar acceso, corrección, eliminación u oposición al tratamiento enviando un correo desde una dirección verificable. Incluye tu nombre, la petición concreta y la información necesaria para localizar el registro.
            </p>
          </section>

          <section>
            <h2>8. Cambios al aviso</h2>
            <p>
              Las modificaciones se publicarán en esta página con su fecha de actualización. Cuando el cambio sea material, se podrá mostrar un aviso adicional en el sitio.
            </p>
          </section>
        </div>

        <div className="section-actions">
          <Link href="/contacto" className="button button-primary">Contactar</Link>
          <Link href="/legal/terms" className="button button-secondary">Términos y condiciones</Link>
        </div>
      </div>
    </main>
  );
}
