import { siteConfig } from "@/config/site";

/**
 * Datos estructurados schema.org (§14 del spec): Organization, WebSite y
 * BreadcrumbList. Se emiten en un solo bloque `@graph` para que las entidades
 * puedan referenciarse entre sí por `@id`.
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}/logo-zentral.png`,
        },
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        email: siteConfig.contact.email,
        areaServed: [
          { "@type": "Country", name: "Colombia" },
          { "@type": "Place", name: "Latinoamérica" },
        ],
        knowsAbout: [
          "Automatización de procesos",
          "Integración de sistemas",
          "Agentes IA",
          "Desarrollo de software a la medida",
        ],
        sameAs: Object.values(siteConfig.social).filter(
          (href) => href.length > 0,
        ),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "es-CO",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: siteConfig.url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // El contenido es un objeto que construimos nosotros, no entrada de
      // usuario; se escapa `<` para cerrar la vía de inyección de scripts.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
