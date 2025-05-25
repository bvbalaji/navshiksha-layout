"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Calendar, LineChart, MessageSquare, Star, User } from "lucide-react"

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

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/student/dashboard",
      icon: User,
    },
    {
      title: "My Courses",
      href: "/student/my-courses",
      icon: BookOpen,
    },
    {
      title: "My Progress",
      href: "/student/my-progress",
      icon: LineChart,
    },
    {
      title: "Upcoming Classes",
      href: "/student/upcoming-classes",
      icon: Calendar,
    },
    {
      title: "Feedback",
      href: "/student/feedback",
      icon: Star,
    },
    {
      title: "Personal Tutor",
      href: "/student/personal-tutor",
      icon: MessageSquare,
    },
  ]

  return (
    <SidebarProvider>
      <div className="flex w-full h-full">
        {" "}
        {/* Adjust height to account for header */}
        <Sidebar className="border-r bg-green-50">
          <SidebarHeader className="border-b p-4 bg-green-50">
            <BrandLogo />
          </SidebarHeader>
          <SidebarContent className="p-2 bg-green-50">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href} className={pathname === item.href ? 'border-2 border-indigo-500/35' : ''}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
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
        <div className="flex-1 bg-green-100">          
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
