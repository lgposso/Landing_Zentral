import type { MetadataRoute } from "next";
import { customDevPage } from "@/config/content";
import { products } from "@/config/products";
import { customDevHref, siteConfig } from "@/config/site";

/**
 * Sitemap del sitio. Cuatro reglas sostienen este archivo:
 *
 * 1. Solo entran URLs indexables que devuelven 200. Las rutas retiradas
 *    (servicios de automatización, recursos, Sports y Control) redirigen desde
 *    `next.config.ts` y no van aquí.
 *
 * 2. Las rutas dinámicas se derivan de los mismos arrays que alimentan
 *    `generateStaticParams`, así que añadir un producto lo mete al sitemap
 *    solo. No duplicar slugs aquí.
 *
 * 3. `lastModified` es la fecha del último cambio real de contenido, no la del
 *    despliegue. Google solo honra <lastmod> cuando es verificablemente
 *    preciso; si se mueve en cada build, deja de leerlo.
 *
 * 4. Sin `priority` ni `changeFrequency`: Google los ignora. Emitirlos solo
 *    añade ruido y sugiere un control sobre el rastreo que no existe.
 */

/** Último cambio del copy de la home. Actualizar a mano al editarlo. */
const HOME_LAST_MODIFIED = "2026-09-28";

/** Último cambio del copy propio del índice /productos. */
const PRODUCTS_INDEX_COPY_LAST_MODIFIED = "2026-09-28";

/** Fecha en que entró a regir la política vigente. */
const PRIVACY_LAST_MODIFIED = "2026-09-28";

/**
 * /productos se mueve con su propio copy o con el producto editado más
 * reciente, lo que sea posterior. Las fechas ISO se ordenan
 * lexicográficamente igual que cronológicamente.
 */
const productsIndexLastModified = products.reduce<string>(
  (latest, product) =>
    product.lastModified > latest ? product.lastModified : latest,
  PRODUCTS_INDEX_COPY_LAST_MODIFIED,
);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_LAST_MODIFIED,
    },
    {
      url: `${siteConfig.url}${customDevHref}`,
      lastModified: customDevPage.lastModified,
    },
    {
      url: `${siteConfig.url}/productos`,
      lastModified: productsIndexLastModified,
    },
    ...products.map((product) => ({
      url: `${siteConfig.url}/productos/${product.slug}`,
      lastModified: product.lastModified,
    })),
    {
      url: `${siteConfig.url}/privacidad`,
      lastModified: PRIVACY_LAST_MODIFIED,
    },
  ];
}
