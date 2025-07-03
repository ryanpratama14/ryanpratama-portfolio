import { NextResponse } from "next/server";
import { Resend } from "resend";
import Message from "@/components/emails/message";
import { env } from "@/env";
import { DEFAULT_LANG } from "@/internationalization";
import { getLang } from "@/internationalization/functions";
import { schema } from "@/server/schema";

const resend = new Resend(process.env.RESEND_API_KEY);
const { s } = getLang(DEFAULT_LANG);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = schema.email.message(s).safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "INVALID_INPUT",
          details: parsed.error.format(),
        },
        { status: 400 },
      );
    }

    const input = parsed.data;

    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW MESSAGE ALERT!",
      react: Message(input),
    });

    if (error) {
      return NextResponse.json({ error: "INTERNAL_SERVER_ERROR", message: error.message }, { status: 500 });
    }

    return NextResponse.json({ code: "CREATED", input, data }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        error: "UNEXPECTED_ERROR",
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
