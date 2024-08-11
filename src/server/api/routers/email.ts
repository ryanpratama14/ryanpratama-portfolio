import { env } from "@/env";
import ProjectDiscuss from "@/lib/emails/project-discuss";
import { DEFAULT_LANG, useLanguage } from "@/lib/internationalization";
import { schema } from "@/server/api/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { THROW_TRPC_ERROR, THROW_TRPC_OK } from "@/trpc/shared";
import { Resend } from "resend";

const { s } = useLanguage(DEFAULT_LANG);

export const email = createTRPCRouter({
  projectDiscuss: publicProcedure.input(schema.email.projectDiscuss(s)).mutation(async ({ input }) => {
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
