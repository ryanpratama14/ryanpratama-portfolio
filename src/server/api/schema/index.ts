import { LANGS } from "@/lib/internationalization";
import type { DictionaryStatic } from "@/types";
import { z } from "zod";

export class schema {
  static email = class {
    static message = (s: DictionaryStatic) => {
      return z.object({
        name: z.string().min(1, s.MESSAGE.name.error),
        email: z.string().email(s.MESSAGE.email.error),
        message: z.string().min(5, s.MESSAGE.message.error),
        lang: z.enum(LANGS),
      });
    };
  };
}

export type MessageInput = z.input<ReturnType<typeof schema.email.message>>;
