import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Container } from "@/components/ui/Container";
import { guideHref, guides } from "@/config/guides";

const title = "Guías sobre agentes de IA y automatización";
const description =
  "Respuestas directas a lo que conviene saber antes de automatizar un proceso o poner un agente de IA a atender clientes en tu empresa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guias" },
  openGraph: { title, description, url: "/guias" },
};

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbSchema segments={[{ name: "Guías", path: "/guias" }]} />

      <Container className="pb-20 pt-28 lg:pb-28 lg:pt-36">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-foreground hover:underline">
            Inicio
          </Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <span className="text-foreground" aria-current="page">
            Guías
          </span>
        </nav>

        <h1 className="mt-8 max-w-[18ch] text-h1 text-foreground">Guías</h1>
        <p className="mt-6 max-w-[56ch] text-body text-muted">{description}</p>

        <ul className="mt-16 max-w-[760px] divide-y divide-border border-y border-border">
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={guideHref(guide.slug)}
                className="group flex items-start justify-between gap-6 py-7"
              >
                <span className="min-w-0">
                  <span className="block text-[1.25rem] font-extrabold leading-snug text-foreground group-hover:underline">
                    {guide.title}
                  </span>
                  <span className="mt-2 block text-small text-muted">
                    {guide.metaDescription}
                  </span>
                </span>
                <ArrowRight
                  className="mt-1.5 size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
