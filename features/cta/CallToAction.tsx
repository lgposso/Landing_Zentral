import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ctaCopy } from "@/config/content";
import { ctaConfig } from "@/config/site";
import { ContactForm } from "@/features/contact-form/ContactForm";

export function CallToAction() {
  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 lg:py-[140px]"
    >
      <Container>
        {/* Encerrado en el mismo marco azul que las rejillas: el cierre de la
            página usa el lenguaje visual del resto, no uno propio. */}
        <Reveal className="border border-primary/25 px-8 py-20 text-center md:px-16 md:py-24">
          <h2 className="mx-auto max-w-3xl text-h1">
            <span className="block text-foreground">Hablemos de tu operación,</span>
            <span className="block text-primary-hover">no de tecnología.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-body text-muted">
            {ctaCopy.subtitle}
          </p>

          <div className="mt-12 flex justify-center">
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
          </div>

          <p className="mt-8 text-sm text-muted">{ctaCopy.note}</p>

          <div className="zentral-rule mt-16" />

          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
