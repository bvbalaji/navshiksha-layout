"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { FileText,  ListChecks, Video } from "lucide-react"


export default function DraftsTab() {
  return (
    <div>
      {/* Your Drafts tab content here */}
      <h2 className="text-xl font-semibold mb-4">Draft Content</h2>
      {/* ... */}
     
         <Card value="drafts">
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
    </div>
  );
}