import React from "react"

import { cn } from "@/lib/utils"
import { RowCard, RowCardData } from "@/components/ui/row-card"
import { Separator } from "@/components/ui/separator"

export interface RowSectionData {
  title: string
  footNote?: string | React.ReactNode
  items: RowCardData[]
}

export interface RowSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  data: RowSectionData
}

export default function RowSection({
  className,
  data,
  ...restProps
}: RowSectionProps) {
  const { title, footNote, items } = data

  return (
    <section
      className={cn(
        "py-5 lg:py-10 bg-white dark:bg-gray-900 dark:text-white",
        className
      )}
      {...restProps}
    >
      <div className="container grid gap-5">
        <h2 className="text-2xl text-primary font-medium">{title}</h2>

        <div className="flex flex-col gap-5">
          <div className="grid">
            {items.map((service, index: number) => (
              <div className="flex flex-col" key={index}>
                <Separator />
                <RowCard data={service} className="items-center" />
                {items.length - 1 === index && <Separator />}
              </div>
            ))}
          </div>
        </div>

        {footNote && (
          <p className="text-sm text-gray-500 dark:text-white/90">{footNote}</p>
        )}
      </div>
    </section>
  )
}
