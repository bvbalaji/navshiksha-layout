import { Award, BookOpen, Clock, Target } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MyProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Progress</h1>
        <p className="text-muted-foreground">Track your learning journey and achievements</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128.5</div>
            <p className="text-xs text-muted-foreground">+12.5 hrs this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Out of 8 enrolled courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+5% from last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 new this month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Course Progress</TabsTrigger>
          <TabsTrigger value="skills">Skills Progress</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        <TabsContent value="courses" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
              <CardDescription>Track your progress across all enrolled courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {courseProgress.map((course) => (
                <div key={course.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-muted-foreground">{course.subject}</p>
                    </div>
                    <div className="text-sm font-medium">{course.progress}%</div>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>
                      {course.completedModules} of {course.totalModules} modules completed
                    </span>
                    <span>{course.estimatedCompletion}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills Progress</CardTitle>
              <CardDescription>Track your progress in different skill areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillsProgress.map((skill) => (
                <div key={skill.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-sm font-medium">{skill.level}/10</div>
                  </div>
                  <Progress value={skill.level * 10} className="h-2" />
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="achievements" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={achievement.unlocked ? "" : "opacity-50"}>
                <CardHeader className="pb-2">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <achievement.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-center">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-muted-foreground">{achievement.description}</p>
                  <div className="mt-4 text-center text-sm font-medium">
                    {achievement.unlocked ? (
                      <span className="text-green-600">Unlocked on {achievement.unlockedDate}</span>
                    ) : (
                      <span className="text-muted-foreground">Not yet unlocked</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Learning Goals</CardTitle>
          <CardDescription>Track your progress towards your learning goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {learningGoals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
                <div className="text-sm font-medium">{goal.progress}%</div>
              </div>
              <Progress value={goal.progress} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Target: {goal.target}</span>
                <span>Deadline: {goal.deadline}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button>Download Progress Report</Button>
      </div>
    </div>
  )
}

const courseProgress = [
  {
    id: "1",
    title: "Advanced Mathematics",
    subject: "Mathematics",
    progress: 75,
    completedModules: 9,
    totalModules: 12,
    estimatedCompletion: "3 weeks left",
  },
  {
    id: "2",
    title: "Physics for Engineering",
    subject: "Physics",
    progress: 60,
    completedModules: 6,
    totalModules: 10,
    estimatedCompletion: "4 weeks left",
  },
  {
    id: "3",
    title: "Organic Chemistry",
    subject: "Chemistry",
    progress: 45,
    completedModules: 4,
    totalModules: 8,
    estimatedCompletion: "5 weeks left",
  },
  {
    id: "4",
    title: "Human Biology",
    subject: "Biology",
    progress: 30,
    completedModules: 4,
    totalModules: 14,
    estimatedCompletion: "10 weeks left",
  },
  {
    id: "5",
    title: "Introduction to Programming",
    subject: "Computer Science",
    progress: 90,
    completedModules: 14,
    totalModules: 16,
    estimatedCompletion: "1 week left",
  },
]

const skillsProgress = [
  {
    id: "1",
    name: "Problem Solving",
    level: 8,
    description: "Ability to analyze and solve complex problems",
  },
  {
    id: "2",
    name: "Critical Thinking",
    level: 7,
    description: "Ability to evaluate information objectively",
  },
  {
    id: "3",
    name: "Mathematical Reasoning",
    level: 9,
    description: "Ability to apply mathematical concepts to solve problems",
  },
  {
    id: "4",
    name: "Scientific Inquiry",
    level: 6,
    description: "Ability to formulate and test hypotheses",
  },
  {
    id: "5",
    name: "Programming",
    level: 8,
    description: "Ability to write and debug computer programs",
  },
]

const achievements = [
  {
    id: "1",
    title: "Fast Learner",
    description: "Complete 5 modules in a single day",
    icon: Clock,
    unlocked: true,
    unlockedDate: "May 10, 2023",
  },
  {
    id: "2",
    title: "Perfect Score",
    description: "Get 100% on any quiz or test",
    icon: Target,
    unlocked: true,
    unlockedDate: "June 5, 2023",
  },
  {
    id: "3",
    title: "Course Master",
    description: "Complete a course with an average score of 90% or higher",
    icon: Award,
    unlocked: true,
    unlockedDate: "July 15, 2023",
  },
  {
    id: "4",
    title: "Study Streak",
    description: "Study for 7 consecutive days",
    icon: Clock,
    unlocked: false,
  },
  {
    id: "5",
    title: "Knowledge Explorer",
    description: "Complete courses in 5 different subjects",
    icon: BookOpen,
    unlocked: false,
  },
  {
    id: "6",
    title: "Top Performer",
    description: "Rank in the top 10% of all students",
    icon: Award,
    unlocked: false,
  },
]

const learningGoals = [
  {
    id: "1",
    title: "Complete Advanced Mathematics Course",
    description: "Finish all modules with at least 85% score",
    progress: 75,
    target: "85% average score",
    deadline: "June 30, 2023",
  },
  {
    id: "2",
    title: "Master Calculus Concepts",
    description: "Complete all calculus exercises and practice problems",
    progress: 60,
    target: "Complete 100 practice problems",
    deadline: "July 15, 2023",
  },
  {
    id: "3",
    title: "Build a Programming Portfolio",
    description: "Create 5 programming projects to showcase skills",
    progress: 40,
    target: "5 completed projects",
    deadline: "August 31, 2023",
  },
]
