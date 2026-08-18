import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { PUBLIC_NAV, PUBLIC_SITE } from "@/lib/public-site";

const dockItems = [
  { href: "/", label: "Inicio" }, { href: "/apps", label: "Productos" }, { href: "/agis", label: "AGIs" }, { href: "/portafolio", label: "Portafolio" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const whatsappBrief = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero solicitar un diagnóstico para mi empresa.")}`;
  return <div className="site-shell vnext-shell">
    <header className="site-nav vnext-nav"><div className="container nav-inner"><Link href="/" className="brand" aria-label={`Ir al inicio de ${PUBLIC_SITE.brand}`}><span className="brand-logo-wrap"><Image className="brand-logo" src={PUBLIC_SITE.symbol} alt="Isotipo oficial de Hocker AGI Technologies" width={96} height={96} sizes="(max-width: 720px) 44px, 52px" priority /></span><span className="brand-text"><strong>HOCKER AGI</strong><span>TECHNOLOGIES</span></span></Link><nav className="nav-links" aria-label="Navegación principal">{PUBLIC_NAV.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav><div className="nav-actions"><a className="nav-ghost" href={whatsappBrief} target="_blank" rel="noopener noreferrer">WhatsApp</a><Link className="nav-cta" href="/contacto">Evaluar proyecto</Link></div></div></header>
    <main className="main">{children}</main>
    <footer className="footer vnext-footer"><div className="container"><div className="vnext-footer-top"><div><Image src={PUBLIC_SITE.logo} alt="Hocker AGI Technologies" width={1800} height={650} sizes="(max-width: 720px) 230px, 310px" className="footer-logo footer-logo-horizontal" /><p>{PUBLIC_SITE.description}</p></div><div className="vnext-footer-signal"><span>HOCKER / PUBLIC LAYER</span><strong>Build with evidence.</strong></div></div><div className="footer-grid vnext-footer-grid"><div><h3>Explorar</h3><p><Link href="/soluciones">Soluciones</Link></p><p><Link href="/apps">Productos</Link></p><p><Link href="/agis">AGIs</Link></p><p><Link href="/ecosistema">Tecnología</Link></p></div><div><h3>Trabajo</h3><p><Link href="/casos">Casos y capacidades</Link></p><p><Link href="/portafolio">Portafolio profesional</Link></p><p><Link href="/empresa">Empresa</Link></p><p><Link href="/contacto">Contacto</Link></p></div><div><h3>Contacto</h3><p><a href={`mailto:${PUBLIC_SITE.email}`}>{PUBLIC_SITE.email}</a></p><p><a href={whatsappBrief} target="_blank" rel="noopener noreferrer">{PUBLIC_SITE.phoneDisplay}</a></p><p>México · Proyectos remotos</p></div><div><h3>Legal</h3><p><Link href="/legal/privacy">Aviso de privacidad</Link></p><p><Link href="/legal/terms">Términos y condiciones</Link></p><p>Preferencias disponibles desde el control de privacidad</p></div></div><div className="footer-bottom"><span>© 2026 {PUBLIC_SITE.brand}</span><span>IA · Producto · Automatización · Growth</span></div></div></footer>
    <a className="floating-whatsapp" href={whatsappBrief} target="_blank" rel="noopener noreferrer" aria-label="Hablar con Hocker AGI Technologies por WhatsApp"><span aria-hidden="true">WA</span><strong>Hablar ahora</strong></a>
    <nav className="mobile-dock" aria-label="Accesos rápidos móviles">{dockItems.map((item) => <Link key={item.href} href={item.href} className="mobile-dock-item">{item.label}</Link>)}</nav>
  </div>;
}
