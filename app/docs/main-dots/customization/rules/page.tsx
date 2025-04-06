export default function RulesCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Window Rules
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Control window behavior and appearance with rules
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          Window rules in Hyprland allow you to control how specific applications behave. 
          You can define rules that affect window placement, size, transparency, workspace assignment, and much more.
        </p>
        <p className="mt-2">
          HyprLuna's modular configuration places window rules in separate files that are sourced by the main configuration.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="basic-configuration">
          Basic Configuration
        </h2>
        <p>Here's the default HyprLuna window rules configuration:</p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Window rules
windowrule = float, ^(pavucontrol)$
windowrule = float, ^(blueman-manager)$
windowrule = float, ^(nm-connection-editor)$
windowrule = float, ^(mediainfo-gui)$
windowrule = float, ^(lxappearance)$

# Dialogs and popups are always floating
windowrule = float, ^(dialog)$
windowrule = float, ^(download)$
windowrule = float, ^(notification)$
windowrule = float, ^(error)$
windowrule = float, ^(confirmreset)$
windowrule = float, title:^(Open File)$
windowrule = float, title:^(branchdialog)$
windowrule = float, title:^(Confirm to replace files)
windowrule = float, title:^(File Operation Progress)

# Set opacity for specific applications
windowrule = opacity 0.92, kitty
windowrule = opacity 0.96, firefox

# Application workspace assignments
windowrule = workspace 2, firefox
windowrule = workspace 2, chromium
windowrule = workspace 3, discord
windowrule = workspace 3, WebCord
windowrule = workspace 3, telegram-desktop
windowrule = workspace 4, Code
windowrule = workspace 5, ^(steam)$
windowrule = workspace 5, lutris
`}</code>
        </pre>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="rule-types">
          Rule Types
        </h2>
        <p>
          Hyprland supports two types of rules:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">windowrule</code>: for regular windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">windowrulev2</code>: enhanced rules with more flexibility
          </li>
        </ul>
        <p className="mt-2">
          The general syntax is:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`windowrule = RULE, TARGET
