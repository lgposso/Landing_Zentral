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
  loyalty: {
    color: "var(--color-line-loyalty)",
    bg: "bg-line-loyalty",
    text: "text-line-loyalty",
    border: "border-line-loyalty",
  },
  rips: {
    color: "var(--color-line-rips)",
    bg: "bg-line-rips",
    text: "text-line-rips",
    border: "border-line-rips",
  },
  sports: {
    color: "var(--color-line-sports)",
    bg: "bg-line-sports",
    text: "text-line-sports",
    border: "border-line-sports",
  },
  control: {
    color: "var(--color-line-control)",
    bg: "bg-line-control",
    text: "text-line-control",
    border: "border-line-control",
  },
  custom: {
    color: "var(--color-line-custom)",
    bg: "bg-line-custom",
    text: "text-line-custom",
    border: "border-line-custom",
  },
};
