import type { NextConfig } from "next";

/**
 * Casi todo lo que carga el sitio es del mismo origen: `next/font` auto-hospeda
 * las tipografías, las imágenes son locales y Vercel Analytics se sirve bajo el
 * propio dominio.
 *
 * La excepción es Cloudflare Web Analytics: el beacon no está en el HTML del
 * repo, lo inyecta Cloudflare en el borde desde static.cloudflareinsights.com.
 * Por eso hay que declararlo aquí — inventariar solo el código fuente no lo
 * revela, y la primera versión de esta CSP lo dejó bloqueado.
 *
 * 'unsafe-inline' en script-src es la concesión: Next inyecta scripts en línea
 * para hidratar, y quitarlo exige nonces por petición, lo que obliga a
 * renderizar cada página en el servidor y renuncia al prerender estático. Para
 * una landing sin sesiones ni datos de usuario no compensa. Aun así la
 * directiva sirve: connect-src corta la exfiltración a dominios ajenos, que es
 * lo que un XSS necesita para ser útil.
 */
/* `next dev` evalúa código para el recargado en caliente y React Refresh: sin
   'unsafe-eval' la página nunca se hidrata en local (menús y formularios
   muertos). Solo en desarrollo; la política de producción no cambia. */
const devEval = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${devEval} https://static.cloudflareinsights.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://cloudflareinsights.com",
  "form-action 'self'",
  // 'self' y no 'none' para no endurecer la política que ya tenía X-Frame-Options.
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * Rutas retiradas cuando Zentral se enfocó en tres líneas (a la medida, RIPS
 * y Loyalty). Redirigen de forma permanente a lo más cercano que sigue vivo,
 * para no perder a quien llegue por un enlace o un resultado de búsqueda
 * viejo. Next responde 308, que Google trata igual que un 301.
 */
const retiredRoutes = [
  { source: "/productos/sports", destination: "/productos" },
  { source: "/productos/control", destination: "/productos" },
  // Agentes de IA y automatización volvieron como formas de a la medida y las
  // guías como /guias: las URL viejas van a su equivalente. Las reglas
  // específicas van antes de los comodines porque gana la primera que encaja.
  {
    source: "/servicios/agentes-ia",
    destination: "/desarrollo-a-la-medida/agentes-de-ia",
  },
  {
    source: "/servicios/automatizacion-de-procesos",
    destination: "/desarrollo-a-la-medida/automatizacion-de-procesos",
  },
  { source: "/servicios", destination: "/desarrollo-a-la-medida" },
  { source: "/servicios/:slug", destination: "/desarrollo-a-la-medida" },
  {
    source:
      "/recursos/:slug(agentes-ia-atencion-al-cliente|que-procesos-automatizar-primero|n8n-zapier-o-desarrollo-propio)",
    destination: "/guias/:slug",
  },
  { source: "/recursos", destination: "/guias" },
  { source: "/recursos/:slug", destination: "/guias" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return retiredRoutes.map((route) => ({ ...route, permanent: true }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Sin `preload`: entrar a la lista de precarga de los navegadores es
          // un trámite aparte y salirse toma meses. Que sea una decisión tuya.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
