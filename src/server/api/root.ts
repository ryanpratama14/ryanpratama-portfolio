import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { emailRouter } from "./routers/email";
import { sanityRouter } from "./routers/sanity";

export const appRouter = createTRPCRouter({ email: emailRouter, sanity: sanityRouter });

export type AppRouter = typeof appRouter;
export const createCaller = createCallerFactory(appRouter);
