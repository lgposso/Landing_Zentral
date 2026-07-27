import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** Muestra un punto azul con pulso a la izquierda. */
  withDot?: boolean;
}

/** Etiqueta pequeña con borde, para el eyebrow del hero. */
export function Badge({ children, className, withDot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border border-border",
        "px-4 py-1.5 text-sm font-medium text-muted",
        className,
      )}
    >
      {withDot && (
        <span className="relative flex size-1.5" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
        </span>
      )}
      {children}
    </span>
  );
}
