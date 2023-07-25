import sendMail from "./gmail";
import Mail from "nodemailer/lib/mailer";

export interface Params {
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
}: Params): Promise<string> => {
  const options: Mail.Options = {
    from: email,
    to: "shamith09@berkeley.edu",
    subject: subject,
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

export default sendEmail;
