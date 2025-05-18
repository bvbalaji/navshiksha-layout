import { Calendar, ChevronLeft, ChevronRight, Clock, User, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UpcomingClassesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Upcoming Classes</h1>
        <p className="text-muted-foreground">View and manage your scheduled classes</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous week</span>
          </Button>
          <h2 className="text-lg font-semibold">May 13 - May 19, 2023</h2>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next week</span>
          </Button>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule New Class
        </Button>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="all">All Classes</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="mt-6 space-y-6">
          <div className="space-y-2">
            <h3 className="font-medium">Today - May 17, 2023</h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {todayClasses.map((classItem) => (
                    <ClassItem key={classItem.id} classItem={classItem} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Tomorrow - May 18, 2023</h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {tomorrowClasses.map((classItem) => (
                    <ClassItem key={classItem.id} classItem={classItem} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Friday - May 19, 2023</h3>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {fridayClasses.map((classItem) => (
                    <ClassItem key={classItem.id} classItem={classItem} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="past" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Past Classes</CardTitle>
              <CardDescription>View your completed classes and access recordings</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {pastClasses.map((classItem) => (
                  <div key={classItem.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Video className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{classItem.title}</h4>
                        <div className="flex items-center gap-4">
                          <p className="text-sm text-muted-foreground">
                            <Calendar className="mr-1 inline-block h-3 w-3" />
                            {classItem.date}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <Clock className="mr-1 inline-block h-3 w-3" />
                            {classItem.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <User className="mr-1 inline-block h-3 w-3" />
                            {classItem.instructor}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Recording
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Scheduled Classes</CardTitle>
              <CardDescription>View all your past and upcoming classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...todayClasses, ...tomorrowClasses, ...fridayClasses, ...pastClasses]
                  .sort((a, b) => new Date(b.dateObj).getTime() - new Date(a.dateObj).getTime())
                  .map((classItem) => (
                    <div key={classItem.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Video className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{classItem.title}</h4>
                          <div className="flex items-center gap-4">
                            <p className="text-sm text-muted-foreground">
                              <Calendar className="mr-1 inline-block h-3 w-3" />
                              {classItem.date}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <Clock className="mr-1 inline-block h-3 w-3" />
                              {classItem.time}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              <User className="mr-1 inline-block h-3 w-3" />
                              {classItem.instructor}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {new Date(classItem.dateObj) < new Date() ? "View Recording" : "Join Class"}
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Class Schedule</CardTitle>
          <CardDescription>Your regular weekly class schedule</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day} className="text-center font-medium">
                {day}
              </div>
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <Card key={i} className="min-h-[120px] p-2">
                <div className="text-xs text-muted-foreground">
                  {i === 0 && (
                    <>
                      <div className="mb-1 rounded bg-primary/10 p-1">
                        <p className="font-medium">Mathematics</p>
                        <p>4:00 PM - 5:30 PM</p>
                      </div>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <div className="mb-1 rounded bg-primary/10 p-1">
                        <p className="font-medium">Physics</p>
                        <p>2:00 PM - 4:00 PM</p>
                      </div>
                    </>
                  )}
                  {i === 4 && (
                    <>
                      <div className="mb-1 rounded bg-primary/10 p-1">
                        <p className="font-medium">Computer Science</p>
                        <p>10:00 AM - 11:30 AM</p>
                      </div>
                    </>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Export Schedule
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

interface ClassItem {
  id: string
  title: string
  date: string
  dateObj: string
  time: string
  duration: string
  instructor: string
  subject: string
  type: "one-on-one" | "group" | "lecture"
}

function ClassItem({ classItem }: { classItem: ClassItem }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Video className="h-6 w-6 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{classItem.title}</h4>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {classItem.type === "one-on-one" ? "1-on-1" : classItem.type === "group" ? "Group" : "Lecture"}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              <Clock className="mr-1 inline-block h-3 w-3" />
              {classItem.time} ({classItem.duration})
            </p>
            <p className="text-sm text-muted-foreground">
              <User className="mr-1 inline-block h-3 w-3" />
              {classItem.instructor}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Reschedule
        </Button>
        <Button size="sm">Join Class</Button>
      </div>
    </div>
  )
}

const todayClasses: ClassItem[] = [
  {
    id: "1",
    title: "Advanced Mathematics",
    date: "May 17, 2023",
    dateObj: "2023-05-17",
    time: "4:00 PM - 5:30 PM",
    duration: "1.5 hours",
    instructor: "Dr. Priya Sharma",
    subject: "Mathematics",
    type: "lecture",
  },
  {
    id: "2",
    title: "Calculus Problem Solving",
    date: "May 17, 2023",
    dateObj: "2023-05-17",
    time: "6:00 PM - 7:00 PM",
    duration: "1 hour",
    instructor: "Dr. Priya Sharma",
    subject: "Mathematics",
    type: "one-on-one",
  },
]

const tomorrowClasses: ClassItem[] = [
  {
    id: "3",
    title: "Physics Lab",
    date: "May 18, 2023",
    dateObj: "2023-05-18",
    time: "2:00 PM - 4:00 PM",
    duration: "2 hours",
    instructor: "Prof. Rajesh Kumar",
    subject: "Physics",
    type: "group",
  },
]

const fridayClasses: ClassItem[] = [
  {
    id: "4",
    title: "Computer Science",
    date: "May 19, 2023",
    dateObj: "2023-05-19",
    time: "10:00 AM - 11:30 AM",
    duration: "1.5 hours",
    instructor: "Prof. Neha Verma",
    subject: "Computer Science",
    type: "lecture",
  },
  {
    id: "5",
    title: "Programming Practice",
    date: "May 19, 2023",
    dateObj: "2023-05-19",
    time: "2:00 PM - 3:30 PM",
    duration: "1.5 hours",
    instructor: "Prof. Neha Verma",
    subject: "Computer Science",
    type: "group",
  },
]

const pastClasses: ClassItem[] = [
  {
    id: "6",
    title: "Organic Chemistry",
    date: "May 15, 2023",
    dateObj: "2023-05-15",
    time: "11:00 AM - 12:30 PM",
    duration: "1.5 hours",
    instructor: "Dr. Ananya Gupta",
    subject: "Chemistry",
    type: "lecture",
  },
  {
    id: "7",
    title: "Biology Lab",
    date: "May 12, 2023",
    dateObj: "2023-05-12",
    time: "2:00 PM - 4:00 PM",
    duration: "2 hours",
    instructor: "Dr. Vikram Singh",
    subject: "Biology",
    type: "group",
  },
  {
    id: "8",
    title: "English Literature",
    date: "May 10, 2023",
    dateObj: "2023-05-10",
    time: "10:00 AM - 11:30 AM",
    duration: "1.5 hours",
    instructor: "Dr. Arun Joshi",
    subject: "English",
    type: "lecture",
  },
]
