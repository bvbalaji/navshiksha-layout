import { BarChart3, BookOpen, CheckCircle, Clock, DollarSign, FileText, TrendingUp, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboardPage() {
  return (
    <div className="h-full p-6 space-y-6">  
        <span>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Last updated: May 18, 2025, 11:30 AM
          </div>
        </span>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,845</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+5.2%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Content Pieces</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,428</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+18.3%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹42,580</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-emerald-500" />
              <span className="text-emerald-500">+8.7%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Platform Activity</CardTitle>
                <CardDescription>User engagement over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>User Distribution</CardTitle>
                <CardDescription>Breakdown by user type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                      <div className="flex-1">Students</div>
                      <div className="font-medium">2,156</div>
                      <div className="text-muted-foreground text-xs">75.8%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                      <div className="flex-1">Teachers</div>
                      <div className="font-medium">412</div>
                      <div className="text-muted-foreground text-xs">14.5%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <div className="flex-1">Parents</div>
                      <div className="font-medium">245</div>
                      <div className="text-muted-foreground text-xs">8.6%</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <div className="flex-1">Admins</div>
                      <div className="font-medium">32</div>
                      <div className="text-muted-foreground text-xs">1.1%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Recent Signups</CardTitle>
                <CardDescription>New users in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">User #{i}</p>
                        <p className="text-xs text-muted-foreground truncate">user{i}@navshiksha.com</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {i} day{i !== 1 ? "s" : ""} ago
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular Courses</CardTitle>
                <CardDescription>Most enrolled courses this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Advanced Mathematics", enrollments: 245 },
                    { name: "Introduction to Physics", enrollments: 198 },
                    { name: "Chemistry Fundamentals", enrollments: 176 },
                    { name: "Biology 101", enrollments: 154 },
                    { name: "Computer Programming", enrollments: 132 },
                  ].map((course, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{course.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{course.enrollments} enrollments</p>
                      </div>
                      <div className="text-xs font-medium text-emerald-500">#{i + 1}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Current platform health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "API Services", status: "Operational" },
                    { name: "Database", status: "Operational" },
                    { name: "Storage", status: "Operational" },
                    { name: "Authentication", status: "Operational" },
                    { name: "Payment Processing", status: "Operational" },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{service.name}</p>
                        <p className="text-xs text-emerald-500 truncate">{service.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
              Detailed analytics and reporting tools to track platform performance, user engagement, and revenue
              metrics.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium">Reports Center</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
              Generate and schedule custom reports on user activity, course performance, and financial metrics.
            </p>
          </div>
        </TabsContent>
        <TabsContent
          value="notifications"
          className="h-[400px] flex items-center justify-center bg-muted/20 rounded-md"
        >
          <div className="text-center">
            <Clock className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h3 className="mt-4 text-lg font-medium">System Notifications</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
              View and manage system alerts, maintenance schedules, and important platform updates.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
