export default function LayoutsCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Layouts
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Configure Hyprland window layouts and behavior
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          Hyprland provides flexible window layout options that determine how windows are arranged, 
          sized, and positioned on your screen. This page covers the layout configuration in HyprLuna, 
          including tiling settings, dwindle layout, and master layout options.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="dwindle-layout">
          Dwindle Layout
        </h2>
        <p>
          The dwindle layout is the default layout in HyprLuna. Here's the configuration:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Dwindle layout configuration
dwindle {
    # Enable pseudotiling (resize windows while keeping tiled layout)
    pseudotile = true
    
    # Enable preserve_split to maintain split direction when closing windows
    preserve_split = true
    
    # How to handle window splits (0 = prefer horizontal, 1 = prefer vertical)
    no_gaps_when_only = false
    
    # Force split direction (0 = based on dimensions, 1 = always horizontal, 2 = always vertical)
    force_split = 0 
    
    # Use smart resizing for windows
    smart_split = false
    smart_resizing = true
    
    # Use permanent direction for splits
    permanent_direction_override = false
}`}</code>
        </pre>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="dwindle-breakdown">
          Dwindle Layout Breakdown
        </h2>
        
        <h3 className="text-xl font-semibold">Pseudotiling Mode</h3>
        <p>
          Pseudotiling allows you to resize windows while keeping them within the tiled layout:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">pseudotile = true</code>: Enables the pseudotiling feature
          </li>
          <li>
            To pseudotile a window, use the keybind <code className="bg-muted rounded p-1">SUPER + P</code> or set window rules
          </li>
          <li>
            Pseudotiled windows can be resized freely while remaining within their tile boundaries
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Split Behavior</h3>
        <p>
          The split behavior determines how new windows are positioned in relation to existing ones:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">preserve_split = true</code>: Maintains the split direction when closing windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">force_split = 0</code>: Default is 0, which splits based on window dimensions (wider windows split horizontally, taller windows split vertically)
          </li>
          <li>
            With <code className="bg-muted rounded p-1">force_split = 1</code>, all splits would be horizontal
          </li>
          <li>
            With <code className="bg-muted rounded p-1">force_split = 2</code>, all splits would be vertical
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Smart Features</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">smart_split = false</code>: When disabled, splits happen based on force_split or window dimensions
          </li>
          <li>
            <code className="bg-muted rounded p-1">smart_resizing = true</code>: Enables intelligent resizing that preserves window proportions
          </li>
          <li>
            <code className="bg-muted rounded p-1">permanent_direction_override = false</code>: Direction overrides don't persist after window close
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Gaps Management</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">no_gaps_when_only = false</code>: Keeps gaps even when there's only one window
          </li>
          <li>
            If set to true, gaps would disappear when there's only one window on the workspace
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="master-layout">
          Master Layout
        </h2>
        <p>
          The master layout is an alternative tiling approach where one "master" area contains the focused window, 
          and other windows are stacked in a secondary area. HyprLuna includes this configuration:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Master layout configuration
master {
    # Set new windows as the master window
    new_is_master = true
    
    # Master window orientation (left = master on left, right = master on right, top, bottom)
    orientation = left
    
    # Whether to inherit fullscreen status when switching to a different layout
    inherit_fullscreen = true
    
    # Remove gaps when only one window is open
    no_gaps_when_only = false
    
    # Default is 1, which is one master window
    # Set to 2 for two master windows side by side
    mfact = 0.55
}`}</code>
        </pre>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="master-breakdown">
          Master Layout Breakdown
        </h2>
        
        <h3 className="text-xl font-semibold">Window Placement</h3>
        <p>
          Controls how windows are assigned to the master area:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">new_is_master = true</code>: New windows become the master window
          </li>
          <li>
            If set to false, new windows would be placed in the stack area
          </li>
          <li>
            Use <code className="bg-muted rounded p-1">SUPER + RETURN</code> to swap a window between master and stack
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Orientation & Layout</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">orientation = left</code>: Master area is on the left side of the screen
          </li>
          <li>
            Options include: left, right, top, bottom (controlling where the master window appears)
          </li>
          <li>
            <code className="bg-muted rounded p-1">mfact = 0.55</code>: Master area takes 55% of the screen space
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Additional Options</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">inherit_fullscreen = true</code>: Preserves fullscreen state when switching layouts
          </li>
          <li>
            <code className="bg-muted rounded p-1">no_gaps_when_only = false</code>: Keeps gaps even with a single window
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="general-tiling-settings">
          General Tiling Settings
        </h2>
        <p>
          HyprLuna includes general settings that affect all layouts:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# General tiling settings
