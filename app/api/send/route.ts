import { EmailTemplate } from "@/components/Email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_VERIFIED_DOMAIN!,
      to: [process.env.RECIEVER_EMAIL!],
      subject: `Contact through Portfolio ${name}`,
      react: EmailTemplate({ firstName: name, message: message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
