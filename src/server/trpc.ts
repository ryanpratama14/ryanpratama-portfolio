import { CONSOLE_TRPC, transformer } from "@/trpc/shared";
import { initTRPC } from "@trpc/server";
import { ZodError, z } from "zod/v4";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  return { ...opts };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer,
  errorFormatter({ shape, error }) {
    const flat = error.cause instanceof ZodError ? z.flattenError(error.cause) : null;
    const tree = error.cause instanceof ZodError ? z.treeifyError(error.cause) : null;
    const pretty = error.cause instanceof ZodError ? z.prettifyError(error.cause) : null;
    return { ...shape, data: { ...shape.data, flat, tree, pretty } };
  },
});

const logger = t.middleware(async ({ next, path, type }) => {
  CONSOLE_TRPC.info("path", `${path}.${type}`);
  return await next();
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure.use(logger);
