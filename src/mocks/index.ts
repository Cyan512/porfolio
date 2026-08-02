import { programasMock, tiposMock } from "@/mocks/data";
import type { PagedData, Programa, ProgramaListItem, TipoPrograma } from "@/types";

export interface ProgramaQuery {
  q?: string;
  page?: number;
  size?: number;
}

export function mockGetTiposPrograma(): TipoPrograma[] {
  return tiposMock;
}

export function mockGetPrograma(slug: string): Programa {
  const programa = programasMock.find((p) => p.slug === slug);
  if (!programa) {
    throw new NotFoundError(slug);
  }
  return programa;
}

export function mockGetProgramasByTipo(slug: string, query: ProgramaQuery = {}): PagedData<ProgramaListItem> {
  const tipo = tiposMock.find((t) => t.slug === slug);
  if (!tipo) {
    throw new NotFoundError(slug);
  }

  const size = query.size === 5 || query.size === 10 || query.size === 20 ? query.size : 10;
  const page = Math.max(0, Math.floor(query.page ?? 0));

  const q = (query.q ?? "").trim().toLowerCase();
  const filtrados = programasMock
    .filter((p) => p.tipoPrograma.slug === slug)
    .filter((p) => q === "" || p.nombre.toLowerCase().includes(q))
    .sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));

  const totalElements = filtrados.length;
  const totalPages = Math.ceil(totalElements / size);
  const inicio = page * size;

  return {
    content: filtrados.slice(inicio, inicio + size),
    page: { size, number: page, totalElements, totalPages },
  };
}

export class NotFoundError extends Error {
  constructor(slug: string) {
    super(`Programa no encontrado con slug: ${slug}`);
    this.name = "NotFoundError";
  }
}
