import { Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyCoursesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Courses</h1>
        <p className="text-muted-foreground">Manage and track your enrolled courses</p>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Courses</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.progress > 0 && course.progress < 100)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.progress === 100)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Course {
  id: string
  title: string
  subject: string
  instructor: string
  duration: string
  rating: number
  progress: number
  image: string
}

function CourseCard({ course }: { course: Course }) {
  return (
    <Card>
      <div className="aspect-video w-full overflow-hidden rounded-t-lg">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {course.subject}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
            {course.rating}
          </div>
        </div>
        <CardTitle className="line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="line-clamp-1">Instructor: {course.instructor}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          {course.duration}
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue Learning</Button>
      </CardFooter>
    </Card>
  )
}

const courses: Course[] = [
  {
    id: "1",
    title: "Advanced Mathematics",
    subject: "Mathematics",
    instructor: "Dr. Priya Sharma",
    duration: "12 weeks",
    rating: 4.8,
    progress: 75,
    image: "/abstract-mathematics.png",
  },
  {
    id: "2",
    title: "Physics for Engineering",
    subject: "Physics",
    instructor: "Prof. Rajesh Kumar",
    duration: "10 weeks",
    rating: 4.6,
    progress: 60,
    image: "/physics-concepts.png",
  },
  {
    id: "3",
    title: "Organic Chemistry",
    subject: "Chemistry",
    instructor: "Dr. Ananya Gupta",
    duration: "8 weeks",
    rating: 4.5,
    progress: 45,
    image: "/chemistry-lab-setup.png",
  },
  {
    id: "4",
    title: "Human Biology",
    subject: "Biology",
    instructor: "Dr. Vikram Singh",
    duration: "14 weeks",
    rating: 4.7,
    progress: 30,
    image: "/biology-concepts.png",
  },
  {
    id: "5",
    title: "Introduction to Programming",
    subject: "Computer Science",
    instructor: "Prof. Neha Verma",
    duration: "16 weeks",
    rating: 4.9,
    progress: 90,
    image: "/programming-concept.png",
  },
  {
    id: "6",
    title: "English Literature",
    subject: "English",
    instructor: "Dr. Arun Joshi",
    duration: "12 weeks",
    rating: 4.4,
    progress: 100,
    image: "/open-book-stacks.png",
  },
]
