import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { ISOTYPE_PATHS, ISOTYPE_VIEWBOX } from "@/components/ui/Isotype";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Los colores de línea van en hex: la imagen se genera fuera del CSS. */
const LINE_HEX = {
  rips: "#17A673",
  loyalty: "#F23D6D",
  custom: "#2563EB",
} as const;

/**
 * Imagen de Open Graph generada en build, en el mundo «Mapa de red»: fondo
 * oscuro, el titular y el intercambiador con la troncal azul del desarrollo
 * a la medida y los dos ramales de producto, cada uno marcado con el isotipo
 * en su color.
 *
 * Usa la fuente por defecto de `next/og` a propósito: cargar Overpass aquí
 * obligaría a descargar el binario durante el build.
 */
/** Las tres líneas, en el orden del navbar: a la medida primero. */
const marks = [
  { line: "custom", label: "A la medida" },
  ...products.map((product) => ({ line: product.slug, label: product.shortName })),
] as const satisfies readonly { line: keyof typeof LINE_HEX; label: string }[];

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-zentral.svg"));
  const isotype = await readFile(join(process.cwd(), "public/isotipo-zentral2.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const isotypeSrc = `data:image/svg+xml;base64,${isotype.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0A0A0A",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Mapa: el intercambiador a la derecha del titular; la troncal sale
            recta y más gruesa hasta el borde, y los ramales a 45°. */}
        <svg
          width="520"
          height="630"
          viewBox="0 0 520 630"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          <path d="M 251 264 L 380 135 L 520 135" stroke={LINE_HEX.rips} strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 251 366 L 380 495 L 520 495" stroke={LINE_HEX.loyalty} strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 272 315 L 520 315" stroke={LINE_HEX.custom} strokeWidth="24" fill="none" />
          <circle cx="200" cy="315" r="72" fill="#0A0A0A" stroke="#FAFAFA" strokeWidth="12" />
        </svg>
        <img
          src={isotypeSrc}
          width={92}
          height={84}
          style={{ position: "absolute", right: 274, top: 273 }}
          alt=""
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 700,
          }}
        >
          <img src={logoSrc} width={300} height={60} alt="" />

          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              color: "#FAFAFA",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            Software a la medida, construido como producto.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
            {marks.map((mark) => (
              <div
                key={mark.line}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <svg width="40" height="37" viewBox={ISOTYPE_VIEWBOX}>
                  <path d={ISOTYPE_PATHS.top} fill={LINE_HEX[mark.line]} />
                  <path d={ISOTYPE_PATHS.bottom} fill={LINE_HEX[mark.line]} fillOpacity={0.8} />
                </svg>
                <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#FAFAFA" }}>
                  {mark.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
