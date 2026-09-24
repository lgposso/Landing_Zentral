import { cn } from "@/lib/utils";
import { lineStyles, type LineId } from "@/lib/lines";
import { Isotype } from "./Isotype";

// Ancho del isotipo; el alto sale de su proporción (600×550).
const sizes = {
  sm: "w-6",
  md: "w-8",
  lg: "w-12",
  xl: "w-16",
} as const;

interface LineMarkProps {
  line: LineId;
  size?: keyof typeof sizes;
  className?: string;
}

/**
 * Marca de línea: el isotipo de Zentral teñido con el color de cada producto.
 * Identifica la línea en el mapa, la navegación, el pie y la página de cada
 * producto. Es decorativa: el nombre del producto siempre va escrito al lado.
 */
export function LineMark({ line, size = "md", className }: LineMarkProps) {
  return (
    <Isotype
      className={cn("h-auto shrink-0", lineStyles[line].text, sizes[size], className)}
    />
  );
}
