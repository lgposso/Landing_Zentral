import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LineMark } from "@/components/ui/LineMark";
import { productsCopy } from "@/config/content";
import { productHref, products } from "@/config/products";
import { cn } from "@/lib/utils";

interface OwnProductsProps {
  /** Id del <h2>, para `aria-labelledby` en la sección que lo envuelve. */
  headingId: string;
  className?: string;
}

/**
 * Los productos propios como banda secundaria: un titular corto a la
 * izquierda y los dos productos en una línea cada uno (marca, nombre, sector,
 * promesa). Sin franjas de estaciones: el recorrido completo de cada producto
 * vive en su página, y aquí solo respaldan al desarrollo a la medida.
 */
export function OwnProducts({ headingId, className }: OwnProductsProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8", className)}>
      <div className="lg:col-span-4">
        <h2 id={headingId} className="text-h3 text-foreground">
          {productsCopy.title} {productsCopy.titleAccent}
        </h2>
        <p className="mt-3 max-w-[40ch] text-small text-muted">
          {productsCopy.subtitle}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8 lg:gap-10 lg:pt-1">
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={productHref(product.slug)} className="group flex items-start gap-3.5">
              <LineMark line={product.slug} size="sm" className="mt-0.5" />
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 text-[1.0625rem] font-extrabold leading-tight text-foreground group-hover:underline">
                  {product.name}
                  <ArrowRight
                    className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1 block text-[14px] text-muted">{product.sector}</span>
                <span className="mt-2 block max-w-[38ch] text-small text-muted">
                  {product.tagline}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
