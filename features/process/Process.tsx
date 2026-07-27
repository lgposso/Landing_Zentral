import { ExpandableCell } from "@/components/ui/ExpandableCell";
import { GridFrame } from "@/components/ui/GridFrame";
import { SplitSection } from "@/components/ui/SplitSection";
import { processCopy, processSteps } from "@/config/content";

export function Process() {
  return (
    <SplitSection id="proceso" copy={processCopy}>
      <GridFrame>
        {processSteps.map((step) => (
          <ExpandableCell
            key={step.step}
            title={step.title}
            marker={
              // El número ocupa el lugar del icono de las demás secciones,
              // para que las celdas mantengan el mismo ritmo vertical.
              <span className="font-heading text-3xl font-extrabold leading-none text-primary-hover">
                {step.step}
              </span>
            }
          >
            <p className="text-small text-muted">{step.description}</p>

            <p className="zentral-label mt-6 border-l-2 border-primary pl-4 pt-px text-muted">
              {step.deliverable}
            </p>
          </ExpandableCell>
        ))}
      </GridFrame>
    </SplitSection>
  );
}
