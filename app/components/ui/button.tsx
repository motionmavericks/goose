import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    // Base
    "relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold",
    // Sizing
    "px-[calc(theme(spacing.3.5)-1px)] py-[calc(theme(spacing.2.5)-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing.1.5)-1px)] sm:text-sm/6",
    // Focus
    "focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
    // Disabled
    "data-[disabled]:opacity-50",
    // Icon
    "[&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-[--btn-icon] sm:[&>svg]:my-1 sm:[&>svg]:size-4",
  ],
  {
    variants: {
      variant: {
        default: [
          // Optical border, implemented as the button background
          "border-transparent bg-[--btn-border]",
          // Dark mode: border is rendered on after so background is set to button background
          "dark:bg-[--btn-bg]",
          // Button background, implemented as foreground layer to stack on top of pseudo-border layer
          "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg]",
          // Drop shadow, applied to the inset before layer so it blends with the border
          "before:shadow-[shadow:0_1px_1px_rgb(0_0_0/0.025)]",
          // Background color is moved to control and shadow is removed in dark mode so hide before pseudo
          "dark:before:hidden",
          // Dark mode: Subtle white outline is applied using a border
          "dark:border-white/5",
          // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
          "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]",
          // Inner highlight shadow
          "after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]",
          // White overlay on hover
          "hover:after:bg-[--btn-hover-overlay] active:after:bg-[--btn-hover-overlay]",
          // Dark mode: after layer expands to cover entire button
          "dark:after:-inset-px dark:after:rounded-lg",
          // Colors
          "text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)]",
          "dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)]",
          // Icon
          "[--btn-icon:theme(colors.zinc.400)] hover:[--btn-icon:theme(colors.zinc.300)] active:[--btn-icon:theme(colors.zinc.300)]",
        ],
        destructive: [
          // Base
          "border-transparent text-white",
          "[--btn-bg:theme(colors.red.600)] [--btn-border:theme(colors.red.700/90%)] [--btn-hover-overlay:theme(colors.white/10%)]",
          // Icon
          "[--btn-icon:theme(colors.red.300)] hover:[--btn-icon:theme(colors.red.200)] active:[--btn-icon:theme(colors.red.200)]",
        ],
        outline: [
          // Base
          "border-zinc-950/10 text-zinc-950 bg-white",
          // Hover
          "hover:bg-zinc-950/[2.5%]",
          // Active
          "active:bg-zinc-950/[2.5%]",
          // Dark mode
          "dark:border-white/15 dark:text-white dark:bg-transparent dark:hover:bg-white/5 dark:active:bg-white/5",
          // Icon
          "[--btn-icon:theme(colors.zinc.500)] hover:[--btn-icon:theme(colors.zinc.700)] active:[--btn-icon:theme(colors.zinc.700)]",
          "dark:hover:[--btn-icon:theme(colors.zinc.400)] dark:active:[--btn-icon:theme(colors.zinc.400)]",
        ],
        secondary: [
          // Base
          "border-transparent bg-zinc-100 text-zinc-950",
          // Hover
          "hover:bg-zinc-200",
          // Active
          "active:bg-zinc-300",
          // Dark mode
          "dark:bg-white/5 dark:text-white dark:hover:bg-white/7.5 dark:active:bg-white/10",
          // Icon
          "[--btn-icon:theme(colors.zinc.500)] hover:[--btn-icon:theme(colors.zinc.700)] active:[--btn-icon:theme(colors.zinc.700)]",
          "dark:[--btn-icon:theme(colors.zinc.500)] dark:hover:[--btn-icon:theme(colors.zinc.400)] dark:active:[--btn-icon:theme(colors.zinc.400)]",
        ],
        ghost: [
          // Base
          "border-transparent text-zinc-950",
          // Hover
          "hover:bg-zinc-950/5",
          // Active
          "active:bg-zinc-950/5",
          // Dark mode
          "dark:text-white dark:hover:bg-white/10 dark:active:bg-white/10",
          // Icon
          "[--btn-icon:theme(colors.zinc.500)] hover:[--btn-icon:theme(colors.zinc.700)] active:[--btn-icon:theme(colors.zinc.700)]",
          "dark:[--btn-icon:theme(colors.zinc.500)] dark:hover:[--btn-icon:theme(colors.zinc.400)] dark:active:[--btn-icon:theme(colors.zinc.400)]",
        ],
      },
      size: {
        default: "",
        sm: "rounded-md px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing.1)-1px)] text-xs",
        lg: "rounded-md px-[calc(theme(spacing.3.5)-1px)] py-[calc(theme(spacing.2.5)-1px)] text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
