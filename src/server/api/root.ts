import { emailRouter } from "@/server/api/routers/email";
import { createTRPCRouter } from "@/server/api/trpc";

export const appRouter = createTRPCRouter({
  email: emailRouter,
});

export type AppRouter = typeof appRouter;
