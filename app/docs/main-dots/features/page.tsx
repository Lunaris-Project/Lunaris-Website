import Link from "next/link"
import { ArrowRight, Terminal, Code, Zap, Layout, Palette, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
          Features
        </h1>
        <p className="text-lg text-muted-foreground">Key features of the HyprLuna dotfiles configuration.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="window-management">
          Window Management
        </h2>
        <p>
          HyprLuna provides a powerful and intuitive window management system that makes it easy to organize your
          workspace efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Layout className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Dynamic Tiling</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Windows are automatically arranged in a tiling layout, maximizing screen space and minimizing manual
              window management.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Monitor className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Multi-Monitor Support</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Seamless multi-monitor setup with intelligent workspace management and per-monitor configurations.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="keybindings">
          Intuitive Keybindings
        </h2>
        <p>
          HyprLuna comes with a comprehensive set of keybindings designed to make your workflow more efficient and
          intuitive.
        </p>
        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Common Keybindings</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + T</code>
                  </td>
                  <td className="py-2">Launch terminal</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + Q</code>
                  </td>
                  <td className="py-2">Close active window</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + arrow keys</code>
                  </td>
                  <td className="py-2">Move focus in direction</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + arrow keys</code>
                  </td>
                  <td className="py-2">Move window in direction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/docs/main-dots/keybindings">
            <Button variant="outline" className="gap-2 group">
              View All Keybindings
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="appearance">
          Beautiful Appearance
        </h2>
        <p>
          HyprLuna provides a visually stunning desktop environment with carefully crafted themes, animations, and
          visual effects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Palette className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Themes</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Light, dark and by wallpaper themes with consistent styling across applications and automatic theme switching based on
              time of day and your wallpaper.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Animations</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Smooth animations for window transitions, workspace switching, and other interactions that enhance the
              user experience.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="tools">
          Integrated Tools
        </h2>
        <p>HyprLuna comes with a suite of integrated tools that enhance your desktop experience and productivity.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Lunarfetch</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A system information tool that displays information about your system in a visually appealing way.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">AGS</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A highly customizable status widget manager for Hyprland with modules for system information and more.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Matugen</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A fast and blazing color scheme generator with alot of themes and blazing performance for fast generating.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="next-steps">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/main-dots/configuration"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Configuration</h3>
            <p className="text-sm text-muted-foreground mt-1">Learn how to configure HyprLuna to your liking.</p>
          </Link>
          <Link
            href="/docs/main-dots/keybindings"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Keybindings</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn the keyboard shortcuts for navigating and controlling Hyprland.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

