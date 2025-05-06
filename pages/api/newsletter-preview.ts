// pages/api/newsletter-preview.ts
import { createGiftNewsletter } from "../../lib/giftNewsletter";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.id) {
    return res.status(401).send("Unauthorized");
  }

  const html = await createGiftNewsletter(session.user.id);
  res.status(200).send(html);
}
