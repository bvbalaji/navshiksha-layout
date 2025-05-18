"use client"

import { useState } from "react"
import { FileText, ImageIcon, LinkIcon, List, ListChecks, MessageSquare, Plus, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CreateContentPage() {
  const [contentType, setContentType] = useState<string>("lesson")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Content</h1>
        <p className="text-muted-foreground">Create and manage educational content for your courses</p>
      </div>

      <Tabs defaultValue="create" className="space-y-4">
        <TabsList>
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
        </TabsList>
        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Type</CardTitle>
              <CardDescription>Select the type of content you want to create</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Button
                variant={contentType === "lesson" ? "default" : "outline"}
                className="h-auto flex-col gap-2 p-4 justify-start"
                onClick={() => setContentType("lesson")}
              >
                <FileText className="h-8 w-8" />
                <div className="text-sm font-medium">Lesson</div>
                <div className="text-xs text-muted-foreground">Create a text-based lesson with rich content</div>
              </Button>
              <Button
                variant={contentType === "quiz" ? "default" : "outline"}
                className="h-auto flex-col gap-2 p-4 justify-start"
                onClick={() => setContentType("quiz")}
              >
                <ListChecks className="h-8 w-8" />
                <div className="text-sm font-medium">Quiz</div>
                <div className="text-xs text-muted-foreground">Create an assessment with various question types</div>
              </Button>
              <Button
                variant={contentType === "video" ? "default" : "outline"}
                className="h-auto flex-col gap-2 p-4 justify-start"
                onClick={() => setContentType("video")}
              >
                <Video className="h-8 w-8" />
                <div className="text-sm font-medium">Video</div>
                <div className="text-xs text-muted-foreground">Upload or embed video content</div>
              </Button>
              <Button
                variant={contentType === "assignment" ? "default" : "outline"}
                className="h-auto flex-col gap-2 p-4 justify-start"
                onClick={() => setContentType("assignment")}
              >
                <List className="h-8 w-8" />
                <div className="text-sm font-medium">Assignment</div>
                <div className="text-xs text-muted-foreground">Create tasks for students to complete</div>
              </Button>
              <Button
                variant={contentType === "discussion" ? "default" : "outline"}
                className="h-auto flex-col gap-2 p-4 justify-start"
                onClick={() => setContentType("discussion")}
              >
                <MessageSquare className="h-8 w-8" />
                <div className="text-sm font-medium">Discussion</div>
                <div className="text-xs text-muted-foreground">Start a discussion topic for your class</div>
              </Button>
              <Button
                variant={contentType === "resource" ? "default" : "outline"}
                className="h-auto flex-col gap-2 p-4 justify-start"
                onClick={() => setContentType("resource")}
              >
                <LinkIcon className="h-8 w-8" />
                <div className="text-sm font-medium">Resource</div>
                <div className="text-xs text-muted-foreground">Add external resources and links</div>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Details</CardTitle>
              <CardDescription>Provide information about your {contentType}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder={`Enter ${contentType} title`} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder={`Enter ${contentType} description`} rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Associated Course</Label>
                <select
                  id="course"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a course</option>
                  <option value="math">Advanced Mathematics</option>
                  <option value="physics">Physics for Engineering</option>
                  <option value="chemistry">Organic Chemistry</option>
                  <option value="cs">Introduction to Programming</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="module">Module</Label>
                <select
                  id="module"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select a module</option>
                  <option value="module1">Module 1: Introduction</option>
                  <option value="module2">Module 2: Core Concepts</option>
                  <option value="module3">Module 3: Advanced Topics</option>
                  <option value="module4">Module 4: Practical Applications</option>
                </select>
              </div>

              {contentType === "lesson" && (
                <div className="space-y-2">
                  <Label htmlFor="content">Lesson Content</Label>
                  <Textarea id="content" placeholder="Enter lesson content" rows={10} />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Button variant="outline" size="sm">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Add Image
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="mr-2 h-4 w-4" />
                      Add Video
                    </Button>
                    <Button variant="outline" size="sm">
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Add Link
                    </Button>
                  </div>
                </div>
              )}

              {contentType === "quiz" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Questions</Label>
                    <div className="space-y-4">
                      <Card>
                        <CardHeader className="p-4">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">Question 1</CardTitle>
                            <Button variant="ghost" size="sm">
                              Remove
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <div className="space-y-2">
                            <Label htmlFor="question1">Question</Label>
                            <Textarea id="question1" placeholder="Enter your question" />
                          </div>
                          <div className="space-y-2">
                            <Label>Answer Type</Label>
                            <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="multiple">Multiple Choice</option>
                              <option value="truefalse">True/False</option>
                              <option value="shortanswer">Short Answer</option>
                              <option value="essay">Essay</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label>Options</Label>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <input type="radio" id="option1" name="answer" className="h-4 w-4" />
                                <Input id="option1" placeholder="Option 1" className="flex-1" />
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="radio" id="option2" name="answer" className="h-4 w-4" />
                                <Input id="option2" placeholder="Option 2" className="flex-1" />
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="radio" id="option3" name="answer" className="h-4 w-4" />
                                <Input id="option3" placeholder="Option 3" className="flex-1" />
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="radio" id="option4" name="answer" className="h-4 w-4" />
                                <Input id="option4" placeholder="Option 4" className="flex-1" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Question
                    </Button>
                  </div>
                </div>
              )}

              {contentType === "video" && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="videoType">Video Type</Label>
                    <select
                      id="videoType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="upload">Upload Video</option>
                      <option value="embed">Embed from YouTube/Vimeo</option>
                      <option value="record">Record New Video</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="videoUrl">Video URL</Label>
                    <Input id="videoUrl" placeholder="Enter video URL or upload" />
                    <Button variant="outline" className="mt-2">
                      Upload Video
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="transcript">Transcript (Optional)</Label>
                    <Textarea id="transcript" placeholder="Enter video transcript" rows={5} />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Publish Content</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="drafts">
          <Card>
            <CardHeader>
              <CardTitle>Draft Content</CardTitle>
              <CardDescription>Content you've saved but not yet published</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Introduction to Calculus</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Lesson • Advanced Mathematics</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm">Publish</Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <ListChecks className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Physics Mid-term Assessment</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Quiz • Physics for Engineering</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm">Publish</Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Chemical Reactions Demonstration</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Video • Organic Chemistry</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button size="sm">Publish</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="published">
          <Card>
            <CardHeader>
              <CardTitle>Published Content</CardTitle>
              <CardDescription>Content that is live and available to students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Newton's Laws of Motion</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Lesson • Physics for Engineering</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Unpublish
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <ListChecks className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Programming Fundamentals Quiz</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Quiz • Introduction to Programming</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Unpublish
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Algebra Fundamentals</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Video • Advanced Mathematics</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Unpublish
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
