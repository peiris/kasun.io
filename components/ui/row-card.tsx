import React from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge, BadgeProps } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

export interface RowCardData {
  title: string
  url?: string
  description: string
  action?: {
    title: string
    url?: string
  }
  badge?: BadgeProps
  stack?: string[]
}

export interface RowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: RowCardData
}

export function RowCard({ data }: RowCardProps) {
  const { title, url, description, action, badge, stack } = data

  return (
    <div className="grid lg:grid-cols-[1fr_3fr_1fr] items-start py-4 gap-2 lg:gap-4">
      <div className="flex flex-col gap-1 shrink-0">
        {badge && (
          <div className="flex items-center gap-2">
            <Badge {...badge} />
          </div>
        )}

        <h3 className="font-medium">{title}</h3>

        {url && (
          <Link
            href={url}
            target="_blank"
            className="text-sm flex gap-1 text-gray-600 dark:text-white hover:underline underline-offset-4"
          >
            <span>{url}</span>
            <ArrowUpRight absoluteStrokeWidth strokeWidth={1} size={16} />
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-gray-700 dark:text-white/80">{description}</p>

        {stack && stack.length > 0 && (
          <div className="flex items-center gap-1 flex-wrap">
            {stack.map((item, index) => (
              <Badge variant="secondary" key={index}>
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {action && (
        <div className="flex lg:justify-end">
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
