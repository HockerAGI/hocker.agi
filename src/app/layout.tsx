import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hockeragi.vercel.app"),
  title: {
    default: "Hocker AGI Technologies",
    template: "%s | Hocker AGI Technologies",
  },
  description:
    "Sitio oficial comercial de Hocker AGI Technologies: apps, AGIs, automatización, portafolio y soluciones digitales premium para vender, operar y escalar.",
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
    title: "Hocker AGI Technologies",
    description:
      "Marketing, software y agentes IA que venden, automatizan y escalan.",
    url: "https://hockeragi.vercel.app",
    siteName: "Hocker AGI Technologies",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hocker AGI Technologies",
    description:
      "Marketing, software y agentes IA que venden, automatizan y escalan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      name: "Hocker AGI Technologies",
      url: "https://hockeragi.vercel.app",
      description:
        "Sitio oficial comercial de Hocker AGI Technologies: apps, AGIs, automatización, portafolio y soluciones digitales premium para vender, operar y escalar.",
      email: "hocker.agi@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hocker.agi@gmail.com",
        availableLanguage: ["es", "en"],
      },
      sameAs: ["https://hockeragi.vercel.app"],
    }),
  }}
/>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
