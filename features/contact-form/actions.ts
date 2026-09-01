"use server";

import { contactFormCopy } from "@/config/content";
import { siteConfig } from "@/config/site";
import { buildBody, buildSubject } from "./message";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  /**
   * Separa los dos errores porque no se resuelven igual: un dato mal escrito
   * lo corrige la persona reintentando, pero un fallo de entrega no depende
   * de ella — ahí hay que ofrecerle otra vía o el mensaje se pierde.
   */
  reason?: "validation" | "delivery";
  message?: string;
}

const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_ADDRESS = "Zentral <formulario@zentral.com.co>";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const company = formData.get("company")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !company || !email || !message) {
    return { status: "error", reason: "validation", message: "Completa todos los campos." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", reason: "validation", message: "Ingresa un correo válido." };
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
