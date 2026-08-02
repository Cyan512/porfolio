import type { ImageMetadata } from "astro";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: number;
}

export interface ErrorResponse {
  success: boolean;
  message: string;
  status: number;
  timestamp: number;
}

export interface TipoPrograma {
  id: number;
  nombre: string;
  slug: string;
  imagenCard: string | ImageMetadata | null;
  imagenHero: string | ImageMetadata | null;
}

export interface IdNombre {
  id: number;
  nombre: string;
}

export interface Modalidad extends IdNombre {}
export interface Facultad extends IdNombre {}
export interface Periodo extends IdNombre {}
export interface Asignatura extends IdNombre {}
export interface Categoria extends IdNombre {}

export interface Curso {
  id: number;
  asignatura: Asignatura;
  creditos: number;
  costo: number;
  categoria: Categoria;
}

export interface PlanEstudioPorPeriodo {
  periodo: Periodo;
  cursos: Curso[];
}

export interface Inversion {
  costoMatricula: number;
  cantidadMatriculas: number;
  sumaCostosCursos: number;
  inversionTotal: number;
}

export interface ProgramaListItem {
  id: number;
  nombre: string;
  slug: string;
  objetivoGeneral: string;
  objetivosEspecificos: string;
  perfilPosgraduado: string;
  costoMatricula: number;
  imagen: string | ImageMetadata | null;
  modalidad: Modalidad;
  facultad: Facultad;
  tipoPrograma: TipoPrograma;
}

export interface Programa extends ProgramaListItem {
  inversion: Inversion;
  planEstudios: PlanEstudioPorPeriodo[];
}

export interface PageInfo {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

export interface PagedData<T> {
  content: T[];
  page: PageInfo;
}
