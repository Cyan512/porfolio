export function apiOk(data: unknown, startedAt: number): Response {
  return Response.json({
    success: true,
    message: "ok",
    data,
    timestamp: Date.now() - startedAt,
  });
}

export function apiError(message: string, status: number): Response {
  return Response.json(
    {
      success: false,
      message,
      status,
      timestamp: Date.now(),
    },
    { status },
  );
}

export function apiNotFound(message: string): Response {
  return apiError(message, 404);
}
