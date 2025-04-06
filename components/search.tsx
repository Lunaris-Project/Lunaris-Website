"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, FileText, Terminal, Package, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"

interface SearchResult {
  title: string
  href: string
  type: "docs" | "config" | "command" | "api"
  description: string
}

const searchData: SearchResult[] = [
  {
    title: "Installation Guide",
    href: "/docs/main-dots/installation",
    type: "docs",
    description: "How to install HyprLuna dotfiles",
  },
  {
    title: "Main Dots Overview",
    href: "/docs/main-dots",
    type: "docs",
    description: "Overview of the HyprLuna dotfiles",
  },
  {
    title: "Hyprland Configuration",
    href: "/docs/main-dots/configuration",
    type: "config",
    description: "Configure Hyprland window manager",
  },
  {
    title: "Waybar Setup",
    href: "/docs/main-dots/waybar",
    type: "config",
    description: "Customize your Waybar status bar",
  },
  {
    title: "Lunarfetch Overview",
    href: "/docs/lunarfetch",
    type: "docs",
    description: "System information display tool",
  },
  {
    title: "Lunarfetch API Reference",
    href: "/docs/lunarfetch/api-reference",
    type: "api",
    description: "API documentation for Lunarfetch",
  },
  {
    title: "Keybindings",
    href: "/docs/main-dots/keybindings",
    type: "docs",
    description: "Keyboard shortcuts for Hyprland",
  },
  {
    title: "Theme Customization",
    href: "/docs/main-dots/themes",
    type: "config",
    description: "Customize the appearance of your desktop",
  },
  {
    title: "FAQ",
    href: "/docs/advanced/troubleshooting",
    type: "docs",
    description: "Common issues and solutions",
  },
  {
    title: "Lunarfetch Examples",
    href: "/docs/lunarfetch/examples",
    type: "command",
    description: "Example usage of Lunarfetch",
  },
]

export function SearchBar({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = (result: SearchResult) => {
    setOpen(false)
    router.push(result.href)
  }

  const handleInputClick = () => {
    setOpen(true)
  }

  return (
    <>
      <div className={cn("relative w-full", className)}>
        <SearchIcon className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search documentation... (⌘K)"
          className="w-full appearance-none bg-background pl-8 pr-4 shadow-none"
          onClick={handleInputClick}
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." value={query} onValueChange={setQuery} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {searchData
              .filter(
                (item) =>
                  item.title.toLowerCase().includes(query.toLowerCase()) ||
                  item.description.toLowerCase().includes(query.toLowerCase()),
              )
              .map((result) => (
                <CommandItem key={result.href} onSelect={() => handleSelect(result)} className="flex items-center">
                  {result.type === "docs" && <FileText className="mr-2 h-4 w-4 flex-shrink-0" />}
                  {result.type === "config" && <Settings className="mr-2 h-4 w-4 flex-shrink-0" />}
                  {result.type === "command" && <Terminal className="mr-2 h-4 w-4 flex-shrink-0" />}
                  {result.type === "api" && <Package className="mr-2 h-4 w-4 flex-shrink-0" />}
                  <div className="overflow-hidden">
                    <p className="font-medium truncate">{result.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                  </div>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

