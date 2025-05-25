import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"

export interface PromptEvaluation {
  clarity: string;
  context: string;
  specificity: string;
  complexity: string;
  structure: string;
}

const useOpenAI = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<PromptEvaluation | null>(null);
  const { toast } = useToast();

  // Separate function to evaluate the prompt
  const evaluatePrompt = async (prompt: string) => {
    setEvaluation(null);
    try {
      const res = await fetch('/api/openai/prompt-evaluation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      if (!res.ok) throw new Error('Prompt evaluation failed');
      const data = await res.json();
      setEvaluation(data);
      return data as PromptEvaluation;
    } catch (error: any) {
      toast({
        title: "Evaluation Error",
        description: error.message || "Failed to evaluate prompt",
        variant: "destructive",
      });
      return null;
    }
  };

  // Function to generate the OpenAI response (after prompt is refined)
  const generate = async (prompt: string, onUpdateResponse: (newText: string) => void) => {
    setLoading(true);
    setResponse(null);
    try {
      const res = await fetch('/api/openai/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedResponse = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          accumulatedResponse += chunk;
          onUpdateResponse(accumulatedResponse);
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to generate response",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, evaluation, evaluatePrompt, generate };
};

export default useOpenAI;