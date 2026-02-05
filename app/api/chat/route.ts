import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { input } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are Middlewo, an AI that helps people identify their real problems, analyze root causes, and provide clear, practical solutions in a structured way.",
      },
      {
        role: "user",
        content: input,
      },
    ],
  });

  return NextResponse.json({
    reply: completion.choices[0].message.content,
  });
}
