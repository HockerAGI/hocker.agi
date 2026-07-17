import type { MetadataRoute } from "next";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hockeragi.vercel.app").replace(/\/$/, "");

const routes = [
  "/",
  "/empresa",
  "/soluciones",
  "/servicios",
  "/casos",
  "/contacto",
  "/apps",
  "/integrations",
  "/launch",
  "/live",
  "/map",
  "/status",
  "/security",
  "/agis",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));

  return entries;
}
