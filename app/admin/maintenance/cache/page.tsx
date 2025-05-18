import { Clock, Database, FileText, Globe, HardDrive, ImageIcon, RefreshCw, Save, Trash2, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CacheManagementPage() {
  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cache Management</h1>
          <p className="text-muted-foreground">Clear and manage system caches</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Stats
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear All Caches
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Application Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245 MB</div>
            <div className="mt-2">
              <Progress value={65} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">65% of allocated space</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Database Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128 MB</div>
            <div className="mt-2">
              <Progress value={42} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">42% of allocated space</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">CDN Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 GB</div>
            <div className="mt-2">
              <Progress value={78} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">78% of allocated space</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Session Cache</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56 MB</div>
            <div className="mt-2">
              <Progress value={28} className="h-2" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">28% of allocated space</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="application" className="space-y-4">
        <TabsList>
          <TabsTrigger value="application">Application</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="cdn">CDN</TabsTrigger>
          <TabsTrigger value="session">Session</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="application" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application Cache</CardTitle>
              <CardDescription>Manage application-level caches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <Label>Route Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">45 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      <Label>Asset Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">120 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <Label>API Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">35 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-5 w-5 text-muted-foreground" />
                      <Label>Config Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">5 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Optimize Application Cache
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Cache</CardTitle>
              <CardDescription>Manage database query and result caches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-muted-foreground" />
                      <Label>Query Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">85 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-muted-foreground" />
                      <Label>Result Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">43 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Optimize Database Cache
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="cdn" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>CDN Cache</CardTitle>
              <CardDescription>Manage content delivery network caches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      <Label>Image Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">750 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <Label>Static Files Cache</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">450 MB</span>
                      <Button variant="outline" size="sm">
                        Clear
                      </Button>
                    </div>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Purge CDN Cache
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="session" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Session Cache</CardTitle>
              <CardDescription>Manage user session caches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <Label>Active Sessions</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">56 MB (245 sessions)</span>
                    <Button variant="outline" size="sm">
                      Clear
                    </Button>
                  </div>
                </div>
                <Progress value={28} className="h-2" />
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Clear Expired Sessions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cache Settings</CardTitle>
              <CardDescription>Configure cache behavior and limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="app-cache-limit">Application Cache Limit (MB)</Label>
                <Input id="app-cache-limit" type="number" defaultValue="500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="db-cache-limit">Database Cache Limit (MB)</Label>
                <Input id="db-cache-limit" type="number" defaultValue="300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cdn-cache-limit">CDN Cache Limit (MB)</Label>
                <Input id="cdn-cache-limit" type="number" defaultValue="2000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-cache-limit">Session Cache Limit (MB)</Label>
                <Input id="session-cache-limit" type="number" defaultValue="200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cache-driver">Cache Driver</Label>
                <Select defaultValue="redis">
                  <SelectTrigger id="cache-driver">
                    <SelectValue placeholder="Select cache driver" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="file">File System</SelectItem>
                    <SelectItem value="redis">Redis</SelectItem>
                    <SelectItem value="memcached">Memcached</SelectItem>
                    <SelectItem value="database">Database</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cache-ttl">Default Cache TTL (seconds)</Label>
                <Input id="cache-ttl" type="number" defaultValue="3600" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-clear">Automatic Cache Clearing</Label>
                  <p className="text-sm text-muted-foreground">
                    Clear caches automatically when they reach their limit
                  </p>
                </div>
                <Switch id="auto-clear" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="cache-warming">Cache Warming</Label>
                  <p className="text-sm text-muted-foreground">Pre-populate caches after clearing</p>
                </div>
                <Switch id="cache-warming" defaultChecked />
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
