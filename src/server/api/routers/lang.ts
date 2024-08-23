import { COOKIES } from "@/lib/constants";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { cookies } from "next/headers";

export const lang = createTRPCRouter({
  get: publicProcedure.query(() => cookies().get(COOKIES.lang)?.value),
});
