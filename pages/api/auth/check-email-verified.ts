import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json({ emailVerified: user.emailVerified });
    } catch (error) {
      console.log("Error fetching user:", error);
      return res
        .status(500)
        .json({ error: "Internal server error", msg: error });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
