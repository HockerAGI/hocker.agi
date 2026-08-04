import type { MetadataRoute } from "next";
import { PUBLIC_SITE } from "@/lib/public-site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: PUBLIC_SITE.brand,
    short_name: "Hocker AGI",
    description: PUBLIC_SITE.description,
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#01040a",
    theme_color: "#07101d",
    categories: ["business", "productivity", "marketing"],
    lang: "es-MX",
    icons: [
      {
        src: "/icon.png",
        sizes: "1536x1536",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "1536x1536",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
