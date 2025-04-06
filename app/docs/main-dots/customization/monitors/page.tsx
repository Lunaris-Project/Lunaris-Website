import { CodeBlock } from "@/components/code-block"

export default function MonitorsCustomizationPage() {
  return (
    <div className="w-full max-w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Monitors
        </h1>
        <p className="text-lg text-muted-foreground">
          Configure multi-monitor setup and display options
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p className="w-full">
          Hyprland offers extensive support for multi-monitor setups, allowing you to configure resolution, 
          refresh rate, position, scaling, and more for each display. This page covers the monitor configuration 
          options available in HyprLuna.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="monitor-configuration">
          Monitor Configuration
        </h2>
        <p className="w-full">
          The monitor configuration is defined in the Hyprland config file. Here's the basic syntax:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Basic monitor configuration
monitor=name,resolution,position,scale

# Examples
monitor=DP-1,1920x1080@144,0x0,1
monitor=HDMI-A-1,1920x1080@60,1920x0,1
monitor=eDP-1,2560x1440@60,auto,1.25

# Mirror monitors
monitor=DP-2,1920x1080@60,0x0,1,mirror,DP-1`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full mt-4">
          The parameters for each monitor declaration are:
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground w-full">
          <li><code>name</code>: The name of the monitor (e.g., HDMI-A-1, DP-1, eDP-1)</li>
          <li><code>resolution</code>: Resolution and refresh rate (e.g., 1920x1080@144)</li>
          <li><code>position</code>: Position in the virtual display space (e.g., 0x0, 1920x0, or "auto")</li>
          <li><code>scale</code>: Display scaling factor (e.g., 1, 1.25, 1.5)</li>
          <li>Optional: <code>mirror</code>: Mirror another monitor</li>
          <li>Optional: <code>transform</code>: Rotate or flip the display</li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="finding-monitor-names">
          Finding Monitor Names
        </h2>
        <p className="w-full">
          You can find the names of your connected monitors using the <code>hyprctl monitors</code> command:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# List connected monitors
hyprctl monitors

# Example output:
# Monitor DP-1 (ID 0):
#   1920x1080@144.000000 at 0x0
#   X: 0, Y: 0
#   Active workspace: 1
#   Scale: 1.00
# Monitor HDMI-A-1 (ID 1):
#   1920x1080@60.000000 at 1920x0
#   X: 1920, Y: 0
#   Active workspace: 2
#   Scale: 1.00`}
            filename="Terminal"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="special-configs">
          Special Monitor Configurations
        </h2>
        <div className="w-full space-y-4">
          <h3 className="text-xl font-semibold tracking-tight">Auto Configuration</h3>
          <p className="w-full">
            You can use "auto" for position to let Hyprland automatically place monitors:
          </p>
          <div className="w-full overflow-x-auto">
            <CodeBlock
              code={`# Let Hyprland automatically position monitors
monitor=DP-1,1920x1080@144,auto,1
monitor=HDMI-A-1,1920x1080@60,auto,1`}
              filename=".config/hypr/hyprland.conf"
              showLineNumbers={true}
            />
          </div>
        </div>

        <div className="w-full space-y-4 mt-6">
          <h3 className="text-xl font-semibold tracking-tight">High-DPI Scaling</h3>
          <p className="w-full">
            For high-resolution displays, you can apply scaling:
          </p>
          <div className="w-full overflow-x-auto">
            <CodeBlock
              code={`# 4K monitor with 150% scaling
monitor=DP-3,3840x2160@60,0x0,1.5`}
              filename=".config/hypr/hyprland.conf"
              showLineNumbers={true}
            />
          </div>
        </div>

        <div className="w-full space-y-4 mt-6">
          <h3 className="text-xl font-semibold tracking-tight">Rotated Displays</h3>
          <p className="w-full">
            You can rotate displays using the transform option:
          </p>
          <div className="w-full overflow-x-auto">
            <CodeBlock
              code={`# Rotate monitor 90 degrees clockwise
monitor=DP-2,1920x1080@60,1920x0,1,transform,1

# Transform values:
# 0 - normal (no transform)
# 1 - 90 degrees
# 2 - 180 degrees
# 3 - 270 degrees
# 4 - flipped normal
# 5 - flipped 90 degrees
# 6 - flipped 180 degrees
# 7 - flipped 270 degrees`}
              filename=".config/hypr/hyprland.conf"
              showLineNumbers={true}
            />
          </div>
        </div>

        <div className="w-full space-y-4 mt-6">
          <h3 className="text-xl font-semibold tracking-tight">Mirroring Displays</h3>
          <p className="w-full">
            You can mirror one display to another:
          </p>
          <div className="w-full overflow-x-auto">
            <CodeBlock
              code={`# Mirror eDP-1 to HDMI-A-1
monitor=eDP-1,1920x1080@60,0x0,1
monitor=HDMI-A-1,1920x1080@60,0x0,1,mirror,eDP-1`}
              filename=".config/hypr/hyprland.conf"
              showLineNumbers={true}
            />
          </div>
        </div>

        <div className="w-full space-y-4 mt-6">
          <h3 className="text-xl font-semibold tracking-tight">Disable Laptop Display When Closed</h3>
          <p className="w-full">
            You can configure your laptop display to turn off when the lid is closed:
          </p>
          <div className="w-full overflow-x-auto">
            <CodeBlock
              code={`# Disable internal display when lid is closed
monitor=eDP-1,1920x1080@60,auto,1,mirror,eDP-1
bindl=,switch:Lid Switch,exec,hyprctl keyword monitor "eDP-1, disabled"
bindl=,switch:off:Lid Switch,exec,hyprctl keyword monitor "eDP-1,1920x1080@60,auto,1"`}
              filename=".config/hypr/hyprland.conf"
              showLineNumbers={true}
            />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="workspace-association">
          Workspace to Monitor Association
        </h2>
        <p className="w-full">
          You can assign specific workspaces to specific monitors:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Assign workspaces to monitors
workspace=1,monitor:DP-1
workspace=2,monitor:DP-1
workspace=3,monitor:DP-1
workspace=4,monitor:HDMI-A-1
workspace=5,monitor:HDMI-A-1
workspace=6,monitor:HDMI-A-1`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full mt-4">
          This configuration will ensure that workspaces 1, 2, and 3 always appear on the DP-1 monitor,
          while workspaces 4, 5, and 6 always appear on the HDMI-A-1 monitor.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="workspace-rules">
          Special Workspace Rules
        </h2>
        <p className="w-full">
          You can define rules for how workspaces behave on different monitors:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Create a persistent workspace on a specific monitor
workspace=special:scratchpad,persistent:true,monitor:DP-1

# Make a workspace silent (not switched to when created)
workspace=9,monitor:HDMI-A-1,silent

# Define default workspaces
workspace=1,default:true,monitor:DP-1
workspace=4,default:true,monitor:HDMI-A-1`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="hotplugging">
          Monitor Hotplugging
        </h2>
        <p className="w-full">
          Hyprland supports monitor hotplugging, automatically detecting when monitors are connected or disconnected.
          You can use the <code>monitor=,preferred,auto,1</code> fallback rule to handle unknown monitors:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Specific monitor configurations
monitor=DP-1,1920x1080@144,0x0,1
monitor=HDMI-A-1,1920x1080@60,1920x0,1

# Fallback for any other connected monitors
monitor=,preferred,auto,1`}
            filename=".config/hypr/hyprland.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="hyprland-monitors">
          HyprLuna Monitor Configuration
        </h2>
        <p className="w-full">
          HyprLuna includes a default monitor configuration that works with most setups,
          automatically detecting connected displays and applying sensible defaults:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`# Default monitor configuration (uses preferred resolution and auto-positioning)
monitor=,preferred,auto,1

# Example of a more specific setup you might use
# monitor=DP-1,1920x1080@144,0x0,1
# monitor=HDMI-A-1,1920x1080@60,1920x0,1
# monitor=eDP-1,1920x1080@60,3840x0,1.25,transform,0

# Default workspace assignment
workspace=1,default:true,monitor:DP-1
workspace=4,default:true,monitor:HDMI-A-1
workspace=7,default:true,monitor:eDP-1`}
            filename=".config/hypr/monitors.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization-tips">
          Customization Tips
        </h2>
        <p className="w-full">Here are some tips for customizing your monitor configuration:</p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground w-full">
          <li>Use <code>monitor=,preferred,auto,1</code> as a fallback for any unspecified monitors</li>
          <li>Assign frequently used workspaces to your primary monitor</li>
          <li>For laptop users, consider automatically disabling the internal display when connecting to external monitors</li>
          <li>Fine-tune scaling for HiDPI displays (common values are 1.25, 1.5, or 2.0)</li>
          <li>If using different monitor brands, adjust individual color profiles using external tools</li>
          <li>
            Create different monitor configurations and switch between them with scripts:
            <div className="w-full overflow-x-auto mt-2">
              <CodeBlock
                code={`#!/bin/bash
# Switch to docked mode (external monitors only)
if [ "$1" = "docked" ]; then
  hyprctl keyword monitor "eDP-1, disable"
  hyprctl keyword monitor "DP-1, 1920x1080@144, 0x0, 1"
  hyprctl keyword monitor "HDMI-A-1, 1920x1080@60, 1920x0, 1"
# Switch to mobile mode (laptop display only)
elif [ "$1" = "mobile" ]; then
  hyprctl keyword monitor "DP-1, disable"
  hyprctl keyword monitor "HDMI-A-1, disable"
  hyprctl keyword monitor "eDP-1, 1920x1080@60, 0x0, 1"
fi`}
                filename="~/.config/hypr/scripts/monitor-switch.sh"
                showLineNumbers={true}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
} 