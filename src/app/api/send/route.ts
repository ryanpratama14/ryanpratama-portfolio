import EmailTemplate from "@/emails/EmailTemplate";
import { env } from "@/env";
import { projectInputSchema } from "@/schema";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = projectInputSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const { name, email, description } = validation.data;

    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW PROJECT ALERT!",
      react: EmailTemplate({ email, description, name }),
    });
    if (error) return NextResponse.json({ error });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
