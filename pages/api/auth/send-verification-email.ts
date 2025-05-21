import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, name } = req.body;

  if (!email || !name) {
    return res.status(400).json({ message: "Email and name are required" });
  }

  try {
    const verificationCode = uuidv4();

    await prisma.user.update({
      where: { email },
      data: { verificationCode },
    });

    const verificationUrl = `${process.env.NEXTAUTH_URL || "https://www.giftponder.com"}/verify-email?code=${verificationCode}`;

    await resend.emails.send({
      from: "GiftPonder <donotreply@giftponder.com>",
      to: email,
      subject: `${name}, Verify Your Email`,
      html: `<p>Hi ${name},</p><p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`,
    });

    res.status(200).json({ message: "Verification email sent." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
}
