import type { Metadata } from "next";

import { CustomServicePage } from "@/features/custom-dev/CustomServicePage";
import { RipsProof } from "@/features/custom-dev/RipsProof";
import { customServiceHref, getCustomService } from "@/config/services";

const service = getCustomService("automatizacion-de-procesos");
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

export default function AutomatizacionPage() {
  return <CustomServicePage service={service} proof={<RipsProof />} />;
}
