"use client";

import { track } from "@vercel/analytics";
import { Mail, MessageCircle } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

import { contactFormCopy } from "@/config/content";
import { siteConfig } from "@/config/site";
import { submitContactForm, type ContactFormState } from "./actions";
import { buildBody, buildSubject } from "./message";

const initialState: ContactFormState = { status: "idle" };

/**
 * El firewall de Vercel corta los envíos abusivos con un 429 antes de que la
 * Server Action llegue a correr. Sin esta envoltura, React recibe una promesa
 * rechazada donde esperaba un estado y tumba el árbol entero: el visitante
 * pierde lo que escribió y queda en la pantalla "Application error", que fue
 * justo lo que pasó al probar la regla.
 *
 * Cualquier fallo por debajo de la acción — 429, corte de red, error del
 * servidor — se trata como fallo de entrega, que es lo que es desde el lado de
 * quien escribe. Así ve la caja con WhatsApp y correo en vez de una página
 * rota, y conserva su mensaje.
 *
 * El costo es que el formulario deja de funcionar sin JavaScript, porque la
 * envoltura ya no es una Server Action que Next pueda invocar directamente
 * desde el HTML. Es un intercambio aceptable en un sitio que ya depende de JS
 * para todo lo demás.
 */
async function submitWithFallback(
  previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    return await submitContactForm(previous, formData);
  } catch {
    return {
      status: "error",
      reason: "delivery",
      message: contactFormCopy.errorFallback,
    };
  }
}

const EMPTY_VALUES = { name: "", company: "", email: "", message: "", website: "" };

const fallbackLinkClasses =
  "inline-flex h-11 items-center gap-2 rounded-button border border-border px-4 text-sm " +
  "text-foreground transition-colors duration-200 hover:border-primary hover:text-primary-hover";

const inputClasses =
  "mt-2 w-full rounded-button border border-border bg-transparent px-4 py-3 text-small text-foreground " +
  "placeholder:text-muted transition-colors duration-200 focus:border-primary focus:outline-none";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-button bg-primary px-6 text-small font-semibold text-white transition-colors duration-300 hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? contactFormCopy.submitPendingLabel : contactFormCopy.submitLabel}
    </button>
  );
}

/**
 * Alternativa al mailto: del footer (§C6 del brief SEO).
 *
 * Campos controlados a propósito: tras una Server Action, React vacía los
 * inputs no controlados aunque la acción devuelva un error. Sin este estado
 * local, un envío fallido borraría lo que la persona ya escribió.
 */
export function ContactForm() {
  const [state, formAction] = useActionState(submitWithFallback, initialState);
  const [values, setValues] = useState(EMPTY_VALUES);

  useEffect(() => {
    if (state.status === "success") setValues(EMPTY_VALUES);
  }, [state.status]);

  /**
   * Un fallo de entrega es invisible desde afuera: el visitante ve un error y
   * se va, y de este lado no queda rastro. El evento es lo único que avisa
   * que el formulario dejó de entregar.
   */
  useEffect(() => {
    if (state.status === "error" && state.reason === "delivery") {
      track("contact_form_delivery_error");
    }
  }, [state]);

  // Las dos salidas llevan precargado lo que la persona ya escribió.
  const draft = buildBody(values);
  const whatsappHref = `https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(draft)}`;
  const emailHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(buildSubject(values))}&body=${encodeURIComponent(draft)}`;

  return (
    <div className="mx-auto mt-16 max-w-xl text-left">
      <h3 className="text-h3 text-foreground">{contactFormCopy.title}</h3>
      <p className="mt-3 text-small text-muted">{contactFormCopy.subtitle}</p>

      <form action={formAction} className="mt-8 space-y-5" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="text-sm text-muted">
              {contactFormCopy.fields.name.label}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder={contactFormCopy.fields.name.placeholder}
              value={values.name}
              onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="contact-company" className="text-sm text-muted">
              {contactFormCopy.fields.company.label}
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              required
              placeholder={contactFormCopy.fields.company.placeholder}
              value={values.company}
              onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm text-muted">
            {contactFormCopy.fields.email.label}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={contactFormCopy.fields.email.placeholder}
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm text-muted">
            {contactFormCopy.fields.message.label}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            placeholder={contactFormCopy.fields.message.placeholder}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            className={`${inputClasses} resize-none`}
          />
        </div>

        {/*
          Honeypot: invisible y fuera del recorrido de teclado y de lectores
          de pantalla, así que nadie real lo llena. Los bots rellenan todo
          campo que encuentran, y ahí se delatan.
        */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">No llenar</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <SubmitButton />

          {state.status === "success" && (
            <p className="text-sm text-primary-hover" role="status">
              {contactFormCopy.successMessage}
            </p>
          )}

          {state.status === "error" && state.reason === "validation" && (
            <p className="text-sm text-red-400" role="alert">
              {state.message ?? contactFormCopy.errorFallback}
            </p>
          )}
        </div>

        {state.status === "error" &&
          (state.reason === "delivery" || state.reason === "rate_limit") && (
            <div
              role="alert"
              className="rounded-card border border-border bg-surface p-5"
            >
              <p className="text-sm text-red-400">
                {state.message ?? contactFormCopy.errorFallback}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={fallbackLinkClasses}
                  onClick={() => track("contact_form_fallback", { via: "whatsapp" })}
                >
                  <MessageCircle className="size-4" strokeWidth={2} aria-hidden="true" />
                  {contactFormCopy.deliveryFallback.whatsappLabel}
                </a>

                <a
                  href={emailHref}
                  className={fallbackLinkClasses}
                  onClick={() => track("contact_form_fallback", { via: "email" })}
                >
                  <Mail className="size-4" strokeWidth={2} aria-hidden="true" />
                  {contactFormCopy.deliveryFallback.emailLabel}
                </a>
              </div>
            </div>
          )}

      </form>
    </div>
  );
}
