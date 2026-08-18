import Image from "next/image";
import Link from "next/link";
import { PUBLIC_NAV, PUBLIC_SITE } from "@/lib/public-site";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="brand-link" href="/" aria-label="Hocker AGI Technologies · Inicio">
          <Image
            src={PUBLIC_SITE.symbol}
            alt="Logo oficial de Hocker AGI Technologies"
            width={1536}
            height={1536}
            priority
          />
        </Link>
        <DesktopNav items={PUBLIC_NAV} />
        <Link className="button button-secondary nav-cta" href="/contacto">
          Hablemos
        </Link>
        <MobileMenu items={PUBLIC_NAV} />
      </div>
    </header>
  );
}
