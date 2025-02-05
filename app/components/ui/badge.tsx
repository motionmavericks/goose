import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  [
    // Base
    "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium",
    // Ring
    "ring-1 ring-inset",
  ],
  {
    variants: {
      variant: {
        default: [
          // Colors
          "bg-zinc-50 text-zinc-900 ring-zinc-950/10",
          // Dark mode
          "dark:bg-zinc-950 dark:text-zinc-200 dark:ring-white/15",
        ],
        success: [
          // Colors
          "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
          // Dark mode
          "dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/30",
        ],
        warning: [
          // Colors
          "bg-amber-50 text-amber-800 ring-amber-600/20",
          // Dark mode
          "dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/30",
        ],
        destructive: [
          // Colors
          "bg-red-50 text-red-700 ring-red-600/20",
          // Dark mode
          "dark:bg-red-500/10 dark:text-red-400 dark:ring-red-400/30",
        ],
        info: [
          // Colors
          "bg-blue-50 text-blue-700 ring-blue-600/20",
          // Dark mode
          "dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-400/30",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
