// /pages/api/persons/[id]/gift-ideas.ts
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { openai } from "../../../../lib/openai";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "POST") {
    const person = await prisma.person.findUnique({
      where: { id: id as string },
      include: { traits: true, rejectedGiftIdeas: true },
    });

    if (!person) return res.status(404).json({ error: "Person not found" });

    const traits = person.traits
      .map((t) => `${t.type}: ${t.description}`)
      .join("; ");
    const rejected = person.rejectedGiftIdeas
      .map((r) => r.content)
      .join("\n- ");

    const prompt = `
Generate 5 personalized gift ideas for someone with the following traits:
Traits: ${traits}

Avoid any of the following previously rejected ideas:
- ${rejected || "None"}

Make them creative, specific, and non-repetitive.
`;

    const result = await openai.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [{ role: "user", content: prompt }],
    });

    const ideas = result.choices[0].message.content
      .split("\n")
      .map((line) => line.trim())
      .filter(
        (line) => /^\d+[\).]/.test(line) // ✅ Only lines that start with 1. 2. 3) etc.
      )
      .map(
        (line) => line.replace(/^\d+[\).]\s*/, "") // Remove "1. " prefix
      );
    res.json(ideas || []);
  }

  if (req.method === "POST" && req.body.reject) {
    await prisma.rejectedGiftIdea.create({
      data: {
        personId: id as string,
        content: req.body.reject,
      },
    });
    res.status(204).end();
  }
}
