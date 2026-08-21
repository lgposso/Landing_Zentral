import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** Fecha de la última modificación real del copy de la home.
 *  Actualizar a mano cuando cambie el contenido, no en cada despliegue. */
const HOME_LAST_MODIFIED = "2026-08-20";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
