import type { MetadataRoute } from "next";
import { PUBLIC_SITE } from "@/lib/public-site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/login",
          "/status",
          "/live",
          "/fases",
          "/callback",
        ],
      },
    ],
    sitemap: `${PUBLIC_SITE.url}/sitemap.xml`,
    host: PUBLIC_SITE.url,
  };
}
