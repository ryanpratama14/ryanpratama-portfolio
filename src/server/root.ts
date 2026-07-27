import { os } from "@orpc/server";
import { type } from "arktype";
import { headers } from "next/headers";

import { auth } from "./auth";
import { parseCookies, THROW } from "./lib";

export const base = os
  .use(async ({ next }) => {
    const heads = new Headers(await headers());
    return next({ context: { headers: heads, session: await auth(), cookies: parseCookies(heads.get("cookie")) } });
  })
  .errors({
    INPUT_VALIDATION_FAILED: {
      status: 422,
      data: type({
        formErrors: "string[]",
        fieldErrors: { "[string]": "string[]" },
      }),
    },
  });

export const p = {
  public: base,
  authed: base.use(async ({ next, context }) => {
    if (!context.session) return THROW.error("UNAUTHORIZED");
    return await next({ context: { session: context.session } });
  }),
};
