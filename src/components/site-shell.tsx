import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PUBLIC_NAV, PUBLIC_SITE } from "@/lib/public-site";

const dockItems = [
  { href: "/", label: "Inicio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/apps", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const whatsappBrief = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent(
    "Hola, quiero solicitar un diagnóstico para mi empresa."
  )}`;

  return (
    <div className="site-shell">
      <div className="shell-orbit shell-orbit-a" />
      <div className="shell-orbit shell-orbit-b" />

      <header className="site-nav">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label={`Ir al inicio de ${PUBLIC_SITE.brand}`}>
            <span className="brand-logo-wrap">
              <Image
                className="brand-logo"
                src={PUBLIC_SITE.symbol}
                alt="Isotipo de Hocker AGI Technologies"
                width={96}
                height={96}
                sizes="(max-width: 720px) 52px, 64px"
                priority
              />
            </span>
            <span className="brand-text">
              <strong>HOCKER AGI</strong>
              <span>TECHNOLOGIES</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Navegación principal">
            {PUBLIC_NAV.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-ghost" href={whatsappBrief} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <Link className="nav-cta" href="/contacto">Solicitar diagnóstico</Link>
          </div>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image
                src={PUBLIC_SITE.logo}
                alt="Hocker AGI Technologies"
                width={1800}
                height={650}
                sizes="(max-width: 720px) 240px, 300px"
                className="footer-logo footer-logo-horizontal"
              />
              <div>
                <h2>{PUBLIC_SITE.brand}</h2>
                <p>{PUBLIC_SITE.description}</p>
                <p className="footer-location">México · Atención remota</p>
              </div>
            </div>

            <div>
              <h3>Soluciones</h3>
              <p><Link href="/soluciones">Automatización</Link></p>
              <p><Link href="/soluciones">Publicidad y captación</Link></p>
              <p><Link href="/soluciones">Software a medida</Link></p>
              <p><Link href="/apps">Productos Hocker</Link></p>
            </div>

            <div>
              <h3>Empresa</h3>
              <p><Link href="/empresa">Quiénes somos</Link></p>
              <p><Link href="/portfolio">Casos y capacidades</Link></p>
              <p><Link href="/ecosistema">Tecnología</Link></p>
              <p><Link href="/contacto">Solicitar propuesta</Link></p>
            </div>

            <div>
              <h3>Contacto</h3>
              <p><a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a></p>
              <p><a href={whatsappBrief} target="_blank" rel="noopener noreferrer">{PUBLIC_SITE.phoneDisplay}</a></p>
              <p>Horario de respuesta: lunes a viernes</p>
              <p>Proyectos en México y remoto</p>
            </div>

            <div>
              <h3>Legal</h3>
              <p><Link href="/legal/privacy">Aviso de privacidad</Link></p>
              <p><Link href="/legal/terms">Términos y condiciones</Link></p>
              <p><Link href="/legal/privacy#cookies">Preferencias de cookies</Link></p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 {PUBLIC_SITE.brand}. Todos los derechos reservados.</span>
            <span>IA · Automatización · Marketing · Software</span>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappBrief}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con Hocker AGI Technologies por WhatsApp"
      >
        <span aria-hidden="true">WA</span>
        <strong>Hablar ahora</strong>
      </a>

      <nav className="mobile-dock" aria-label="Accesos rápidos móviles">
        {dockItems.map((item) => (
          <Link key={item.href} href={item.href} className="mobile-dock-item">{item.label}</Link>
        ))}
      </nav>
    </div>
  );
}
