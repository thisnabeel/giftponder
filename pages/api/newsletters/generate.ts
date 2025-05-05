import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { createGiftNewsletter } from "../../../lib/giftNewsletter";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.id) {
    return res.status(401).send("Unauthorized");
  }

  const { html } = await createGiftNewsletter(session.user.id);
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
