import bcrypt from "bcryptjs";

import prisma from "../../../lib/prisma"; // adjust path as needed

const TEST_ACCOUNTS = ["nabeel@iqra.life"];

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, name, password } = req.body;
  if (!email || !name || !password)
    return res.status(400).json({ error: "Missing fields" });

  const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log({ prisma });
  try {
    if (TEST_ACCOUNTS.includes(email)) {
      await prisma.specialDay.deleteMany({ where: { person: { user: { email } } } });
await prisma.person.deleteMany({ where: { user: { email } } });
await prisma.user.deleteMany({ where: { email } });
      const user = await prisma.user.create({
        data: { email, name, password: hashedPassword, emailVerified: true },
      });
      return res
        .status(201)
        .json({ id: user.id, email: user.email, name: user.name });
    }

    const user = await prisma.user.create({
      data: { email, name, password: hashedPassword },
    });
    return res
      .status(201)
      .json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    console.error("Signup error:", err);
    return res
      .status(400)
      .json({ error: err.meta?.target?.join(", ") || err.message });
  }
}
