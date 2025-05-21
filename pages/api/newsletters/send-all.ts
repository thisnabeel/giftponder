import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"; // adjust if needed
import { createGiftNewsletter } from "../../../lib/giftNewsletter";
import { Resend } from "resend";

export const config = {
  schedule: "0 9 * * *", // Runs every day at 9 AM
};

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany();

  const results = <{ user: string; status: any }[]>[];

  for (const user of users) {
    const { html, names } = await createGiftNewsletter(user.id);
    const subject =
      names.length > 0
        ? `🎁 Days upcoming for ${names.join(", ")}`
        : "🎁 Your GiftPonder Newsletter";

    const emailRes = await resend.emails.send({
      from: "GiftPonder <donotreply@giftponder.com",
      to: user.email!,
      subject,
      html,
    });

    results.push({ user: user.email, status: emailRes });
  }

  res.status(200).json({ success: true, sent: results.length });
}
