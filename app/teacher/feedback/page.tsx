"use client"

import { useState } from "react"
import { Calendar, Download, Filter, MessageSquare, Search, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeacherFeedbackPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const filteredFeedback = feedbackData.filter(
    (feedback) =>
      (feedback.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feedback.comment.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedRating === null || feedback.rating === selectedRating),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Student Feedback</h1>
        <p className="text-muted-foreground">Review and respond to feedback from your students</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search feedback..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedRating === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedRating(null)}
        >
          All Ratings
        </Button>
        {[5, 4, 3, 2, 1].map((rating) => (
          <Button
            key={rating}
            variant={selectedRating === rating ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedRating(rating)}
            className="flex items-center gap-1"
          >
            {rating}
            <Star className="h-3 w-3 fill-current" />
          </Button>
        ))}
      </div>

      <Tabs defaultValue="course" className="space-y-4">
        <TabsList>
          <TabsTrigger value="course">Course Feedback</TabsTrigger>
          <TabsTrigger value="teaching">Teaching Feedback</TabsTrigger>
          <TabsTrigger value="responded">Responded</TabsTrigger>
          <TabsTrigger value="unresponded">Unresponded</TabsTrigger>
        </TabsList>
        <TabsContent value="course" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Feedback</CardTitle>
              <CardDescription>
                {filteredFeedback.filter((f) => f.type === "course").length} feedback items found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedback
                  .filter((f) => f.type === "course")
                  .map((feedback) => (
                    <div key={feedback.id} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{feedback.studentName}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{feedback.course}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {feedback.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">{feedback.comment}</p>
                          {feedback.response && (
                            <div className="mt-3 rounded-md bg-muted p-3">
                              <p className="text-xs font-medium">Your response:</p>
                              <p className="mt-1 text-sm">{feedback.response}</p>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {!feedback.response && (
                            <Button variant="outline" size="sm">
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Respond
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredFeedback.filter((f) => f.type === "course").length} of{" "}
                  {feedbackData.filter((f) => f.type === "course").length} feedback items
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="teaching" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Teaching Feedback</CardTitle>
              <CardDescription>
                {filteredFeedback.filter((f) => f.type === "teaching").length} feedback items found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedback
                  .filter((f) => f.type === "teaching")
                  .map((feedback) => (
                    <div key={feedback.id} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{feedback.studentName}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{feedback.course}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {feedback.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">{feedback.comment}</p>
                          {feedback.response && (
                            <div className="mt-3 rounded-md bg-muted p-3">
                              <p className="text-xs font-medium">Your response:</p>
                              <p className="mt-1 text-sm">{feedback.response}</p>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {!feedback.response && (
                            <Button variant="outline" size="sm">
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Respond
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="responded" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Responded Feedback</CardTitle>
              <CardDescription>
                {filteredFeedback.filter((f) => f.response).length} feedback items found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedback
                  .filter((f) => f.response)
                  .map((feedback) => (
                    <div key={feedback.id} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{feedback.studentName}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{feedback.course}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {feedback.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">{feedback.comment}</p>
                          <div className="mt-3 rounded-md bg-muted p-3">
                            <p className="text-xs font-medium">Your response:</p>
                            <p className="mt-1 text-sm">{feedback.response}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Edit Response
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unresponded" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unresponded Feedback</CardTitle>
              <CardDescription>
                {filteredFeedback.filter((f) => !f.response).length} feedback items found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFeedback
                  .filter((f) => !f.response)
                  .map((feedback) => (
                    <div key={feedback.id} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{feedback.studentName}</h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{feedback.course}</span>
                                <span>•</span>
                                <span className="flex items-center">
                                  <Calendar className="mr-1 h-3 w-3" />
                                  {feedback.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="mt-2 text-sm">{feedback.comment}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Respond
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Feedback Summary</CardTitle>
          <CardDescription>Overview of your feedback ratings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Average Rating</div>
              <div className="mt-1 flex items-center">
                <span className="text-2xl font-bold">4.7</span>
                <div className="ml-2 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Total Feedback</div>
              <div className="mt-1 text-2xl font-bold">{feedbackData.length}</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Response Rate</div>
              <div className="mt-1 text-2xl font-bold">
                {Math.round((feedbackData.filter((f) => f.response).length / feedbackData.length) * 100)}%
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-sm text-muted-foreground">Pending Responses</div>
              <div className="mt-1 text-2xl font-bold">{feedbackData.filter((f) => !f.response).length}</div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-4 text-lg font-medium">Rating Distribution</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = feedbackData.filter((f) => f.rating === rating).length
                const percentage = Math.round((count / feedbackData.length) * 100)
                return (
                  <div key={rating} className="flex items-center gap-2">
                    <div className="flex w-12 items-center">
                      <span>{rating}</span>
                      <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-full rounded-full bg-gray-100">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${percentage}%` }}
                          role="progressbar"
                          aria-valuenow={percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-right text-sm text-muted-foreground">{percentage}%</div>
                  </div>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const feedbackData = [
  {
    id: "1",
    studentName: "Rahul Patel",
    course: "Advanced Mathematics",
    date: "May 15, 2023",
    rating: 5,
    type: "course",
    comment:
      "The course content was excellent and very well structured. The examples and practice problems were particularly helpful.",
    response:
      "Thank you for your positive feedback, Rahul! I'm glad you found the examples and practice problems helpful.",
  },
  {
    id: "2",
    studentName: "Priya Sharma",
    course: "Physics for Engineering",
    date: "May 12, 2023",
    rating: 4,
    type: "teaching",
    comment:
      "Dr. Sharma explains complex concepts very clearly. I would appreciate more real-world applications in the lectures.",
    response: null,
  },
  {
    id: "3",
    studentName: "Ananya Gupta",
    course: "Organic Chemistry",
    date: "May 10, 2023",
    rating: 5,
    type: "teaching",
    comment:
      "The teaching style is excellent. I particularly appreciate how you break down complex reactions into simple steps.",
    response:
      "Thank you, Ananya! I'm happy to hear that my approach to breaking down complex reactions is working well for you.",
  },
  {
    id: "4",
    studentName: "Vikram Singh",
    course: "Introduction to Programming",
    date: "May 8, 2023",
    rating: 3,
    type: "course",
    comment:
      "The course content is good, but I think we need more hands-on coding exercises. The theoretical parts are well explained.",
    response: null,
  },
  {
    id: "5",
    studentName: "Neha Verma",
    course: "Advanced Mathematics",
    date: "May 5, 2023",
    rating: 4,
    type: "course",
    comment: "Great course overall. The pace is just right, and the assignments are challenging but doable.",
    response:
      "Thanks for your feedback, Neha! I'm glad you're finding the pace and difficulty level appropriate. Let me know if you need any additional support.",
  },
  {
    id: "6",
    studentName: "Arun Joshi",
    course: "Physics for Engineering",
    date: "May 3, 2023",
    rating: 2,
    type: "teaching",
    comment:
      "I'm struggling to keep up with the pace of the lectures. Could we possibly have some additional review sessions?",
    response: null,
  },
  {
    id: "7",
    studentName: "Kavita Reddy",
    course: "Organic Chemistry",
    date: "May 1, 2023",
    rating: 5,
    type: "course",
    comment:
      "The course materials are excellent. I especially appreciate the detailed notes and the recorded lectures that I can review at my own pace.",
    response:
      "Thank you for your kind words, Kavita! I'm glad you're finding the materials and recorded lectures helpful for your learning.",
  },
  {
    id: "8",
    studentName: "Sanjay Kumar",
    course: "Introduction to Programming",
    date: "April 28, 2023",
    rating: 4,
    type: "teaching",
    comment:
      "Your teaching style is very engaging. I appreciate how you relate programming concepts to real-world scenarios.",
    response: null,
  },
]
