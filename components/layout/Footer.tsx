import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { LineMark } from "@/components/ui/LineMark";
import { Logo } from "@/components/layout/Logo";
import { footerColumns } from "@/config/content";
import { products, productHref } from "@/config/products";
import { ctaConfig, siteConfig } from "@/config/site";

const linkClasses =
  "text-small text-muted transition-colors duration-200 hover:text-foreground hover:underline";

/** El pie como la leyenda del mapa: las líneas, los ramales y cómo llegar. */
export function Footer() {
  const year = new Date().getFullYear();

  const socials = Object.entries(siteConfig.social).filter(
    ([, href]) => href.length > 0,
  );

  return (
    <footer className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-small font-semibold text-foreground">
              {siteConfig.tagline}
            </p>

            <ul className="mt-7 space-y-3 text-small text-muted">
              <li>
                <a
                  href={ctaConfig.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-foreground"
                >
                  <MessageCircle className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  WhatsApp +57 333 762 8306
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                {siteConfig.contact.location}
              </li>
            </ul>
          </div>

          <nav aria-label="Productos" className="lg:col-span-3">
            <p className="zentral-label text-foreground">Productos</p>
            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={productHref(product.slug)}
                    className="inline-flex items-center gap-2.5 text-small font-semibold text-foreground hover:underline"
                  >
                    <LineMark line={product.slug} size="sm" />
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              className="lg:col-span-3 last:lg:col-span-2"
              aria-label={column.title}
            >
              <p className="zentral-label text-foreground">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClasses}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="zentral-rule" />

        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {year} {siteConfig.legalName}. NIT 902.064.009-2.
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
