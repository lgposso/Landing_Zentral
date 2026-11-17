import type { Metadata } from "next";

import { CustomServicePage } from "@/features/custom-dev/CustomServicePage";
import { DemoAgents } from "@/features/custom-dev/DemoAgents";
import { customServiceHref, getCustomService } from "@/config/services";

const service = getCustomService("agentes-de-ia");
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

export default function AgentesDeIaPage() {
  return <CustomServicePage service={service} proof={<DemoAgents />} />;
}
