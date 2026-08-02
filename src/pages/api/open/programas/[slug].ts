import { getPrograma } from "@/lib/api";
import { apiError, apiNotFound, apiOk } from "@/lib/respond";

export const prerender = false;

export async function GET({ params }: { params: { slug: string } }): Promise<Response> {
  const startedAt = Date.now();
  try {
    const data = await getPrograma(params.slug);
    return apiOk(data, startedAt);
  } catch (error) {
    if (error instanceof Error && error.name === "NotFoundError") {
      return apiNotFound(`Programa no encontrado con slug: ${params.slug}`);
    }
    return apiError("Error interno del servidor", 500);
  }
}
