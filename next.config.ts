import type { NextConfig } from "next";

/**
 * Todo lo que carga el sitio es del mismo origen: `next/font` auto-hospeda las
 * tipografías, las imágenes son locales, y tanto Vercel Analytics como los
 * scripts de Cloudflare se sirven bajo el propio dominio. Por eso 'self'
 * alcanza para casi todo.
 *
 * 'unsafe-inline' en script-src es la concesión: Next inyecta scripts en línea
 * para hidratar, y quitarlo exige nonces por petición, lo que obliga a
 * renderizar cada página en el servidor y renuncia al prerender estático. Para
 * una landing sin sesiones ni datos de usuario no compensa. Aun así la
 * directiva sirve: connect-src corta la exfiltración a dominios ajenos, que es
 * lo que un XSS necesita para ser útil.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "form-action 'self'",
  // 'self' y no 'none' para no endurecer la política que ya tenía X-Frame-Options.
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
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
