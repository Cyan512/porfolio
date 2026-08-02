import { backend } from "@/lib/backend";
import { mockGetPrograma, mockGetProgramasByTipo, mockGetTiposPrograma } from "@/mocks";
import type { PagedData, Programa, ProgramaListItem, TipoPrograma } from "@/types";

export interface ProgramaQuery {
  q?: string;
  page?: number;
  size?: number;
}

const baseQueryParams = ({ q, page, size }: ProgramaQuery = {}): URLSearchParams => {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (page !== undefined) params.set("page", String(page));
  if (size !== undefined) params.set("size", String(size));
  return params;
};

export async function getTiposPrograma(): Promise<TipoPrograma[]> {
  try {
    return await backend.getTiposPrograma();
  } catch {
    return mockGetTiposPrograma();
  }
}

export async function getPrograma(slug: string): Promise<Programa> {
  try {
    return await backend.getPrograma(slug);
  } catch {
    return mockGetPrograma(slug);
  }
}

export async function getProgramasByTipo(
  slug: string,
  query: ProgramaQuery = {},
): Promise<PagedData<ProgramaListItem>> {
  try {
    return await backend.getProgramasByTipo(slug, baseQueryParams(query));
  } catch {
    return mockGetProgramasByTipo(slug, query);
  }
}

export interface ProgramaPath {
  slug: string;
  tipoSlug: string;
}

export async function getAllProgramPaths(): Promise<ProgramaPath[]> {
  const tipos = await getTiposPrograma();
  const paths: ProgramaPath[] = [];

  for (const tipo of tipos) {
    let page = 0;
    let totalPages = 1;
    do {
      try {
        const data = await backend.getProgramasByTipo(
          tipo.slug,
          baseQueryParams({ page, size: 20 }),
        );
        data.content.forEach((p) => paths.push({ slug: p.slug, tipoSlug: tipo.slug }));
        totalPages = data.page.totalPages;
      } catch {
        mockGetProgramasByTipo(tipo.slug, { page: 0, size: 20 }).content.forEach((p) =>
          paths.push({ slug: p.slug, tipoSlug: tipo.slug }),
        );
        break;
      }
      page++;
    } while (page < totalPages && page < 20);
  }

  return paths;
}
