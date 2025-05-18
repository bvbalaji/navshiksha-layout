import { BookOpen, Calendar, Clock, LineChart, MessageSquare, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="space-y-6">     
      <span className="items-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Rahul!</h1>
        <p className=" gap-4 text-muted-foreground">Here's an overview of your learning progress and upcoming classes.</p>
      </span>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 courses in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next class in 2 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 hrs</div>
            <p className="text-xs text-muted-foreground">+2.5 hrs from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Your progress across all active courses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Mathematics</div>
                  <div className="text-sm text-muted-foreground">75%</div>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Physics</div>
                  <div className="text-sm text-muted-foreground">60%</div>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Chemistry</div>
                  <div className="text-sm text-muted-foreground">45%</div>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Biology</div>
                  <div className="text-sm text-muted-foreground">30%</div>
                </div>
                <Progress value={30} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Computer Science</div>
                  <div className="text-sm text-muted-foreground">90%</div>
                </div>
                <Progress value={90} className="h-2" />
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
              <a href="/student/personal-tutor">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with Tutor
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/student/upcoming-classes">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Class
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/student/my-progress">
                <LineChart className="mr-2 h-4 w-4" />
                View Progress
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="/student/feedback">
                <Star className="mr-2 h-4 w-4" />
                Give Feedback
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
                <p className="text-sm text-muted-foreground">Today, 4:00 PM - 5:30 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Physics Lab</h4>
                <p className="text-sm text-muted-foreground">Tomorrow, 2:00 PM - 4:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Computer Science</h4>
                <p className="text-sm text-muted-foreground">Friday, 10:00 AM - 11:30 AM</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <a href="/student/upcoming-classes">View All Classes</a>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your recent learning activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Completed Algebra Quiz</h4>
                <p className="text-sm text-muted-foreground">Score: 85% • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Tutor Session</h4>
                <p className="text-sm text-muted-foreground">Physics concepts • Yesterday</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Watched Chemistry Lecture</h4>
                <p className="text-sm text-muted-foreground">Organic Chemistry • 2 days ago</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Activities
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
