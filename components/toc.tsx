"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
  level: number
}

interface TocProps {
  className?: string
}

export function TableOfContents({ className }: TocProps) {
  const [headings, setHeadings] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2[id], h3[id]")).map((element) => ({
      id: element.id,
      title: element.textContent || "",
      level: element.tagName === "H2" ? 2 : 3,
    }))

    setHeadings(elements)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px", threshold: 0 },
    )

    elements.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      elements.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  if (headings.length === 0) {
    return null
  }

  return (
    <div className={cn("hidden space-y-2 md:block", className)}>
      <p className="font-medium text-sm mb-4">On This Page</p>
      <ul className="space-y-1 border-l border-muted text-xs">
        {headings.map((heading) => (
          <li key={heading.id} className="relative">
            <a
              href={`#${heading.id}`}
              className={cn(
                "block py-1 transition-colors hover:text-foreground",
                heading.level === 2 ? "pl-3" : "pl-5",
                activeId === heading.id
                  ? "font-medium text-primary border-l-2 border-primary -ml-[1px]"
                  : "text-muted-foreground",
              )}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                })
                // Update URL without causing a page reload
                window.history.pushState(null, "", `#${heading.id}`)
              }}
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

