import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, website, done, specialDayId } = req.body;

    if (!title || !specialDayId)
      return res.status(400).json({ error: "Missing required fields" });

    const gift = await prisma.gift.create({
      data: { title, website, done, specialDayId },
    });

    return res.status(201).json(gift);
  }

  if (req.method === "GET") {
    const { specialDayId } = req.query;
    const gifts = await prisma.gift.findMany({
      where: { specialDayId: specialDayId as string },
    });

    return res.status(200).json(gifts);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
