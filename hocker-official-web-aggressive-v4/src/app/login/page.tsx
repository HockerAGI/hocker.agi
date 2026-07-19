import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acceso privado",
  description: "Ingreso privado al ecosistema Hocker ONE.",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="panel">
          <div className="kicker">Acceso privado</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
            Panel privado del ecosistema
          </h1>
          <p className="hero-text" style={{ maxWidth: 840 }}>
            Esta puerta es para operación interna, clientes o sesiones privadas. En producción real, este acceso
            puede conectarse a autenticación, permisos o flujo de usuario.
          </p>
          <div className="hero-actions">
            <Link href="/" className="button button-primary" style={{ width: "fit-content" }}>
              Volver al inicio
            </Link>
            <Link href="/contacto" className="button button-secondary" style={{ width: "fit-content" }}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
