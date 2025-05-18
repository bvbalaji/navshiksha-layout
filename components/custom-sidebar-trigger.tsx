"use client"

import { ChevronLeft, Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

interface CustomSidebarTriggerProps {
  className?: string
}

export function CustomSidebarTrigger({ className }: CustomSidebarTriggerProps) {
  const { state, setOpen } = useSidebar()
  let collapsed = state === 'expanded' ? false : true
  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={() => setOpen(collapsed)}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      {collapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
    </Button>
  )
}
