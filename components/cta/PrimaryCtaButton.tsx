"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ctaConfig } from "@/config/site";

interface PrimaryCtaButtonProps {
  /** Dónde vive el botón (navbar, hero, cta-final, servicio-x-top…), para
   *  distinguir el origen del clic en el evento de analítica. */
  location: string;
  size?: "md" | "lg";
  className?: string;
  /** false en la navbar: ahí el botón no lleva flecha. */
  icon?: boolean;
  onClick?: () => void;
}

/**
 * El botón "Agenda una conversación" vive en ocho sitios del sitio. Se
 * centraliza aquí para que el evento `cta_click` de A1 no dependa de que
 * cada punto de uso se acuerde de añadirlo (ver B5 del brief SEO: sin esto
 * no se puede medir si el CTA convierte).
 */
export function PrimaryCtaButton({
  location,
  size = "md",
  className,
  icon = true,
  onClick,
}: PrimaryCtaButtonProps) {
  return (
    <Button
      href={ctaConfig.primary.href}
      isExternal={ctaConfig.primary.isExternal}
      size={size}
      className={className}
      onClick={() => {
        track("cta_click", { location });
        onClick?.();
      }}
    >
      {ctaConfig.primary.label}
      {icon && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </Button>
  );
}
