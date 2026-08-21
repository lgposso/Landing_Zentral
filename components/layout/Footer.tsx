import { Mail, MapPin } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { footerColumns } from "@/config/content";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  const socials = Object.entries(siteConfig.social).filter(
    ([, href]) => href.length > 0,
  );

  return (
    <footer className="relative border-t border-border">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 lg:py-20">
          {/* Marca */}
          <div className="md:col-span-6">
            <Logo />
            <p className="mt-6 max-w-xs text-small text-muted">
              {siteConfig.tagline}
            </p>

            <ul className="mt-8 space-y-3 text-small text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>

          {/* Columnas de enlaces */}
          {footerColumns.map((column) => (
            <nav
              key={column.title}
              className="md:col-span-3"
              aria-label={column.title}
            >
              <p className="zentral-label text-foreground">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-small text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="zentral-rule" />

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} {siteConfig.legalName}. Todos los derechos reservados.
          </p>

          {socials.length > 0 && (
            <ul className="flex items-center gap-6">
              {socials.map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm capitalize text-muted transition-colors duration-200 hover:text-foreground"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </footer>
  );
}
