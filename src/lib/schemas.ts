import { z } from "astro/zod";

export const ContactSchema = z.object({
  name: z.string().nonempty("Campo obligatorio"),
  email: z.email("Formato inválido").nonempty("Campo obligatorio"),
  message: z.string().nonempty("Campo obligatorio"),
});

export type ContactType = z.infer<typeof ContactSchema>;