windowrulev2 = RULE, TARGET, ADDITIONAL_CONDITIONS`}</code>
        </pre>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="available-rules">
          Available Rules
        </h2>
        <p>
          Here are the most common rules you can apply:
        </p>

        <h3 className="text-xl font-semibold mt-4">Window State</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">float</code>: Make a window floating (not tiled)
          </li>
          <li>
            <code className="bg-muted rounded p-1">tile</code>: Force a window to be tiled
          </li>
          <li>
            <code className="bg-muted rounded p-1">fullscreen</code>: Make a window open in fullscreen
          </li>
          <li>
            <code className="bg-muted rounded p-1">maximize</code>: Maximize a window
          </li>
          <li>
            <code className="bg-muted rounded p-1">pseudo</code>: Create a pseudo-tiled window (resizable while tiled)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Appearance</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">opacity VALUE</code>: Set window opacity (e.g., <code className="bg-muted rounded p-1">opacity 0.8</code>)
          </li>
          <li>
            <code className="bg-muted rounded p-1">opaque</code>: Make a window fully opaque
          </li>
          <li>
            <code className="bg-muted rounded p-1">forcergbx</code>: Force the RGB color format (fixes some transparency issues)
          </li>
          <li>
            <code className="bg-muted rounded p-1">rounding VALUE</code>: Set corner rounding for a specific window
          </li>
          <li>
            <code className="bg-muted rounded p-1">noblur</code>: Disable background blur for a window
          </li>
          <li>
            <code className="bg-muted rounded p-1">noborder</code>: Disable window border
          </li>
          <li>
            <code className="bg-muted rounded p-1">noshadow</code>: Disable window shadow
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Position and Size</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">size WIDTHxHEIGHT</code>: Set default window size
          </li>
          <li>
            <code className="bg-muted rounded p-1">minsize WIDTHxHEIGHT</code>: Set minimum window size
          </li>
          <li>
            <code className="bg-muted rounded p-1">maxsize WIDTHxHEIGHT</code>: Set maximum window size
          </li>
          <li>
            <code className="bg-muted rounded p-1">center</code>: Center a window on the screen
          </li>
          <li>
            <code className="bg-muted rounded p-1">move X Y</code>: Set the window position
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Workspace Assignment</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">workspace N</code>: Assign a window to workspace N (e.g., <code className="bg-muted rounded p-1">workspace 3</code>)
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace name:NAME</code>: Assign a window to a named workspace
          </li>
          <li>
            <code className="bg-muted rounded p-1">monitor N</code>: Force a window to a specific monitor
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Other Rules</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">nofocus</code>: Prevent a window from receiving focus
          </li>
          <li>
            <code className="bg-muted rounded p-1">noanim</code>: Disable animations for a window
          </li>
          <li>
            <code className="bg-muted rounded p-1">idleinhibit BOOL</code>: Prevent idle system actions when this window is open
          </li>
          <li>
            <code className="bg-muted rounded p-1">pin</code>: Pin a window (appears on all workspaces)
          </li>
          <li>
            <code className="bg-muted rounded p-1">fakefullscreen</code>: Create a windowed fullscreen (like games in windowed fullscreen mode)
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="targeting-windows">
          Targeting Windows
        </h2>
        <p>
          You can target windows using different criteria:
        </p>

        <h3 className="text-xl font-semibold mt-4">Using RegEx</h3>
        <p>
          Regular expressions allow you to match window classes or titles:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Match the exact class "kitty"
windowrule = opacity 0.9, ^(kitty)$

# Match any window with "terminal" in the class name
windowrule = float, (terminal)
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Using V2 Rules</h3>
        <p>
          Enhanced V2 rules allow for more precise targeting:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Match Firefox, but only when it has "Settings" in the title
windowrulev2 = float, class:^(firefox)$, title:^(.*)Settings(.*)$

# Match any dialog in any application
windowrulev2 = float, class:.*, title:^(Open File)$
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Rule Conditions</h3>
        <p>
          V2 rules support these additional conditions:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">class:</code>: Match the window class
          </li>
          <li>
            <code className="bg-muted rounded p-1">title:</code>: Match the window title
          </li>
          <li>
            <code className="bg-muted rounded p-1">xwayland:</code>: Match only XWayland or native Wayland windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">floating:</code>: Match only floating or tiled windows
          </li>
          <li>
            <code className="bg-muted rounded p-1">fullscreen:</code>: Match based on fullscreen state
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration-tips">
          Configuration Tips
        </h2>
        <p>
          Here are some useful window rule configurations:
        </p>

        <h3 className="text-xl font-semibold mt-4">Multimedia Apps</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Make image viewer floating with specific size
windowrulev2 = float, class:^(imv)$
windowrulev2 = size 75% 75%, class:^(imv)$
windowrulev2 = center, class:^(imv)$

# Video players
windowrulev2 = float, class:^(mpv)$
windowrulev2 = size 70% 70%, class:^(mpv)$
windowrulev2 = center, class:^(mpv)$
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Game Rules</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Force Steam games to be fullscreen
windowrulev2 = fullscreen, class:^(steam_app_)

# Disable idle when gaming
windowrulev2 = idleinhibit always, class:^(steam_app_)
windowrulev2 = idleinhibit always, class:^(gamescope)$
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Dialogs and Notifications</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Make sure all notifications are floating
windowrulev2 = float, class:^(dunst)$
windowrulev2 = float, class:^(wired-notify)$

# File pickers and dialogs
windowrulev2 = float, title:^(Save As)$
windowrulev2 = float, title:^(Open File)$
windowrulev2 = size 50% 50%, title:^(Open File)$
windowrulev2 = center, title:^(Open File)$
`}</code>
        </pre>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="debugging-tips">
          Debugging Tips
        </h2>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            To identify window class and title for creating rules, use <code className="bg-muted rounded p-1">hyprctl clients</code>
          </li>
          <li>
            Test rules temporarily with <code className="bg-muted rounded p-1">hyprctl keyword windowrule "your rule here"</code>
          </li>
          <li>
            When using RegEx, remember to escape special characters with backslashes
          </li>
          <li>
            Rules are applied in order, so more specific rules should come after general ones
          </li>
          <li>
            If a rule doesn't work, try using windowrulev2 with more specific conditions
          </li>
        </ul>
      </div>
    </div>
  );
} 