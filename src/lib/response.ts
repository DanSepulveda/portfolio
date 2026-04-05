type CfResponse = import("@cloudflare/workers-types").Response;

export function res(data: unknown, status = 200): CfResponse {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  }) as unknown as CfResponse;
}
