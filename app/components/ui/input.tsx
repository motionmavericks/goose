import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Base
          "block w-full appearance-none rounded-lg text-base/6 text-zinc-950 dark:text-white sm:text-sm/6",
          // Border
          "border border-zinc-950/10 dark:border-white/10",
          // Background
          "bg-white dark:bg-zinc-900",
          // Focus
          "focus:outline-none focus:ring-4 focus:ring-zinc-950/10 dark:focus:ring-white/10",
          // Placeholder
          "placeholder:text-zinc-500 dark:placeholder:text-zinc-400",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50",
          // Padding
          "px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
