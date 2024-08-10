import { env } from "@/env";
import { DEFAULT_LANGUAGE } from "@/internationalization";
import ProjectDiscuss from "@/lib/emails/project-discuss";
import { schema } from "@/server/api/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { THROW_TRPC_ERROR, THROW_TRPC_OK } from "@/trpc/shared";
import { Resend } from "resend";

export const email = createTRPCRouter({
  projectDiscuss: publicProcedure.input(schema.email.projectDiscuss(DEFAULT_LANGUAGE.s)).mutation(async ({ input }) => {
    const { data, error } = await new Resend(env.RESEND_API_KEY).emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW PROJECT ALERT!",
      react: ProjectDiscuss(input),
    });

    if (error) return THROW_TRPC_ERROR("INTERNAL_SERVER_ERROR", error.message);
    return { data, ...THROW_TRPC_OK("OK") };
  }),
});
