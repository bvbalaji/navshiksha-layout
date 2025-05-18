import { Database, Download, HardDrive, RefreshCw, Save, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DatabaseManagementPage() {
  const backups = [
    {
      id: "backup-001",
      name: "Full Backup",
      date: "May 18, 2025",
      time: "02:00 AM",
      size: "1.2 GB",
      status: "Completed",
    },
    {
      id: "backup-002",
      name: "Full Backup",
      date: "May 17, 2025",
      time: "02:00 AM",
      size: "1.18 GB",
      status: "Completed",
    },
    {
      id: "backup-003",
      name: "Full Backup",
      date: "May 16, 2025",
      time: "02:00 AM",
      size: "1.15 GB",
      status: "Completed",
    },
    {
      id: "backup-004",
      name: "Manual Backup",
      date: "May 15, 2025",
      time: "11:45 AM",
      size: "1.14 GB",
      status: "Completed",
    },
    {
      id: "backup-005",
      name: "Full Backup",
      date: "May 15, 2025",
      time: "02:00 AM",
      size: "1.12 GB",
      status: "Completed",
    },
  ]

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Database Management</h1>
          <p className="text-muted-foreground">Backup, restore, and optimize your database</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button>
            <Database className="mr-2 h-4 w-4" />
            Create Backup Now
          </Button>
        </div>
      </div>

      <Tabs defaultValue="backups" className="space-y-4">
        <TabsList>
          <TabsTrigger value="backups">Backups</TabsTrigger>
          <TabsTrigger value="restore">Restore</TabsTrigger>
          <TabsTrigger value="optimize">Optimize</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="backups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Backup History</CardTitle>
              <CardDescription>View and manage database backups</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {backups.map((backup) => (
                    <TableRow key={backup.id}>
                      <TableCell className="font-medium">{backup.name}</TableCell>
                      <TableCell>{backup.date}</TableCell>
                      <TableCell>{backup.time}</TableCell>
                      <TableCell>{backup.size}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                          {backup.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Backup Storage</CardTitle>
                <CardDescription>Storage usage for database backups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Storage Used</span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      <span className="text-sm">5.8 GB / 12.8 GB</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Total Backups</p>
                      <p className="text-2xl font-bold">15</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">Retention Period</p>
                      <p className="text-2xl font-bold">30 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  <HardDrive className="mr-2 h-4 w-4" />
                  Manage Storage
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backup Schedule</CardTitle>
                <CardDescription>Configure automated backup schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-backup">Automated Backups</Label>
                      <p className="text-sm text-muted-foreground">Run backups on a schedule</p>
                    </div>
                    <Switch id="auto-backup" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger id="backup-frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="backup-time">Backup Time</Label>
                    <Select defaultValue="2am">
                      <SelectTrigger id="backup-time">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12am">12:00 AM</SelectItem>
                        <SelectItem value="1am">1:00 AM</SelectItem>
                        <SelectItem value="2am">2:00 AM</SelectItem>
                        <SelectItem value="3am">3:00 AM</SelectItem>
                        <SelectItem value="4am">4:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save Schedule
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="restore" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Restore Database</CardTitle>
              <CardDescription>Restore your database from a backup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="restore-source">Restore Source</Label>
                <Select defaultValue="backup">
                  <SelectTrigger id="restore-source">
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="backup">From Backup</SelectItem>
                    <SelectItem value="upload">Upload Backup File</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-select">Select Backup</Label>
                <Select>
                  <SelectTrigger id="backup-select">
                    <SelectValue placeholder="Select a backup" />
                  </SelectTrigger>
                  <SelectContent>
                    {backups.map((backup) => (
                      <SelectItem key={backup.id} value={backup.id}>
                        {backup.name} - {backup.date} {backup.time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="restore-options">Restore Options</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="overwrite" />
                    <Label htmlFor="overwrite">Overwrite existing data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="include-users" defaultChecked />
                    <Label htmlFor="include-users">Include user data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="include-content" defaultChecked />
                    <Label htmlFor="include-content">Include content data</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-red-500">Warning: This will replace your current database!</p>
              <Button variant="destructive">
                <Upload className="mr-2 h-4 w-4" />
                Restore Database
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="optimize" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Optimization</CardTitle>
              <CardDescription>Optimize database performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Optimization Tasks</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="optimize-tables" defaultChecked />
                    <Label htmlFor="optimize-tables">Optimize tables</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="repair-tables" defaultChecked />
                    <Label htmlFor="repair-tables">Repair tables</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="analyze-tables" defaultChecked />
                    <Label htmlFor="analyze-tables">Analyze tables</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="clear-cache" defaultChecked />
                    <Label htmlFor="clear-cache">Clear database cache</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="schedule-optimize">Schedule Optimization</Label>
                <Select defaultValue="weekly">
                  <SelectTrigger id="schedule-optimize">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <RefreshCw className="mr-2 h-4 w-4" />
                Run Optimization Now
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimization History</CardTitle>
              <CardDescription>Recent database optimization tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Weekly Optimization</TableCell>
                    <TableCell>May 15, 2025</TableCell>
                    <TableCell>3m 42s</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Table Repair</TableCell>
                    <TableCell>May 10, 2025</TableCell>
                    <TableCell>1m 15s</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Weekly Optimization</TableCell>
                    <TableCell>May 8, 2025</TableCell>
                    <TableCell>3m 28s</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Completed
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Backup Settings</CardTitle>
              <CardDescription>Configure database backup settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="backup-retention">Backup Retention Period (days)</Label>
                <Input id="backup-retention" type="number" defaultValue="30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="backup-storage">Backup Storage Location</Label>
                <Select defaultValue="local">
                  <SelectTrigger id="backup-storage">
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
                <Label htmlFor="compression">Compression Level</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="compression">
                    <SelectValue placeholder="Select compression" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="encryption">Encrypt Backups</Label>
                  <p className="text-sm text-muted-foreground">Encrypt database backups for security</p>
                </div>
                <Switch id="encryption" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Backup Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send email notifications for backup status</p>
                </div>
                <Switch id="notifications" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
