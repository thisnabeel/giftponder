import prisma from "../../../../lib/prisma"; // adjust path as needed
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === "POST") {
    const { type, description } = req.body;

    if (!type || !description)
      return res.status(400).json({ error: "Missing fields" });

    const trait = await prisma.trait.create({
      data: { type, description, person: { connect: { id: id } } },
    });
    return res.status(201).json(trait);
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
