import { BookOpen, FileText, Filter, ImageIcon, MoreHorizontal, Plus, Search, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ContentPage() {
  // Sample content data
  const contents = [
    {
      id: 1,
      title: "Introduction to Algebra",
      type: "Lesson",
      course: "Advanced Mathematics",
      author: "Dr. Sarah Williams",
      lastUpdated: "May 10, 2025",
    },
    {
      id: 2,
      title: "Newton's Laws of Motion",
      type: "Video",
      course: "Introduction to Physics",
      author: "Prof. Michael Chen",
      lastUpdated: "May 8, 2025",
    },
    {
      id: 3,
      title: "Periodic Table Elements",
      type: "Quiz",
      course: "Chemistry Fundamentals",
      author: "Dr. Emily Davis",
      lastUpdated: "May 5, 2025",
    },
    {
      id: 4,
      title: "Cell Structure and Function",
      type: "Lesson",
      course: "Biology 101",
      author: "Prof. James Wilson",
      lastUpdated: "May 3, 2025",
    },
    {
      id: 5,
      title: "Variables and Data Types",
      type: "Interactive",
      course: "Computer Programming",
      author: "Dr. Robert Taylor",
      lastUpdated: "Apr 28, 2025",
    },
    {
      id: 6,
      title: "World War II Overview",
      type: "Lesson",
      course: "World History",
      author: "Prof. Jennifer Martinez",
      lastUpdated: "Apr 25, 2025",
    },
    {
      id: 7,
      title: "Shakespeare's Sonnets",
      type: "Assignment",
      course: "English Literature",
      author: "Dr. David Anderson",
      lastUpdated: "Apr 20, 2025",
    },
    {
      id: 8,
      title: "Climate Change Factors",
      type: "Video",
      course: "Environmental Science",
      author: "Prof. Lisa Johnson",
      lastUpdated: "Apr 15, 2025",
    },
  ]

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Content Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Content
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/4">
          <CardHeader>
            <CardTitle>Content Statistics</CardTitle>
            <CardDescription>Overview of educational content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Content</span>
                <span className="font-medium">3,428</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Lessons</span>
                <span className="font-medium">1,245</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Videos</span>
                <span className="font-medium">876</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Quizzes</span>
                <span className="font-medium">542</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Assignments</span>
                <span className="font-medium">412</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Interactive</span>
                <span className="font-medium">353</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <TabsList>
                <TabsTrigger value="all">All Content</TabsTrigger>
                <TabsTrigger value="lessons">Lessons</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search content..." className="w-full md:w-[200px] pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contents.map((content) => (
                        <TableRow key={content.id}>
                          <TableCell className="font-medium">{content.title}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="flex w-fit items-center gap-1">
                              {content.type === "Lesson" && <FileText className="h-3 w-3" />}
                              {content.type === "Video" && <Video className="h-3 w-3" />}
                              {content.type === "Quiz" && <BookOpen className="h-3 w-3" />}
                              {content.type === "Assignment" && <FileText className="h-3 w-3" />}
                              {content.type === "Interactive" && <ImageIcon className="h-3 w-3" />}
                              {content.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{content.course}</TableCell>
                          <TableCell>{content.author}</TableCell>
                          <TableCell>{content.lastUpdated}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Open menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View content</DropdownMenuItem>
                                <DropdownMenuItem>Edit content</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem>Download</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete content</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lessons" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <FileText className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Lesson Content</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage all lesson content including text-based materials and reading assignments.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="videos" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Video className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Video Content</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage all video content including lectures, demonstrations, and tutorials.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assessments" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Assessment Content</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage all assessment content including quizzes, tests, and assignments.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
