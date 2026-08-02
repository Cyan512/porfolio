import type { Facultad } from "./Facultad";
import type { Inversion } from "./Inversion";
import type { Modalidad } from "./Modalidad";
import type { PlanEstudioPorPeriodo } from "./PlanEstudioPorPeriodo";
import type { TipoPrograma } from "./TipoPrograma";

export interface ProgramaResponse {
  id: number;
  nombre: string;
  slug: string;
  objetivoGeneral: string;
  objetivosEspecificos: string;
  perfilPosgraduado: string;
  costoMatricula: number;
  imagen: string;
  modalidad: Modalidad;
  facultad: Facultad;
  tipoPrograma: TipoPrograma;
  inversion: Inversion;
  planEstudios: PlanEstudioPorPeriodo[];
}