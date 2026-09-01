import type { NavItem } from "@/types";

/**
 * Configuración global del sitio: metadata, navegación y destinos de CTA.
 */
export const siteConfig = {
  name: "Zentral",
  legalName: "Zentral Solutions",

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
    email: "contacto@zentral.com.co",
    phone: "+573337628306",
    location: "Barranquilla, Colombia",
  },

  // TODO(zentral): instagram y github, cuando existan. Los vacíos no se renderizan.
  social: {
    linkedin: "https://www.linkedin.com/company/zentral-solutions-s-a-s",
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
    href: "https://wa.me/573337628306?text=Hola%2C%20quiero%20agendar%20una%20conversaci%C3%B3n",
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
