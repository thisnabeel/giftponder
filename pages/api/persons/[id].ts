import prisma from "../../../lib/prisma"; // adjust path as needed
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === "GET") {
    const person = await prisma.person.findUnique({
      where: { id },
      include: {
        traits: true,
        loveTypes: {
          include: { loveCategory: true },
        },
        specialDays: true,
      },
    });

    if (!person) return res.status(404).json({ error: "Person not found" });

    const loveCategories = person.loveTypes.map((plc) => plc.loveCategory);

    res.json({
      ...person,
      loveCategories,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
