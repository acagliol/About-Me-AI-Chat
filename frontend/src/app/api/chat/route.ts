import { NextResponse } from "next/server";
import OpenAI from "openai";
import getSystemPrompt from "./prompt";

// Log if API key exists (but not the actual key for security)
console.log("API Key exists:", !!process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { question } = body;

    console.log("Received question:", question);
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: getSystemPrompt() },
        { role: "user", content: question }
      ],
    });

    return NextResponse.json({ answer: response.choices[0].message.content });
  } catch (error) {
    // Log the full error details
    console.error("Detailed error:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
