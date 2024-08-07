import { LANGS } from "@/lib/internationalization";
import type { DictionaryStatic } from "@/types";
import { z } from "zod";

export class schema {
  static email = class {
    static projectDiscuss = (s: DictionaryStatic) => {
      return z.object({
        name: z.string().min(1, s.DISCUSS_YOUR_PROJECT.name.error),
        email: z.string().email(s.DISCUSS_YOUR_PROJECT.email.error),
        description: z.string().min(5, s.DISCUSS_YOUR_PROJECT.projectDescription.error),
        lang: z.enum(LANGS),
      });
    };
  };
}

export type ProjectInput = z.input<ReturnType<typeof schema.email.projectDiscuss>>;
