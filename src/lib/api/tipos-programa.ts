import type { TipoPrograma } from "@/types/TipoPrograma";
import { apiClient } from "./client";

export function obtenerTiposPrograma() {
  return apiClient<TipoPrograma[]>(
    "/api/open/tipos-programa",
  );
}