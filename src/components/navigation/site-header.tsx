import Image from "next/image";
import Link from "next/link";
import { PUBLIC_NAV, PUBLIC_SITE } from "@/lib/public-site";
import { DesktopNav } from "./desktop-nav";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="brand-link" href="/">
          <Image
            src={PUBLIC_SITE.symbol}
            alt=""
            width={512}
            height={512}
            sizes="(max-width: 720px) 40px, 44px"
            priority
          />
          <span className="brand-wordmark"><strong>HOCKER</strong><small>AGI TECHNOLOGIES</small></span>
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
