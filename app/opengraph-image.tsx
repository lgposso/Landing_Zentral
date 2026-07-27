import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Imagen de Open Graph generada en build con los tokens de marca.
 *
 * Usa fuentes del sistema a propósito: cargar Manrope aquí obligaría a
 * descargar el binario de la fuente durante el build, y el rendimiento del
 * OG no justifica esa dependencia.
 */
export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Resplandor azul de marca */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 760,
            height: 760,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.30) 0%, rgba(37,99,235,0.0) 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              borderRadius: 5,
              background: "#2563EB",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.22em",
            }}
          >
            ZENTRAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Diseñamos sistemas inteligentes que trabajan por tu empresa.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 26,
              color: "#A1A1AA",
              maxWidth: 820,
            }}
          >
            Automatización · Agentes IA · Integraciones · Software a la medida
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "#A1A1AA",
          }}
        >
          <div
            style={{ display: "flex", width: 56, height: 2, background: "#27272A" }}
          />
          Zentral Solutions · Colombia
        </div>
      </div>
    ),
    size,
  );
}