general {
    # Gaps between windows
    gaps_in = 3
    gaps_out = 5
    
    # Border thickness and colors
    border_size = 1
    col.active_border = rgba(33ccffee) rgba(00ff99ee) 45deg
    col.inactive_border = rgba(595959aa)
    
    # Allow tearing for game performance (only when using fullscreen unredirected)
    allow_tearing = false
    
    # Layout used by default (options: dwindle, master)
    layout = dwindle
}

# Enable borderless for maximized windows
decoration {
    rounding = 0
    drop_shadow = false
    
    # Opacity settings for active/inactive windows
    active_opacity = 1.0
    inactive_opacity = 1.0
    
    # Blur effect settings
    blur {
        enabled = false
    }
}`}</code>
        </pre>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="window-gaps-borders">
          Window Gaps & Borders
        </h2>
        
        <h3 className="text-xl font-semibold">Gaps Configuration</h3>
        <p>
          Gaps create space between windows for a more appealing desktop:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">gaps_in = 3</code>: 3px gap between adjacent windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">gaps_out = 5</code>: 5px gap between windows and screen edges
          </li>
          <li>
            You can adjust these values to your preference (larger values = more space between windows)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Border Settings</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">border_size = 1</code>: 1 pixel border around windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">col.active_border = rgba(33ccffee) rgba(00ff99ee) 45deg</code>: Gradient border for active window
          </li>
          <li>
            <code className="bg-muted rounded p-1">col.inactive_border = rgba(595959aa)</code>: Semi-transparent gray for inactive windows
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization-tips">
          Customization Tips
        </h2>
        <p>
          Here are some suggestions for customizing your layout configuration:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Switch layouts on the fly:</strong> Use <code className="bg-muted rounded p-1">SUPER + BACKSPACE</code> to switch between dwindle and master layouts.
          </li>
          <li>
            <strong>Adjust master size:</strong> Use <code className="bg-muted rounded p-1">SUPER + [</code> and <code className="bg-muted rounded p-1">SUPER + ]</code> to adjust the size of the master area in master layout.
          </li>
          <li>
            <strong>Change window focus:</strong> Use <code className="bg-muted rounded p-1">SUPER + arrow keys</code> to change window focus in any direction.
          </li>
          <li>
            <strong>Swap windows:</strong> Use <code className="bg-muted rounded p-1">SUPER + SHIFT + arrow keys</code> to swap windows in any direction.
          </li>
          <li>
            <strong>Toggle pseudotiling:</strong> Use <code className="bg-muted rounded p-1">SUPER + P</code> to toggle pseudotiling for the active window.
          </li>
          <li>
            <strong>For a more minimal look:</strong> Set <code className="bg-muted rounded p-1">gaps_in = 0</code> and <code className="bg-muted rounded p-1">gaps_out = 0</code> to remove all gaps.
          </li>
          <li>
            <strong>For better screen space usage:</strong> Enable <code className="bg-muted rounded p-1">no_gaps_when_only = true</code> in both layouts.
          </li>
          <li>
            <strong>Create a gradient border:</strong> Use <code className="bg-muted rounded p-1">col.active_border = rgba(COLOR1) rgba(COLOR2) ANGLE</code> with your preferred colors.
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8">
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-center">
          <p className="text-sm">
            Please provide your layouts configuration file and I'll document it in detail.
          </p>
        </div>
      </div>
    </div>
  );
}
