"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, ExternalLink, Terminal, X } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DocsSidebarProps {
  className?: string
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [activePath, setActivePath] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("main-dots")

  // Effect for client-side mounting - only runs once
  useEffect(() => {
    setMounted(true)
  }, [])

  // Separate effect to handle pathname changes
  useEffect(() => {
    if (!pathname) return

    setActivePath(pathname)
    
    const isLunarfetch = pathname.startsWith("/docs/lunarfetch")
    setActiveSection(isLunarfetch ? "lunarfetch" : "main-dots")
  }, [pathname]) // Only depend on pathname changes

  if (!mounted) return null

  const isLunarfetch = activePath?.startsWith("/docs/lunarfetch")
  
  const handleSectionChange = (value: string) => {
    if (value === "main-dots") {
      router.push("/docs/main-dots")
    } else {
      router.push("/docs/lunarfetch")
    }
  }

  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <div className="py-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <Select value={activeSection} onValueChange={handleSectionChange}>
            <SelectTrigger className="w-full border-0  focus:ring-0 p-0 h-7 shadow-none">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="main-dots">Main Dots</SelectItem>
              <SelectItem value="lunarfetch">Lunarfetch</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {!isLunarfetch && (
        <>
          <div className="space-y-1">
            <h4 className="px-2 py-1 text-xs font-medium">Getting Started</h4>
            <div className="space-y-1">
              <Link
                href="/docs"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Introduction
              </Link>
              <Link
                href="/docs/main-dots/installation"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/installation" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Installation
              </Link>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="px-2 py-1 text-xs font-medium">Main Dots</h4>
            <div className="space-y-1 pl-2">
              <Link
                href="/docs/main-dots"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Overview
              </Link>
              <Link
                href="/docs/main-dots/features"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/features" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Features
              </Link>
              <Link
                href="/docs/main-dots/configuration"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/configuration" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Configuration
              </Link>
              <Link
                href="/docs/main-dots/keybindings"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/keybindings" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Keybindings
              </Link>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="px-2 py-1 text-xs font-medium">Customization</h4>
            <div className="space-y-1 pl-2">
              <Link
                href="/docs/main-dots/customization/hyprland"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/hyprland" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Hyprland
              </Link>
              
              <Link
                href="/docs/main-dots/customization/hyprlock"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/hyprlock" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Hyprlock
              </Link>
              
              <Link
                href="/docs/main-dots/customization/hypridle"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/hypridle" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Hypridle
              </Link>
              
              <Link
                href="/docs/main-dots/customization/animations"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/animations" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Animations
              </Link>
              
              <Link
                href="/docs/main-dots/customization/decorations"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/decorations" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Decorations
              </Link>
              
              <Link
                href="/docs/main-dots/customization/monitors"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/monitors" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Monitors
              </Link>
              
              <Link
                href="/docs/main-dots/customization/rules"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/rules" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Rules
              </Link>
              
              <Link
                href="/docs/main-dots/customization/input"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/input" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Input
              </Link>
              
              <Link
                href="/docs/main-dots/customization/misc"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/misc" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Misc
              </Link>
              
              <Link
                href="/docs/main-dots/customization/layouts"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/layouts" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Layouts
              </Link>
              <Link
                href="/docs/main-dots/customization/plugins"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/customization/plugins" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Plugins
              </Link>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="px-2 py-1 text-xs font-medium">Theming</h4>
            <div className="space-y-1 pl-2">
              <Link
                href="/docs/main-dots/themes/matugen"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/themes/matugen" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Matugen
              </Link>
              
              <Link
                href="/docs/main-dots/themes/templating"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/themes/templating" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Templating
              </Link>
              
              <Link
                href="/docs/main-dots/themes/schemes"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/themes/schemes" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Schemes
              </Link>
              
              <Link
                href="/docs/main-dots/themes/ide-extension"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/main-dots/themes/ide-extension" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                IDE Extension
              </Link>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="px-2 py-1 text-xs font-medium">Advanced</h4>
            <div className="space-y-1">
              <Link
                href="/docs/advanced/contributing"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/advanced/contributing" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Contributing
              </Link>
              <Link
                href="/docs/advanced/troubleshooting"
                className={cn(
                  "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                  activePath === "/docs/advanced/troubleshooting" && "bg-accent/50 font-medium text-accent-foreground",
                )}
              >
                Troubleshooting & FAQ
              </Link>
            </div>
          </div>
        </>
      )}

      {isLunarfetch && (
        <div className="space-y-1">
          <h4 className="px-2 py-1 text-xs font-medium">Lunarfetch</h4>
          <div className="space-y-1 pl-2">
            <Link
              href="/docs/lunarfetch"
              className={cn(
                "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                activePath === "/docs/lunarfetch" && "bg-accent/50 font-medium text-accent-foreground",
              )}
            >
              Overview
            </Link>
            <Link
              href="/docs/lunarfetch/api-reference"
              className={cn(
                "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                activePath === "/docs/lunarfetch/api-reference" && "bg-accent/50 font-medium text-accent-foreground",
              )}
            >
              API Reference
            </Link>
            <Link
              href="/docs/lunarfetch/examples"
              className={cn(
                "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                activePath === "/docs/lunarfetch/examples" && "bg-accent/50 font-medium text-accent-foreground",
              )}
            >
              Examples
            </Link>
            <Link
              href="/docs/lunarfetch/troubleshooting"
              className={cn(
                "block rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground",
                activePath === "/docs/lunarfetch/troubleshooting" && "bg-accent/50 font-medium text-accent-foreground",
              )}
            >
              Troubleshooting & FAQ
            </Link>
          </div>
        </div>
      )}

      <div className="pt-4">
        <Link
          href="https://github.com/Lunaris-Project/HyprLuna"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-md px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
        >
          <ExternalLink className="h-3 w-3" />
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  )
}

