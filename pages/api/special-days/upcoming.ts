import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const today = new Date();
  const end = new Date();
  end.setDate(today.getDate() + 360); // 12 months of 30 days

  const specialDays = await prisma.specialDay.findMany({
    where: {
      person: { userId: session.user.id },
    },
    include: { person: true },
    orderBy: { date: "asc" },
  });

  return res.json(specialDays);
}
