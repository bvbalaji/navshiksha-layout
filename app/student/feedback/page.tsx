"use client"

import { useState } from "react"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null)
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)

  const handleRatingClick = (value: number) => {
    setRating(value)
  }

  const handleRatingHover = (value: number) => {
    setHoveredRating(value)
  }

  const handleRatingLeave = () => {
    setHoveredRating(null)
  }

  const displayRating = hoveredRating !== null ? hoveredRating : rating

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Feedback</h1>
        <p className="text-muted-foreground">Share your thoughts and help us improve</p>
      </div>

      <Tabs defaultValue="course">
        <TabsList>
          <TabsTrigger value="course">Course Feedback</TabsTrigger>
          <TabsTrigger value="tutor">Tutor Feedback</TabsTrigger>
          <TabsTrigger value="platform">Platform Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value="course" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Feedback</CardTitle>
              <CardDescription>Share your experience with the courses you've taken</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course">Select Course</Label>
                <select
                  id="course"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a course</option>
                  <option value="math">Advanced Mathematics</option>
                  <option value="physics">Physics for Engineering</option>
                  <option value="chemistry">Organic Chemistry</option>
                  <option value="biology">Human Biology</option>
                  <option value="cs">Introduction to Programming</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Course Rating</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleRatingClick(value)}
                      onMouseEnter={() => handleRatingHover(value)}
                      onMouseLeave={handleRatingLeave}
                      className="rounded-md p-1 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          displayRating !== null && value <= displayRating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {displayRating ? `${displayRating} out of 5` : "Select a rating"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content-quality">Content Quality</Label>
                <RadioGroup defaultValue="good" id="content-quality">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="content-quality-excellent" />
                    <Label htmlFor="content-quality-excellent">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="content-quality-good" />
                    <Label htmlFor="content-quality-good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="content-quality-average" />
                    <Label htmlFor="content-quality-average">Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="content-quality-poor" />
                    <Label htmlFor="content-quality-poor">Poor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course-pace">Course Pace</Label>
                <RadioGroup defaultValue="just-right" id="course-pace">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="too-slow" id="course-pace-too-slow" />
                    <Label htmlFor="course-pace-too-slow">Too Slow</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="just-right" id="course-pace-just-right" />
                    <Label htmlFor="course-pace-just-right">Just Right</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="too-fast" id="course-pace-too-fast" />
                    <Label htmlFor="course-pace-too-fast">Too Fast</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course-feedback">Additional Comments</Label>
                <Textarea
                  id="course-feedback"
                  placeholder="Share your thoughts about the course content, structure, and materials..."
                  rows={5}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit Feedback</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="tutor" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tutor Feedback</CardTitle>
              <CardDescription>Share your experience with your tutors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tutor">Select Tutor</Label>
                <select
                  id="tutor"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a tutor</option>
                  <option value="priya">Dr. Priya Sharma</option>
                  <option value="rajesh">Prof. Rajesh Kumar</option>
                  <option value="ananya">Dr. Ananya Gupta</option>
                  <option value="vikram">Dr. Vikram Singh</option>
                  <option value="neha">Prof. Neha Verma</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Tutor Rating</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleRatingClick(value)}
                      onMouseEnter={() => handleRatingHover(value)}
                      onMouseLeave={handleRatingLeave}
                      className="rounded-md p-1 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          displayRating !== null && value <= displayRating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {displayRating ? `${displayRating} out of 5` : "Select a rating"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Teaching Quality</Label>
                <RadioGroup defaultValue="good">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="teaching-quality-excellent" />
                    <Label htmlFor="teaching-quality-excellent">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="teaching-quality-good" />
                    <Label htmlFor="teaching-quality-good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="teaching-quality-average" />
                    <Label htmlFor="teaching-quality-average">Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="teaching-quality-poor" />
                    <Label htmlFor="teaching-quality-poor">Poor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Responsiveness</Label>
                <RadioGroup defaultValue="good">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="responsiveness-excellent" />
                    <Label htmlFor="responsiveness-excellent">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="responsiveness-good" />
                    <Label htmlFor="responsiveness-good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="responsiveness-average" />
                    <Label htmlFor="responsiveness-average">Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="responsiveness-poor" />
                    <Label htmlFor="responsiveness-poor">Poor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tutor-feedback">Additional Comments</Label>
                <Textarea
                  id="tutor-feedback"
                  placeholder="Share your thoughts about the tutor's teaching style, knowledge, and helpfulness..."
                  rows={5}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit Feedback</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="platform" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Platform Feedback</CardTitle>
              <CardDescription>Help us improve the Navshiksha platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Platform Rating</Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleRatingClick(value)}
                      onMouseEnter={() => handleRatingHover(value)}
                      onMouseLeave={handleRatingLeave}
                      className="rounded-md p-1 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          displayRating !== null && value <= displayRating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {displayRating ? `${displayRating} out of 5` : "Select a rating"}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Ease of Use</Label>
                <RadioGroup defaultValue="good">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="ease-excellent" />
                    <Label htmlFor="ease-excellent">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="ease-good" />
                    <Label htmlFor="ease-good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="ease-average" />
                    <Label htmlFor="ease-average">Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="ease-poor" />
                    <Label htmlFor="ease-poor">Poor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Features</Label>
                <RadioGroup defaultValue="good">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excellent" id="features-excellent" />
                    <Label htmlFor="features-excellent">Excellent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="features-good" />
                    <Label htmlFor="features-good">Good</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="average" id="features-average" />
                    <Label htmlFor="features-average">Average</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="features-poor" />
                    <Label htmlFor="features-poor">Poor</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="platform-feedback">What can we improve?</Label>
                <Textarea
                  id="platform-feedback"
                  placeholder="Share your suggestions for improving the platform..."
                  rows={5}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feature-request">Feature Requests</Label>
                <Textarea
                  id="feature-request"
                  placeholder="Is there any feature you would like to see on Navshiksha?"
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Submit Feedback</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Previous Feedback</CardTitle>
          <CardDescription>View your submitted feedback and responses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {previousFeedback.map((feedback) => (
              <div key={feedback.id} className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{feedback.title}</h4>
                    <p className="text-sm text-muted-foreground">{feedback.date}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < feedback.rating ? "fill-primary text-primary" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm">{feedback.comment}</p>
                {feedback.response && (
                  <div className="mt-4 rounded-lg bg-muted p-3">
                    <p className="text-xs font-medium">Response from {feedback.respondent}</p>
                    <p className="mt-1 text-sm">{feedback.response}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const previousFeedback = [
  {
    id: "1",
    title: "Physics for Engineering",
    date: "April 15, 2023",
    rating: 4,
    comment:
      "The course content was excellent, but I found some of the concepts difficult to grasp without additional examples.",
    respondent: "Prof. Rajesh Kumar",
    response:
      "Thank you for your feedback! I've added more examples to the course materials to help clarify the difficult concepts.",
  },
  {
    id: "2",
    title: "Platform Feedback",
    date: "March 20, 2023",
    rating: 5,
    comment: "The platform is very intuitive and easy to use. I especially like the personal tutor feature.",
    respondent: "Navshiksha Support",
    response:
      "We're glad you're enjoying the platform! We're continuously working to improve the personal tutor feature based on student feedback.",
  },
  {
    id: "3",
    title: "Dr. Ananya Gupta",
    date: "February 10, 2023",
    rating: 5,
    comment:
      "Dr. Gupta is an excellent teacher. Her explanations are clear and she's always willing to help outside of class hours.",
    respondent: null,
    response: null,
  },
]
