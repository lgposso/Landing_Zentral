import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/** Envoltura semántica de sección con el ritmo vertical del sitio. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}
