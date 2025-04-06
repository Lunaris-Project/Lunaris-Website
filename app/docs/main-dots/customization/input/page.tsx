export default function InputCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Input
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Configure keyboard, mouse, touchpad and other input devices
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="keyboard">
          Keyboard Configuration
        </h2>
        <p>
          HyprLuna provides comprehensive keyboard configuration settings that allow you to customize:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Keyboard layout and variant</li>
          <li>Key repeat rate and delay</li>
          <li>Modifiers behavior</li>
          <li>Advanced keyboard features</li>
        </ul>

        <p className="mt-3">
          Here's the default HyprLuna keyboard configuration:
        </p>

        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Keyboard configuration
input {
    kb_layout = us
    kb_variant =
    kb_model =
    kb_options = caps:escape
    kb_rules =

    # Enable capslock by pressing both shift keys
    # and disable it by pressing either of them
    capslock_disable = true

    # Repeat settings
    repeat_rate = 50
    repeat_delay = 300

    # Enable numlock by default
    numlock_by_default = true

    # Disable mousewheel on inactive windows
    follow_mouse = 1

    # Cursor position: center of new window
    force_no_accel = 0
}
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Layout Options</h3>
        <p>
          The keyboard layout settings determine which keyboard layout and variant to use:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">kb_layout</code>: Sets the keyboard layout (e.g., "us", "de", "fr")
          </li>
          <li>
            <code className="bg-muted rounded p-1">kb_variant</code>: Specifies layout variant (e.g., "dvorak", "colemak")
          </li>
          <li>
            <code className="bg-muted rounded p-1">kb_model</code>: Sets the keyboard model when needed for special keyboards
          </li>
          <li>
            <code className="bg-muted rounded p-1">kb_options</code>: Configures special options like remapping keys
          </li>
          <li>
            <code className="bg-muted rounded p-1">kb_rules</code>: Defines rules for your keyboard (typically left empty)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Special Features</h3>
        <p>
          HyprLuna enables some helpful keyboard features:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">capslock_disable = true</code>: Disables capslock when pressing either shift key
          </li>
          <li>
            <code className="bg-muted rounded p-1">numlock_by_default = true</code>: Enables the numpad by default
          </li>
          <li>
            <code className="bg-muted rounded p-1">repeat_rate = 50</code>: Sets how quickly keys repeat when held down
          </li>
          <li>
            <code className="bg-muted rounded p-1">repeat_delay = 300</code>: Delay before key repeat starts (300ms)
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="mouse">
          Mouse Configuration
        </h2>
        <p>
          Mouse settings in HyprLuna control cursor behavior, sensitivity, and accel:
        </p>

        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Mouse configuration
input {
    # Mouse sensitivity (relative to what you're used to)
    sensitivity = 0.0
    accel_profile = flat

    # Mouse tracking behavior
    follow_mouse = 1
    float_switch_override_focus = 1
}
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Mouse Settings Explained</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">sensitivity = 0.0</code>: Default mouse sensitivity (0 = no change from system settings)
          </li>
          <li>
            <code className="bg-muted rounded p-1">accel_profile = flat</code>: Disables mouse acceleration for 1:1 movement
          </li>
          <li>
            <code className="bg-muted rounded p-1">follow_mouse = 1</code>: Focus follows mouse cursor with a few exceptions
          </li>
          <li>
            <code className="bg-muted rounded p-1">float_switch_override_focus = 1</code>: Controls focus behavior with floating windows
          </li>
        </ul>

        <p className="mt-4">
          <strong>Note:</strong> The <code className="bg-muted rounded p-1">follow_mouse</code> option can be set to:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>0: Focus will not follow the mouse</li>
          <li>1: Focus will follow the mouse (default)</li>
          <li>2: Focus will follow the mouse, even when mouse enters a window</li>
          <li>3: Focus will follow the mouse strictly (even moving focus from a focused fullscreen window)</li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="touchpad">
          Touchpad Configuration
        </h2>
        <p>
          HyprLuna includes optimized settings for laptop touchpads with natural scrolling:
        </p>

        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Touchpad configuration
device {
    name = epic-mouse-v1
    sensitivity = -0.5
}

# Additional touchpad settings
input {
    touchpad {
        natural_scroll = true
        disable_while_typing = true
        tap-to-click = true
        drag_lock = true
        
        # Scrolling speed with two fingers
        scroll_factor = 0.5
    }
}
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Touchpad Features</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">natural_scroll = true</code>: Content follows finger direction (macOS-like)
          </li>
          <li>
            <code className="bg-muted rounded p-1">disable_while_typing = true</code>: Prevents accidental touchpad input while typing
          </li>
          <li>
            <code className="bg-muted rounded p-1">tap-to-click = true</code>: Enables tapping the touchpad to click
          </li>
          <li>
            <code className="bg-muted rounded p-1">drag_lock = true</code>: Allows lifting the finger while dragging
          </li>
          <li>
            <code className="bg-muted rounded p-1">scroll_factor = 0.5</code>: Adjusts two-finger scrolling speed
          </li>
        </ul>

        <p className="mt-3">
          For specific devices, you can set per-device settings using the device block as shown for "epic-mouse-v1".
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="gestures">
          Gesture Configuration
        </h2>
        <p>
          HyprLuna supports touchpad gestures for intuitive navigation:
        </p>

        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Gesture configuration
gestures {
    # Default workspace switching gestures
    workspace_swipe = true
    workspace_swipe_fingers = 3
    workspace_swipe_distance = 300
    workspace_swipe_invert = false
    workspace_swipe_min_speed_to_force = 30
    workspace_swipe_cancel_ratio = 0.5
    workspace_swipe_create_new = true
    workspace_swipe_forever = false
}
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Available Gestures</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe = true</code>: Enables swiping between workspaces
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_fingers = 3</code>: Requires 3 fingers for workspace swiping
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_distance = 300</code>: Distance in px to trigger a workspace switch
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_invert = false</code>: Direction matches finger movement
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_min_speed_to_force = 30</code>: Minimum swipe speed to force switch
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_cancel_ratio = 0.5</code>: How far to swipe to cancel the gesture
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_create_new = true</code>: Create new workspaces when swiping past last
          </li>
          <li>
            <code className="bg-muted rounded p-1">workspace_swipe_forever = false</code>: Whether to allow infinite workspace switching
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization-tips">
          Customization Tips
        </h2>
        <p>
          Here are some common input customizations for HyprLuna:
        </p>

        <h3 className="text-xl font-semibold mt-4">Multiple Keyboard Layouts</h3>
        <p>
          To configure multiple keyboard layouts with a switching hotkey:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`input {
    kb_layout = us,de,fr
    kb_options = grp:alt_shift_toggle
}
`}</code>
        </pre>
        <p className="mt-2">This allows switching between US, German, and French layouts using Alt+Shift.</p>

        <h3 className="text-xl font-semibold mt-4">Gaming Mouse Setup</h3>
        <p>
          For gaming mice, you may want to disable acceleration and adjust sensitivity:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`input {
    sensitivity = -0.2
    accel_profile = flat
    force_no_accel = true
}
`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-4">Per-Device Settings</h3>
        <p>
          You can configure different settings for specific input devices:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`device {
    name = logitech-mx-master-3
    sensitivity = -0.3
    accel_profile = adaptive
}

device {
    name = apple-touchpad
    sensitivity = 0.2
    natural_scroll = true
}
`}</code>
        </pre>
        <p className="mt-2">
          Find your device names using <code className="bg-muted rounded p-1">hyprctl devices</code> in the terminal.
        </p>
      </div>
    </div>
  );
} 