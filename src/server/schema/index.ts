import { z } from "zod/v4";
import { LANGS } from "@/internationalization";
import type { DictionaryStatic } from "@/types";

export const schema = {
  post: {
    list: z.object({ slice: z.number().optional(), slugToRemove: z.string().optional() }),
    detail: z.object({ slug: z.string() }),
  },

  email: {
    message: (s: DictionaryStatic) => {
      return z.object({
        name: z.string().min(1, s.MESSAGE.name.error),
        email: z.email(s.MESSAGE.email.error),
        message: z.string().min(5, s.MESSAGE.message.error),
        lang: z.enum(LANGS),
      });
    },
  },
};
