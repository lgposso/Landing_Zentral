import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { privacyPolicy } from "@/config/content";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description:
    "Cómo Zentral Solutions trata los datos personales recolectados a través de este sitio, conforme a la Ley 1581 de 2012.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: false,
    follow: true,
  },
};

/**
 * Contenido en config/content.ts (`privacyPolicy`). Es un borrador sin
 * revisión legal — ver la nota en la cabecera de ese export. No indexada
 * (`robots: noindex`) hasta que el texto quede aprobado.
 */
export default function PrivacidadPage() {
  return (
    <Container className="py-20 lg:py-28">
      <h1 className="text-h2 font-extrabold tracking-tight text-foreground">
        {privacyPolicy.title}
      </h1>

      <p className="mt-4 text-small text-muted">
        Última actualización: {privacyPolicy.lastUpdated}
      </p>

      <div className="mt-6 rounded-lg border border-border bg-primary/10 p-6 text-small text-foreground">
        <strong className="font-semibold">Borrador sin validar:</strong>{" "}
        {privacyPolicy.intro}
      </div>

      <div className="mt-12 max-w-[720px] space-y-10">
        {privacyPolicy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-h3 font-bold text-foreground">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
