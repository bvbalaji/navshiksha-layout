"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FileEdit, Star, Users, LayoutDashboard, PlusCircle } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/teacher/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Create Content",
      href: "/teacher/create-content",
      icon: FileEdit,
    },
    {
      title: "Create Courses",
      href: "/teacher/create-courses",
      icon: PlusCircle,
    },
    {
      title: "My Pupils",
      href: "/teacher/my-pupils",
      icon: Users,
    },
    {
      title: "Feedback",
      href: "/teacher/feedback",
      icon: Star,
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-[calc(100vh-4rem)]">
        {" "}
        {/* Adjust height to account for header */}
        <Sidebar className="border-r bg-yellow-50">
          <SidebarHeader className="border-b p-4 bg-yellow-50">
            <div className="flex items-center justify-between">
              <BrandLogo />
              <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                Teacher
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-2 bg-yellow-50">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href} className={pathname.startsWith(item.href)? 'border-2 border-indigo-500/35' : ''}>
                  <SidebarMenuButton asChild isActive={pathname.startsWith(item.href)} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>          
        </Sidebar>
        <div className="flex-1 bg-yellow-100">          
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
