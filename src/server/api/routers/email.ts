import { env } from "@/env";
import EmailTemplate from "@/lib/emails/EmailTemplate";
import { DEFAULT_LANGUAGE } from "@/lib/internationalization";
import { schema } from "@/server/api/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { THROW_TRPC_ERROR } from "@/trpc/shared";
import { Resend } from "resend";

export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(schema.email.send(DEFAULT_LANGUAGE.t)).mutation(async ({ input }) => {
    const { data, error } = await new Resend(env.RESEND_API_KEY).emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW PROJECT ALERT!",
      react: EmailTemplate(input),
    });

    if (error) return THROW_TRPC_ERROR("INTERNAL_SERVER_ERROR", error.message);
    return data;
  }),
});
