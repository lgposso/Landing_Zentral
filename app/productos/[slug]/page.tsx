import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Info, ShieldCheck } from "lucide-react";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { ProductSchema } from "@/components/ProductSchema";
import { DemoCtaButton } from "@/components/cta/DemoCtaButton";
import { LineDiagram } from "@/components/network/LineDiagram";
import { StripMap } from "@/components/network/StripMap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LineMark } from "@/components/ui/LineMark";
import { getProduct, productHref, products } from "@/config/products";
import { specimens } from "@/features/products/specimens";
import { lineStyles } from "@/lib/lines";
import { cn } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: { absolute: product.metaTitle },
    description: product.metaDescription,
    alternates: { canonical: productHref(product.slug) },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: productHref(product.slug),
    },
  };
}

/**
 * Página de producto: la línea completa. Arriba el producto funcionando (con
 * datos de ejemplo rotulados), después su recorrido estación por estación,
 * qué resuelve, qué hace, qué cuida, qué todavía no hace y las preguntas.
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const line = lineStyles[product.slug];
  const ProductSpecimen = specimens[product.slug];
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema
        segments={[
          { name: "Productos", path: "/productos" },
          { name: product.name, path: productHref(product.slug) },
        ]}
      />

      {/* Cabecera ---------------------------------------------------------- */}
      <section className="pb-16 pt-28 md:pb-24 md:pt-32">
        <Container>
          <nav aria-label="Ruta de navegación" className="text-sm text-muted">
            <Link href="/" className="hover:text-foreground hover:underline">
              Inicio
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/productos" className="hover:text-foreground hover:underline">
              Productos
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-foreground" aria-current="page">
              {product.name}
            </span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              {/* Letrero de andén: la marca y el nombre de la línea. */}
              <div className="inline-flex max-w-full items-center gap-4 rounded-card border-[1.5px] border-border bg-surface py-4 pl-5 pr-6 md:gap-5 md:pr-8">
                <LineMark line={product.slug} size="xl" />
                <div className="min-w-0">
                  <h1 className="text-h1 text-foreground">{product.name}</h1>
                  <p className="mt-1 text-small font-semibold text-muted">
                    {product.sector}
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-[26ch] text-[clamp(1.5rem,1.15rem+1.2vw,2.125rem)] font-bold leading-[1.15] tracking-[-0.02em] text-foreground">
                {product.tagline}
              </p>
              <p className="mt-6 max-w-[52ch] text-body text-muted">
                {product.summary}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <DemoCtaButton product={product} location={`producto-${product.slug}-top`} />
                {product.appUrl && (
                  <Button
                    href={product.appUrl}
                    isExternal
                    variant="secondary"
                    size="lg"
                  >
                    Ya tengo cuenta
                    <ArrowUpRight className="size-[1.1em]" strokeWidth={2.25} aria-hidden="true" />
                  </Button>
                )}
              </div>

              {product.status && (
                // Aviso de servicio, como en el andén.
                <div className="mt-9 flex max-w-[56ch] gap-3 rounded-card border-[1.5px] border-border px-5 py-4">
                  <Info
                    className="mt-0.5 size-5 shrink-0 text-foreground"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <p className="text-small text-foreground">
                    <span className="font-extrabold">{product.status.label}.</span>{" "}
                    {product.status.note}
                  </p>
                </div>
              )}
            </div>

            <div className="min-w-0 lg:col-span-5 lg:pt-4">
              <ProductSpecimen />
            </div>
          </div>
        </Container>
      </section>

      {/* Cómo funciona: el recorrido de la línea --------------------------- */}
      <section
        aria-labelledby="como-funciona"
        className="border-t border-border py-20 md:py-28"
      >
        <Container>
          <h2 id="como-funciona" className="text-h2 text-foreground">
            Cómo funciona
          </h2>
          <StripMap
            line={product.slug}
            as="h3"
            className="mt-14"
            stations={product.steps.map((step) => ({
              title: step.title,
              description: step.description,
            }))}
          />
        </Container>
      </section>

      {/* El problema y para quién ------------------------------------------ */}
      <section
        aria-labelledby="problema"
        className="border-t border-border py-20 md:py-28"
      >
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 id="problema" className="max-w-[20ch] text-h2 text-foreground">
              {product.problem.title}
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5">
              {product.problem.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <h2 className="text-h3 text-foreground">Para quién es</h2>
            <dl className="mt-6 space-y-7">
              {product.audiences.map((audience) => (
                <div key={audience.who} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={cn("mt-1 block size-5 shrink-0 rounded-full border-[5px] bg-background", line.border)}
                  />
                  <div>
                    <dt className="text-[1.0625rem] font-extrabold leading-tight text-foreground">
                      {audience.who}
                    </dt>
                    <dd className="mt-1.5 text-small text-muted">
                      {audience.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Qué hace, y lo que todavía no: la misma línea, sólida y en obra --- */}
      <section
        aria-labelledby="que-hace"
        className="border-t border-border py-20 md:py-28"
      >
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="que-hace" className="text-h2 text-foreground">
              Qué hace
            </h2>
            <LineDiagram
              line={product.slug}
              className="mt-12"
              stations={product.capabilities}
              pending={{
                title: "Lo que todavía no hace",
                stations: product.limits,
              }}
            />
          </div>

          {/* Panel informativo, como el de un andén. */}
          <aside
            aria-labelledby="confianza"
            className="min-w-0 self-start rounded-card bg-surface p-7 md:p-9 lg:sticky lg:top-28 lg:col-span-5"
          >
            <ShieldCheck
              className="size-8 text-foreground"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h2 id="confianza" className="mt-5 text-h3 text-foreground">
              {product.trust.title}
            </h2>
            <div className="mt-5 space-y-4">
              {product.trust.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-small text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      {/* Preguntas ---------------------------------------------------------- */}
      <section
        aria-labelledby="preguntas"
        className="border-t border-border py-20 md:py-28"
      >
        <Container>
          <h2 id="preguntas" className="text-h2 text-foreground">
            Preguntas
          </h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {product.questions.map((item) => (
              <div key={item.question}>
                <h3 className="text-[1.25rem] font-extrabold leading-snug text-foreground">
                  {item.question}
                </h3>
                <p className="mt-3 max-w-[56ch] text-body text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Terminal: la línea del producto llega hasta aquí --------------- */}
      <section aria-labelledby="demo" className="pb-20 md:pb-28">
        <Container>
          <div aria-hidden="true" className="flex items-center">
            <span className={cn("h-2 flex-1 rounded-l-full", line.bg)} />
            <span
              className={cn("block size-11 shrink-0 rounded-full border-[9px] bg-background", line.border)}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <h2 id="demo" className="text-h2 text-foreground">
                Míralo funcionando con tu caso.
              </h2>
              <p className="mt-5 max-w-[52ch] text-body text-muted">
                Te mostramos {product.name} por WhatsApp o en una llamada corta,
                con lo que tu operación necesita, no con una presentación genérica.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <DemoCtaButton product={product} location={`producto-${product.slug}-bottom`} />
            </div>
          </div>

          {/* Letrero de transbordo: las otras líneas desde esta terminal. */}
          <nav
            aria-labelledby="otras-lineas"
            className="mt-20 rounded-card border-[1.5px] border-border bg-surface px-6 py-7 md:px-9 md:py-8"
          >
            <h2 id="otras-lineas" className="text-small font-bold text-muted">
              Transbordo a otras líneas
            </h2>
            <ul className="mt-5 flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-x-10">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={productHref(other.slug)}
                    className="group inline-flex min-h-11 items-center gap-3 text-foreground"
                  >
                    <LineMark line={other.slug} size="md" />
                    <span className="text-[1.125rem] font-extrabold group-hover:underline">
                      {other.name}
                    </span>
                    <ArrowRight
                      className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                      strokeWidth={2.25}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>
    </>
  );
}
