import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/types";

interface SectionHeadingProps {
  copy: SectionCopy;
  className?: string;
  /** Id del <h2>, para `aria-labelledby` en la sección. */
  id?: string;
}

/**
 * Encabezado de sección: el título y, debajo, una sola frase de apoyo. Sin
 * antetítulo: el título se sostiene solo.
 */
export function SectionHeading({ copy, className, id }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <h2 id={id} className="text-h2 text-foreground">
        {copy.title} {copy.titleAccent}
      </h2>
      <p className="mt-5 max-w-[60ch] text-body text-muted">{copy.subtitle}</p>
    </div>
  );
}
