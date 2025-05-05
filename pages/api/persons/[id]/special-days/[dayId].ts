import prisma from "../../../../../lib/prisma"; // adjust path as needed
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dayId = req.query.dayId as string;

  if (req.method === "DELETE") {
    await prisma.specialDay.delete({
      where: { id: dayId },
    });

    return res.status(204).end();
  }

  res.setHeader("Allow", ["DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
