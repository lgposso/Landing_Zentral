import { NetworkMap } from "@/components/network/NetworkMap";
import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/config/content";
import { ctaConfig } from "@/config/site";

/**
 * Primer pliegue: el titular como letrero de estación a todo el ancho y,
 * debajo, la propuesta con sus dos acciones junto al mapa de la red.
 *
 * El texto no se anima: es el LCP y tiene que estar ahí en el primer
 * pintado. El único momento de movimiento es el mapa trazándose.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      // pt compensa el navbar fijo (72px).
      className="relative pb-16 pt-28 md:pb-24 md:pt-32"
    >
      <Container>
        <h1
          id="hero-title"
          className="max-w-[16ch] text-hero text-foreground md:max-w-none"
        >
          {hero.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-12 md:mt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pt-6">
            <p className="max-w-[34ch] text-body text-muted md:text-[1.25rem] md:leading-[1.55]">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <PrimaryCtaButton location="hero" size="lg" />
              <Button
                href={ctaConfig.secondary.href}
                variant="secondary"
                size="lg"
              >
                {ctaConfig.secondary.label}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <NetworkMap className="-mx-1 lg:-mr-4 lg:-mt-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
