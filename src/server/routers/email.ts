import Message from "@/components/emails/message";
import { env } from "@/env";
import { DEFAULT_LANG } from "@/internationalization";
import { useLang } from "@/internationalization/functions";
import { schema } from "@/server/schema";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { type RouterInputs, THROW } from "@/trpc/shared";
import { Resend } from "resend";

const { s } = useLang(DEFAULT_LANG);
const resend = new Resend(env.RESEND_API_KEY);

export const emailRouter = createTRPCRouter({
  message: publicProcedure.input(schema.email.message(s)).mutation(async ({ input }) => {
    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW MESSAGE ALERT!",
      react: Message(input),
    });

    if (error) return THROW.error("INTERNAL_SERVER_ERROR", error.message);
    return THROW.ok({ code: "CREATED", input, data });
  }),
});

export type EmailMessageInput = RouterInputs["email"]["message"];
