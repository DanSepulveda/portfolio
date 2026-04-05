import { Resend } from "resend";
import type { KVNamespace, PagesFunction } from "@cloudflare/workers-types";

import { ContactSchema } from "@/lib/schemas";
import { res } from "@/lib/response";

interface Props {
  RESEND_API_KEY: string;
  LIMITER: KVNamespace;
}

export const onRequestPost: PagesFunction<Props> = async ({ request, env }) => {
  const resend = new Resend(env.RESEND_API_KEY);

  const ip = request.headers.get("CF-Connecting-IP") || "anonymous";
  const key = `rate-limit:${ip}`;

  const currentUsage = await env.LIMITER.get(key);
  const count = currentUsage ? parseInt(currentUsage) : 0;

  if (count >= 3) {
    return res({ error: "Demasiadas peticiones. Intenta más tarde." }, 429);
  }

  await env.LIMITER.put(key, (count + 1).toString(), { expirationTtl: 3600 });

  try {
    const body = await request.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) return res({ error: result.error }, 400);

    const { email, name, message } = result.data;

    const { error } = await resend.emails.send({
      from: "Formulario Portfolio <hi@send.dansepulveda.dev>",
      to: ["hi@dansepulveda.dev"],
      subject: `Nuevo mensaje de ${name}`,
      html: `<p>${name}</p><p>${email}</p><p>${message}</p>`,
    });

    if (error) return res({ error }, 400);

    return res({ success: true });
  } catch (err) {
    return res({ error: "Error interno del servidor" }, 500);
  }
};
