import type { ProductSlug } from "@/types";

/**
 * Identidad de cada línea del mapa. Las clases van escritas completas (y no
 * armadas con plantillas) para que Tailwind las encuentre al compilar.
 */
export type LineId = ProductSlug | "custom";

interface LineStyle {
  /** Color como valor CSS, para trazos SVG y estilos en línea. */
  color: string;
  bg: string;
  text: string;
  border: string;
}

export const lineStyles: Record<LineId, LineStyle> = {
  rips: {
    color: "var(--color-line-rips)",
    bg: "bg-line-rips",
    text: "text-line-rips",
    border: "border-line-rips",
  },
  loyalty: {
    color: "var(--color-line-loyalty)",
    bg: "bg-line-loyalty",
    text: "text-line-loyalty",
    border: "border-line-loyalty",
  },
  custom: {
    color: "var(--color-line-custom)",
    bg: "bg-line-custom",
    text: "text-line-custom",
    border: "border-line-custom",
  },
};
