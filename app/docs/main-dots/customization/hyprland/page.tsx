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
            code={`# Colors
source=~/.cache/ags/user/generated/colors.conf
# User preferences
source=~/.config/hypr/hyprland/userPref.conf
# Other
source=~/.config/hypr/hyprland/animations/Lunaric.conf # There is more UK right ?
source=~/.config/hypr/hyprland/misc/default.conf
source=~/.config/hypr/hyprland/layouts/default.conf
source=~/.config/hypr/hyprland/keybinds/default.conf
source=~/.config/hypr/hyprland/input/default.conf
source=~/.config/hypr/hyprland/decorations/default.conf
source=~/.config/hypr/hyprland/env/nvidia.conf
source=~/.config/hypr/hyprland/exec/default.conf
source=~/.config/hypr/hyprland/monitors/default.conf
source=~/.config/hypr/hyprland/plugins/default.conf
source=~/.config/hypr/hyprland/rules/default.conf`}
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
          The general layouts section controls the overall behavior of Hyprland:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`general {
    # Gaps and border
    gaps_in = 10
    gaps_out = 10
    gaps_workspaces = 0
    border_size = 0
    # Border colors // dont touch because it controlled by matugena
    col.active_border = $primary $secondary_container
    col.inactive_border = $surface $secondary_container
    resize_on_border = true
    layout = dwindle

}

dwindle {
	preserve_split = true
	smart_split = false
	smart_resizing = false
}`}
            filename=".config/hypr/hyprland/layouts/default.conf"
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
    kb_layout = us,ara
    kb_options = grp:alt_shift_toggle
    numlock_by_default = true
    repeat_delay = 300
    repeat_rate = 35
    touchpad {
        natural_scroll = yes
        disable_while_typing = true
        clickfinger_behavior = true
        scroll_factor = 0.5
    }
    special_fallthrough = true
    follow_mouse = 1
}

binds {
    scroll_event_delay = 0
    }

gestures {
    workspace_swipe = true
    }`}
            filename=".config/hypr/hyprland/input/default.conf"
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
    vfr = 0
    vrr = 0
    font_family = Geist
    animate_manual_resizes = false
    animate_mouse_windowdragging = false
    enable_swallow = false
    swallow_regex = (foot|kitty|allacritty|Alacritty|ghostty|Ghostty)
    focus_on_activate = true # Test
    render_ahead_of_time = true
    render_ahead_safezone = 30
    # disable_scale_checks = true
    disable_hyprland_logo = true
    force_default_wallpaper = 0
    # new_window_takes_over_fullscreen = 2
    allow_session_lock_restore = true
    initial_workspace_tracking = true
}


xwayland {
  force_zero_scaling = true
}

# render {
#     explicit_sync = 0
#     explicit_sync_kms = 0
# }
cursor {
    sync_gsettings_theme = true
}`}
            filename=".config/hypr/hyprland/misc/default.conf"
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
            code={`env = QT_QPA_PLATFORM, wayland
env = QT_QPA_PLATFORMTHEME,qt5ct
env = GDK_BACKEND,wayland,x11`}
            filename=".config/hypr/hyprland/env/default.conf"
            showLineNumbers={true}
          />
        </div>
        <h2>And this for nvidia:</h2>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`env = QT_QPA_PLATFORM, wayland
env = QT_QPA_PLATFORMTHEME,qt5ct
env = GDK_BACKEND,wayland,x11`}
            filename=".config/hypr/hyprland/env/nvidia.conf"
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
          <li>Modify <code>workspace_swipe_fingers</code> based on your touchpad gesture preferences</li>
          <li>Set <code>kb_layout</code> to match your keyboard layout (e.g., "de" for German, "fr" for French)</li>
          <li>Enable or disable <code>natural_scroll</code> based on your scrolling preference</li>
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
            Edit the user Prefrences file configuration in <code className="bg-muted rounded p-1">~/.config/hypr/hyprland/userPrefs.conf</code> this will overwrite hyprluna's hyprland configurations
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