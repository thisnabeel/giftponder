import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]"; // adjust path as needed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  const userId = session.user.id;

  if (!userId) {
    return res.status(401).json({ error: "User not found" });
  }

  if (req.method === "GET") {
    const people = await prisma.person.findMany({
      where: { userId },
      include: { specialDays: true, traits: true },
    });
    return res.status(200).json(people);
  }

  if (req.method === "POST") {
    const { name, relationship } = req.body;
    if (!name || !relationship)
      return res.status(400).json({ error: "Missing fields" });

    const person = await prisma.person.create({
      data: { name, relationship, userId },
    });
    return res.status(201).json(person);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
