import { ExpandableCell } from "@/components/ui/ExpandableCell";
import { GridFrame } from "@/components/ui/GridFrame";
import { Icon } from "@/components/ui/Icon";
import { SplitSection } from "@/components/ui/SplitSection";
import { problemCopy, problems } from "@/config/content";

export function Problem() {
  return (
    <SplitSection id="problema" copy={problemCopy}>
      <GridFrame>
        {problems.map((problem) => (
          <ExpandableCell
            key={problem.title}
            title={problem.title}
            marker={
              <Icon
                name={problem.icon}
                className="size-8 text-primary-hover"
                strokeWidth={1.1}
              />
            }
          >
            <p className="text-small text-muted">{problem.description}</p>
          </ExpandableCell>
        ))}
      </GridFrame>
    </SplitSection>
  );
}
