import type { MetadataRoute } from "next";
import { resourceArticles, servicePages } from "@/config/content";
import { siteConfig } from "@/config/site";

/**
 * Sitemap del sitio. Cuatro reglas sostienen este archivo:
 *
 * 1. Solo entran URLs indexables que devuelven 200. `/privacidad` queda fuera
 *    a propósito: está marcada `noindex, follow`, y declarar en el sitemap una
 *    página que se le pide a Google no indexar es una señal contradictoria.
 *
 * 2. Las rutas dinámicas se derivan de los mismos arrays que alimentan
 *    `generateStaticParams`, así que añadir un servicio o un artículo lo mete
 *    al sitemap solo. No duplicar slugs aquí.
 *
 * 3. `lastModified` es la fecha del último cambio real de contenido, no la del
 *    despliegue. Google solo honra <lastmod> cuando es verificablemente
 *    preciso; si se mueve en cada build, deja de leerlo.
 *
 * 4. Sin `priority` ni `changeFrequency`: Google los ignora. Emitirlos solo
 *    añade ruido y sugiere un control sobre el rastreo que no existe.
 */

/** Último cambio del copy de la home. Actualizar a mano al editarlo. */
const HOME_LAST_MODIFIED = "2026-08-20";

/**
 * El índice de /recursos refleja el artículo más reciente: publicar uno nuevo
 * cambia el índice de verdad, así que su `lastmod` debe moverse con él.
 * Las fechas ISO se ordenan lexicográficamente igual que cronológicamente.
 */
const resourcesIndexLastModified =
  resourceArticles.reduce<string>(
    (latest, article) =>
      article.lastModified > latest ? article.lastModified : latest,
    "",
  ) || HOME_LAST_MODIFIED;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_LAST_MODIFIED,
    },
    ...servicePages.map((service) => ({
      url: `${siteConfig.url}/servicios/${service.slug}`,
      lastModified: service.lastModified,
    })),
    {
      url: `${siteConfig.url}/recursos`,
      lastModified: resourcesIndexLastModified,
    },
    ...resourceArticles.map((article) => ({
      url: `${siteConfig.url}/recursos/${article.slug}`,
      lastModified: article.lastModified,
    })),
  ];
}
