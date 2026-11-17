import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { LineMark } from "@/components/ui/LineMark";
import { productHref } from "@/config/products";

/**
 * La prueba de la página de automatización: Zentral RIPS es una
 * automatización que ya funciona, construida y operada por nosotros. Lo que
 * se afirma sale de config/products.ts.
 */
export function RipsProof() {
  return (
    <section aria-labelledby="ya-funciona" className="border-t border-border py-16 md:py-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 id="ya-funciona" className="text-h3 text-foreground">
            Una automatización nuestra que ya funciona.
          </h2>
        </div>
        <div className="flex items-start gap-4 lg:col-span-8">
          <LineMark line="rips" size="sm" className="mt-0.5" />
          <div className="min-w-0">
            <p className="text-body text-muted">
              <span className="font-bold text-foreground">Zentral RIPS</span>{" "}
              revisa solo los RIPS de un mes completo antes de radicarlos:
              encuentra facturas repetidas, diagnósticos mal codificados y
              servicios que no cuadran, cuenta los días hábiles que le quedan a
              cada factura y deja todo listo en Excel. Es el trabajo que un área
              de facturación hacía a mano, hecho por un sistema que
              construimos y operamos nosotros.
            </p>
            <Link
              href={productHref("rips")}
              className="group mt-5 inline-flex items-center gap-2 text-small font-bold text-link hover:underline"
            >
              Conocer Zentral RIPS
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                strokeWidth={2.25}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
