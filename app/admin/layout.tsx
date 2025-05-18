"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  BookOpen,
  FileText,
  LayoutDashboard,
  PenToolIcon as Tool,
  Settings,
  Shield,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BrandLogo } from "@/components/brand-logo"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
  SidebarMobile,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMobileTrigger,
  SidebarMobileClose,
} from "@/components/ui/sidebar"
import { CustomSidebarTrigger } from "@/components/custom-sidebar-trigger"

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
   const pathname = usePathname()
  const navItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
      color: "text-sky-500",
    },
    {
      label: "Users",
      icon: Users,
      href: "/admin/users",
      color: "text-violet-500",
    },
    {
      label: "Courses",
      icon: BookOpen,
      href: "/admin/courses",
      color: "text-pink-500",
    },
    {
      label: "Content",
      icon: FileText,
      href: "/admin/content",
      color: "text-orange-500",
    },
    {
      label: "Reports",
      icon: BarChart3,
      href: "/admin/reports",
      color: "text-emerald-500",
    },
    {
      label: "Maintenance",
      icon: Tool,
      href: "/admin/maintenance",
      color: "text-yellow-500",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      color: "text-gray-500",
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-[calc(100vh-4rem)]">
        {" "}
        {/* Adjust height to account for header */}
      
        <Sidebar className="border-r bg-green-200">
          <SidebarHeader className="border-b p-4 bg-gray-100">
            <BrandLogo />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.label}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          
        </Sidebar>

        <div className="flex-1 bg-gray-100">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>    
  )
}
