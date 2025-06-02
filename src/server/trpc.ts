import { CONSOLE_TRPC, transformer } from "@/trpc/shared";
import { initTRPC } from "@trpc/server";
import { ZodError } from "zod/v4";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  return { ...opts };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer,
  errorFormatter({ shape, error }) {
    return { ...shape, data: { ...shape.data, zodError: error.cause instanceof ZodError ? error.cause.flatten() : null } };
  },
});

const logger = t.middleware(async ({ next, path, type }) => {
  CONSOLE_TRPC.info("path", `${path}.${type}`);
  return await next();
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure.use(logger);
