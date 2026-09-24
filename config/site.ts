import type { NavItem } from "@/types";

/**
 * Configuración global del sitio: metadata, navegación y destinos de CTA.
 */
export const siteConfig = {
  name: "Zentral",
  legalName: "Zentral Solutions",

  url: "https://zentral.com.co",

  title: "Zentral Solutions | Software a la medida y productos SaaS",
  description:
    "Desarrollo de software a la medida y productos SaaS para empresas en Colombia: Zentral Loyalty, Zentral RIPS, Zentral Sports y Zentral Control.",
  tagline: "Software para problemas concretos.",

  locale: "es_CO",
  lang: "es",

  keywords: [
    "desarrollo de software a la medida Colombia",
    "software para empresas Colombia",
    "revisar RIPS JSON",
    "tarjetas de lealtad digitales",
    "control de asistencia por GPS",
    "reserva de canchas Barranquilla",
    "automatización de procesos Colombia",
    "integración de sistemas",
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

const WHATSAPP_NUMBER = "573337628306";

/** Enlace a WhatsApp con el mensaje ya escrito. */
export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Destinos de los llamados a la acción.
 */
export const ctaConfig = {
  primary: {
    label: "Agenda una conversación",
    href: whatsappHref("Hola, quiero agendar una conversación"),
    isExternal: true,
  },
  secondary: {
    label: "Ver los productos",
    href: "/#productos",
    isExternal: false,
  },
} as const;

/**
 * Rutas absolutas (`/#…`), no anclas sueltas: el navbar vive en el layout y
 * también se ve desde /productos, /servicios y /recursos.
 */
export const navItems: NavItem[] = [
  { label: "Productos", href: "/productos" },
  { label: "A la medida", href: "/#a-la-medida" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Recursos", href: "/recursos" },
];
