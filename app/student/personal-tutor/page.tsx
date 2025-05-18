"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PersonalTutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your personal AI tutor. How can I help you with your studies today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

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
        content: getAIResponse(inputValue),
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Personal Tutor</h1>
        <p className="text-muted-foreground">Get personalized help with your studies</p>
      </div>

      <Tabs defaultValue="chat">
        <TabsList>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="chat" className="mt-6">
          <Card className="h-[calc(100vh-16rem)]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div>
                  <CardTitle>Navshiksha AI Tutor</CardTitle>
                  <CardDescription>Ask questions about your courses or get help with homework</CardDescription>
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
                      <p>{message.content}</p>
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
                <Input
                  placeholder="Ask anything about your studies..."
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
        </TabsContent>
        <TabsContent value="resources" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
              <CardDescription>Helpful resources for your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <Card key={resource.id}>
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <CardDescription>{resource.subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">{resource.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          View Resource
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Chat History</CardTitle>
              <CardDescription>Your previous conversations with the AI tutor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {chatHistory.map((chat) => (
                  <div key={chat.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <h4 className="font-semibold">{chat.topic}</h4>
                      <p className="text-sm text-muted-foreground">{chat.date}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Chat
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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

function getAIResponse(message: string): string {
  // Simple response logic - in a real app, this would call an AI API
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    return "Hello! How can I help you with your studies today?"
  }

  if (lowerMessage.includes("math") || lowerMessage.includes("mathematics")) {
    return "I'd be happy to help with mathematics! What specific topic or problem are you working on?"
  }

  if (lowerMessage.includes("physics")) {
    return "Physics is fascinating! Are you studying mechanics, electromagnetism, or another area of physics?"
  }

  if (lowerMessage.includes("chemistry")) {
    return "Chemistry is a great subject! Are you working on organic chemistry, inorganic chemistry, or something else?"
  }

  if (lowerMessage.includes("help") || lowerMessage.includes("stuck")) {
    return "I'm here to help! Please share the specific problem or concept you're struggling with, and I'll do my best to explain it."
  }

  if (lowerMessage.includes("thank")) {
    return "You're welcome! Feel free to ask if you have any other questions."
  }

  return "That's an interesting question. Could you provide more details so I can give you a more specific answer?"
}

const resources = [
  {
    id: "1",
    title: "Mathematics Formula Sheet",
    subject: "Mathematics",
    description: "A comprehensive collection of formulas for calculus, algebra, and trigonometry.",
    url: "#",
  },
  {
    id: "2",
    title: "Physics Interactive Simulations",
    subject: "Physics",
    description: "Interactive simulations to help visualize and understand physics concepts.",
    url: "#",
  },
  {
    id: "3",
    title: "Chemistry Periodic Table Guide",
    subject: "Chemistry",
    description: "An interactive periodic table with detailed information about each element.",
    url: "#",
  },
  {
    id: "4",
    title: "Biology Cell Structure",
    subject: "Biology",
    description: "Detailed diagrams and explanations of cell structures and functions.",
    url: "#",
  },
  {
    id: "5",
    title: "Programming Cheat Sheet",
    subject: "Computer Science",
    description: "Quick reference guide for common programming concepts and syntax.",
    url: "#",
  },
  {
    id: "6",
    title: "English Literature Analysis Guide",
    subject: "English",
    description: "Techniques and frameworks for analyzing literary works.",
    url: "#",
  },
]

const chatHistory = [
  {
    id: "1",
    topic: "Calculus Integration Techniques",
    date: "May 15, 2023",
    url: "#",
  },
  {
    id: "2",
    topic: "Newton's Laws of Motion",
    date: "May 12, 2023",
    url: "#",
  },
  {
    id: "3",
    topic: "Organic Chemistry Nomenclature",
    date: "May 10, 2023",
    url: "#",
  },
  {
    id: "4",
    topic: "Programming Arrays and Loops",
    date: "May 5, 2023",
    url: "#",
  },
]
