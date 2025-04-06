import Link from "next/link"
import { ArrowRight, Code, Settings, Palette, Terminal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function ConfigurationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
          Configuration
        </h1>
        <p className="text-lg text-muted-foreground">
          In-depth guide to configuring HyprLuna dotfiles for your personal setup.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          HyprLuna's configuration is organized into several key files and directories, each responsible for different aspects of your desktop environment. This guide will walk you through the main configuration files and how to customize them to your preferences.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="file-structure">
          Configuration File Structure
        </h2>
        <p>
          The configuration files are organized in a logical structure inside your <code>~/.config</code> directory:
        </p>
        <CodeBlock
          code={`~/.config/
├── hypr/               # Hyprland configuration
│   ├── hyprland.conf   # Main Hyprland configuration
│   ├── autostart.conf  # Applications to start with Hyprland
│   └── themes/         # Color themes and styles
├── ags/                # Aylur's GTK Shell widgets
│   ├── config.js       # Main AGS configuration
│   └── widgets/        # Custom widgets
└── matugen/            # Material You theme generator
    └── config.yaml     # Matugen configuration`}
          filename="Directory Structure"
          showLineNumbers={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="config-files">
          Core Configuration Files
        </h2>
        <Tabs defaultValue="hyprland" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hyprland">hyprland.conf</TabsTrigger>
            <TabsTrigger value="ags">AGS Config</TabsTrigger>
            <TabsTrigger value="matugen">Matugen</TabsTrigger>
          </TabsList>
          <TabsContent value="hyprland" className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold tracking-tight">hyprland.conf</h3>
            </div>
            <p>
              This is the main configuration file for the Hyprland compositor. It controls window management, animations, input devices, and basic appearance settings.
            </p>
            <div className="rounded-lg border p-4 bg-muted/40 mt-4">
              <h4 className="font-medium">File Location</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <code>~/.config/hypr/hyprland.conf</code>
              </p>
            </div>
            <h4 className="font-medium mt-6">Key Sections</h4>
            <div className="space-y-6 mt-3">
              <div>
                <h5 className="font-medium text-sm">Monitor Configuration</h5>
                <CodeBlock
                  code={`# Configure monitors
# name, resolution, position, scale
monitor=DP-1,2560x1440@144,0x0,1
monitor=HDMI-A-1,1920x1080@60,2560x0,1`}
                  filename="hyprland.conf"
                />
              </div>
              <div>
                <h5 className="font-medium text-sm">Input Settings</h5>
                <CodeBlock
                  code={`input {
    kb_layout = us
    kb_variant =
    kb_model =
    kb_options =
    kb_rules =

    follow_mouse = 1
    natural_scroll = false
    sensitivity = 0.5 # -1.0 to 1.0, 0 means no modification
    
    touchpad {
        natural_scroll = true
        tap-to-click = true
        drag_lock = true
    }
}`}
                  filename="hyprland.conf"
                />
              </div>
              <div>
                <h5 className="font-medium text-sm">General Settings</h5>
                <CodeBlock
                  code={`general {
    gaps_in = 5
    gaps_out = 10
    border_size = 2
    col.active_border = rgba(33ccffee)
    col.inactive_border = rgba(595959aa)
    layout = dwindle
    # Allow manual resizing with the mouse
    resize_on_border = true
}`}
                  filename="hyprland.conf"
                />
              </div>
              <div>
                <h5 className="font-medium text-sm">Decoration Settings</h5>
                <CodeBlock
                  code={`decoration {
    rounding = 10
    blur = true
    blur_size = 3
    blur_passes = 1
    
    drop_shadow = true
    shadow_range = 4
    shadow_render_power = 3
    col.shadow = rgba(1a1a1aee)
}`}
                  filename="hyprland.conf"
                />
              </div>
              <div>
                <h5 className="font-medium text-sm">Animations</h5>
                <CodeBlock
                  code={`animations {
    enabled = true
    
    # Default animations
    animation = windows, 1, 7, default
    animation = border, 1, 10, default
    animation = fade, 1, 7, default
    animation = workspaces, 1, 6, default
}`}
                  filename="hyprland.conf"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ags" className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold tracking-tight">AGS Configuration</h3>
            </div>
            <p>
              Aylur's GTK Shell (AGS) is used to create custom widgets like the top bar, notification center, and quick settings panel. It's configured with JavaScript/TypeScript files.
            </p>
            <div className="rounded-lg border p-4 bg-muted/40 mt-4">
              <h4 className="font-medium">File Location</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <code>~/.config/ags/config.js</code>
              </p>
            </div>
            <h4 className="font-medium mt-6">Key Components</h4>
            <div className="space-y-6 mt-3">
              <div>
                <h5 className="font-medium text-sm">Main Configuration</h5>
                <CodeBlock
                  code={`// Import required modules
import App from "resource:///com/github/Aylur/ags/app.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";
import Hyprland from "resource:///com/github/Aylur/ags/service/hyprland.js";

// Import custom widgets
import { Bar } from "./widgets/bar.js";
import { NotificationCenter } from "./widgets/notifications.js";
import { ControlCenter } from "./widgets/control-center.js";
import { AppLauncher } from "./widgets/launcher.js";

// Initialize and export app configuration
export default {
    css: "style.css",
    windows: [
        // Top bar (status bar)
        () => Bar({
            monitor: 0,
            position: "top",
        }),
        
        // Notification center
        () => NotificationCenter(),
        
        // Control center with quick settings
        () => ControlCenter(),
        
        // Application launcher
        () => AppLauncher(),
    ],
}`}
                  filename="config.js"
                />
              </div>
              <div>
                <h5 className="font-medium text-sm">Bar Widget Example</h5>
                <CodeBlock
                  code={`// widgets/bar.js
import Widget from "resource:///com/github/Aylur/ags/widget.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";

// Create and export Bar component
export const Bar = ({ monitor, position }) => Widget.Window({
    name: \`bar-\${monitor}\`,
    anchor: ["top", "left", "right"],
    exclusive: true,
    monitor,
    child: Widget.CenterBox({
        start_widget: Widget.Box({
            children: [
                // Workspace indicator
                WorkspaceModule(),
                // Window title
                WindowTitle(),
            ],
        }),
        center_widget: Widget.Box({
            children: [
                // Clock in the center
                Clock(),
            ],
        }),
        end_widget: Widget.Box({
            children: [
                // System indicators (battery, network, etc.)
                SystemIndicators(),
                // Tray icons
                SystemTray(),
            ],
        }),
    }),
});`}
                  filename="bar.js"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="matugen" className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold tracking-tight">Matugen Configuration</h3>
            </div>
            <p>
              Matugen generates a cohesive color scheme for your entire desktop based on your wallpaper, following Google's Material You design principles.
            </p>
            <div className="rounded-lg border p-4 bg-muted/40 mt-4">
              <h4 className="font-medium">File Location</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                <code>~/.config/matugen/config.yaml</code>
              </p>
            </div>
            <h4 className="font-medium mt-6">Configuration Example</h4>
            <div className="space-y-6 mt-3">
              <div>
                <CodeBlock
                  code={`# Matugen configuration

# Path to wallpaper
wallpaper: ~/Pictures/wallpapers/current.jpg

# Scheme generation options
scheme:
  # Material You color scheme options
  material:
    # Color space to use for color generation
    # Options: srgb, okhsl, oklab, hct
    color-space: hct
    # Contrast level
    # Options: normal, high
    contrast: normal
  
# Output configuration
output:
  # Apply generated theme to system
  apply-theme: true
  
  # Generate color scheme for various components
  css:
    # Generate CSS variables
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
        --background: {background};
        --on-background: {on-background};
        --surface: {surface};
        --on-surface: {on-surface};
      }
  
  # Generate configuration for specific applications
  templates:
    # Hyprland theme
    - input: /etc/matugen/templates/hyprland.tmpl
      output: ~/.config/hypr/theme.conf
    
    # AGS theme
    - input: /etc/matugen/templates/ags.tmpl
      output: ~/.config/ags/style.css
    
    # Kitty terminal theme
    - input: /etc/matugen/templates/kitty.tmpl
      output: ~/.config/kitty/theme.conf`}
                  filename="config.yaml"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configure-workflow">
          Configuration Workflow
        </h2>
        <p>
          The recommended workflow for configuring HyprLuna is:
        </p>
        <ol className="mt-4 space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Start by selecting or creating a wallpaper</li>
          <li>Use Matugen to generate a color theme based on your wallpaper</li>
          <li>Adjust Hyprland settings for window behavior, animations, and keybindings</li>
          <li>Customize AGS widgets to match your preferences and workflow</li>
          <li>Restart Hyprland to apply all changes with <code>hyprctl reload</code></li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="helper-scripts">
          Helper Scripts
        </h2>
        <p>
          HyprLuna includes several helper scripts to make configuration easier:
        </p>
        <div className="space-y-4 mt-4">
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Wallpaper Script</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Changes your wallpaper and automatically generates a matching color theme.
            </p>
            <CodeBlock
              code={`# Change wallpaper and generate theme
~/.config/hypr/scripts/wallpaper.sh ~/Pictures/wallpapers/my-wallpaper.jpg`}
              filename="Terminal"
            />
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Toggle Script</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Toggles between light and dark themes.
            </p>
            <CodeBlock
              code={`# Toggle between light and dark mode
~/.config/hypr/scripts/toggle-theme.sh`}
              filename="Terminal"
            />
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Screenshot Script</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Takes screenshots with various options.
            </p>
            <CodeBlock
              code={`# Take a screenshot of the entire screen
~/.config/hypr/scripts/screenshot.sh

# Take a screenshot of a selected area
~/.config/hypr/scripts/screenshot.sh --area

# Take a screenshot and edit it
~/.config/hypr/scripts/screenshot.sh --edit`}
              filename="Terminal"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="next-steps">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/main-dots/keybindings"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Keybindings</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about keyboard shortcuts for navigating and controlling Hyprland.
            </p>
          </Link>
          <Link
            href="/docs/main-dots/customization"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Customization</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Advanced customization options for your Hyprland desktop.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
} 