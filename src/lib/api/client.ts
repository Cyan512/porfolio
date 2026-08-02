import type { ApiResponse } from "@/types/ApiResponse";
import type { ErrorResponse } from "@/types/ErrorResponse";

const API_URL = import.meta.env.API_URL;

if (!API_URL) {
    throw new Error("La variable de entorno API_URL no está definida");
}

export class ApiError extends Error {
    status: number;
    data?: ErrorResponse;

    constructor(
        message: string,
        status: number,
        data?: ErrorResponse,
    ) {
        super(message);

        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}

interface RequestOptions extends RequestInit {
    params?: Record<
        string,
        string | number | boolean | undefined
    >;
}

export async function apiClient<T>(
    endpoint: string,
    options: RequestOptions = {},
): Promise<T> {
    const { params, ...fetchOptions } = options;

    const url = new URL(`${API_URL}${endpoint}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                url.searchParams.set(key, String(value));
            }
        });
    }

    const response = await fetch(url, {
        ...fetchOptions,
        headers: {
            "Content-Type": "application/json",
            ...fetchOptions.headers,
        },
    });

    let body:
        | ApiResponse<T>
        | ErrorResponse
        | null = null;

    try {
        body = await response.json();
    } catch {
        body = null;
    }

    if (!response.ok) {
        const errorBody = body as ErrorResponse | null;

        throw new ApiError(
            errorBody?.message ?? "Error en la petición",
            response.status,
            errorBody ?? undefined,
        );
    }

    const successBody = body as ApiResponse<T>;

    return successBody.data;
}