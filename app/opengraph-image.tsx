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
  loyalty: "#F23D6D",
  rips: "#17A673",
  sports: "#EE7A1C",
  control: "#9164F2",
  custom: "#2563EB",
} as const;

/**
 * Imagen de Open Graph generada en build, en el mundo «Mapa de red»: fondo
 * oscuro, el titular, el intercambiador con sus cuatro líneas y cada
 * producto marcado con el isotipo en su color.
 *
 * Usa la fuente por defecto de `next/og` a propósito: cargar Overpass aquí
 * obligaría a descargar el binario durante el build.
 */
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
        {/* Mapa: el intercambiador a la derecha con sus líneas. */}
        <svg
          width="520"
          height="630"
          viewBox="0 0 520 630"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          <path d="M 250 280 L 180 210 L 180 60" stroke={LINE_HEX.loyalty} strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 310 280 L 380 210 L 520 210" stroke={LINE_HEX.rips} strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 250 340 L 180 410 L 180 570" stroke={LINE_HEX.sports} strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 310 340 L 380 410 L 520 410" stroke={LINE_HEX.control} strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 280 360 L 280 630" stroke={LINE_HEX.custom} strokeWidth="16" fill="none" strokeDasharray="22 16" />
          <circle cx="280" cy="310" r="72" fill="#0A0A0A" stroke="#FAFAFA" strokeWidth="12" />
        </svg>
        <img
          src={isotypeSrc}
          width={92}
          height={84}
          style={{ position: "absolute", right: 194, top: 268 }}
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
            Software para problemas concretos.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 22 }}>
            {products.map((product) => (
              <div
                key={product.slug}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <svg width="40" height="37" viewBox={ISOTYPE_VIEWBOX}>
                  <path d={ISOTYPE_PATHS.top} fill={LINE_HEX[product.slug]} />
                  <path d={ISOTYPE_PATHS.bottom} fill={LINE_HEX[product.slug]} fillOpacity={0.8} />
                </svg>
                <div style={{ display: "flex", fontSize: 24, fontWeight: 700, color: "#FAFAFA" }}>
                  {product.shortName}
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
