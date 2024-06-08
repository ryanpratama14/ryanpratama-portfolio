import { env } from "@/env";
import EmailTemplate from "@/lib/emails/EmailTemplate";
import { DEFAULT_DICTIONARY } from "@/lib/internationalization";
import { schema } from "@/server/api/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export const emailRouter = createTRPCRouter({
  send: publicProcedure.input(schema.email.send(DEFAULT_DICTIONARY)).mutation(async ({ input }) => {
    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW PROJECT ALERT!",
      react: EmailTemplate(input),
    });

    if (error) throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: error.message });
    return data;
  }),
});
