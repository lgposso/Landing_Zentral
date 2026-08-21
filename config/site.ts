import type { NavItem } from "@/types";

/**
 * Configuración global del sitio: metadata, navegación y destinos de CTA.
 *
 * TODO(zentral): reemplazar `url`, `contact.email`, `contact.phone` y los
 * destinos de CTA por los valores reales antes de publicar.
 */
export const siteConfig = {
  name: "Zentral",
  legalName: "Zentral Solutions",

  // TODO(zentral): cambiar por el dominio definitivo. Se usa para canonical,
  // Open Graph, sitemap y datos estructurados.
  url: "https://zentral.com.co",

  title: "Zentral Solutions | Sistemas Inteligentes para Empresas",
  description:
    "Automatización de procesos, agentes IA, integración de sistemas y software a la medida para empresas en Colombia y Latinoamérica.",
  tagline: "Diseñamos sistemas inteligentes que trabajan por tu empresa.",

  locale: "es_CO",
  lang: "es",

  keywords: [
    "automatización de procesos Colombia",
    "agentes IA Colombia",
    "desarrollo de software a la medida",
    "integración de sistemas",
    "automatización empresarial",
    "software para empresas Colombia",
    "dashboards empresariales",
    "integración CRM ERP",
  ],

  contact: {
    // TODO(zentral): correo real.
    email: "contacto@zentral.com.co",
    // TODO(zentral): teléfono real en formato internacional.
    phone: "",
    location: "Colombia",
  },

  // TODO(zentral): perfiles reales. Los vacíos no se renderizan.
  social: {
    linkedin: "",
    instagram: "",
    github: "",
  },
} as const;

/**
 * Destinos de los llamados a la acción.
 */
export const ctaConfig = {
  primary: {
    label: "Agenda una conversación",
    href: "https://wa.me/573113953189?text=Hola%2C%20quiero%20agendar%20una%20conversaci%C3%B3n",
    isExternal: true,
  },
  secondary: {
    label: "Explora soluciones",
    href: "#soluciones",
    isExternal: false,
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Tecnologías", href: "#tecnologias" },
];
