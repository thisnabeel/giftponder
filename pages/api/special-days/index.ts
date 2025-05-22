import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, date, personId } = req.body;

    // Validate required fields
    if (!title || !date) {
      return res.status(400).json({ error: "Title and date are required." });
    }

    try {
      const specialDay = await prisma.specialDay.create({
        data: {
          title,
          date: new Date(date),
          person: { connect: { id: personId } },
        },
      });
      res.status(201).json(specialDay);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the special day." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
