import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StripMap } from "@/components/network/StripMap";
import { LineMark } from "@/components/ui/LineMark";
import { productHref } from "@/config/products";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductLinesProps {
  products: Product[];
  /** Nivel del nombre de cada producto según la página donde vive. */
  headingLevel?: "h2" | "h3";
  className?: string;
}

/**
 * Cada producto como una línea del sistema: su viñeta, su nombre y su
 * promesa, y a la derecha su franja con las cuatro cosas que hace como
 * estaciones. No son tarjetas: son recorridos.
 */
export function ProductLines({
  products,
  headingLevel = "h3",
  className,
}: ProductLinesProps) {
  const Heading = headingLevel;

  return (
    <ol className={cn("product-lines space-y-16 md:space-y-20", className)}>
      {products.map((product) => (
        <li
          key={product.slug}
          data-line-row={product.slug}
          className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:gap-8"
        >
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LineMark line={product.slug} size="lg" />
              <div>
                <Heading className="text-h3 text-foreground">
                  <Link
                    href={productHref(product.slug)}
                    className="hover:underline"
                  >
                    {product.name}
                  </Link>
                </Heading>
                <p className="text-small text-muted">{product.sector}</p>
              </div>
            </div>
            <p className="mt-5 max-w-[34ch] text-body font-semibold leading-snug text-foreground">
              {product.tagline}
            </p>
            <p className="mt-3 max-w-[44ch] text-small text-muted">
              {product.summary}
            </p>
          </div>

          <div className="lg:col-span-8 lg:pt-3">
            <StripMap
              line={product.slug}
              stations={product.capabilities.map((capability) => ({
                title: capability.title,
              }))}
              terminus={
                <Link
                  href={productHref(product.slug)}
                  className="group inline-flex items-center gap-2 text-small font-bold text-foreground hover:text-link"
                >
                  Ver {product.name}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </Link>
              }
            />
          </div>
        </li>
      ))}
    </ol>
  );
}
