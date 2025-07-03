import { os } from "@orpc/server";
import { headers } from "next/headers";
import { z } from "zod/v4";
import { auth } from "./auth";
import { parseCookies, THROW } from "./lib";

export const createORPCContext = async (opts: { headers: Headers }) => {
  const session = await auth();
  return { session, ...opts };
};

export const t = os
  .$context<Awaited<ReturnType<typeof createORPCContext>>>()
  .use(async ({ next }) => {
    const heads = new Headers(await headers());
    heads.set("x-orpc-source", "rsc");
    return next({ context: { ...(await createORPCContext({ headers: heads })), cookies: parseCookies(heads.get("cookie")) } });
  })
  .errors({
    INPUT_VALIDATION_FAILED: {
      status: 422,
      data: z.object({ formErrors: z.array(z.string()), fieldErrors: z.record(z.string(), z.array(z.string()).optional()) }),
    },
  });

export const procedure = {
  public: t,
  protected: t.use(async ({ next, context }) => {
    if (!context.session) return THROW.error("UNAUTHORIZED");
    return await next({ context: { session: context.session } });
  }),
};
