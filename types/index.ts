/** Claves de icono. Se mapean a componentes de lucide-react en cada feature,
 *  para que el copy en `config/content.ts` se mantenga serializable. */
export type IconKey = string;

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionCopy {
  /** Primera línea del título, en blanco. */
  title: string;
  /** Segunda línea del título, en el azul de marca. */
  titleAccent: string;
  subtitle: string;
}

export interface FeatureItem {
  icon: IconKey;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  /** Entregable concreto de esta etapa. */
  deliverable: string;
}

export interface UseCase {
  icon: IconKey;
  sector: string;
  challenge: string;
  system: string;
  outcome: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface CoreNode {
  /** Etiqueta visible dentro del diagrama Zentral Core. */
  label: string;
  icon: IconKey;
  /** Ángulo en grados sobre la órbita, 0° = derecha, sentido horario. */
  angle: number;
}
