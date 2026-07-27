import { ExpandableCell } from "@/components/ui/ExpandableCell";
import { GridFrame } from "@/components/ui/GridFrame";
import { Icon } from "@/components/ui/Icon";
import { SplitSection } from "@/components/ui/SplitSection";
import { useCases, useCasesCopy } from "@/config/content";

export function UseCases() {
  return (
    <SplitSection id="casos-de-uso" copy={useCasesCopy}>
      <GridFrame>
        {useCases.map((useCase) => (
          <ExpandableCell
            key={useCase.sector}
            title={useCase.sector}
            marker={
              <Icon
                name={useCase.icon}
                className="size-8 text-primary-hover"
                strokeWidth={1.1}
              />
            }
          >
            <dl className="space-y-5">
              <div>
                <dt className="zentral-label text-muted/70">Reto</dt>
                <dd className="mt-2 text-small text-muted">
                  {useCase.challenge}
                </dd>
              </div>
              <div>
                <dt className="zentral-label text-muted/70">Sistema</dt>
                <dd className="mt-2 text-small text-muted">{useCase.system}</dd>
              </div>
            </dl>

            <p className="mt-6 flex items-start gap-2.5 text-small font-medium text-foreground">
              <Icon
                name="check"
                className="mt-0.5 size-4 shrink-0 text-primary-hover"
              />
              {useCase.outcome}
            </p>
          </ExpandableCell>
        ))}
      </GridFrame>
    </SplitSection>
  );
}
