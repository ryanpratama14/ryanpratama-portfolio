import { email } from "@/server/api/routers/email";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({ email });

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
