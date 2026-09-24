import { siteConfig } from "@/config/site";
import type { Product } from "@/types";

/**
 * SoftwareApplication de cada producto, en su página.
 *
 * Sin `offers` ni `aggregateRating`: no se publican precios y no hay reseñas
 * reales. Sin esos campos Google no muestra rich result, y está bien — el
 * nodo existe para describir la entidad y enlazarla con la organización, no
 * para fabricar estrellas.
 */
export function ProductSchema({ product }: { product: Product }) {
  const url = `${siteConfig.url}/productos/${product.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: product.name,
    description: product.summary,
    url,
    applicationCategory: product.applicationCategory,
    operatingSystem: "Web",
    inLanguage: "es-CO",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    ...(product.appUrl ? { installUrl: product.appUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
