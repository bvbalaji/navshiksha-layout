import { Check, Filter, MoreHorizontal, Plus, Search, Shield, User, UserCog, X } from "lucide-react"

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

export default function UsersPage() {
  // Sample user data
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@navshiksha.com",
      role: "Student",
      status: "Active",
      joinDate: "May 12, 2025",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@navshiksha.com",
      role: "Teacher",
      status: "Active",
      joinDate: "Apr 28, 2025",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@navshiksha.com",
      role: "Student",
      status: "Inactive",
      joinDate: "Mar 15, 2025",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@navshiksha.com",
      role: "Teacher",
      status: "Active",
      joinDate: "May 5, 2025",
    },
    {
      id: 5,
      name: "James Wilson",
      email: "james@navshiksha.com",
      role: "Student",
      status: "Active",
      joinDate: "Apr 10, 2025",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      email: "lisa@navshiksha.com",
      role: "Admin",
      status: "Active",
      joinDate: "Jan 22, 2025",
    },
    {
      id: 7,
      name: "Robert Taylor",
      email: "robert@navshiksha.com",
      role: "Student",
      status: "Suspended",
      joinDate: "Feb 18, 2025",
    },
    {
      id: 8,
      name: "Jennifer Martinez",
      email: "jennifer@navshiksha.com",
      role: "Teacher",
      status: "Active",
      joinDate: "Mar 30, 2025",
    },
  ]

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/4">
          <CardHeader>
            <CardTitle>User Statistics</CardTitle>
            <CardDescription>Overview of user accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Users</span>
                <span className="font-medium">2,845</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Students</span>
                <span className="font-medium">2,156</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Teachers</span>
                <span className="font-medium">412</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Parents</span>
                <span className="font-medium">245</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Admins</span>
                <span className="font-medium">32</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Users</span>
                <span className="font-medium">2,634</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Inactive Users</span>
                <span className="font-medium">211</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <TabsList>
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="teachers">Teachers</TabsTrigger>
                <TabsTrigger value="admins">Admins</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search users..." className="w-full md:w-[200px] pl-8" />
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
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Join Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.role === "Admin" ? "default" : user.role === "Teacher" ? "secondary" : "outline"
                              }
                            >
                              {user.role === "Admin" && <Shield className="mr-1 h-3 w-3" />}
                              {user.role === "Teacher" && <UserCog className="mr-1 h-3 w-3" />}
                              {user.role === "Student" && <User className="mr-1 h-3 w-3" />}
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                user.status === "Active"
                                  ? "success"
                                  : user.status === "Inactive"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {user.status === "Active" && <Check className="mr-1 h-3 w-3" />}
                              {user.status === "Inactive" && <X className="mr-1 h-3 w-3" />}
                              {user.status === "Suspended" && <X className="mr-1 h-3 w-3" />}
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.joinDate}</TableCell>
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
                                <DropdownMenuItem>View profile</DropdownMenuItem>
                                <DropdownMenuItem>Edit user</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Reset password</DropdownMenuItem>
                                {user.status === "Active" ? (
                                  <DropdownMenuItem>Deactivate user</DropdownMenuItem>
                                ) : (
                                  <DropdownMenuItem>Activate user</DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete user</DropdownMenuItem>
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

            <TabsContent value="students" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <User className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Student Management</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage student accounts, enrollments, and progress tracking.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="teachers" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <UserCog className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Teacher Management</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage teacher accounts, course assignments, and performance metrics.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admins" className="space-y-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Shield className="h-16 w-16 mx-auto text-muted-foreground/50" />
                  <h3 className="mt-4 text-lg font-medium">Admin Management</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2">
                    View and manage administrator accounts and permission levels.
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
