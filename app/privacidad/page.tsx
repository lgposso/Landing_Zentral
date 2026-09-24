import type { Metadata } from "next";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { privacyPolicy } from "@/config/content";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description:
    "Cómo Zentral Solutions S.A.S. trata los datos personales que recoge por su sitio y sus canales de contacto, y cómo ejercer tus derechos, conforme a la Ley 1581 de 2012.",
  alternates: {
    canonical: "/privacidad",
  },
};

/** Contenido en config/content.ts (`privacyPolicy`). */
export default function PrivacidadPage() {
  return (
    <>
      <BreadcrumbSchema
        segments={[{ name: privacyPolicy.title, path: "/privacidad" }]}
      />

      <Container className="pb-20 pt-28 lg:pb-28 lg:pt-36">
        <h1 className="max-w-[20ch] text-h1 text-foreground">
          {privacyPolicy.title}
        </h1>

        <p className="mt-4 text-small text-muted">
          Vigente desde el {privacyPolicy.lastUpdated}
        </p>

        <p className="mt-8 max-w-[65ch] text-body text-foreground">
          {privacyPolicy.intro}
        </p>

        <div className="mt-14 max-w-[720px] space-y-12">
          {privacyPolicy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-h3 text-foreground">{section.heading}</h2>
              {section.paragraphs.length > 0 && (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
              {"items" in section && section.items && (
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-body text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] block size-1.5 shrink-0 rounded-full bg-muted"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
