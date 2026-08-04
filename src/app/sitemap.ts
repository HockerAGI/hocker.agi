import type { MetadataRoute } from "next";
import { APPS } from "@/lib/site-data";
import { PUBLIC_SITE } from "@/lib/public-site";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/soluciones", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/apps", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/empresa", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/ecosistema", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/agis", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/contacto", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...routes.map((route) => ({
      url: `${PUBLIC_SITE.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...APPS.map((app) => ({
      url: `${PUBLIC_SITE.url}/apps/${app.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
