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
    "Hocker AGI Technologies: IA, marketing y software que venden, automatizan y escalan.",
  keywords: [
    "Hocker AGI Technologies",
    "NOVA",
    "Hocker ONE",
    "AGIs",
    "automatización",
    "marketing digital",
    "apps",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hocker AGI Technologies",
    description: "IA, marketing y software que venden, automatizan y escalan.",
    url: "https://hockeragi.vercel.app",
    siteName: "Hocker AGI Technologies",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hocker AGI Technologies",
    description: "IA, marketing y software que venden, automatizan y escalan.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#020610] text-white antialiased" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
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
                "Hocker AGI Technologies: IA, marketing y software que venden, automatizan y escalan.",
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
