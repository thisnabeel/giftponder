import prisma from "../../../../../lib/prisma"; // adjust path as needed
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const personId = req.query.id as string;

  if (req.method === "POST") {
    const { title, date } = req.body;

    if (!title || !date) {
      return res.status(400).json({ error: "Title and date are required" });
    }

    const specialDay = await prisma.specialDay.create({
      data: {
        personId,
        title,
        date: new Date(date),
      },
    });

    return res.status(201).json(specialDay);
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
