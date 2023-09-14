import React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge, BadgeProps } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

export interface CareerCardData {
  title: string
  year: string
  action: {
    title: string
    url: string
  }
  badge?: BadgeProps
}

export interface CareerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CareerCardData
}

export function CareerCard({ data }: CareerCardProps) {
  const { title, year, action, badge } = data

  return (
    <div className="grid md:grid-cols-[100px_1fr_1fr] lg:grid-cols-[100px_2fr_1fr] items-start py-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">{year}</h3>
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-gray-700 dark:text-white/80">{title}</h3>
        {badge && <Badge {...badge} />}
      </div>

      {action && (
        <div className="flex md:justify-end">
          {action?.url ? (
            <Link href={action.url} target="_blank">
              <Label className="hover:underline underline-offset-4">
                <span>{action.title}</span>
                <ArrowUpRight absoluteStrokeWidth strokeWidth={1} size={20} />
              </Label>
            </Link>
          ) : (
            <Label>{action?.title}</Label>
          )}
        </div>
      )}
    </div>
  )
}
