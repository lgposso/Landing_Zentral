export interface NavItem {
  label: string;
  href: string;
  /** Línea del mapa que representa; el navbar la usa para su marca y para
   *  resaltar esa línea en el mapa al pasar por el enlace. */
  line?: ProductSlug | "custom";
}

export interface SectionCopy {
  /** Primera línea del título, en blanco. */
  title: string;
  /** Segunda línea del título, en el azul de marca. */
  titleAccent: string;
  subtitle: string;
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

/** La página /desarrollo-a-la-medida: el servicio principal de Zentral. */
export interface CustomDevPage {
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
  deliverables: { title: string; description: string }[];
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
/* Servicios dentro de a la medida                                            */
/* -------------------------------------------------------------------------- */

export type CustomServiceSlug =
  | "agentes-de-ia"
  | "chatbot-de-whatsapp"
  | "automatizacion-de-procesos";

/**
 * Una forma concreta de desarrollo a la medida con página propia, en
 * /desarrollo-a-la-medida/[slug]. Existen para responder búsquedas locales
 * («agentes de IA Barranquilla», «automatizaciones Barranquilla») sin sacar
 * el desarrollo a la medida del primer lugar.
 */
export interface CustomService {
  slug: CustomServiceSlug;
  /** Nombre corto para enlaces y migas: "Agentes de IA". */
  name: string;
  /** Una línea para las listas de la home y de /desarrollo-a-la-medida. */
  summary: string;
  /** Palabra clave primaria, solo como referencia editorial. */
  keyword: string;
  /** Sin el sufijo de marca: el layout no lo añade porque va como `absolute`. */
  metaTitle: string;
  metaDescription: string;
  /** El H1, con la ciudad. */
  heroTitle: string;
  /** La promesa grande debajo del letrero. */
  promise: string;
  heroSubtitle: string;
  /** Valor de `serviceType` en el JSON-LD. */
  serviceType: string;
  facts: { label: string; value: string }[];
  whatItIs: { title: string; paragraphs: string[] };
  whoItsFor: string[];
  /** Cuándo no conviene: decirlo es parte de la voz. */
  notFor: string;
  howWeImplementIt: string[];
  technologies: { name: string; description: string }[];
  deliverables: { title: string; description: string }[];
  timeline: string;
  investment: string;
  /** Preguntas en <h3> con la respuesta directa primero. Sin marcado FAQPage. */
  questions: { question: string; answer: string }[];
  /** Escenario ilustrativo, rotulado: todavía no hay casos publicables. */
  appliedScenario: { disclaimer: string; paragraphs: string[] };
  /** Mensaje prellenado de WhatsApp. */
  ctaMessage: string;
  lastModified: string;
}

/** Una guía en /guias/[slug]: intención informacional, respuesta directa primero. */
export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  /** Respuesta directa en el primer párrafo, antes del desarrollo. */
  intro: string;
  /** Subpreguntas en <h2>, cada una con la respuesta directa primero. */
  sections: { question: string; answer: string[] }[];
  /** Servicios de a la medida relacionados, para el enlazado interno. */
  relatedServices: CustomServiceSlug[];
  datePublished: string;
  lastModified: string;
}

/* -------------------------------------------------------------------------- */
/* Productos SaaS                                                             */
/* -------------------------------------------------------------------------- */

export type ProductSlug = "rips" | "loyalty";

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
