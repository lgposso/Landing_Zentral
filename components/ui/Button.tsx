import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse";
type Size = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre en pestaña nueva con los `rel` de seguridad correspondientes. */
  isExternal?: boolean;
}

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-button font-bold " +
  "whitespace-nowrap transition-[background-color,border-color,color,transform] " +
  "duration-150 ease-out active:scale-[0.97] motion-reduce:transform-none";

const variants: Record<Variant, string> = {
  // La acción: azul de marca, como la línea de Zentral.
  primary: "bg-primary text-white hover:bg-primary-hover",
  // Contorno claro: se lee como un rótulo, no compite con la acción.
  secondary:
    "border-[1.5px] border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
  // Para usar sobre un campo azul.
  inverse: "bg-white text-primary-hover hover:bg-[#dbe7ff]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-14 px-7 text-body",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  isExternal = false,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  // Rutas internas por el router de Next: navegación sin recarga y prefetch.
  const { href, ...rest } = props;
  if (!isExternal && href?.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <a href={href} className={classes} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
