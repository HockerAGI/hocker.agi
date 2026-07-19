import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { SiteShell } from "@/components/site-shell";
import { SITE, CONTACT } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.brand,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.description,
  keywords: [
    "Hocker AGI Technologies",
    "NOVA",
    "Hocker ONE",
    "agentes IA",
    "marketing digital",
    "automatización",
    "apps",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.brand,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.brand,
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.brand,
    description: SITE.tagline,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE.brand,
              url: SITE.url,
              description: SITE.description,
              email: CONTACT.email,
              sameAs: [SITE.url],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: CONTACT.email,
                  availableLanguage: ["es", "en"],
                },
              ],
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
