"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { Dribbble, Github, Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import ContactModal from "@/components/sections/contact-modal"

export interface HeaderData {
  title: string
  email: string
  githubUsername: string
  githubUrl: string
  dribbleUrl: string
}

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  data: HeaderData
}

export default function Header({ data, className, ...restProps }: HeaderProps) {
  const { scrollY } = useScroll()
  const [isMiniHeader, setIsMiniHeader] = useState<boolean>(false)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const { title, githubUrl, dribbleUrl } = data

  /**
   * Handle scroll event to toggle mini header
   */
  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest >= 100) {
      setIsMiniHeader(true)
    } else if (latest == 0) {
      setIsMiniHeader(false)
    }
  })

  /**
   * Handle dark mode toggle
   */
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
    localStorage.theme = isDarkMode ? "light" : "dark"
  }

  /*
  This useEffect hook is responsible for managing the application's theme based on user preferences and system settings.

  1. It first attempts to retrieve the theme preference from local storage.
  2. If a theme preference is found in local storage, it toggles dark mode 
    and updates the HTML element class accordingly.
  3. If no theme preference is found in local storage, it checks the user's system preference for dark mode.
  4. It sets the application's state and updates the HTML class to reflect the chosen theme.

  Note: The useEffect hook is run once on component mount (empty dependency array).
*/
  useEffect(() => {
    const theme = localStorage.getItem("theme")

    if (theme) {
      if (theme === "dark") {
        setIsDarkMode(true)
        document.documentElement.classList.add("dark")
      } else {
        setIsDarkMode(false)
        document.documentElement.classList.remove("dark")
      }
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setIsDarkMode(true)
        document.documentElement.classList.add("dark")
      } else {
        setIsDarkMode(false)
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  return (
    <header
      className={cn(
        "bg-white/90 dark:bg-gray-900/90 dark:text-white backdrop-blur-md pb-5 pt-8 md:pt-10 md:pb-8 sticky top-0 will-change-auto transition-all z-10",
        {
          "md:py-4 md:border-b dark:border-gray-800": isMiniHeader,
        },
        className
      )}
      {...restProps}
    >
      <div className="container flex items-center">
        <div className="flex flex-1 items-center gap-5 shrink-0">
          <Link href="/" className="flex flex-1 items-center gap-5 shrink-0">
            <Avatar
              className={cn("md:h-16 md:w-16", {
                "md:h-12 md:w-12": isMiniHeader,
              })}
            >
              <AvatarImage alt="Kasun's Avatar" src="/avatar.png" />
              <AvatarFallback>KP</AvatarFallback>
            </Avatar>

            <h1
              className={cn("text-xl md:text-xl font-medium shrink-0", {
                "md:text-lg": isMiniHeader,
              })}
            >
              {title}
            </h1>
          </Link>
        </div>

        <div className="flex ml-auto md:flex-1 lg:items-center md:justify-end gap-4 md:gap-6">
          <Link href={dribbleUrl} target="_blank" title="Kasun's Dribbble Link">
            <Label className="hover:underline underline-offset-4">
              <Dribbble absoluteStrokeWidth strokeWidth={1} size={20} />
              <span className="hidden md:inline-flex">Designs</span>
            </Label>
          </Link>

          <Link href={githubUrl} target="_blank" title="Kasun's GitHub Link">
            <Label className="hover:underline underline-offset-4">
              <Github absoluteStrokeWidth strokeWidth={1} size={20} />
              <span className="hidden md:inline-flex">Github</span>
            </Label>
          </Link>

          <Label
            onClick={handleDarkModeToggle}
            className="hidden lg:inline-flex cursor-pointer"
          >
            {isDarkMode ? (
              <Sun absoluteStrokeWidth strokeWidth={1} size={20} />
            ) : (
              <Moon absoluteStrokeWidth strokeWidth={1} size={20} />
            )}
          </Label>

          <ContactModal
            data={{
              button: {
                children: "Contact Me",
                className: "hidden lg:inline-flex",
              },
            }}
          />
        </div>
      </div>
    </header>
  )
}
