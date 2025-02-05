"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // Base
      "group relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8",
      // Focus
      "focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
      // Disabled
      "disabled:cursor-not-allowed disabled:opacity-50",
      // Colors - Track
      "bg-zinc-200 dark:bg-white/25",
      // Colors - Checked
      "data-[state=checked]:bg-zinc-900 dark:data-[state=checked]:bg-white",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // Base
        "pointer-events-none block size-[1.125rem] rounded-full bg-white shadow-sm ring-1 ring-zinc-950/15 transition duration-200 sm:size-3.5",
        // Translate
        "translate-x-0 data-[state=checked]:translate-x-4 sm:data-[state=checked]:translate-x-3",
        // Colors
        "group-data-[state=checked]:bg-white dark:group-data-[state=checked]:bg-zinc-950",
        // Ring
        "dark:ring-white/20 dark:group-data-[state=checked]:ring-white/15"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
