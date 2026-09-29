"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { LineMark } from "@/components/ui/LineMark";
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
        "fixed inset-x-0 top-0 z-50 bg-background transition-[border-color,box-shadow] duration-300 ease-out",
        scrolled || menuOpen
          ? "border-b border-border shadow-[0_8px_28px_-18px_rgba(0,0,0,0.8)]"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-[72px] items-center justify-between gap-6"
          aria-label="Navegación principal"
        >
          <Logo priority size="lg" />

          {/* Navegación de escritorio: las tres líneas de Zentral. Cada
              enlace lleva su marca y, sobre la home, apaga en el mapa las
              líneas que no son la suya (ver globals.css). */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-nav-line={item.line}
                  className="inline-flex items-center gap-2 text-small font-bold text-foreground underline-offset-[0.35em] transition-colors duration-200 hover:text-link hover:underline"
                >
                  {item.line && <LineMark line={item.line} size="xs" />}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* El ocultado va en un envoltorio, no en el propio Button: éste
                ya trae `inline-flex`, y entre dos utilidades de `display`
                gana la que Tailwind emite después, no la que se escribe
                después. */}
            <div className="hidden sm:block">
              <PrimaryCtaButton location="navbar-desktop" icon={false} />
            </div>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => (menuOpen ? closeMenu(true) : setMenuOpen(true))}
              className="inline-flex size-11 items-center justify-center rounded-button border-[1.5px] border-foreground text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={2} aria-hidden="true" />
              ) : (
                <Menu className="size-5" strokeWidth={2} aria-hidden="true" />
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
        className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background lg:hidden"
      >
        <Container>
          <ul className="flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-border">
                <Link
                  href={item.href}
                  onClick={() => closeMenu()}
                  className="flex items-center gap-3 py-4 text-body font-bold text-foreground"
                >
                  {item.line && <LineMark line={item.line} size="sm" />}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <PrimaryCtaButton
            location="navbar-mobile"
            icon={false}
            size="lg"
            className="mb-8 mt-4 w-full"
            onClick={() => closeMenu()}
          />
        </Container>
      </div>
    </header>
  );
}
