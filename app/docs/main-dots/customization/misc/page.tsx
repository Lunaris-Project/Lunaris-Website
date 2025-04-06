export default function MiscCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Miscellaneous Settings
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Additional Hyprland configuration options and tweaks
        </p>
      </div>

      <div className="space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="introduction"
        >
          Introduction
        </h2>
        <p>
          This section covers various configuration options that don't fit into
          the other categories. These include general behavior settings,
          XWayland preferences, cursor options, and other miscellaneous tweaks
          for Hyprland.
        </p>
      </div>

      <div className="space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="basic-configuration"
        >
          HyprLuna Miscellaneous Configuration
        </h2>
        <p>Here's the HyprLuna miscellaneous configuration:</p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# XWayland settings
xwayland {
    force_zero_scaling = true
}

# Misc settings
misc {
    force_default_wallpaper = 0
    disable_hyprland_logo = true
    disable_splash_rendering = true
    key_press_enables_dpms = true
    mouse_move_enables_dpms = true
    animate_manual_resizes = true
    enable_swallow = false
    focus_on_activate = true
    vfr = true
    vrr = 2
}
`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="misc-breakdown"
        >
          Configuration Breakdown
        </h2>

        <h3 className="text-xl font-semibold">XWayland Settings</h3>
        <p>Configuration for XWayland compatibility:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">
              force_zero_scaling = true
            </code>
            : Forces XWayland applications to run without scaling, which can
            improve compatibility with some applications
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Misc Settings</h3>
        <p>Various tweaks and optimizations:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">
              force_default_wallpaper = 0
            </code>
            : Disables the default Hyprland wallpaper
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              disable_hyprland_logo = true
            </code>
            : Removes the Hyprland logo from appearing
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              disable_splash_rendering = true
            </code>
            : Disables the splash screen
          </li>
          <li>
            <code className="bg-muted rounded p-1">key_press_enables_dpms</code>{" "}
            and{" "}
            <code className="bg-muted rounded p-1">
              mouse_move_enables_dpms = true
            </code>
            : Allow waking the display with keyboard or mouse
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              animate_manual_resizes = true
            </code>
            : Adds animations when manually resizing windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">enable_swallow = false</code>
            : Disables window swallowing (terminal windows absorbing child
            windows)
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              focus_on_activate = true
            </code>
            : Automatically focuses windows that request attention
          </li>
          <li>
            <code className="bg-muted rounded p-1">vfr = true</code>: Enables
            Variable Frame Rate for smoother animations and potential power
            savings
          </li>
          <li>
            <code className="bg-muted rounded p-1">vrr = 2</code>: Configures
            Variable Refresh Rate (2 = full variable refresh rate when possible)
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="autostart"
        >
          Autostart Applications
        </h2>
        <p>
          HyprLuna automatically starts several applications for a complete
          desktop experience:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">rofi</code>: Application
            launcher
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              gsettings set org.gnome.desktop.interface cursor-theme 'default'
            </code>
            : Sets the cursor theme
          </li>
          <li>
            <code className="bg-muted rounded p-1">~/.config/hypr/xdg.py</code>:
            Custom XDG portal configuration script
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              /usr/lib/polkit-kde-authentication-agent-1
            </code>
            : Authentication agent for system operations
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              ~/.config/hypr/restart-waybar
            </code>
            : Script to start the Waybar panel
          </li>
          <li>
            <code className="bg-muted rounded p-1">swww init</code>: Initializes
            the wallpaper manager
          </li>
          <li>
            <code className="bg-muted rounded p-1">hypridle</code>: Screen
            locking and power management
          </li>
          <li>
            <code className="bg-muted rounded p-1">copyq</code>: Clipboard
            manager
          </li>
          <li>
            <code className="bg-muted rounded p-1">udiskie</code>: Automounter
            for removable media
          </li>
          <li>
            <code className="bg-muted rounded p-1">
              swww img ~/Pictures/Wallpapers/voyager-16.jpg
            </code>
            : Sets the wallpaper
          </li>
          <li>
            <code className="bg-muted rounded p-1">dunst</code>: Notification
            daemon
          </li>
          <li>
            <code className="bg-muted rounded p-1">wl-paste</code> with{" "}
            <code className="bg-muted rounded p-1">cliphist</code>: Clipboard
            history management
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="customization-tips"
        >
          Customization Tips
        </h2>
        <p>
          Here are some suggestions for customizing your miscellaneous settings:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Enable window swallowing:</strong> Set{" "}
            <code className="bg-muted rounded p-1">enable_swallow = true</code>{" "}
            and{" "}
            <code className="bg-muted rounded p-1">
              swallow_regex = ^(kitty)$
            </code>{" "}
            to make terminal absorb launched applications.
          </li>
          <li>
            <strong>Disable VFR for better compatibility:</strong> Some
            applications work better with consistent frame rates, set{" "}
            <code className="bg-muted rounded p-1">vfr = false</code> if you
            notice issues.
          </li>
          <li>
            <strong>Customize keybindings:</strong> Modify the key bindings to
            match your workflow or add additional bindings for frequently used
            applications.
          </li>
          <li>
            <strong>Add workspace bindings:</strong> Create bindings like{" "}
            <code className="bg-muted rounded p-1">
              bind = $mainMod, 1, workspace, 1
            </code>{" "}
            to quickly switch between workspaces.
          </li>
          <li>
            <strong>Adjust autostart applications:</strong> Modify the{" "}
            <code className="bg-muted rounded p-1">exec-once</code> entries to
            start your preferred applications at login.
          </li>
          <li>
            <strong>Create status notifications:</strong> Add{" "}
            <code className="bg-muted rounded p-1">
              exec-once = ~/.config/hypr/scripts/statusbar
            </code>{" "}
            to show notifications for volume and brightness changes.
          </li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-center">
        <p className="text-sm">
          Please provide your miscellaneous configuration settings and I'll
          document them in detail.
        </p>
      </div>
    </div>
  );
}
