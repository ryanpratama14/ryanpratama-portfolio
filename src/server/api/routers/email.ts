import Message from "@/components/emails/message";
import { env } from "@/env";
import { DEFAULT_LANG } from "@/internationalization";
import { useLanguage } from "@/internationalization/functions";
import { schema } from "@/server/api/schema";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { THROW_TRPC } from "@/trpc/shared";
import { Resend } from "resend";

const { s } = useLanguage(DEFAULT_LANG);
const resend = new Resend(env.RESEND_API_KEY);

export const email = createTRPCRouter({
  message: publicProcedure.input(schema.email.message(s)).mutation(async ({ input }) => {
    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW MESSAGE ALERT!",
      react: Message(input),
    });

    if (error) return THROW_TRPC.error({ code: "INTERNAL_SERVER_ERROR", message: error.message });
    return THROW_TRPC.ok({ code: "OK", input, result: data });
  }),
});
