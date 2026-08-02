const API_URL = import.meta.env.API_URL;

export async function obtenerProgramas() {
    const respuesta = await fetch(`${API_URL}/programas`);

    if (!respuesta.ok) {
        throw new Error(`Error al obtener programas: ${respuesta.status}`);
    }

    return respuesta.json();
}