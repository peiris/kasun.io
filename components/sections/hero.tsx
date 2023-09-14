import React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface HeroData {
  title: string | React.ReactNode
  footNote?: string | React.ReactNode
}

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  data: HeroData
}

export default function Hero({ className, data, ...restProps }: HeroProps) {
  const { title, footNote } = data

  return (
    <section className={cn("py-8 md:py-10 bg-white dark:bg-gray-900 dark:text-white", className)} {...restProps}>
      <div className="container grid gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[920px] text-5xl lg:text-7xl font-bold">{title}</h2>
          {footNote && <p className="italic">{footNote}</p>}
        </div>
      </div>
    </section>
  )
}
