// pages/api/newsletter-preview.ts
import { createGiftNewsletter } from "../../lib/giftNewsletter";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const html = await createGiftNewsletter();
  res.status(200).send(html);
}
