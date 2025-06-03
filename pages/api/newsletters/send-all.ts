import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"; // adjust if needed
import { createGiftNewsletter } from "../../../lib/giftNewsletter";
import { Resend } from "resend";

export const config = {
  schedule: "0 9 * * *", // Runs every day at 9 AM
};

const resend = new Resend(process.env.RESEND_API_KEY!);

// Helper function to add delay between requests
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany();

  const results = <{ user: string; status: any }[]>[];

  // Process users in batches to respect rate limit (2 requests per second)
  for (const user of users) {
    try {
      const { html, names } = await createGiftNewsletter(user.id);
      const subject =
        names.length > 0
          ? `🎁 Days upcoming for ${names.join(", ")}`
          : "🎁 Your GiftPonder Newsletter";

      const emailRes = await resend.emails.send({
        from: "GiftPonder <donotreply@giftponder.com>",
        to: user.email!,
        subject,
        html,
      });

      results.push({ user: user.email, status: emailRes });

      // Add a 500ms delay between each email send (allows 2 requests per second)
      await delay(500);
    } catch (error) {
      console.error(`Failed to send email to ${user.email}:`, error);
      results.push({ user: user.email, status: { error } });
      // Still delay even if there's an error to maintain rate limiting
      await delay(500);
    }
  }

  res.status(200).json({ success: true, sent: results.length, results });
}
