"use client";

import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/config/site";
import type { Product } from "@/types";

interface DemoCtaButtonProps {
  product: Pick<Product, "slug" | "demoMessage">;
  location: string;
  size?: "md" | "lg";
  variant?: "primary" | "inverse";
  className?: string;
}

/**
 * "Solicitar demo" de un producto: abre WhatsApp con el nombre del producto
 * ya escrito. Evento propio (`demo_click`) para no mezclarlo con la
 * conversación general.
 */
export function DemoCtaButton({
  product,
  location,
  size = "lg",
  variant = "primary",
  className,
}: DemoCtaButtonProps) {
  return (
    <Button
      href={whatsappHref(product.demoMessage)}
      isExternal
      size={size}
      variant={variant}
      className={className}
      onClick={() => track("demo_click", { product: product.slug, location })}
    >
      Solicitar demo
      <ArrowRight
        className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
        strokeWidth={2.25}
        aria-hidden="true"
      />
    </Button>
  );
}
