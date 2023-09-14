import { NextResponse } from "next/server"
import { Resend } from "resend"

import { EmailTemplate } from "@/components/email-templates/contact"

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_123WCWof_CR62Q1jfXADgfGUMid1fUxYN"
)

export async function POST(request: Request) {
  const data = await request.json()
  const subject = "Submission from Contact form"

  try {
    const res = await resend.emails.send({
      from: `${process.env.WEBSITE_NAME} <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: [process.env.EMAIL_TO_ADDRESS as string],
      subject: subject,
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
      text: data.message,
    })

    return NextResponse.json(res)
  } catch (error) {
    return NextResponse.json({ error })
  }
}
