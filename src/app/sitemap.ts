import type { MetadataRoute } from "next";
import { APPS } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://hockeragi.vercel.app";
  const routes = [
    "",
    "/ecosistema",
    "/soluciones",
    "/apps",
    "/portfolio",
    "/agis",
    "/contacto",
    "/status",
  ];

  return [
    ...routes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : 0.8,
    })),
    ...APPS.map((app) => ({
      url: `${base}/apps/${app.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ] satisfies MetadataRoute.Sitemap;
}
