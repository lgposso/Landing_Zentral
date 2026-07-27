import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre en pestaña nueva con los `rel` de seguridad correspondientes. */
  isExternal?: boolean;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-button font-semibold " +
  "whitespace-nowrap transition-[transform,background-color,border-color,box-shadow] " +
  "duration-300 ease-out will-change-transform hover:scale-[1.02] active:scale-[0.99] " +
  "motion-reduce:transform-none motion-reduce:transition-none";

const variants: Record<Variant, string> = {
  // Azul sólido con texto blanco. El glow del hover es la única licencia
  // luminosa del sistema, y usa el único acento permitido.
  primary:
    "bg-primary text-white shadow-[0_0_0_0_rgba(37,99,235,0)] " +
    "hover:bg-primary-hover hover:shadow-[0_10px_36px_-8px_rgba(37,99,235,0.65)]",
  // Sólo borde, sin relleno.
  secondary:
    "border border-border bg-transparent text-foreground " +
    "hover:border-primary hover:bg-primary/10",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-small",
  lg: "h-14 px-8 text-small md:text-body",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isExternal = false,
  className,
  ...props
}: ButtonProps) {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
