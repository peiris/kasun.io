import React from "react"

import { cn } from "@/lib/utils"
import { CareerCard, CareerCardData } from "@/components/ui/career-card"
import { Separator } from "@/components/ui/separator"

export interface CareerData {
  title: string
  footNote?: string | React.ReactNode
  items: CareerCardData[]
}

export interface CareerProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CareerData
}

export default function Career({ className, data, ...restProps }: CareerProps) {
  const { title, footNote, items } = data

  return (
    <section
      className={cn(
        "py-10 bg-white dark:bg-gray-900 dark:text-white",
        className
      )}
      {...restProps}
    >
      <div className="container grid gap-5">
        <h2 className="text-2xl text-primary font-medium">{title}</h2>

        <div className="flex flex-col gap-5">
          <div className="grid">
            {items.map((job, index: number) => (
              <div key={index}>
                <Separator />
                <CareerCard data={job} />
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
