import React from "react"

import { cn } from "@/lib/utils"
import ContactModal from "@/components/sections/contact-modal"

export interface CallToActionData {
  title: string | React.ReactNode
  footNote?: string | React.ReactNode
}

export interface CallToActionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  data: CallToActionData
}

export default function CallToAction({
  className,
  data,
  ...restProps
}: CallToActionProps) {
  const { title, footNote } = data

  return (
    <section className={cn("pt-10 pb-28 md:pb-40 bg-white dark:bg-gray-900 dark:text-white", className)} {...restProps}>
      <div className="container grid gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-[920px] text-5xl md:text-7xl font-bold">{title}</h2>
          {footNote && <p>{footNote}</p>}
        </div>

        <div className="flex gap-2">
          <ContactModal
            data={{
              button: {
                children: "Hire Me",
                variant: "primary",
                size: "xl",
              },
            }}
          />
        </div>
      </div>
    </section>
  )
}
