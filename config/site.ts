import type { NavItem } from "@/types";

/**
 * Configuración global del sitio: metadata, navegación y destinos de CTA.
 */
export const siteConfig = {
  name: "Zentral",
  legalName: "Zentral Solutions",

  url: "https://zentral.com.co",

  title: "Zentral Solutions | Desarrollo de software a la medida",
  description:
    "Desarrollo de software a la medida para empresas en Colombia, con la ingeniería de nuestros propios productos: Zentral RIPS y Zentral Loyalty.",
  tagline: "Software a la medida, construido como producto.",

  locale: "es_CO",
  lang: "es",

  keywords: [
    "desarrollo de software a la medida Colombia",
    "empresa de desarrollo de software Barranquilla",
    "software para empresas Colombia",
    "revisar RIPS JSON",
    "tarjetas de lealtad digitales",
  ],

  contact: {
    email: "contacto@zentral.com.co",
    phone: "+573337628306",
    location: "Barranquilla, Colombia",
  },

  // TODO(zentral): instagram y github, cuando existan. Los vacíos no se renderizan.
  // LinkedIn existe pero no se enlaza desde el sitio (decisión del usuario, 2026-09-28).
  social: {
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
    label: "Ver cómo trabajamos",
    href: "/#a-la-medida",
    isExternal: false,
  },
} as const;

/** La página del servicio principal. */
export const customDevHref = "/desarrollo-a-la-medida";

/**
 * Las tres líneas de Zentral, cada una con su página: lo principal es el
 * desarrollo a la medida y los productos propios van después.
 */
export const navItems: NavItem[] = [
  { label: "A la medida", href: customDevHref, line: "custom" },
  { label: "Zentral RIPS", href: "/productos/rips", line: "rips" },
  { label: "Zentral Loyalty", href: "/productos/loyalty", line: "loyalty" },
];
