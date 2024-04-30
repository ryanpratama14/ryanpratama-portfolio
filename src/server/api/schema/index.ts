import { LANGS } from "@/lib/internationalization";
import type { Dictionary } from "@/types";
import { z } from "zod";

export const projectInputSchema = (t: Dictionary) =>
  z.object({
    name: z.string().min(1, t.DISCUSS_YOUR_PROJECT.name.error),
    email: z.string().email(t.DISCUSS_YOUR_PROJECT.email.error),
    description: z.string().min(5, t.DISCUSS_YOUR_PROJECT.projectDescription.error),
    lang: z.enum(LANGS),
  });

export type ProjectInput = z.input<ReturnType<typeof projectInputSchema>>;
