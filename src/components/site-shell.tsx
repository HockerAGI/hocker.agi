import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { SOCIALS, SITE } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/ecosistema", label: "Ecosistema" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/apps", label: "Apps" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/agis", label: "AGIs" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
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

          <a
            href="https://wa.me/526632091143"
            className="nav-cta"
            target="_blank"
            rel="noreferrer"
            aria-label="Cotizar por WhatsApp"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>{SITE.brand}</h4>
              <p>
                Un ecosistema comercial de IA, software, automatización y marketing con enfoque premium,
                cinematográfico y pensado para vender.
              </p>
            </div>
            <div>
              <h4>Secciones</h4>
              <p><Link href="/ecosistema">Ecosistema</Link></p>
              <p><Link href="/soluciones">Soluciones</Link></p>
              <p><Link href="/apps">Apps</Link></p>
              <p><Link href="/portfolio">Portafolio</Link></p>
            </div>
            <div>
              <h4>Contacto</h4>
              {SOCIALS.map((social) => (
                <p key={social.label}>
                  <a href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {social.label}
                  </a>
                </p>
              ))}
              <p><Link href="/status">Status público</Link></p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Hocker AGI Technologies</span>
            <span>IA · Marketing · Desarrollo · Ecosistema</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
