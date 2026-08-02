import { getTiposPrograma } from "@/lib/api";
import { apiError, apiOk } from "@/lib/respond";

export async function GET(): Promise<Response> {
  const startedAt = Date.now();
  try {
    const data = await getTiposPrograma();
    return apiOk(data, startedAt);
  } catch {
    return apiError("Error interno del servidor", 500);
  }
}
