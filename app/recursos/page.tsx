import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { resourceArticles } from "@/config/content";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Respuestas directas a lo que un director de operaciones necesita saber antes de automatizar un proceso, integrar sistemas o implementar agentes IA.",
  alternates: {
    canonical: "/recursos",
  },
};

export default function ResourcesIndexPage() {
  return (
    <Container className="py-20 lg:py-28">
      <h1 className="max-w-2xl text-h1 text-foreground">Recursos</h1>
      <p className="mt-6 max-w-2xl text-body text-muted">
        Respuestas directas a lo que conviene saber antes de automatizar un
        proceso, integrar sistemas o implementar agentes IA.
      </p>

      <ul className="mt-16 max-w-[720px] divide-y divide-border border-y border-border">
        {resourceArticles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/recursos/${article.slug}`}
              className="group flex items-center justify-between gap-6 py-6 transition-colors duration-200 hover:text-primary-hover"
            >
              <span className="text-body font-semibold text-foreground group-hover:text-primary-hover">
                {article.title}
              </span>
              <ArrowRight
                className="size-4 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary-hover motion-reduce:transform-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
