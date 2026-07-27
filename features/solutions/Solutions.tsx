import { GridCell, GridFrame } from "@/components/ui/GridFrame";
import { Icon } from "@/components/ui/Icon";
import { SplitSection } from "@/components/ui/SplitSection";
import { solutions, solutionsCopy } from "@/config/content";

/**
 * Única sección de rejilla con el contenido siempre visible.
 *
 * Es la que responde a "¿qué hacen ustedes?", así que un visitante tiene que
 * poder escanearla sin pasar el cursor por seis celdas. Las demás secciones sí
 * usan `ExpandableCell`.
 */
export function Solutions() {
  return (
    <SplitSection id="soluciones" copy={solutionsCopy}>
      <GridFrame>
        {solutions.map((solution) => (
          <GridCell key={solution.title}>
            <Icon
              name={solution.icon}
              className="size-8 text-primary-hover"
              strokeWidth={1.1}
            />

            <h3 className="mt-7 text-2xl tracking-tight text-foreground">
              {solution.title}
            </h3>

            <p className="mt-5 text-small text-muted">{solution.description}</p>
          </GridCell>
        ))}
      </GridFrame>
    </SplitSection>
  );
}
