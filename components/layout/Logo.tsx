import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  /** Marca la imagen como prioritaria. Sólo en el navbar (está sobre el pliegue). */
  priority?: boolean;
  /** `lg` para el navbar, `sm` para el pie de página. */
  size?: "sm" | "lg";
}

const sizes = {
  sm: "h-6 w-auto sm:h-7",
  // En móvil se contiene a 32px: el logotipo es muy apaisado (5:1) y a 36px
  // ya ocupaba más de la mitad de una pantalla de 390px.
  lg: "h-8 w-auto sm:h-10 lg:h-11",
} as const;

/**
 * Logotipo horizontal (`public/logo-zentral.svg`). Al ser vectorial se sirve
 * sin pasar por el optimizador: `/_next/image` rechaza los SVG con 400 salvo
 * que se active `dangerouslyAllowSVG`, y en un vector no hay nada que optimizar.
 *
 * Ancho y alto declarados coinciden con el `viewBox` del archivo (712×142, ya
 * recortado al contenido) para que el navegador reserve el espacio exacto y el
 * logo no provoque CLS.
 */
export function Logo({
  className,
  priority = false,
  size = "sm",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity duration-200 hover:opacity-80",
        className,
      )}
      aria-label={`${siteConfig.legalName} — Inicio`}
    >
      <Image
        src="/logo-zentral.svg"
        alt={siteConfig.legalName}
        width={712}
        height={142}
        priority={priority}
        unoptimized
        className={sizes[size]}
      />
    </Link>
  );
}
