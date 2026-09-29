import { CallToAction } from "@/features/cta/CallToAction";
import { CustomDev } from "@/features/custom-dev/CustomDev";
import { Hero } from "@/features/hero/Hero";
import { ProductsSection } from "@/features/products/ProductsSection";

/**
 * La home como un recorrido: el mapa de la red, la troncal del desarrollo a
 * la medida, los dos productos propios como prueba y la terminal de
 * contacto. El navbar y el pie viven en `app/layout.tsx`.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CustomDev />
      <ProductsSection />
      <CallToAction />
    </>
  );
}
