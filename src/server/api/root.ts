import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { email } from "routers/email";

export const appRouter = createTRPCRouter({ email });

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
