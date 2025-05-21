import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { code } = req.query;

  if (!code || typeof code !== "string") {
    return res.status(400).json({ message: "Invalid verification code." });
  }

  try {
    const user = await prisma.user.findFirst({
      where: { verificationCode: code },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Invalid or expired verification code." });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true, verificationCode: null },
    });

    res.status(200).json({ message: "Email successfully verified." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
}
