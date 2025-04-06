"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Terminal, Github, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { DocsSidebar } from "@/components/sidebar"
import { ScrollSpy } from "@/components/scroll-spy"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { SearchBar } from "@/components/search"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // Effect for client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted (to prevent hydration errors)
  if (!mounted) {
    return <div className="min-h-screen bg-background"></div>
  }

  return (
    <div className="flex  flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-xl items-center mx-auto px-4">
          <div className="mr-4 hidden md:flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Terminal className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                </span>
              </div>
              <span className="hidden font-bold sm:inline-block">HyprLuna</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/blog"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/blog" ? "text-foreground" : "text-foreground/60",
                )}
              >
                Blog
              </Link>
            </nav>
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2 md:hidden p-3 h-11 w-11" aria-label="Toggle sidebar menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" hideCloseButton className="w-[60vw] h-[70%] max-w-sm top-[50%] translate-y-[-50%] bg-secondary/20 backdrop-blur-md rounded-r-lg">
              <div className="flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between px-4 h-14 border-b">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <span className="font-bold">HyprLuna</span>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 p-0">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close Menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="flex-1 overflow-y-auto py-4 px-4">
                  <DocsSidebar />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
            <span className="font-bold">HyprLuna</span>
          </Link>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <SearchBar className="w-full md:w-[200px] lg:w-[280px]" />
            </div>
            <nav className="flex items-center gap-4">
              <ModeToggle />
              <Link href="https://github.com/Lunaris-Project/HyprLuna" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex w-full mx-auto pt-14">
        {/* Left sidebar - only visible on desktop */}
        <div className="fixed top-14 left-0 bottom-0 w-[240px] overflow-y-auto z-30 border-r hidden md:block bg-background md:left-[max(0px,calc(50%-45rem))] lg:left-[max(0px,calc(50%-45rem))]">
          <div className="h-full py-6 px-3">
            <DocsSidebar />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 min-w-0 md:ml-[240px] lg:mr-[240px]">
          <div className="px-4 sm:px-6 md:px-8 mx-auto py-10 max-w-4xl">
            <article className="prose prose-stone dark:prose-invert max-w-none">
              {children}
            </article>
          </div>
        </div>

        {/* Right sidebar - table of contents, only visible on desktop */}
        <div className="fixed top-14 right-0 bottom-0 w-[240px] overflow-y-auto z-20 border-l hidden lg:block bg-background lg:right-[max(0px,calc(50%-45rem))]">
          <div className="h-full py-6 px-3">
            <ScrollSpy />
          </div>
        </div>
      </div>

      <footer className=" justify-center items-center  mx-auto py-12 bg-background md:pl-[max(240px,calc(50%-45rem+240px))] lg:pl-[max(240px,calc(50%-45rem+240px))] lg:pr-[max(240px,calc(50%-45rem+240px))]">
        <div className=" border-t pt-12 container px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <Terminal className="h-5 w-5 text-primary" />
              <span>HYPRLUNA</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              A modern, minimal, and functional dotfiles configuration for
              Hyprland.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/main-dots"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                >
                  Main Dots
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/lunarfetch"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                >
                  Lunarfetch
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/troubleshooting"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Community</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/Lunaris-Project/HyprLuna"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                  aria-label="GitHub Repository"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/hyprland"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                  aria-label="Discord Server"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.reddit.com/r/hyprland/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                  aria-label="Reddit Community"
                >
                  Reddit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/Lunaris-Project/HyprLuna/blob/main/LICENSE"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors p-2 min-h-[44px] inline-flex items-center"
                  aria-label="MIT License"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container px-4 mt-8 border-t pt-8 max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} HyprLuna. MIT License.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com/Lunaris-Project/HyprLuna"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://discord.gg/qnAHD9keWr"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Discord Server"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="sr-only">Discord</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

