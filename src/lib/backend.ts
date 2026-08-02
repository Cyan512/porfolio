import type { ApiResponse, PagedData, Programa, ProgramaListItem, TipoPrograma } from "@/types";

const API_URL = import.meta.env.API_URL ?? "http://localhost:8080";
const TIMEOUT_MS = 2500;

export class ApiError extends Error {
  status: number;

  constructor(message: string, status = 500) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export class NotFoundError extends Error {
  constructor(slug: string) {
    super(`Programa no encontrado con slug: ${slug}`);
    this.name = "NotFoundError";
  }
}

async function httpGet<T>(path: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
  } catch {
    throw new ApiError("No se pudo conectar con el backend");
  } finally {
    clearTimeout(timeout);
  }

  let body: unknown;
  try {
    body = await res.json();
  } catch {
    throw new ApiError("Respuesta inválida del backend", res.status);
  }

  if (!res.ok || (body as { success?: boolean }).success === false) {
    const status = (body as { status?: number }).status ?? res.status;
    const message = (body as { message?: string }).message ?? res.statusText;
    if (status === 404) {
      throw new NotFoundError(path);
    }
    throw new ApiError(message, status);
  }

  return (body as ApiResponse<T>).data;
}

export const backend = {
  getTiposPrograma: () => httpGet<TipoPrograma[]>("/api/open/tipos-programa"),
  getPrograma: (slug: string) => httpGet<Programa>(`/api/open/programas/${slug}`),
  getProgramasByTipo: (slug: string, params: URLSearchParams) =>
    httpGet<PagedData<ProgramaListItem>>(`/api/open/programas/tipo/${slug}?${params}`),
};
