import prisma from "../../../../lib/prisma"; // adjust path as needed
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;

  if (req.method === "PUT") {
    const { note } = req.body;

    const updated = await prisma.personLoveCategory.update({
      where: { id },
      data: { note },
    });

    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await prisma.personLoveCategory.delete({
      where: { id },
    });

    return res.status(204).end();
  }

  res.setHeader("Allow", ["PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
