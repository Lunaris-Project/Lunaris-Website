import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block"

// Define the type for a category
interface Category {
  title: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

export default function HyprlandCustomizationPage() {
  // Define the categories array
  const categories: Category[] = [
    {
      title: "Animations",
      href: "/docs/main-dots/customization/animations",
      description: "Configure window and workspace transition animations"
    },
    {
      title: "Decorations",
      href: "/docs/main-dots/customization/decorations",
      description: "Customize window borders, shadows, and transparency"
    },
    {
      title: "Input",
      href: "/docs/main-dots/customization/input",
      description: "Configure keyboard, mouse, and touchpad behavior"
    },
    {
      title: "Layouts",
      href: "/docs/main-dots/customization/layouts",
      description: "Configure tiling behavior and window layout algorithms"
    },
    {
      title: "Monitors",
      href: "/docs/main-dots/customization/monitors",
      description: "Setup multi-monitor configurations and resolution settings"
    },
    {
      title: "Rules",
      href: "/docs/main-dots/customization/rules",
      description: "Define special behavior for specific applications"
    },
    {
      title: "Plugins",
      href: "/docs/main-dots/customization/plugins",
      description: "Extend Hyprland functionality with plugins"
    },
    {
      title: "Hypridle",
      href: "/docs/main-dots/customization/hypridle",
      description: "Configure screen locking and power management"
    },
    {
      title: "Hyprlock",
      href: "/docs/main-dots/customization/hyprlock",
      description: "Customize your lock screen appearance"
    },
    {
      title: "Misc",
      href: "/docs/main-dots/customization/misc",
      description: "Additional configuration options and tweaks"
    }
  ];

  return (
    <div className="w-full max-w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Hyprland Configuration
        </h1>
        <p className="text-lg text-muted-foreground">
          Core configuration for the Hyprland compositor
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p className="w-full">
          Hyprland is a dynamic tiling Wayland compositor that forms the foundation of HyprLuna. This page covers the 
          core Hyprland configuration, focusing on the general settings that control its behavior.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="config-structure">
          Configuration Structure
        </h2>
        <p className="w-full">
          The main Hyprland configuration file is located at <code>~/.config/hypr/hyprland.conf</code>. In HyprLuna, this file 
          includes several other configuration files for better organization:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Source external configuration files
source = ~/.config/hypr/animations.conf    # Animation settings
source = ~/.config/hypr/keybinds.conf      # Keyboard shortcuts
source = ~/.config/hypr/windowrules.conf   # Window-specific rules
source = ~/.config/hypr/autostart.conf     # Startup applications`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          This modular approach makes it easier to maintain and customize specific aspects of your Hyprland setup.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="general-settings">
          General Settings
        </h2>
        <p className="w-full">
          The general section controls the overall behavior of Hyprland:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`general {
    gaps_in = 2                   # Gap size between windows
    gaps_out = 8                  # Gap size between windows and screen edges
    border_size = 2               # Window border thickness
    col.active_border = rgba(33ccffee) rgba(00ff99ee) 45deg  # Gradient border for active window
    col.inactive_border = rgba(595959aa)  # Border color for inactive windows
    
    layout = dwindle             # Default layout (dwindle or master)
    
    # Settings for system behavior
    allow_tearing = false        # Controls screen tearing
    resize_on_border = true      # Allow resizing windows by dragging borders
}`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="input-settings">
          Input Settings
        </h2>
        <p className="w-full">
          The input section configures mouse, keyboard, and touchpad behavior:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`input {
    kb_layout = us               # Keyboard layout
    kb_options = caps:escape     # Remap Caps Lock to Escape
    
    follow_mouse = 1             # Focus follows mouse
    float_switch_override_focus = 1  # Focus behavior for floating windows
    
    touchpad {
        natural_scroll = true    # Natural scrolling (like on macOS)
        disable_while_typing = true  # Disable touchpad while typing
        tap-to-click = true      # Enable tap to click
    }
    
    sensitivity = 0.0            # Mouse sensitivity (-1.0 to 1.0)
}`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="gestures">
          Gesture Settings
        </h2>
        <p className="w-full">
          Hyprland supports touchpad gestures for intuitive navigation:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`gestures {
    workspace_swipe = true        # Enable swiping between workspaces
    workspace_swipe_fingers = 3   # Number of fingers for workspace swipe
    workspace_swipe_distance = 300  # Swipe distance required
    workspace_swipe_invert = false  # Invert swipe direction
    workspace_swipe_min_speed_to_force = 30  # Minimum speed for forced swipe
    workspace_swipe_cancel_ratio = 0.5  # Cancellation threshold
}`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="misc-settings">
          Miscellaneous Settings
        </h2>
        <p className="w-full">
          Additional settings that control various aspects of Hyprland behavior:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`misc {
    force_default_wallpaper = 0     # Disable default wallpaper
    disable_hyprland_logo = true    # Hide Hyprland logo
    disable_splash_rendering = true # Disable splash screen
    
    mouse_move_enables_dpms = true  # Wake on mouse movement
    key_press_enables_dpms = true   # Wake on key press
    
    animate_manual_resizes = true   # Animations for manual resizing
    animate_mouse_windowdragging = true  # Animations when dragging windows
    
    enable_swallow = true           # Window swallowing (terminal behavior)
    swallow_regex = ^(foot)$        # Only swallow foot terminal
}`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="binds">
          Binding Settings
        </h2>
        <p className="w-full">
          Control how keybindings work:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`binds {
    workspace_back_and_forth = true  # Toggle between current and previous workspace
    allow_workspace_cycles = true    # Allow cycling through workspaces
}`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="env-variables">
          Environment Variables
        </h2>
        <p className="w-full">
          Hyprland sets important environment variables for proper integration with other applications:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Environment variables
env = XCURSOR_SIZE,24
env = LIBVA_DRIVER_NAME,nvidia
env = XDG_SESSION_TYPE,wayland
env = GBM_BACKEND,nvidia-drm
env = __GLX_VENDOR_LIBRARY_NAME,nvidia
env = WLR_NO_HARDWARE_CURSORS,1`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          These environment variables are particularly important for NVIDIA GPU users. If you're using AMD or Intel 
          graphics, you might not need all of these variables.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization-tips">
          Customization Tips
        </h2>
        <p className="w-full">Here are some tips for customizing your Hyprland configuration:</p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground w-full">
          <li>Adjust <code>gaps_in</code> and <code>gaps_out</code> to create your preferred spacing between windows</li>
          <li>Customize <code>col.active_border</code> with your favorite colors to personalize the active window appearance</li>
          <li>Modify <code>workspace_swipe_fingers</code> based on your touchpad gesture preferences</li>
          <li>Set <code>kb_layout</code> to match your keyboard layout (e.g., "de" for German, "fr" for French)</li>
          <li>Enable or disable <code>natural_scroll</code> based on your scrolling preference</li>
          <li>Adjust <code>border_size</code> to make window borders more or less prominent</li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="config-categories">
          Configuration Categories
        </h2>
        <p>
          HyprLuna's configuration is divided into these main categories:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {categories.map((category) => (
            <div key={category.title} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <Link href={category.href} className="no-underline">
                <h3 className="font-semibold text-lg mb-2 group flex items-center gap-2">
                  {category.icon}
                  {category.title}   
                  <ChevronRight className="ml-auto h-4 w-4 opacity-60 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="file-organization">
          Config File Organization
        </h2>
        <p>
          In HyprLuna, configuration files are organized in specific directories:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <strong>~/.config/hypr/</strong>: Main Hyprland configuration directory
          </li>
          <li>
            <strong>~/.config/hypr/hyprland/</strong>: Contains all configuration component subdirectories
          </li>
          <li>
            <strong>~/.config/hypr/hyprland/animations/</strong>: Different animation profiles (Lunaric.conf, etc.)
          </li>
          <li>
            <strong>~/.config/hypr/hyprland/decorations/</strong>: Window decoration configs (dec-1.conf, dec-2.conf, etc.)
          </li>
          <li>
            <strong>~/.config/hypr/hyprland/env/</strong>: Environment-specific settings (nvidia.conf, default.conf)
          </li>
        </ul>
        <p className="mt-2">
          This organization allows easy switching between different configuration setups by simply changing which files are sourced in the main config.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customizing">
          Customizing Your Setup
        </h2>
        <p>
          To customize HyprLuna's configuration for your own setup:
        </p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>
            Copy the base configuration structure to <code className="bg-muted rounded p-1">~/.config/hypr/</code>
          </li>
          <li>
            Edit the main <code className="bg-muted rounded p-1">hyprland.conf</code> file to source your preferred component configurations
          </li>
          <li>
            Modify individual component files as needed for your hardware and preferences
          </li>
          <li>
            Create your own variants of component configurations (e.g., your own animation profile)
          </li>
        </ol>
        <p className="mt-2">
          This modular approach allows you to easily experiment with different settings without risking your entire configuration.
        </p>
      </div>
    </div>
  );
} 