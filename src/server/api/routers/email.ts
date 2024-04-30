import { DEFAULT_DICTIONARY } from "@/lib/internationalization";
import { projectInputSchema } from "@/server/api/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getBaseUrl } from "@/trpc/shared";
import { TRPCError } from "@trpc/server";

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure.input(projectInputSchema(DEFAULT_DICTIONARY)).mutation(async ({ input }) => {
    const res = await fetch(`${getBaseUrl()}/api/send`, { method: "POST", body: JSON.stringify(input) });
    if (!res.ok) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: await res.json() });
    return await res.json();
  }),
});
