"use client"

import type React from "react"

import { useState } from "react"
import { BookOpen, FileText, ImageIcon, Mic, MicOff, Paperclip, Send, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdvancedPersonalTutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm your advanced AI tutor. I can help with complex topics, provide detailed explanations, and even analyze images or documents you upload. How can I assist you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAdvancedAIResponse(inputValue),
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1500)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    if (!isRecording) {
      // Simulate starting recording
      setTimeout(() => {
        setIsRecording(false)
        setInputValue("Can you explain the concept of quantum entanglement?")
      }, 3000)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Advanced Personal Tutor</h1>
        <p className="text-muted-foreground">Get in-depth assistance with complex topics</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-3">
          <Card className="h-[calc(100vh-16rem)]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div>
                  <CardTitle>Advanced Navshiksha AI Tutor</CardTitle>
                  <CardDescription>Capable of handling complex topics and multimedia inputs</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p
                        className={`mt-1 text-xs ${
                          message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="icon">
                    <Paperclip className="h-4 w-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={toggleRecording}
                    className={isRecording ? "bg-red-100 text-red-500" : ""}
                  >
                    {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    <span className="sr-only">{isRecording ? "Stop recording" : "Start recording"}</span>
                  </Button>
                </div>
                <Input
                  placeholder="Ask a complex question or upload a document..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="subjects">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="files">Files</TabsTrigger>
            </TabsList>
            <TabsContent value="subjects" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Your Subjects</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="space-y-2">
                    {subjects.map((subject) => (
                      <Button
                        key={subject.id}
                        variant="outline"
                        className="w-full justify-start text-sm"
                        onClick={() => setInputValue(`Help me with ${subject.name}`)}
                      >
                        <subject.icon className="mr-2 h-4 w-4" />
                        {subject.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Advanced Tools</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Image Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Document Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <Video className="mr-2 h-4 w-4" />
                      Video Explanation
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Study Plan Generator
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="files" className="mt-4 space-y-4">
              <Card>
                <CardHeader className="p-3">
                  <CardTitle className="text-sm">Recent Files</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="space-y-2">
                    {recentFiles.map((file) => (
                      <div key={file.id} className="flex items-center justify-between rounded-md border p-2">
                        <div className="flex items-center">
                          <file.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <Paperclip className="h-3 w-3" />
                          <span className="sr-only">Attach</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-4">
            <CardHeader className="p-3">
              <CardTitle className="text-sm">Suggested Questions</CardTitle>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-sm text-wrap border-2 gap-3 pt-5 pb-5"
                    onClick={() => setInputValue(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: string
}

function formatTime(timestamp: string): string {
  const date = new Date(timestamp)
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

function getAdvancedAIResponse(message: string): string {
  // More sophisticated response logic for the advanced tutor
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("quantum")) {
    return `Quantum entanglement is a fascinating phenomenon in quantum physics where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others.

Key points about quantum entanglement:

1. When particles are entangled, measuring a property of one particle instantly determines the corresponding property of the other particle(s), regardless of the distance separating them.

2. This seemingly violates the principle of locality, which states that an object is influenced directly only by its immediate surroundings.

3. Einstein referred to this as "spooky action at a distance" and used it to argue that quantum mechanics was incomplete.

4. Experiments have consistently confirmed that entanglement is real, though the mechanism is still not fully understood.

5. Entanglement is a key resource in quantum computing, quantum cryptography, and quantum teleportation.

Would you like me to explain any specific aspect of quantum entanglement in more detail?`
  }

  if (lowerMessage.includes("relativity")) {
    return `Einstein's Theory of Relativity consists of two major frameworks: Special Relativity (1905) and General Relativity (1915).

Special Relativity:
- Based on two postulates:
  1. The laws of physics are the same in all inertial reference frames
  2. The speed of light in vacuum is constant for all observers
- Key consequences:
  - Time dilation: Moving clocks run slower
  - Length contraction: Moving objects appear shorter
  - Mass-energy equivalence: E = mc²
  - No absolute reference frame or simultaneous events

General Relativity:
- Extends special relativity to include gravity
- Key concepts:
  - Gravity is not a force but a curvature of spacetime caused by mass and energy
  - Objects follow geodesics (shortest paths) in curved spacetime
  - Predicts phenomena like gravitational waves, black holes, and the bending of light
  - The Einstein field equations describe how matter and energy curve spacetime

Would you like me to elaborate on any specific aspect of relativity?`
  }

  if (lowerMessage.includes("neural network") || lowerMessage.includes("deep learning")) {
    return `Neural networks are computational models inspired by the human brain's structure and function. They form the foundation of deep learning, a subset of machine learning.

Key components and concepts:

1. Structure:
   - Input layer: Receives data
   - Hidden layers: Process information (more layers = "deeper" network)
   - Output layer: Produces results

2. Neurons (nodes):
   - Each receives inputs, applies weights, adds bias
   - Passes result through an activation function
   - Outputs a signal to the next layer

3. Training process:
   - Forward propagation: Data flows through the network
   - Loss calculation: Measures prediction error
   - Backpropagation: Adjusts weights to minimize error
   - Gradient descent: Optimization algorithm to find optimal weights

4. Types of neural networks:
   - Convolutional Neural Networks (CNNs): Excellent for image processing
   - Recurrent Neural Networks (RNNs): Handle sequential data
   - Transformers: State-of-the-art for language tasks
   - Generative Adversarial Networks (GANs): Create new content

Would you like me to explain any specific aspect of neural networks in more detail?`
  }

  if (lowerMessage.includes("help") || lowerMessage.includes("stuck")) {
    return "I'm here to help with advanced topics! Please share the specific concept or problem you're struggling with, and I'll provide a detailed explanation with examples."
  }

  if (lowerMessage.includes("thank")) {
    return "You're welcome! If you have more complex questions or need further clarification, don't hesitate to ask. I'm designed to handle advanced topics across various subjects."
  }

  return "That's an interesting advanced topic. Could you provide more details about what specific aspects you'd like me to explain? I can provide in-depth explanations with examples and visual aids if needed."
}

const subjects = [
  {
    id: "1",
    name: "Advanced Mathematics",
    icon: BookOpen,
  },
  {
    id: "2",
    name: "Quantum Physics",
    icon: BookOpen,
  },
  {
    id: "3",
    name: "Organic Chemistry",
    icon: BookOpen,
  },
  {
    id: "4",
    name: "Molecular Biology",
    icon: BookOpen,
  },
  {
    id: "5",
    name: "Computer Science",
    icon: BookOpen,
  },
]

const recentFiles = [
  {
    id: "1",
    name: "Physics_Assignment.pdf",
    icon: FileText,
  },
  {
    id: "2",
    name: "Math_Formula_Sheet.pdf",
    icon: FileText,
  },
  {
    id: "3",
    name: "Chemistry_Diagram.png",
    icon: ImageIcon,
  },
  {
    id: "4",
    name: "Biology_Notes.docx",
    icon: FileText,
  },
]

const suggestedQuestions = [
  "Explain the concept of quantum entanglement", 
  "Explain Einstein's theory of relativity?",
  "Explain the process of photosynthesis in detail",
  "What is the significance of DNA replication?",
]
