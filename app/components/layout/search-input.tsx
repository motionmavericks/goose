"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function SearchInput({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [isFocused, setIsFocused] = React.useState(false)

  return (
    <div 
      className={cn(
        "relative flex items-stretch transition-all duration-500", 
        isFocused ? "flex-1 bg-accent/5" : "w-80",
        className
      )}
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <input
        type="search"
        placeholder="Search..."
        className="h-full w-full border-0 bg-transparent pl-10 text-sm outline-none focus:ring-0 focus-visible:ring-0"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  )
} 