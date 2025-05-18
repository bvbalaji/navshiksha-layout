import { BookOpen, Calendar, FileEdit, MessageSquare, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function TeacherDashboardPage() {
  return (
    <div className="space-y-6">
        <span>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Dr. Sharma!</h1>
          <p className="text-muted-foreground">Here's an overview of your teaching activities and student progress.</p>
        </span>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 courses need updates</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Next class in 2 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-muted-foreground">Based on 87 reviews</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Student Progress</CardTitle>
            <CardDescription>Average progress across your courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Advanced Mathematics</div>
                  <div className="text-sm text-muted-foreground">75% avg. completion</div>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Physics for Engineering</div>
                  <div className="text-sm text-muted-foreground">62% avg. completion</div>
                </div>
                <Progress value={62} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Organic Chemistry</div>
                  <div className="text-sm text-muted-foreground">48% avg. completion</div>
                </div>
                <Progress value={48} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Introduction to Programming</div>
                  <div className="text-sm text-muted-foreground">85% avg. completion</div>
                </div>
                <Progress value={85} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Access your most used features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/teacher/create-content">
                <FileEdit className="mr-2 h-4 w-4" />
                Create New Content
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/teacher/my-pupils">
                <Users className="mr-2 h-4 w-4" />
                View Student List
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/teacher/create-courses">
                <BookOpen className="mr-2 h-4 w-4" />
                Manage Courses
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/teacher/feedback">
                <Star className="mr-2 h-4 w-4" />
                View Feedback
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <CardDescription>Your scheduled classes for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Advanced Mathematics</h4>
                <p className="text-sm text-muted-foreground">Today, 4:00 PM - 5:30 PM • 28 students</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Physics Lab</h4>
                <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM - 4:00 PM • 15 students</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Computer Science</h4>
                <p className="text-sm text-muted-foreground">Friday, 10:00 AM - 11:30 AM • 32 students</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Full Schedule
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Student Questions</CardTitle>
            <CardDescription>Questions that need your attention</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Calculus Integration Problem</h4>
                <p className="text-sm text-muted-foreground">From: Rahul Patel • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Newton's Laws Clarification</h4>
                <p className="text-sm text-muted-foreground">From: Priya Sharma • Yesterday</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Programming Assignment Help</h4>
                <p className="text-sm text-muted-foreground">From: Ananya Gupta • 2 days ago</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Questions
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
