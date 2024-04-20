import { env } from "@/env";
import EmailTemplate from "@/lib/emails/EmailTemplate";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(env.RESEND_API_KEY);

const projectInputSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  description: z.string().min(5),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = projectInputSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `Ryan <${env.RESEND_EMAIL_FROM}>`,
      to: env.RESEND_EMAIL_TO,
      subject: "NEW PROJECT ALERT!",
      react: EmailTemplate(validation.data),
    });
    if (error) return NextResponse.json({ error });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
