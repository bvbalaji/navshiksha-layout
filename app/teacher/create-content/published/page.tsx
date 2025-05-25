"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { FileText, ListChecks, Video } from "lucide-react"

export default function PublishedTab() {
  return (
    <div>
      {/* Your Drafts tab content here */}
      <h2 className="text-xl font-semibold mb-4">Published Content</h2>
      {/* ... */}
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
    </div>
  );
}