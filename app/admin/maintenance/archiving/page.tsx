import { Archive, ArrowDownToLine, Calendar, Check, Filter, Save, Search, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ArchivingPage() {
  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Archiving</h1>
          <p className="text-muted-foreground">Archive old content, courses, and user data</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button>
            <Archive className="mr-2 h-4 w-4" />
            Run Archiving
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Content Archiving</CardTitle>
                <CardDescription>Archive old or unused content</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search content..." className="w-[200px] sm:w-[300px] pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <div className="flex items-center space-x-2">
                        <Switch id="select-all" />
                      </div>
                    </TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Last Modified</TableHead>
                    <TableHead>Last Accessed</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <TableRow key={item}>
                      <TableCell>
                        <Switch id={`select-${item}`} />
                      </TableCell>
                      <TableCell className="font-medium">Introduction to Physics</TableCell>
                      <TableCell>
                        <Badge variant="outline">Document</Badge>
                      </TableCell>
                      <TableCell>Jan 15, 2024</TableCell>
                      <TableCell>Mar 10, 2024</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Inactive</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Archive className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 24 items</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Archive className="mr-2 h-4 w-4" />
                  Archive Selected
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archiving Criteria</CardTitle>
              <CardDescription>Set criteria for automatic content archiving</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="inactive-period">Inactive Period (days)</Label>
                <Input id="inactive-period" type="number" defaultValue="180" />
                <p className="text-sm text-muted-foreground">
                  Content not accessed for this many days will be marked for archiving
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content-types">Content Types to Archive</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="content-types">
                    <SelectValue placeholder="Select content types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Content Types</SelectItem>
                    <SelectItem value="documents">Documents Only</SelectItem>
                    <SelectItem value="media">Media Files Only</SelectItem>
                    <SelectItem value="quizzes">Quizzes Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="exclude-important">Exclude Important Content</Label>
                  <p className="text-sm text-muted-foreground">Skip content marked as important</p>
                </div>
                <Switch id="exclude-important" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Apply Criteria
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Course Archiving</CardTitle>
                <CardDescription>Archive old or inactive courses</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search courses..." className="w-[200px] sm:w-[300px] pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <div className="flex items-center space-x-2">
                        <Switch id="select-all-courses" />
                      </div>
                    </TableHead>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Instructor</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Enrollments</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <TableRow key={item}>
                      <TableCell>
                        <Switch id={`select-course-${item}`} />
                      </TableCell>
                      <TableCell className="font-medium">Advanced Mathematics</TableCell>
                      <TableCell>Dr. Smith</TableCell>
                      <TableCell>Dec 10, 2023</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Inactive</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Archive className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 18 courses</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Archive className="mr-2 h-4 w-4" />
                  Archive Selected
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course Archiving Criteria</CardTitle>
              <CardDescription>Set criteria for automatic course archiving</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course-inactive-period">Inactive Period (months)</Label>
                <Input id="course-inactive-period" type="number" defaultValue="6" />
                <p className="text-sm text-muted-foreground">
                  Courses not active for this many months will be marked for archiving
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="enrollment-threshold">Enrollment Threshold</Label>
                <Input id="enrollment-threshold" type="number" defaultValue="5" />
                <p className="text-sm text-muted-foreground">
                  Courses with fewer enrollments than this will be considered for archiving
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="exclude-featured">Exclude Featured Courses</Label>
                  <p className="text-sm text-muted-foreground">Skip courses marked as featured</p>
                </div>
                <Switch id="exclude-featured" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Apply Criteria
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>User Archiving</CardTitle>
                <CardDescription>Archive inactive user accounts</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search users..." className="w-[200px] sm:w-[300px] pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <div className="flex items-center space-x-2">
                        <Switch id="select-all-users" />
                      </div>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <TableRow key={item}>
                      <TableCell>
                        <Switch id={`select-user-${item}`} />
                      </TableCell>
                      <TableCell className="font-medium">John Doe</TableCell>
                      <TableCell>john.doe@navshiksha.com</TableCell>
                      <TableCell>Student</TableCell>
                      <TableCell>Nov 5, 2023</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Inactive</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Archive className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">Showing 5 of 42 users</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Archive className="mr-2 h-4 w-4" />
                  Archive Selected
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Selected
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Archiving Criteria</CardTitle>
              <CardDescription>Set criteria for automatic user archiving</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="user-inactive-period">Inactive Period (months)</Label>
                <Input id="user-inactive-period" type="number" defaultValue="12" />
                <p className="text-sm text-muted-foreground">
                  Users not logged in for this many months will be marked for archiving
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-roles">User Roles to Archive</Label>
                <Select defaultValue="students">
                  <SelectTrigger id="user-roles">
                    <SelectValue placeholder="Select user roles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="students">Students Only</SelectItem>
                    <SelectItem value="teachers">Teachers Only</SelectItem>
                    <SelectItem value="custom">Custom Selection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="exclude-admins">Exclude Administrators</Label>
                  <p className="text-sm text-muted-foreground">Never archive administrator accounts</p>
                </div>
                <Switch id="exclude-admins" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notify-users">Notify Users Before Archiving</Label>
                  <p className="text-sm text-muted-foreground">Send email notification before archiving accounts</p>
                </div>
                <Switch id="notify-users" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Check className="mr-2 h-4 w-4" />
                Apply Criteria
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Archiving Settings</CardTitle>
              <CardDescription>Configure global archiving settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="archive-storage">Archive Storage Location</Label>
                <Select defaultValue="local">
                  <SelectTrigger id="archive-storage">
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local Storage</SelectItem>
                    <SelectItem value="s3">Amazon S3</SelectItem>
                    <SelectItem value="gcs">Google Cloud Storage</SelectItem>
                    <SelectItem value="azure">Azure Blob Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="archive-retention">Archive Retention Period (months)</Label>
                <Input id="archive-retention" type="number" defaultValue="24" />
                <p className="text-sm text-muted-foreground">
                  How long to keep archived data before permanent deletion
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="schedule-archiving">Schedule Automatic Archiving</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger id="schedule-archiving">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="never">Never (Manual Only)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compress-archives">Compress Archives</Label>
                  <p className="text-sm text-muted-foreground">Compress archived data to save storage space</p>
                </div>
                <Switch id="compress-archives" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="encrypt-archives">Encrypt Archives</Label>
                  <p className="text-sm text-muted-foreground">Encrypt archived data for security</p>
                </div>
                <Switch id="encrypt-archives" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="admin-notifications">Admin Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Send email notifications to admins about archiving activities
                  </p>
                </div>
                <Switch id="admin-notifications" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <ArrowDownToLine className="mr-2 h-4 w-4" />
                Export Archive Settings
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archiving Schedule</CardTitle>
              <CardDescription>View and manage scheduled archiving tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Content Archiving</h3>
                    <p className="text-sm text-muted-foreground">Monthly on the 1st at 2:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Switch id="content-schedule" defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Course Archiving</h3>
                    <p className="text-sm text-muted-foreground">Quarterly on the 1st at 3:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Switch id="course-schedule" defaultChecked />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">User Archiving</h3>
                    <p className="text-sm text-muted-foreground">Quarterly on the 15th at 4:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Switch id="user-schedule" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
