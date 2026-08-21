import { siteConfig } from "@/config/site";

interface BreadcrumbSegment {
  name: string;
  /** Ruta relativa, ej. "/servicios/automatizacion-de-procesos". */
  path: string;
}

interface BreadcrumbSchemaProps {
  segments: BreadcrumbSegment[];
}

/**
 * BreadcrumbList por página (C1 del brief SEO). No vive en StructuredData
 * porque cada ruta tiene su propia jerarquía — un solo nodo global idéntico
 * en todas las páginas no describe nada y Google lo ignora.
 */
export function BreadcrumbSchema({ segments }: BreadcrumbSchemaProps) {
  const allSegments = [{ name: "Inicio", path: "/" }, ...segments];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allSegments.map((segment, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: segment.name,
      item: `${siteConfig.url}${segment.path === "/" ? "" : segment.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
      }}
    />
  );
}
