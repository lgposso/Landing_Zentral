export interface ContactMessage {
  name: string;
  company: string;
  email: string;
  message: string;
}

/**
 * El asunto y el cuerpo los arman dos sitios: la Server Action que envía por
 * Resend y, cuando esa falla, los enlaces de WhatsApp y correo que el
 * formulario ofrece como salida. Viven aquí para que no se separen: si
 * divergen, el mensaje que llega por la vía manual no se parece al que
 * espera quien lo recibe.
 */
export function buildSubject({ name, company }: ContactMessage): string {
  return `Nuevo contacto de ${name} — ${company}`;
}

export function buildBody({ name, company, email, message }: ContactMessage): string {
  return `Nombre: ${name}\nEmpresa: ${company}\nCorreo: ${email}\n\nProceso a automatizar:\n${message}`;
}
