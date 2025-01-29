import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

function Spinner({ className, size = 16, ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin text-muted-foreground/50",
        className
      )}
      {...props}
    >
      <Loader2 size={size} />
    </div>
  )
}

export { Spinner } 