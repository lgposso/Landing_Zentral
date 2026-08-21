import { solutions } from "@/config/content";
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
          url: `${siteConfig.url}/logo-zentral.svg`,
        },
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        address: {
          "@type": "PostalAddress",
          addressCountry: "CO",
          addressLocality: "Barranquilla",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.contact.email,
          telephone: siteConfig.contact.phone,
          areaServed: ["CO", "LATAM"],
          availableLanguage: ["es"],
        },
        foundingDate: "2026",
        taxID: "902.064.009-2",
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
      {
        "@type": "OfferCatalog",
        "@id": `${siteConfig.url}/#servicios`,
        name: "Soluciones Zentral",
        itemListElement: solutions.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.description,
            provider: { "@id": `${siteConfig.url}/#organization` },
            areaServed: [
              { "@type": "Country", name: "Colombia" },
              { "@type": "Place", name: "Latinoamérica" },
            ],
          },
        })),
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
