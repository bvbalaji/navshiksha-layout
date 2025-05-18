"use client"

import { useState } from "react"
import { Calendar, Clock, Download, LineChart, Mail, MessageSquare, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyPupilsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Pupils</h1>
        <p className="text-muted-foreground">Manage and track your students' progress</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Email All
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <User className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Students</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="at-risk">At Risk</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student List</CardTitle>
              <CardDescription>
                {filteredStudents.length} {filteredStudents.length === 1 ? "student" : "students"} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="rounded-lg border p-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <User className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                            <span>{student.email}</span>
                            <span className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              Joined {student.joinDate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">
                          <LineChart className="mr-2 h-4 w-4" />
                          Progress
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button size="sm">View Profile</Button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span>Overall Progress</span>
                        <span className="font-medium">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="rounded-md bg-muted p-2">
                        <div className="text-xs text-muted-foreground">Enrolled Courses</div>
                        <div className="text-sm font-medium">{student.enrolledCourses}</div>
                      </div>
                      <div className="rounded-md bg-muted p-2">
                        <div className="text-xs text-muted-foreground">Completed Courses</div>
                        <div className="text-sm font-medium">{student.completedCourses}</div>
                      </div>
                      <div className="rounded-md bg-muted p-2">
                        <div className="text-xs text-muted-foreground">Average Score</div>
                        <div className="text-sm font-medium">{student.averageScore}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {filteredStudents.length} of {students.length} students
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
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Students</CardTitle>
              <CardDescription>Students who are actively engaged in your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredStudents
                  .filter((student) => student.status === "active")
                  .map((student) => (
                    <div key={student.id} className="rounded-lg border p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{student.name}</h3>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                              <span>{student.email}</span>
                              <span className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3" />
                                Last active: {student.lastActive}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <LineChart className="mr-2 h-4 w-4" />
                            Progress
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                          <Button size="sm">View Profile</Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span>Overall Progress</span>
                          <span className="font-medium">{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="at-risk" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>At-Risk Students</CardTitle>
              <CardDescription>Students who may need additional support</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredStudents
                  .filter((student) => student.status === "at-risk")
                  .map((student) => (
                    <div key={student.id} className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                            <User className="h-6 w-6 text-yellow-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{student.name}</h3>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                              <span>{student.email}</span>
                              <span className="flex items-center text-yellow-600">
                                <Clock className="mr-1 h-3 w-3" />
                                Inactive for {student.inactiveDays} days
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <LineChart className="mr-2 h-4 w-4" />
                            Progress
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                          <Button size="sm">View Profile</Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span>Overall Progress</span>
                          <span className="font-medium">{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} className="h-2" />
                      </div>
                      <div className="mt-2 text-sm text-yellow-600">
                        <p>Risk factors: Low engagement, missed assignments, poor quiz scores</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inactive Students</CardTitle>
              <CardDescription>Students who haven't been active recently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredStudents
                  .filter((student) => student.status === "inactive")
                  .map((student) => (
                    <div key={student.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                            <User className="h-6 w-6 text-gray-500" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{student.name}</h3>
                            <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                              <span>{student.email}</span>
                              <span className="flex items-center text-gray-500">
                                <Clock className="mr-1 h-3 w-3" />
                                Last active: {student.lastActive}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            <Mail className="mr-2 h-4 w-4" />
                            Send Reminder
                          </Button>
                          <Button size="sm">View Profile</Button>
                        </div>
                      </div>
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

const students = [
  {
    id: "1",
    name: "Rahul Patel",
    email: "rahul.patel@navshiksha.com",
    joinDate: "Jan 15, 2023",
    lastActive: "Today",
    status: "active",
    progress: 75,
    enrolledCourses: 5,
    completedCourses: 2,
    averageScore: 85,
    inactiveDays: 0,
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@navshiksha.com",
    joinDate: "Feb 3, 2023",
    lastActive: "Yesterday",
    status: "active",
    progress: 82,
    enrolledCourses: 4,
    completedCourses: 3,
    averageScore: 92,
    inactiveDays: 0,
  },
  {
    id: "3",
    name: "Ananya Gupta",
    email: "ananya.gupta@navshiksha.com",
    joinDate: "Mar 12, 2023",
    lastActive: "3 days ago",
    status: "at-risk",
    progress: 45,
    enrolledCourses: 3,
    completedCourses: 1,
    averageScore: 68,
    inactiveDays: 3,
  },
  {
    id: "4",
    name: "Vikram Singh",
    email: "vikram.singh@navshiksha.com",
    joinDate: "Dec 5, 2022",
    lastActive: "Today",
    status: "active",
    progress: 90,
    enrolledCourses: 6,
    completedCourses: 5,
    averageScore: 94,
    inactiveDays: 0,
  },
  {
    id: "5",
    name: "Neha Verma",
    email: "neha.verma@navshiksha.com",
    joinDate: "Apr 20, 2023",
    lastActive: "2 weeks ago",
    status: "inactive",
    progress: 30,
    enrolledCourses: 2,
    completedCourses: 0,
    averageScore: 55,
    inactiveDays: 14,
  },
  {
    id: "6",
    name: "Arun Joshi",
    email: "arun.joshi@navshiksha.com",
    joinDate: "Feb 28, 2023",
    lastActive: "5 days ago",
    status: "at-risk",
    progress: 50,
    enrolledCourses: 4,
    completedCourses: 1,
    averageScore: 72,
    inactiveDays: 5,
  },
  {
    id: "7",
    name: "Kavita Reddy",
    email: "kavita.reddy@navshiksha.com",
    joinDate: "Jan 10, 2023",
    lastActive: "1 month ago",
    status: "inactive",
    progress: 20,
    enrolledCourses: 3,
    completedCourses: 0,
    averageScore: 45,
    inactiveDays: 30,
  },
]
