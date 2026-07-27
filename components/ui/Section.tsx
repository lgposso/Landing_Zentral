import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Envoltura semántica de sección con el espaciado vertical del spec.
 *
 * No lleva fondo propio: todo el sitio es negro y la separación entre
 * secciones la marcan el espacio y los marcos de las rejillas, no bandas de
 * color alternas.
 */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // 140px en escritorio (§7), reducido proporcionalmente hacia abajo.
        "relative py-20 md:py-28 lg:py-[140px]",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
