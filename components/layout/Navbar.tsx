"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { useScrolled } from "@/hooks/useScrolled";
import { navItems } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /**
   * `restoreFocus` sólo al cerrar con Esc o con el botón: ahí el foco quedaría
   * huérfano al principio del documento. Al pulsar un enlace no se restaura,
   * porque el destino de la navegación debe conservar el foco.
   */
  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  // Cierre con Esc, bloqueo del scroll de fondo y retención del foco dentro
  // del panel mientras está abierto.
  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [menuOpen, closeMenu]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-out",
        // Blur al hacer scroll (§11 del spec).
        scrolled
          ? "border-b border-border bg-background/72 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav
          // 104px de alto: el logo grande necesita más aire que los 80px
          // originales para no tocar los bordes de la barra.
          className="flex h-26 items-center justify-between gap-6"
          aria-label="Navegación principal"
        >
          <Logo priority size="lg" />

          {/* Navegación de escritorio */}
          <ul className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-small text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* El ocultado va en un envoltorio, no en el propio Button: éste
                ya trae `inline-flex`, y entre dos utilidades de `display`
                gana la que Tailwind emite después, no la que se escribe
                después. En móvil el botón se salía de la pantalla y empujaba
                el menú hamburguesa fuera del viewport. */}
            <div className="hidden sm:block">
              <PrimaryCtaButton location="navbar-desktop" icon={false} />
            </div>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => (menuOpen ? closeMenu(true) : setMenuOpen(true))}
              className="inline-flex size-11 items-center justify-center rounded-button border border-border text-foreground transition-colors duration-200 hover:border-primary lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="size-5" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Panel móvil */}
      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!menuOpen}
        className="border-t border-border bg-background lg:hidden"
      >
        <Container>
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => closeMenu()}
                  className="block border-b border-border/60 py-4 text-body text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <PrimaryCtaButton
            location="navbar-mobile"
            icon={false}
            size="lg"
            className="mb-8 w-full"
            onClick={() => closeMenu()}
          />
        </Container>
      </div>
    </header>
  );
}
