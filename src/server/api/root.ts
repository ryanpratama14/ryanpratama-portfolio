import { email } from "@/server/api/routers/email";
import { lang } from "@/server/api/routers/lang";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({ email, lang });

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
