/** Claves de icono. Se mapean a componentes de lucide-react en cada feature,
 *  para que el copy en `config/content.ts` se mantenga serializable. */
export type IconKey = string;

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionCopy {
  /** Primera línea del título, en blanco. */
  title: string;
  /** Segunda línea del título, en el azul de marca. */
  titleAccent: string;
  subtitle: string;
}

export interface FeatureItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  /** Entregable concreto de esta etapa. */
  deliverable: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

/** Artículo informacional en /recursos/[slug] (C4 del brief SEO). */
export interface ResourceArticle {
  slug: string;
  title: string;
  metaDescription: string;
  /** Respuesta directa en el primer párrafo, antes del desarrollo. */
  intro: string;
  /** Subpreguntas en <h3>, cada una con la respuesta directa primero. */
  sections: {
    question: string;
    answer: string[];
  }[];
  /** Slugs de /servicios/[slug] relacionados, para enlazado interno. */
  relatedServices: string[];
  lastModified: string;
}

/** Página de servicio individual (C1 del brief SEO). */
export interface ServicePage {
  slug: string;
  /** Palabra clave primaria objetivo, solo como referencia editorial. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  whatItIs: string[];
  whoItsFor: string[];
  howWeImplementIt: string[];
  technologies: { name: string; description: string }[];
  deliverables: string[];
  timeline: string;
  investmentRange: string;
  /**
   * Escenario ilustrativo, no un caso real de cliente — todavía no hay
   * proyectos con cifras verificables que publicar (ver Bloque C2 del brief).
   */
  appliedScenario: {
    disclaimer: string;
    paragraphs: string[];
  };
  lastModified: string;
}

/* -------------------------------------------------------------------------- */
/* Productos SaaS                                                             */
/* -------------------------------------------------------------------------- */

export type ProductSlug = "loyalty" | "rips" | "sports" | "control";

/**
 * Un producto de la línea SaaS de Zentral, en /productos/[slug].
 *
 * Todo lo que dice cada entrada sale del repositorio del producto: si una
 * función no está construida, no se afirma aquí (ver PRODUCT.md, «Capabilities
 * and Constraints»). Lo que falta se dice en `limits`.
 */
export interface Product {
  slug: ProductSlug;
  /** Nombre completo: "Zentral RIPS". */
  name: string;
  /** Nombre corto para el Core y la navegación: "RIPS". */
  shortName: string;
  /** Para quién y qué, en pocas palabras: "Facturación en salud". */
  sector: string;
  /** La promesa en una línea. */
  tagline: string;
  /** Una o dos frases para la home y el índice. */
  summary: string;
  /** Un hecho verificable que el Core muestra junto al producto. */
  coreFact: string;
  /** Palabra clave primaria, solo como referencia editorial. */
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  /** Estado honesto del producto cuando no es "disponible" a secas. */
  status?: { label: string; note: string };
  /** Ingreso para quien ya tiene cuenta. Solo cuando el producto está publicado. */
  appUrl?: string;
  problem: { title: string; paragraphs: string[] };
  steps: { title: string; description: string }[];
  capabilities: { title: string; description: string }[];
  audiences: { who: string; description: string }[];
  trust: { title: string; paragraphs: string[] };
  /** Lo que el producto todavía no hace. Decirlo es parte de la voz. */
  limits: string[];
  /** Preguntas en <h3> con la respuesta directa primero. Sin marcado FAQPage. */
  questions: { question: string; answer: string }[];
  /** Mensaje prellenado de WhatsApp para "Solicitar demo". */
  demoMessage: string;
  /** Valor de `applicationCategory` en el JSON-LD de SoftwareApplication. */
  applicationCategory: string;
  lastModified: string;
}
