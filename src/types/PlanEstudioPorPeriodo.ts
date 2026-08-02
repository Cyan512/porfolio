import type { Curso } from "./Curso";
import type { Periodo } from "./Periodo";

export interface PlanEstudioPorPeriodo {
  periodo: Periodo;
  cursos: Curso[];
}