import type { Metadata } from "next";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { NetworkMap } from "@/components/network/NetworkMap";
import { Container } from "@/components/ui/Container";
import { products } from "@/config/products";
import { ProductLines } from "@/features/products/ProductLines";

export const metadata: Metadata = {
  title: "Productos propios: Zentral RIPS y Zentral Loyalty",
  description:
    "Los productos que Zentral construye y opera: revisión de RIPS JSON antes de radicar, y tarjetas de lealtad digitales en Google Wallet.",
  alternates: { canonical: "/productos" },
};

export default function ProductsIndexPage() {
  return (
    <>
      <BreadcrumbSchema segments={[{ name: "Productos", path: "/productos" }]} />

      <section className="pb-16 pt-28 md:pb-20 md:pt-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-8">
            <h1 className="text-h1 text-foreground">Productos propios</h1>
            <p className="mt-6 max-w-[40ch] text-body text-muted">
              Los construimos y los operamos con la misma ingeniería de nuestros
              desarrollos a la medida. Cada uno resuelve un problema por sí solo.
            </p>
          </div>
          <div className="lg:col-span-7">
            <NetworkMap productDetail />
          </div>
        </Container>
      </section>

      <section aria-label="Líneas" className="border-t border-border py-20 md:py-28">
        <Container>
          <ProductLines products={products} headingLevel="h2" />
        </Container>
      </section>
    </>
  );
}
