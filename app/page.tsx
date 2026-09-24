import { CallToAction } from "@/features/cta/CallToAction";
import { CustomDev } from "@/features/custom-dev/CustomDev";
import { Hero } from "@/features/hero/Hero";
import { ProductsSection } from "@/features/products/ProductsSection";
import { ServicesStrip } from "@/features/services-strip/ServicesStrip";

/**
 * La home como un recorrido: el mapa de la red, las cuatro líneas, la línea
 * que se construye a la medida, los ramales de servicios y la terminal de
 * contacto. El navbar y el pie viven en `app/layout.tsx`.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <CustomDev />
      <ServicesStrip />
      <CallToAction />
    </>
  );
}
