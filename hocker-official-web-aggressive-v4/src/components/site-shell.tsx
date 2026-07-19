import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CONTACT, SITE } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/ecosistema", label: "Ecosistema" },
  { href: "/apps", label: "Apps" },
  { href: "/agis", label: "AGIs" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/contacto", label: "Contacto" },
];

const dockItems = [
  { href: "/", label: "Inicio" },
  { href: "/apps", label: "Apps" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <div className="shell-orbit shell-orbit-a" />
      <div className="shell-orbit shell-orbit-b" />
      <header className="site-nav">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label={SITE.brand}>
            <Image
              className="brand-logo"
              src="/brand/hocker-agi-technologies.png"
              alt="Hocker AGI Technologies"
              width={88}
              height={88}
              priority
            />
            <div className="brand-text">
              <strong>{SITE.brand}</strong>
              <span>{SITE.tagline}</span>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-ghost" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="nav-cta" href={`mailto:${CONTACT.email}`}>
              Cotizar
            </a>
          </div>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image
                src="/brand/hocker-agi-technologies.png"
                alt="Hocker AGI Technologies"
                width={64}
                height={64}
                className="brand-logo"
              />
              <div>
                <h4>{SITE.brand}</h4>
                <p>{SITE.description}</p>
              </div>
            </div>
            <div>
              <h4>Explorar</h4>
              <p><Link href="/ecosistema">Ecosistema</Link></p>
              <p><Link href="/apps">Apps</Link></p>
              <p><Link href="/agis">AGIs</Link></p>
              <p><Link href="/portfolio">Portfolio</Link></p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
              <p><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WhatsApp {CONTACT.whatsappPhone}</a></p>
              <p><Link href="/contacto">Formulario</Link></p>
              <p><Link href="/callback">Callback</Link></p>
            </div>
            <div>
              <h4>Legal</h4>
              <p><Link href="/legal/terms">Términos</Link></p>
              <p><Link href="/legal/privacy">Privacidad</Link></p>
              <p><Link href="/status">Status</Link></p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Hocker AGI Technologies</span>
            <span>IA · Marketing · Software · Portfolio</span>
          </div>
        </div>
      </footer>

      <nav className="mobile-dock" aria-label="Accesos rápidos móviles">
        {dockItems.map((item) => (
          <Link key={item.href} href={item.href} className="mobile-dock-item">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
