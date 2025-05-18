import Link from "next/link"
import {
  Archive,
  Database,
  HardDrive,
  History,
  LayoutGrid,
  RefreshCw,
  ScrollText,
  Server,
  Settings,
  Trash2,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MaintenancePage() {
  const maintenanceTasks = [
    {
      title: "Database Management",
      description: "Backup, restore, and optimize database",
      icon: Database,
      href: "/admin/maintenance/database",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Archiving",
      description: "Archive old content, courses, and user data",
      icon: Archive,
      href: "/admin/maintenance/archiving",
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "System Logs",
      description: "View and analyze system logs",
      icon: ScrollText,
      href: "/admin/maintenance/logs",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Cache Management",
      description: "Clear and manage system caches",
      icon: RefreshCw,
      href: "/admin/maintenance/cache",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Storage Management",
      description: "Manage file storage and cleanup",
      icon: HardDrive,
      href: "/admin/maintenance/storage",
      color: "bg-rose-100 text-rose-700",
    },
    {
      title: "Scheduled Tasks",
      description: "Manage and monitor cron jobs",
      icon: History,
      href: "/admin/maintenance/scheduled-tasks",
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "System Health",
      description: "Monitor system health and performance",
      icon: Zap,
      href: "/admin/maintenance/health",
      color: "bg-teal-100 text-teal-700",
    },
    {
      title: "Cleanup Tools",
      description: "Clean up temporary files and data",
      icon: Trash2,
      href: "/admin/maintenance/cleanup",
      color: "bg-red-100 text-red-700",
    },
  ]

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Platform Maintenance</h1>
          <p className="text-muted-foreground">Manage and maintain your platform's infrastructure</p>
        </div>
        <Button>
          <Server className="mr-2 h-4 w-4" />
          Run System Check
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {maintenanceTasks.map((task) => (
          <Link href={task.href} key={task.title}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${task.color}`}>
                  <task.icon className="h-6 w-6" />
                </div>
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>{task.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>Current system health and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Server Load</span>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <span className="text-sm text-green-600">25%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Memory Usage</span>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <span className="text-sm text-green-600">40%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Disk Usage</span>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-sm text-yellow-600">65%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Database Size</span>
                <div className="flex items-center">
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                  <span className="text-sm text-green-600">35%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              <LayoutGrid className="mr-2 h-4 w-4" />
              View Detailed Metrics
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Maintenance Schedule</CardTitle>
            <CardDescription>Upcoming scheduled maintenance tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-medium">Database Backup</p>
                <p className="text-xs text-muted-foreground">Daily at 2:00 AM</p>
                <p className="text-xs text-green-600">Last run: 8 hours ago</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-1">
                <p className="text-sm font-medium">Log Rotation</p>
                <p className="text-xs text-muted-foreground">Weekly on Sunday at 1:00 AM</p>
                <p className="text-xs text-green-600">Last run: 2 days ago</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 py-1">
                <p className="text-sm font-medium">Cache Cleanup</p>
                <p className="text-xs text-muted-foreground">Daily at 3:00 AM</p>
                <p className="text-xs text-green-600">Last run: 8 hours ago</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-1">
                <p className="text-sm font-medium">System Update</p>
                <p className="text-xs text-muted-foreground">Scheduled for May 25, 2025 at 1:00 AM</p>
                <p className="text-xs text-amber-600">Upcoming</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Manage Schedule
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
