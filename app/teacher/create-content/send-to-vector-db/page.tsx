"use client"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Loader2, CheckCircle2 } from "lucide-react"

export default function SendToVectorDBTab() {
	const [processing, setProcessing] = useState(false)
	const [stage, setStage] = useState<number>(0)

	// Stages for the animation
	const stages = [
		"Content Pre-processing",
		"Content Chunking",
		"Content Embedding",
		"Push to Vector DB"
	]
      // Handler for the process button
    const handleProcessContent = async () => {
        setProcessing(true)
        setStage(0)
        for (let i = 0; i < stages.length; i++) {
            setStage(i)
            // Wait for 2 seconds at each stage
            // eslint-disable-next-line no-await-in-loop
            await new Promise(res => setTimeout(res, 2000))
        }
        setProcessing(false)
        setStage(stages.length)
    }
  
    return (
    <div>
      <Card>
            <CardHeader>
                <CardTitle>Send Content to Vector DB</CardTitle>
                <CardDescription>
                    Process and send your educational content to the vector database for semantic search and retrieval.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button
                    variant="default"
                    onClick={handleProcessContent}
                    disabled={processing}
                >
                    {processing ? "Processing..." : "Process content"}
                </Button>
                <div className="mt-8 space-y-4">
                    {stages.map((label, idx) => (
                        <div key={label} className="flex items-center gap-3">
                            {processing && stage === idx ? (
                                <Loader2 className="animate-spin text-blue-500" />
                            ) : stage > idx ? (
                                <CheckCircle2 className="text-green-600" />
                            ) : (
                                <div className="w-5 h-5 rounded-full border border-gray-300" />
                            )}
                            <span
                                className={
                                    stage === idx && processing
                                        ? "font-semibold text-blue-700"
                                        : stage > idx
                                        ? "text-green-700"
                                        : "text-gray-500"
                                }
                            >
                                {label}
                            </span>
                        </div>
                    ))}
                    {stage === stages.length && (
                        <div className="mt-4 text-green-700 font-semibold flex items-center gap-2">
                            <CheckCircle2 className="text-green-600" />
                            Content successfully pushed to Vector DB!
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    </div>
  );
}

                    