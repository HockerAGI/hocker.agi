import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section">
      <div className="container">
        <div className="panel">
          <div className="kicker">404</div>
          <h1 className="hero-title" style={{ fontSize: "clamp(34px, 6vw, 62px)" }}>
            Página no encontrada
          </h1>
          <p className="hero-text">La ruta que buscabas no existe o fue movida.</p>
          <Link href="/" className="button button-primary" style={{ width: "fit-content" }}>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
