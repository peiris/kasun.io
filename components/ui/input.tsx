import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  field?: any // Formik field
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, field, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-200 bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-600 dark:border-gray-700 shadow-sm",
          className
        )}
        ref={ref}
        {...field}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
