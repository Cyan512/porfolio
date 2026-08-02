import type { Asignatura } from "./Asignatura";
import type { Categoria } from "./Categoria";

export interface Curso {
    id: number;
    asignatura: Asignatura;
    creditos: number;
    costo: number;
    categoria: Categoria;
}