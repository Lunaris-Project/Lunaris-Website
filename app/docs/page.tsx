import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function DocsPage() {
  return (
    <div className="mx-auto w-full space-y-6 max-w-full">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentation</h1>
        <p className="text-lg text-muted-foreground mt-2">Welcome to the Hyprland.dots documentation.</p>
      </div>
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="getting-started">Getting Started</h2>
        <p>
          Hyprland.dots is a comprehensive dotfiles configuration for Hyprland, a dynamic tiling Wayland compositor.
          This documentation will help you understand how to install, configure, and customize your Hyprland setup.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">Main Dots</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about the core dotfiles configuration, including window management, keybindings, and more.
            </p>
            <div className="mt-4">
              <Link href="/docs/main-dots">
                <Button variant="outline" className="gap-2 group">
                  Read Documentation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">Lunarfetch</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Explore the system fetch tool that displays system information in a beautiful and customizable way.
            </p>
            <div className="mt-4">
              <Link href="/docs/lunarfetch">
                <Button variant="outline" className="gap-2 group">
                  Read Documentation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="installation">Installation</h2>
        <p>
          To get started with Hyprland.dots, you'll need to install the dotfiles on your system. You can choose between
          an automatic installation or a manual installation.
        </p>
        <div className="mt-4">
          <Link href="/docs/main-dots/installation">
            <Button className="gap-2 group">
              Installation Guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="community">Community & Support</h2>
        <p>
          If you need help or want to contribute to the project, you can join our community on GitHub, Discord, or
          Reddit.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <Link href="https://github.com/Lunaris-Project/HyprLuna" target="_blank" rel="noreferrer">
            <Button variant="outline">GitHub</Button>
          </Link>
          <Link href="https://discord.gg/qnAHD9keWr" target="_blank" rel="noreferrer">
            <Button variant="outline">Discord</Button>
          </Link>
          <Link href="https://www.reddit.com/r/hyprland/" target="_blank" rel="noreferrer">
            <Button variant="outline">Reddit</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

