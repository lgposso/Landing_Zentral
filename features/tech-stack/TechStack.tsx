import { GridCell, GridFrame } from "@/components/ui/GridFrame";
import { SplitSection } from "@/components/ui/SplitSection";
import { techCopy, techGroups } from "@/config/content";

export function TechStack() {
  return (
    <SplitSection id="tecnologias" copy={techCopy}>
      {/* Sin logotipos a color: romperían la regla de que el azul es el único
          acento del sistema (§5). La jerarquía la lleva la tipografía. */}
      <GridFrame>
        {techGroups.map((group) => (
          <GridCell key={group.category}>
            <h3 className="zentral-label text-primary-hover">
              {group.category}
            </h3>

            <ul className="mt-8 space-y-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3.5 text-small text-muted transition-colors duration-200 hover:text-foreground"
                >
                  <span
                    className="size-1 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </GridCell>
        ))}
      </GridFrame>
    </SplitSection>
  );
}
