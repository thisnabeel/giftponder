// pages/api/send-newsletter.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { createGiftNewsletter } from "../../../lib/giftNewsletter";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email || !session.user.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { html, names } = await createGiftNewsletter(session.user.id);

  const subjectNames = names.join(", ");
  const subject =
    names.length > 0
      ? `🎁 Gift Ideas for ${subjectNames}`
      : "🎁 Your GiftPonder Newsletter";

  const result = await resend.emails.send({
    from: "giftponder@resend.dev",
    to: session.user.email,
    subject,
    html,
  });

  res.status(200).json({ success: true, result });
}
