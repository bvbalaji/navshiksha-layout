"use client";

import React, { useState, useEffect, useRef } from 'react';
import useOpenAI, { PromptEvaluation } from '@/hooks/use-openai';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import PromptRefinementDialog from '@/components/prompt-refinement-dialog';

const PersonalTutor = () => {
  const [prompt, setPrompt] = useState('');
  const [streamedResponse, setStreamedResponse] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const { loading, generate, evaluatePrompt, evaluation } = useOpenAI();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Progress dots state
  const [thinkingDots, setThinkingDots] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [evaluatingDots, setEvaluatingDots] = useState('');

  // Progress dots for generating response
  useEffect(() => {
    if (loading) {
      let count = 0;
      const interval = setInterval(() => {
        setThinkingDots('.'.repeat((count % 3) + 1));
        count++;
      }, 500);
      return () => clearInterval(interval);
    } else {
      setThinkingDots('');
    }
  }, [loading]);

  // Progress dots for evaluating prompt
  useEffect(() => {
    if (evaluating) {
      let count = 0;
      const interval = setInterval(() => {
        setEvaluatingDots('.'.repeat((count % 3) + 1));
        count++;
      }, 500);
      return () => clearInterval(interval);
    } else {
      setEvaluatingDots('');
    }
  }, [evaluating]);

  // Evaluate prompt before allowing user to generate or refine
  const handleEvaluate = async () => {
    setStreamedResponse('');
    setEvaluating(true);
    await evaluatePrompt(prompt);
    setShowEvaluation(true);
    setEvaluating(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStreamedResponse('');
    setShowEvaluation(false);
    generate(prompt, (newText) => {
      setStreamedResponse(newText);
    });
  };

  const handleRefinePrompt = (refinedPrompt: string) => {
    setPrompt(refinedPrompt);
    setIsDialogOpen(false);
    setShowEvaluation(false);
  };

  // Clear prompt, response, evaluation, and hide evaluation area
  const handleClear = () => {
    setPrompt('');
    setStreamedResponse('');
    setShowEvaluation(false);
  };

  // Scroll to bottom when streamedResponse updates
  useEffect(() => {
    if (streamedResponse && scrollAreaRef.current) {
      // Scroll to the bottom smoothly as new text comes in
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [streamedResponse]);

  return (
    <div className="w-full px-0 mx-0 h-[100vh] flex flex-col">
      <Card className="w-full flex-1 flex flex-col">
        <CardContent className="p-4 flex flex-col flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Textarea
              placeholder="Ask me anything..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
            />
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={handleEvaluate} disabled={loading || evaluating || !prompt}>
                Evaluate Prompt
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(true)} disabled={!prompt || loading || evaluating}>
                Refine Prompt
              </Button>
              <Button type="submit" disabled={loading || evaluating || !prompt || !evaluation}>
                {loading ? 'Generating...' : 'Generate'}
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleClear}
                disabled={loading || evaluating || !prompt} // <-- Disable if prompt is empty
              >
                Clear
              </Button>
            </div>
          </form>
          {evaluating && (
            <div className="mt-4 text-blue-500 font-mono">
              Evaluating{evaluatingDots}
            </div>
          )}
          {loading && (
            <div className="mt-4 text-gray-500 font-mono">
              Thinking{thinkingDots}
            </div>
          )}
          {showEvaluation && evaluation && (
            <div className="mt-4 border rounded p-3 bg-gray-50">
              <h3 className="font-semibold mb-2">Prompt Evaluation:</h3>
              <ul className="list-disc ml-5 text-sm">
                <li><b>Clarity:</b> {evaluation.clarity}</li>
                <li><b>Context:</b> {evaluation.context}</li>
                <li><b>Specificity:</b> {evaluation.specificity}</li>
                <li><b>Complexity:</b> {evaluation.complexity}</li>
                <li><b>Structure:</b> {evaluation.structure}</li>
              </ul>
            </div>
          )}
          {streamedResponse && (
            <div className="mt-4 flex-1 flex flex-col min-h-0">
              <h2 className="text-lg font-semibold">Response:</h2>
              <ScrollArea className="flex-1 min-h-0 rounded-md border p-4">
                <div
                  ref={scrollAreaRef}
                  className="h-full overflow-y-auto"
                  style={{ maxHeight: '100%', transition: 'scroll-behavior 0.2s' }}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {streamedResponse}
                  </ReactMarkdown>
                </div>
              </ScrollArea>
            </div>
          )}
          <PromptRefinementDialog
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            prompt={prompt}
            onRefine={handleRefinePrompt}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalTutor;