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
  // En móvil se contiene a 32px: el logotipo es muy apaisado (5.2:1) y a 36px
  // ya ocupaba más de la mitad de una pantalla de 390px.
  lg: "h-8 w-auto sm:h-10 lg:h-11",
} as const;

/**
 * Logotipo horizontal. El PNG de origen se procesa con
 * `scripts/prepare-logos.ps1`, que le añade canal alfa y lo recorta al
 * contenido — por eso aquí no hace falta ningún recorte ni blend mode.
 *
 * Se declaran ancho y alto intrínsecos para que el navegador reserve el
 * espacio y el logo no provoque CLS.
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
        src="/logo-zentral.png"
        alt={siteConfig.legalName}
        width={1599}
        height={305}
        priority={priority}
        className={sizes[size]}
      />
    </Link>
  );
}
