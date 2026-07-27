import { CallToAction } from "@/features/cta/CallToAction";
import { Hero } from "@/features/hero/Hero";
import { Problem } from "@/features/problem/Problem";
import { Process } from "@/features/process/Process";
import { Solutions } from "@/features/solutions/Solutions";
import { TechStack } from "@/features/tech-stack/TechStack";
import { UseCases } from "@/features/use-cases/UseCases";

/**
 * Estructura de la landing (§9 del spec). El navbar y el footer viven en
 * `app/layout.tsx`; aquí sólo el cuerpo, en el orden que define el documento.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solutions />
      <Process />
      <UseCases />
      <TechStack />
      <CallToAction />
    </>
  );
}
