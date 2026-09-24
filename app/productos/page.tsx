import type { Metadata } from "next";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { NetworkMap } from "@/components/network/NetworkMap";
import { Container } from "@/components/ui/Container";
import { products } from "@/config/products";
import { ProductLines } from "@/features/products/ProductLines";

export const metadata: Metadata = {
  title: "Productos: Loyalty, RIPS, Sports y Control",
  description:
    "La línea de productos SaaS de Zentral: tarjetas de lealtad en Google Wallet, revisión de RIPS JSON, reserva de canchas y control de asistencia por GPS.",
  alternates: { canonical: "/productos" },
};

export default function ProductsIndexPage() {
  return (
    <>
      <BreadcrumbSchema segments={[{ name: "Productos", path: "/productos" }]} />

      <section className="pb-16 pt-28 md:pb-20 md:pt-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-8">
            <h1 className="text-h1 text-foreground">Productos Zentral</h1>
            <p className="mt-6 max-w-[40ch] text-body text-muted">
              Cuatro líneas que salen del mismo intercambiador: la ingeniería con
              la que también construimos software a la medida.
            </p>
          </div>
          <div className="lg:col-span-7">
            <NetworkMap />
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
