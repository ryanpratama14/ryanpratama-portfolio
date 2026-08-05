import * as v from "valibot";

import { LANGS } from "@/internationalization";
import type { DictionaryStatic } from "@/types";

export const schema = {
  post: {
    list: v.object({ slice: v.optional(v.number()), slugToRemove: v.optional(v.string()) }),
    detail: v.object({ slug: v.string() }),
  },

  email: {
    message: (s: DictionaryStatic) => {
      return v.object({
        name: v.pipe(v.string(), v.minLength(1, s.MESSAGE.name.error)),
        email: v.pipe(v.string(), v.email(s.MESSAGE.email.error)),
        message: v.pipe(v.string(), v.minLength(5, s.MESSAGE.message.error)),
        lang: v.picklist(LANGS),
      });
    },
  },
};
