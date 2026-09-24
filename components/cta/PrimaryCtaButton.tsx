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
  variant?: "primary" | "inverse";
  className?: string;
  /** false en la navbar: ahí el botón no lleva flecha. */
  icon?: boolean;
  onClick?: () => void;
}

/**
 * "Agenda una conversación" vive en varios sitios. Se centraliza aquí para
 * que el evento `cta_click` no dependa de que cada punto de uso se acuerde
 * de añadirlo (sin esto no se puede medir si el CTA convierte).
 */
export function PrimaryCtaButton({
  location,
  size = "md",
  variant = "primary",
  className,
  icon = true,
  onClick,
}: PrimaryCtaButtonProps) {
  return (
    <Button
      href={ctaConfig.primary.href}
      isExternal={ctaConfig.primary.isExternal}
      size={size}
      variant={variant}
      className={className}
      onClick={() => {
        track("cta_click", { location });
        onClick?.();
      }}
    >
      {ctaConfig.primary.label}
      {icon && (
        <ArrowRight
          className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
          strokeWidth={2.25}
          aria-hidden="true"
        />
      )}
    </Button>
  );
}
