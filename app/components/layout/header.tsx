"use client"

import * as React from "react"
import { SearchInput } from "@/components/layout/search-input"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export function Header() {
  const { isCollapsed } = useSidebar()
  
  return (
    <header className={cn(
      "sticky top-0 flex shrink-0 border-b border-border bg-background/80 backdrop-blur-sm z-40 transition-all duration-300",
      isCollapsed ? "h-14" : "h-16"
    )}>
      <div className="flex items-center gap-2 px-4 border-r border-border h-full">
        <SidebarTrigger className="ml-1" />
      </div>
      <div className="flex-1 border-r border-border h-full">
        <SearchInput className="h-full" />
      </div>
    </header>
  )
} 