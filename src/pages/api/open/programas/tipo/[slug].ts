import { getProgramasByTipo } from "@/lib/api";
import { apiError, apiNotFound, apiOk } from "@/lib/respond";

export const prerender = false;

const SIZE_VALIDOS = new Set(["5", "10", "20"]);

export async function GET({
  params,
  request,
}: {
  params: { slug: string };
  request: Request;
}): Promise<Response> {
  const startedAt = Date.now();
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? undefined;
  const pageParam = url.searchParams.get("page") ?? "0";
  const sizeParam = url.searchParams.get("size") ?? "10";
  const page = /^\d+$/.test(pageParam) ? Number(pageParam) : 0;
  const size = SIZE_VALIDOS.has(sizeParam) ? Number(sizeParam) : 10;

  try {
    const data = await getProgramasByTipo(params.slug, { q, page, size });
    return apiOk(data, startedAt);
  } catch (error) {
    if (error instanceof Error && error.name === "NotFoundError") {
      return apiNotFound(`Programa no encontrado con slug: ${params.slug}`);
    }
    return apiError("Error interno del servidor", 500);
  }
}
