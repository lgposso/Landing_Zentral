import type { Metadata } from "next";

import { CustomServicePage } from "@/features/custom-dev/CustomServicePage";
import { WhatsAppProof } from "@/features/custom-dev/WhatsAppProof";
import { customServiceHref, getCustomService } from "@/config/services";

const service = getCustomService("chatbot-de-whatsapp");
const href = customServiceHref(service.slug);

export const metadata: Metadata = {
  title: { absolute: service.metaTitle },
  description: service.metaDescription,
  alternates: { canonical: href },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: href,
  },
};

export default function ChatbotWhatsAppPage() {
  return <CustomServicePage service={service} proof={<WhatsAppProof />} />;
}
