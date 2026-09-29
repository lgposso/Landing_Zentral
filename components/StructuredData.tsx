import { customDevPage } from "@/config/content";
import { products } from "@/config/products";
import { customDevHref, siteConfig } from "@/config/site";

/**
 * Datos estructurados schema.org: Organization, WebSite y el Service del
 * desarrollo a la medida. Cada producto emite además su SoftwareApplication
 * en su propia página (ver `ProductSchema`). Se emiten en un solo bloque
 * `@graph` para que las entidades puedan referenciarse entre sí por `@id`.
 * Sin precios ni calificaciones: no hay tarifas públicas ni reseñas.
 *
 * El BreadcrumbList vive aparte, en `BreadcrumbSchema`: es específico de
 * cada página (Inicio › Productos › [Producto]), no tiene sentido como nodo
 * global idéntico en todas las rutas.
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
          "Desarrollo de software a la medida",
          "Software como servicio (SaaS)",
          "RIPS",
          "Programas de lealtad digitales",
        ],
        owns: products.map((product) => ({
          "@id": `${siteConfig.url}/productos/${product.slug}#software`,
        })),
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
        "@type": "Service",
        "@id": `${siteConfig.url}${customDevHref}#servicio`,
        name: customDevPage.heroTitle,
        serviceType: "Desarrollo de software a la medida",
        description: customDevPage.heroSubtitle,
        url: `${siteConfig.url}${customDevHref}`,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Colombia" },
          { "@type": "Place", name: "Latinoamérica" },
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
