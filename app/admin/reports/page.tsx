import { BarChart3, Download, FileText, Filter, LineChart, PieChart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
              <SelectItem value="alltime">All time</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search reports..." className="w-full md:w-[200px] pl-8" />
          </div>
        </div>
        <div className="flex gap-2 ml-auto">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Analytics</TabsTrigger>
          <TabsTrigger value="courses">Course Analytics</TabsTrigger>
          <TabsTrigger value="financial">Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">User Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+24.5%</div>
                <p className="text-xs text-muted-foreground mt-1">Compared to previous period</p>
                <div className="h-[80px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68.3%</div>
                <p className="text-xs text-muted-foreground mt-1">Average completion rate</p>
                <div className="h-[80px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <PieChart className="h-8 w-8 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Content Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.7 min</div>
                <p className="text-xs text-muted-foreground mt-1">Average time per session</p>
                <div className="h-[80px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-8 w-8 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+18.2%</div>
                <p className="text-xs text-muted-foreground mt-1">Compared to previous period</p>
                <div className="h-[80px] mt-4 flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-8 w-8 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>User Activity</CardTitle>
                <CardDescription>Daily active users over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <LineChart className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Course Popularity</CardTitle>
                <CardDescription>Most popular courses by enrollment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Recently generated system reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Monthly User Activity Report", date: "May 15, 2025", type: "PDF" },
                  { name: "Course Completion Analysis", date: "May 10, 2025", type: "Excel" },
                  { name: "Revenue Breakdown Q2", date: "May 5, 2025", type: "PDF" },
                  { name: "Content Engagement Metrics", date: "May 1, 2025", type: "Excel" },
                  { name: "Teacher Performance Review", date: "Apr 25, 2025", type: "PDF" },
                ].map((report, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{report.name}</p>
                      <p className="text-xs text-muted-foreground truncate">Generated on {report.date}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-3 w-3" />
                      {report.type}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center">
              <LineChart className="h-16 w-16 mx-auto text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">User Analytics</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                Detailed analytics on user registration, engagement, retention, and activity patterns.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Course Analytics</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                Detailed analytics on course enrollments, completion rates, and student performance.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardContent className="p-6 text-center">
              <PieChart className="h-16 w-16 mx-auto text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Financial Reports</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                Detailed reports on revenue, subscriptions, refunds, and financial projections.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
