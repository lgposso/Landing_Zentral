import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsCopy } from "@/config/content";
import { products } from "@/config/products";
import { ProductLines } from "./ProductLines";

export function ProductsSection() {
  return (
    <Section id="productos" className="border-t border-border">
      <SectionHeading copy={productsCopy} id="productos-title" />
      <ProductLines products={products} className="mt-16 md:mt-20" />
    </Section>
  );
}
