import type { Facultad } from "./Facultad";
import type { Modalidad } from "./Modalidad";
import type { TipoPrograma } from "./TipoPrograma";

export interface ProgramaListItem {
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
}