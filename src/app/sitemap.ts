import type { MetadataRoute } from "next";
import { APPS } from "@/lib/site-data";

const base = "https://hockeragi.vercel.app";

const routes = [
  "/",
  "/empresa",
  "/ecosistema",
  "/soluciones",
  "/apps",
  "/fases",
  "/portfolio",
  "/agis",
  "/contacto",
  "/callback",
  "/live",
  "/status",
  "/legal/terms",
  "/legal/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? ("daily" as const) : ("weekly" as const),
      priority: route === "/" ? 1 : 0.8,
    })),
    ...APPS.map((app) => ({
      url: `${base}/apps/${app.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
