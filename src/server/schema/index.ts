import { type } from "arktype";

import { LANGS } from "@/internationalization";
import type { DictionaryStatic } from "@/types";

export const schema = {
  post: {
    list: type({ "slice?": "number", "slugToRemove?": "string" }),
    detail: type({ slug: "string" }),
  },

  email: {
    message: (s: DictionaryStatic) => {
      return type({
        name: type("string >= 1").configure({ message: s.MESSAGE.name.error }),
        email: type("string.email").configure({ message: s.MESSAGE.email.error }),
        message: type("string >= 5").configure({ message: s.MESSAGE.message.error }),
        lang: type.enumerated(...LANGS),
      });
    },
  },
};
