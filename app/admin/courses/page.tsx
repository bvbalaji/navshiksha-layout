import { BookOpen, Check, Filter, MoreHorizontal, Plus, Search, Star, Users, X } from "lucide-react"

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

export default function CoursesPage() {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      category: "Mathematics",
      instructor: "Dr. Sarah Williams",
      students: 245,
      rating: 4.8,
      status: "Published",
      createdAt: "Jan 15, 2025",
    },
    {
      id: 2,
      title: "Introduction to Physics",
      category: "Physics",
      instructor: "Prof. Michael Chen",
      students: 198,
      rating: 4.6,
      status: "Published",
      createdAt: "Feb 3, 2025",
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      category: "Chemistry",
      instructor: "Dr. Emily Davis",
      students: 176,
      rating: 4.7,
      status: "Published",
      createdAt: "Mar 12, 2025",
    },
    {
      id: 4,
      title: "Biology 101",
      category: "Biology",
      instructor: "Prof. James Wilson",
      students: 154,
      rating: 4.5,
      status: "Published",
      createdAt: "Feb 28, 2025",
    },
    {
      id: 5,
      title: "Computer Programming",
      category: "Computer Science",
      instructor: "Dr. Robert Taylor",
      students: 132,
      rating: 4.9,
      status: "Published",
      createdAt: "Apr 5, 2025",
    },
    {
      id: 6,
      title: "World History",
      category: "History",
      instructor: "Prof. Jennifer Martinez",
      students: 118,
      rating: 4.4,
      status: "Draft",
      createdAt: "May 1, 2025",
    },
    {
      id: 7,
      title: "English Literature",
      category: "Literature",
      instructor: "Dr. David Anderson",
      students: 0,
      rating: 0,
      status: "Draft",
      createdAt: "May 10, 2025",
    },
    {
      id: 8,
      title: "Environmental Science",
      category: "Science",
      instructor: "Prof. Lisa Johnson",
      students: 87,
      rating: 4.3,
      status: "Published",
      createdAt: "Mar 25, 2025",
    },
  ]

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Course Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Course
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/4">
          <CardHeader>
            <CardTitle>Course Statistics</CardTitle>
            <CardDescription>Overview of platform courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Courses</span>
                <span className="font-medium">187</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Published</span>
                <span className="font-medium">142</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Draft</span>
                <span className="font-medium">45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Mathematics</span>
                <span className="font-medium">32</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Science</span>
                <span className="font-medium">56</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Languages</span>
                <span className="font-medium">28</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Other</span>
                <span className="font-medium">71</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <TabsList>
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search courses..." className="w-full md:w-[200px] pl-8" />
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
                        <TableHead>Category</TableHead>
                        <TableHead>Instructor</TableHead>
                        <TableHead>Students</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {courses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell className="font-medium">{course.title}</TableCell>
                          <TableCell>{course.category}</TableCell>
                          <TableCell>{course.instructor}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3 text-muted-foreground" />
                              {course.students}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-amber-500" />
                              {course.rating > 0 ? course.rating : "N/A"}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                course.status === "Published"
                                  ? "success"
                                  : course.status === "Draft"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {course.status === "Published" && <Check className="mr-1 h-3 w-3" />}
                              {course.status === "Draft" && <BookOpen className="mr-1 h-3 w-3" />}
                              {course.status === "Archived" && <X className="mr-1 h-3 w-3" />}
                              {course.status}
                            </Badge>
                          </TableCell>
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
                                <DropdownMenuItem>View course</DropdownMenuItem>
                                <DropdownMenuItem>Edit course</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {course.status === "Draft" ? (
                                  <DropdownMenuItem>Publish</DropdownMenuItem>
                                ) : course.status === "Published" ? (
                                  <DropdownMenuItem>Unpublish</DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem>Restore</DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete course</DropdownMenuItem>
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

            <TabsContent value="published" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Check className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Published Courses</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage all published courses available to students.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="draft" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Draft Courses</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage courses that are still in development.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="archived" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <X className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Archived Courses</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage courses that have been archived and are no longer available.
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
