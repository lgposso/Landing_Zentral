import type { MetadataRoute } from "next";
import { resourceArticles, servicePages } from "@/config/content";
import { siteConfig } from "@/config/site";

/** Fecha de la última modificación real del copy de la home.
 *  Actualizar a mano cuando cambie el contenido, no en cada despliegue. */
const HOME_LAST_MODIFIED = "2026-08-20";
const RESOURCES_INDEX_LAST_MODIFIED = "2026-08-20";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...servicePages.map((service) => ({
      url: `${siteConfig.url}/servicios/${service.slug}`,
      lastModified: service.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${siteConfig.url}/recursos`,
      lastModified: RESOURCES_INDEX_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...resourceArticles.map((article) => ({
      url: `${siteConfig.url}/recursos/${article.slug}`,
      lastModified: article.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
