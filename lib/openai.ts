// lib/openai.ts
import OpenAI from "openai";

// Prevent the SDK from relying on process.env.OPENAI_API_KEY
process.env.OPENAI_API_KEY = "ignore-this";

export const openai = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY!, // ✅ actual Groq key
});
