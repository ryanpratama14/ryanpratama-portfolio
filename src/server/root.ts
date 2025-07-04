import { os } from "@orpc/server";
import { headers } from "next/headers";
import { z } from "zod/v4";
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
      data: z.object({ formErrors: z.array(z.string()), fieldErrors: z.record(z.string(), z.array(z.string()).optional()) }),
    },
  });

export const p = {
  public: base,
  authed: base.use(async ({ next, context }) => {
    if (!context.session) return THROW.error("UNAUTHORIZED");
    return await next({ context: { session: context.session } });
  }),
};
