import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface PromptEvaluation {
  clarity: string;
  context: string;
  specificity: string;
  complexity: string;
  structure: string;
}

// API Route handler for POST requests
export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const systemPrompt = `
You are an expert prompt evaluator. Given a user prompt, evaluate it on the following five parameters. For each, provide a short, constructive sentence:
1. Clarity: Is the prompt clear and unambiguous?
2. Context: Does the prompt provide enough background or context?
3. Specificity: Is the prompt specific or too broad?
4. Complexity: Is the prompt appropriately complex for the intended task?
5. Structure: Is the prompt well-structured and logically organized?

Respond in strict JSON format:
{
  "clarity": "...",
  "context": "...",
  "specificity": "...",
  "complexity": "...",
  "structure": "..."
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      max_tokens: 500,
      temperature: 0.2,
    });

    const content = completion.choices[0]?.message?.content ?? "{}";
    try {
      const evaluation: PromptEvaluation = JSON.parse(content);
      return new Response(JSON.stringify(evaluation), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } catch {
      return new Response(JSON.stringify({
        clarity: "Could not evaluate clarity.",
        context: "Could not evaluate context.",
        specificity: "Could not evaluate specificity.",
        complexity: "Could not evaluate complexity.",
        structure: "Could not evaluate structure.",
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Prompt evaluation failed." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}