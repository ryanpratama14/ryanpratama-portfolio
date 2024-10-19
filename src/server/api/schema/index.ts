import { LANGS } from "@/internationalization";
import type { DictionaryStatic } from "@/types";
import { z } from "zod";

export const schema = {
  email: {
    message: (s: DictionaryStatic) => {
      return z.object({
        name: z.string().min(1, s.MESSAGE.name.error),
        email: z.string().email(s.MESSAGE.email.error),
        message: z.string().min(5, s.MESSAGE.message.error),
        lang: z.enum(LANGS),
      });
    },
  },
};
