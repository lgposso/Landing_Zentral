import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { Container } from "@/components/ui/Container";
import { ctaCopy } from "@/config/content";
import { ContactForm } from "@/features/contact-form/ContactForm";

/**
 * La terminal: el cierre de la página sobre el campo azul de Zentral, con
 * WhatsApp como camino principal y el formulario para quien prefiere el
 * correo.
 */
export function CallToAction() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="bg-primary py-20 text-white md:py-28"
    >
      <Container>
        {/* La línea a la medida, punteada, llega a su terminal: esta
            conversación es donde empieza a construirse. */}
        <div aria-hidden="true" className="mb-12 flex items-center md:mb-16">
          <span
            className="h-2 flex-1"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #ffffff 0 14px, transparent 14px 24px)",
            }}
          />
          <span className="block size-11 shrink-0 rounded-full border-[9px] border-white bg-primary" />
        </div>
      </Container>

      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h2 id="contacto-title" className="text-h1 text-white">
            {ctaCopy.title}
          </h2>
          <p className="mt-6 max-w-[42ch] text-body text-white">
            {ctaCopy.subtitle}
          </p>
          <div className="mt-10">
            <PrimaryCtaButton location="cta-final" size="lg" variant="inverse" />
          </div>
          <p className="mt-6 max-w-[40ch] text-small text-white">
            {ctaCopy.note}
          </p>
        </div>

        <div className="rounded-card bg-background p-6 text-foreground md:p-10 lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
