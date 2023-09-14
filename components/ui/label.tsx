"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import parse from "html-react-parser"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "group flex cursor-[inherit] items-center gap-1 font-[inherit] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      isHighlighted: {
        true: "text-highlight underline underline-offset-2",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
      },
    },
    defaultVariants: {
      isHighlighted: false,
      size: "base",
    },
  }
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {
      iconAfter?: React.ReactNode
      iconBefore?: React.ReactNode
      childrenClassName?: string
      footNote?: string
    }
>(
  (
    {
      className,
      childrenClassName,
      iconBefore,
      iconAfter,
      children,
      isHighlighted,
      size = "base",
      footNote,
      ...props
    },
    ref
  ) => {
    if (typeof children === "string") {
      // If children is a string, then we need to parse it as HTML
      // This is because we want to support HTML in the label
      // For example, we want to support <span> tags in the label
      // This is useful for the checkout page, where we want to highlight the
      // "Stock" label
      children = parse(children)
    }

    return (
      <div className={cn("grid gap-0.5", className)}>
        <LabelPrimitive.Root
          ref={ref}
          className={cn(
            labelVariants({
              isHighlighted,
              size,
            })
          )}
          {...props}
        >
          {iconBefore && (
            <span className="inline-flex shrink-0 items-center">
              {iconBefore}
            </span>
          )}
          <span
            className={cn(
              "flex items-center gap-2",
              {
                "text-xs": size === "xs",
                "text-sm": size === "sm",
                "text-base": size === "base",
              },
              childrenClassName
            )}
          >
            {children}
          </span>
          {iconAfter && (
            <span className="inline-flex shrink-0 items-center">
              {iconAfter}
            </span>
          )}
        </LabelPrimitive.Root>

        {footNote && (
          <span className="text-xs text-gray-500 mb-1">{footNote}</span>
        )}
      </div>
    )
  }
)

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
