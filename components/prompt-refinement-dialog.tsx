"use client";

import React, { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface PromptRefinementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prompt: string;
  onRefine: (refinedPrompt: string) => void;
}

const PromptRefinementDialog: React.FC<PromptRefinementDialogProps> = ({
  open,
  onOpenChange,
  prompt,
  onRefine,
}) => {
  const [refinedPrompt, setRefinedPrompt] = useState(prompt);

  const handleRefine = () => {
    onRefine(refinedPrompt);
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Refine Your Prompt</AlertDialogTitle>
          <AlertDialogDescription>
            Adjust the prompt to get a more specific or accurate response.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              id="refined-prompt"
              value={refinedPrompt}
              onChange={(e) => setRefinedPrompt(e.target.value)}
              className="col-span-4"
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRefine}>Refine</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PromptRefinementDialog;