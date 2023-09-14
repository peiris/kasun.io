import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  field?: any // Formik field
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, field, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-600",
          className
        )}
        ref={ref}
        {...field}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
