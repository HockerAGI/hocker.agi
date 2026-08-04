import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { SiteShell } from "@/components/site-shell";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { PUBLIC_SITE } from "@/lib/public-site";
import "./globals.css";
import "./commercial.css";

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_SITE.url),
  applicationName: PUBLIC_SITE.brand,
  title: {
    default: PUBLIC_SITE.title,
    template: `%s | ${PUBLIC_SITE.brand}`,
  },
  description: PUBLIC_SITE.description,
  category: "technology",
  authors: [{ name: PUBLIC_SITE.founder }],
  creator: PUBLIC_SITE.founder,
  publisher: PUBLIC_SITE.brand,
  keywords: [
    "automatización empresarial con IA",
    "agencia de inteligencia artificial México",
    "desarrollo de software a medida",
    "captación de clientes",
    "marketing digital con IA",
    "integración de WhatsApp y CRM",
    "Hocker AGI Technologies",
  ],
  openGraph: {
    title: PUBLIC_SITE.title,
    description: PUBLIC_SITE.description,
    url: PUBLIC_SITE.url,
    siteName: PUBLIC_SITE.brand,
    locale: PUBLIC_SITE.locale,
    images: [{ url: PUBLIC_SITE.ogImage, width: 1200, height: 630, alt: PUBLIC_SITE.brand }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PUBLIC_SITE.title,
    description: PUBLIC_SITE.description,
    images: [PUBLIC_SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${PUBLIC_SITE.url}/#organization`,
  name: PUBLIC_SITE.brand,
  legalName: PUBLIC_SITE.legalName,
  url: PUBLIC_SITE.url,
  logo: `${PUBLIC_SITE.url}${PUBLIC_SITE.logo}`,
  image: `${PUBLIC_SITE.url}${PUBLIC_SITE.ogImage}`,
  description: PUBLIC_SITE.description,
  email: PUBLIC_SITE.email,
  telephone: PUBLIC_SITE.phoneE164,
  founder: {
    "@type": "Person",
    name: PUBLIC_SITE.founder,
  },
  areaServed: PUBLIC_SITE.areaServed,
  sameAs: PUBLIC_SITE.relatedSites,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: PUBLIC_SITE.phoneE164,
      email: PUBLIC_SITE.email,
      availableLanguage: ["es", "en"],
      areaServed: "MX",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${PUBLIC_SITE.url}/#website`,
  url: PUBLIC_SITE.url,
  name: PUBLIC_SITE.brand,
  description: PUBLIC_SITE.description,
  inLanguage: "es-MX",
  publisher: { "@id": `${PUBLIC_SITE.url}/#organization` },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <body>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteShell>{children}</SiteShell>
        <AnalyticsConsent />
      </body>
    </html>
  );
}
