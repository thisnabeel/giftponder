import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    await prisma.gift.delete({ where: { id: id as string } });
    return res.status(204).end();
  }

  if (req.method === "PATCH") {
    const { done } = req.body;
    const updated = await prisma.gift.update({
      where: { id: id as string },
      data: { done },
    });
    return res.status(200).json(updated);
  }

  res.setHeader("Allow", ["DELETE", "PATCH"]);
  res.status(405).end();
}
