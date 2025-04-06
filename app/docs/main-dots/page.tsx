import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Terminal, Code, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MainDotsPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Main Dots</h1>
        <p className="text-lg text-muted-foreground mt-2">Core configuration files for Hyprland window manager.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="overview">Overview</h2>
        <p>
          The Main Dots are the core configuration files for Hyprland, a dynamic tiling Wayland compositor. These
          dotfiles provide a complete desktop environment with carefully configured settings for window management,
          keybindings, appearance, and more.
        </p>
        <div className="rounded-lg border overflow-hidden mt-6">
          <Image
            src="/notch2.webp"
            width={800}
            height={400}
            alt="HyprLuna Desktop Screenshot"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="key-features">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Window Management</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Dynamic tiling window management with customizable layouts and rules.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Keybindings</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Intuitive keyboard shortcuts for efficient navigation and control.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Appearance</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Beautiful themes, animations, and visual effects for a modern desktop.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/docs/main-dots/features">
            <Button variant="outline" className="gap-2 group">
              View All Features
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration">Configuration</h2>
        <p>
          The Main Dots configuration is organized into several files, each responsible for a specific aspect of the
          desktop environment.
        </p>
        <Tabs defaultValue="hyprland" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hyprland">hyprland.conf</TabsTrigger>
            <TabsTrigger value="ags">AGS</TabsTrigger>
            <TabsTrigger value="matugen">Matugen</TabsTrigger>
          </TabsList>
          <TabsContent value="hyprland" className="mt-4 space-y-4">
            <p>
              The main configuration file for Hyprland. This file contains settings for window management, keybindings,
              animations, and more.
            </p>
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">hyprland.conf</span>
                </div>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code>{`# Example Hyprland Configuration

# Monitor Configuration
monitor=,preferred,auto,1

# Input Configuration
input {
    kb_layout = us
    follow_mouse = 1
    sensitivity = 0.5
}

# General Settings
general {
    gaps_in = 5
    gaps_out = 10
    border_size = 2
    col.active_border = rgba(33ccffee)
    col.inactive_border = rgba(595959aa)
    layout = dwindle
}

# Decoration Settings
decoration {
    rounding = 10
    blur = true
    blur_size = 3
    blur_passes = 1
}

# Animations
animations {
    enabled = true
    animation = windows, 1, 7, default
    animation = border, 1, 10, default
    animation = fade, 1, 7, default
    animation = workspaces, 1, 6, default
}`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="ags" className="mt-4 space-y-4">
            <p>
              Configuration for Aylur's GTK Shell (AGS), a powerful widget system for creating custom desktop components
              using JavaScript/TypeScript.
            </p>
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">config.js</span>
                </div>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code>{`// Example AGS Configuration
import App from "resource:///com/github/Aylur/ags/app.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";
import Hyprland from "resource:///com/github/Aylur/ags/service/hyprland.js";
import Bar from "./widgets/bar.js";
import Notifications from "./widgets/notifications.js";
import ControlCenter from "./widgets/control-center.js";

// Initialize App
export default {
    css: "style.css",
    windows: [
        // Top bar
        () => Bar({
            monitor: 0,
            position: "top",
            onPrimary: true,
        }),
        
        // Notification center
        () => Notifications(),
        
        // Control center
        () => ControlCenter(),
    ],
    
    // Configuration options
    settings: {
        theme: "dark",
        animations: true,
        blurRadius: 8,
        enableNetworkWidget: true,
        enableCalendarWidget: true,
    },
};`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="matugen" className="mt-4 space-y-4">
            <p>
              Matugen is a Material You color extractor and theme generator. It creates color schemes based on your
              wallpaper following Google's Material You design guidelines.
            </p>
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">config.yaml</span>
                </div>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code>{`# Example Matugen Configuration

# Path to wallpaper
wallpaper: ~/Pictures/wallpapers/current.jpg

# Output configuration
output:
  # Set system theme
  apply-theme: true
  
  # Generate CSS variables
  css:
    path: ~/.cache/wal/colors.css
    format: |
      :root {
        --primary: {primary};
        --on-primary: {on-primary};
        --primary-container: {primary-container};
        --on-primary-container: {on-primary-container};
        --secondary: {secondary};
        --on-secondary: {on-secondary};
        --secondary-container: {secondary-container};
        --on-secondary-container: {on-secondary-container};
        --tertiary: {tertiary};
        --on-tertiary: {on-tertiary};
        --surface: {surface};
        --on-surface: {on-surface};
        --background: {background};
      }
  
  # Generate templates for various applications
  templates:
    - input: /etc/matugen/templates/hyprland.tmpl
      output: ~/.config/hypr/theme.conf
    - input: /etc/matugen/templates/ags.tmpl
      output: ~/.config/ags/style.css
    - input: /etc/matugen/templates/kitty.tmpl
      output: ~/.config/kitty/theme.conf`}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
        <div className="mt-4">
          <Link href="/docs/main-dots/configuration">
            <Button variant="outline" className="gap-2 group">
              View Full Configuration Guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Customization</h2>
        <p>
          The Main Dots are designed to be easily customizable. You can modify the configuration files to suit your
          preferences, or use the provided tools to change themes, layouts, and more.
        </p>
        <div className="mt-4">
          <Link href="/docs/main-dots/customization">
            <Button variant="outline" className="gap-2 group">
              Customization Guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/main-dots/features" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-medium">Features</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Explore all the features of the Main Dots configuration.
            </p>
          </Link>
          <Link
            href="/docs/main-dots/configuration"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Configuration</h3>
            <p className="text-sm text-muted-foreground mt-1">Learn how to configure the Main Dots to your liking.</p>
          </Link>
          <Link
            href="/docs/main-dots/customization"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Customization</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Customize the appearance and behavior of your Hyprland setup.
            </p>
          </Link>
          <Link href="/docs/lunarfetch" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-medium">Lunarfetch</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about the system fetch tool included with Hyprland.dots.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

