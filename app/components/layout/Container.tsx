import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Container = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mx-auto max-w-7xl px-4 sm:px-8 lg:px-12', className)}
    {...props}
  />
))

Container.displayName = 'Container'

export const OuterContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('sm:px-8', className)} {...props} />
))

OuterContainer.displayName = 'OuterContainer'

export const InnerContainer = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mx-auto max-w-7xl lg:px-8', className)}
    {...props}
  />
))

InnerContainer.displayName = 'InnerContainer'