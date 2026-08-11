import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { hero } from "@/config/content";
import { ctaConfig } from "@/config/site";
import { ZentralCore } from "./ZentralCore";

export function Hero() {
  return (
    <section
      id="inicio"
      // pt compensa el navbar fijo (104px) y deja aire por encima del titular.
      className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44 lg:pb-32 lg:pt-48"
    >
      {/* La retícula y las auroras las aporta `SiteBackground`, que cubre toda
          la página; aquí sólo hace falta el contexto de apilamiento. */}
      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Columna de texto */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal immediate>
              <h1 className="text-hero text-foreground">{hero.title}</h1>
            </Reveal>

            <Reveal immediate delay={0.16}>
              <p className="mt-7 max-w-xl text-body text-muted">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal immediate delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href={ctaConfig.primary.href}
                  isExternal={ctaConfig.primary.isExternal}
                  size="lg"
                >
                  {ctaConfig.primary.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>

                <Button
                  href={ctaConfig.secondary.href}
                  variant="secondary"
                  size="lg"
                >
                  {ctaConfig.secondary.label}
                </Button>
              </div>
            </Reveal>

            <Reveal immediate delay={0.32}>
              <ul className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3">
                {hero.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="zentral-label flex items-center gap-2.5 text-muted"
                  >
                    <span
                      className="size-1 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Zentral Core */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal immediate delay={0.2} className="mx-auto max-w-lg lg:max-w-none">
              <ZentralCore />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
