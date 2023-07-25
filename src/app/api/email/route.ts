import { NextResponse } from "next/server";
import sendMail from "./gmail";
import Mail from "nodemailer/lib/mailer";

interface EmailParams {
  email: string;
  name: string;
  subject: string;
  message: string;
}

const sendEmail = async ({
  email,
  name,
  subject,
  message,
}: EmailParams): Promise<string> => {
  const options: Mail.Options = {
    to: "shamith09@berkeley.edu",
    subject: `Inquiry from ${name} <${email}>: ${subject}`,
    text: message,
    textEncoding: "base64",
    headers: [
      { key: "X-Application-Developer", value: "Shamith Pasula" },
      { key: "X-Application-Version", value: "v0.0.1" },
    ],
  };

  const messageId: string = await sendMail(options);
  return messageId;
};

export async function POST(request: Request) {
  const data: EmailParams = await request.json();
  try {
    await sendEmail(data);
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ message: "Error sending email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
