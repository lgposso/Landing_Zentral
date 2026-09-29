import { Container } from "@/components/ui/Container";
import { OwnProducts } from "./OwnProducts";

/** En la home, los productos van después del desarrollo a la medida y en una
 *  banda más corta que las secciones principales. */
export function ProductsSection() {
  return (
    <section
      id="productos"
      aria-labelledby="productos-title"
      className="border-t border-border py-16 md:py-20"
    >
      <Container>
        <OwnProducts headingId="productos-title" />
      </Container>
    </section>
  );
}
