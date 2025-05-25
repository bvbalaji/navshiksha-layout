import { openai } from '@/lib/utils';
import OpenAI from 'openai'
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 5000, // Adjust as needed
      stream: true,
    });

    // Manual stream creation
    const stream = new ReadableStream({
      async start(controller) {
        for await (const part of response) {
          if (part?.choices?.[0]?.delta?.content) {
            const text = part.choices[0].delta.content;
            controller.enqueue(new TextEncoder().encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain', // Or 'application/octet-stream'
      },
    });

  } catch (error) {
    console.error("OpenAI API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}