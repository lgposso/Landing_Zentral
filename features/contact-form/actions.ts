"use server";

import { contactFormCopy } from "@/config/content";
import { siteConfig } from "@/config/site";

export interface ContactFormState {
  status: "idle" | "success" | "error";
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
    return { status: "error", message: "Completa todos los campos." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Ingresa un correo válido." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return { status: "error", message: contactFormCopy.errorFallback };
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
      subject: `Nuevo contacto de ${name} — ${company}`,
      text: `Nombre: ${name}\nEmpresa: ${company}\nCorreo: ${email}\n\nProceso a automatizar:\n${message}`,
    }),
  });

  if (!response.ok) {
    console.error("Resend respondió con error:", response.status, await response.text());
    return { status: "error", message: contactFormCopy.errorFallback };
  }

  return { status: "success" };
}
