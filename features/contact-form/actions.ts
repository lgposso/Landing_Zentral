"use server";

import { contactFormCopy } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildBody, buildSubject } from "./message";
import { isRateLimited } from "./rate-limit";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  /**
   * Separa los errores porque no se resuelven igual: un dato mal escrito lo
   * corrige la persona reintentando, pero un fallo de entrega o un tope de
   * envíos no dependen de ella — ahí hay que ofrecerle otra vía.
   */
  reason?: "validation" | "delivery" | "rate_limit";
  message?: string;
}

const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_ADDRESS = "Zentral <formulario@zentral.com.co>";

/** Topes por campo: sin ellos el cuerpo del correo lo decide quien envía. */
const LIMITS = { name: 120, company: 120, email: 254, message: 5000 } as const;

/**
 * El nombre y la empresa terminan en el asunto del correo. Los saltos de
 * línea se quitan porque en un asunto son separadores de cabecera: es la vía
 * clásica para inyectar destinatarios ocultos. Resend lo rechazaría, pero no
 * se delega en eso.
 */
function sanitize(value: FormDataEntryValue | null, max: number): string {
  return (value?.toString() ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  /**
   * Honeypot: el campo va oculto y sin foco, así que una persona nunca lo
   * llena y casi todo bot sí. Se responde éxito a propósito — decirle al bot
   * que fue detectado solo le enseña a evitarlo la próxima.
   */
  if (formData.get("website")?.toString()) {
    return { status: "success" };
  }

  const name = sanitize(formData.get("name"), LIMITS.name);
  const company = sanitize(formData.get("company"), LIMITS.company);
  const email = sanitize(formData.get("email"), LIMITS.email);
  // El mensaje conserva sus saltos de línea: va en el cuerpo, no en el asunto.
  const message = (formData.get("message")?.toString() ?? "")
    .trim()
    .slice(0, LIMITS.message);

  if (!name || !company || !email || !message) {
    return { status: "error", reason: "validation", message: "Completa todos los campos." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", reason: "validation", message: "Ingresa un correo válido." };
  }

  // Después de validar, para que un error de tipeo no gaste los intentos.
  if (await isRateLimited()) {
    return {
      status: "error",
      reason: "rate_limit",
      message: contactFormCopy.rateLimitMessage,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return { status: "error", reason: "delivery", message: contactFormCopy.errorFallback };
  }

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: siteConfig.contact.email,
      reply_to: email,
      subject: buildSubject({ name, company, email, message }),
      text: buildBody({ name, company, email, message }),
    }),
  });

  if (!response.ok) {
    console.error("Resend respondió con error:", response.status, await response.text());
    return { status: "error", reason: "delivery", message: contactFormCopy.errorFallback };
  }

  return { status: "success" };
}
