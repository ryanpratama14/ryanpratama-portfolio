import { Resend } from "resend";
import Message from "@/components/emails/message";
import { env } from "@/env";
import { DEFAULT_LANG } from "@/internationalization";
import { getLang } from "@/internationalization/functions";
import type { Inputs } from "@/types";
import { THROW } from "../lib";
import { p } from "../root";
import { schema } from "../schema";

const resend = new Resend(env.RESEND_API_KEY);
const { s } = getLang(DEFAULT_LANG);

export const email = {
  message: p.public.input(schema.email.message(s)).handler(async ({ input }) => {
    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW MESSAGE ALERT!",
      react: Message(input),
    });

    if (error) return THROW.error("INTERNAL_SERVER_ERROR", error.message);
    return THROW.ok({ code: "CREATED", input, data });
  }),
};

export type EmailMessageInput = Inputs["email"]["message"];
