import type { MetadataRoute } from "next";
import { APPS } from "@/lib/site-data";
import { PUBLIC_SITE } from "@/lib/public-site";

const routes = [
  "/",
  "/soluciones",
  "/apps",
  "/casos",
  "/portafolio",
  "/empresa",
  "/ecosistema",
  "/agis",
  "/contacto",
  "/legal/privacy",
  "/legal/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((path) => ({ url: `${PUBLIC_SITE.url}${path}` })),
    ...APPS.map((app) => ({ url: `${PUBLIC_SITE.url}/apps/${app.slug}` })),
  ];
}
