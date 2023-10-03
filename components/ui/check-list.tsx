import * as React from "react"
import { CheckCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const List = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="list"
    className={cn(
      "relative not-prose [&_p]:inline-block [&_p]:my-0 [&_a]:underline [&_a]:decoration-solid",
      className
    )}
    {...props}
  />
))
List.displayName = "List"

const ListItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    role="listitem"
    className={cn("flex gap-3", className)}
    {...props}
  >
    <CheckCircle
      size={16}
      strokeWidth={1}
      absoluteStrokeWidth
      className="text-green-500 dark:text-green-500 relative top-1.5 shrink-0"
    />
    <div className="font-medium">{children}</div>
  </div>
))
ListItem.displayName = "ListItem"

export { List, ListItem }
