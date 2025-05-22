import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2",
        {
          "border-transparent bg-zinc-900 text-zinc-50": variant === "default",
          "border-zinc-200 bg-transparent": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
