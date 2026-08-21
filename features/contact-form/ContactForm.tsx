"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

import { contactFormCopy } from "@/config/content";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

const EMPTY_VALUES = { name: "", company: "", email: "", message: "" };

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
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [values, setValues] = useState(EMPTY_VALUES);

  useEffect(() => {
    if (state.status === "success") setValues(EMPTY_VALUES);
  }, [state.status]);

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

        <div className="flex flex-wrap items-center gap-4">
          <SubmitButton />

          {state.status === "success" && (
            <p className="text-sm text-primary-hover" role="status">
              {contactFormCopy.successMessage}
            </p>
          )}

          {state.status === "error" && (
            <p className="text-sm text-red-400" role="alert">
              {state.message ?? contactFormCopy.errorFallback}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
