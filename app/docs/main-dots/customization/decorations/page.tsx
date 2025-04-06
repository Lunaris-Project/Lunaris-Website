import { CodeBlock } from "@/components/code-block";

export default function DecorationsCustomizationPage() {
  return (
    <div className="w-full max-w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          Decorations
        </h1>
        <p className="text-lg text-muted-foreground">
          Customize window borders, shadows, and visual effects
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="introduction"
        >
          Introduction
        </h2>
        <p className="w-full">
          Hyprland offers extensive customization options for window
          decorations, including borders, shadows, rounded corners, and blur
          effects. This page covers HyprLuna's decoration configurations and how
          to customize them to your liking.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="decoration-config"
        >
          Decoration Configuration
        </h2>
        <p className="w-full">
          The decoration configuration in Hyprland controls the appearance of
          window borders, shadows, rounded corners, and more. Here's the
          HyprLuna default decoration configuration:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`
decoration {
    rounding = 16

    blur {
        enabled = true
        xray = true
        size = 7
        vibrancy_darkness = 3.0
        passes = 4
        vibrancy = 0.1796
    }

}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="rounding"
        >
          Rounded Corners
        </h2>
        <p className="w-full">
          The <code>rounding</code> parameter controls the radius of window
          corners in pixels:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`decoration {
    rounding = 12  # Radius in pixels for rounded corners
}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          A value of <code>0</code> disables rounded corners (square windows),
          while higher values create more rounded corners.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="blur"
        >
          Blur Effects
        </h2>
        <p className="w-full">
          The <code>blur</code> section controls background blur for transparent
          windows:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`decoration {
    blur {
        enabled = true    # Enable blur effects for transparent windows
        size = 3          # Size of the blur (higher values = more blur)
        passes = 1        # Number of blur passes (higher = stronger but more performance impact)
        vibrancy = 0.1696 # Adds a subtle vibrancy effect to the blur
    }
}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          For better performance, consider reducing <code>size</code> or{" "}
          <code>passes</code> values. For a stronger blur effect, increase these
          values. The <code>vibrancy</code> parameter adds color saturation to
          blurred areas.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="opacity"
        >
          Window Opacity
        </h2>
        <p className="w-full">
          Window opacity is controlled by these parameters:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`decoration {
    active_opacity = 1.0         # Opacity of the active (focused) window
    inactive_opacity = 1.0       # Opacity of inactive windows
    fullscreen_opacity = 1.0     # Opacity of fullscreen windows
}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          Values range from <code>0.0</code> (completely transparent) to{" "}
          <code>1.0</code> (fully opaque). By default, HyprLuna uses fully
          opaque windows, but you can adjust these for a more transparent look.
          For example, setting <code>inactive_opacity = 0.9</code> would make
          unfocused windows slightly transparent.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="shadows"
        >
          Drop Shadows
        </h2>
        <p className="w-full">
          Window shadows are configured with these parameters:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`decoration {
    drop_shadow = true            # Enable drop shadows
    shadow_range = 4              # Size of the shadow in pixels
    shadow_render_power = 3       # How the shadow is rendered (1-4, higher = sharper)
    shadow_ignore_window = true   # Shadow below the window instead of including window
    col.shadow = rgba(1a1a1aee)   # Color of shadow for active windows
    col.shadow_inactive = rgba(1a1a1aee)  # Color of shadow for inactive windows
    shadow_offset = 0 0           # X and Y offset for the shadow
    shadow_scale = 1.0            # Scale of the shadow
}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          Shadows add depth to your desktop environment, making windows appear
          to float above the background. Adjust <code>shadow_range</code> and{" "}
          <code>shadow_render_power</code> to control how prominent the shadows
          appear.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="dimming"
        >
          Window Dimming
        </h2>
        <p className="w-full">
          Window dimming is controlled by these parameters:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`decoration {
    dim_inactive = false        # Whether to dim inactive windows
    dim_strength = 0.1          # How much to dim inactive windows (0.0 - 1.0)
    dim_special = 0.2           # How much to dim special windows (0.0 - 1.0)
    dim_around = 0.4            # How much to dim the screen around fullscreen windows
}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          Dimming helps focus on the active window by reducing the brightness of
          inactive windows. In HyprLuna, it's disabled by default, but you can
          enable it for a more focused workflow.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="screen-shader"
        >
          Screen Shader
        </h2>
        <p className="w-full">
          The <code>screen_shader</code> parameter allows for custom GLSL
          fragment shaders:
        </p>
        <div className="w-full overflow-x-auto">
          <CodeBlock
            code={`decoration {
    screen_shader = ~/.config/hypr/shaders/vibrance.frag  # Path to a fragment shader file
}`}
            filename=".config/hypr/hyprland/decorations/default.conf"
            showLineNumbers={true}
          />
        </div>
        <p className="w-full">
          This is an advanced feature that lets you apply custom shaders to your
          entire screen. It's currently empty in HyprLuna but can be used for
          effects like color correction, blue light filtering, or other visual
          enhancements.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2
          className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
          id="customization-tips"
        >
          Customization Tips
        </h2>
        <p className="w-full">
          Here are some tips for customizing your window decorations:
        </p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground w-full">
          <li>
            Increase <code>shadow_range</code> and use a more transparent shadow
            color for a subtle, elegant look
          </li>
          <li>
            Try enabling <code>dim_inactive</code> with a low{" "}
            <code>dim_strength</code> for better focus
          </li>
          <li>
            If performance is an issue, disable blur or reduce blur passes
          </li>
          <li>
            Use higher rounding values (16-20px) for a more modern, rounded
            aesthetic
          </li>
          <li>
            For a flat design, set <code>rounding = 0</code> and{" "}
            <code>drop_shadow = false</code>
          </li>
          <li>
            Create contrast between active and inactive windows with different
            opacity values (e.g., <code>active_opacity = 1.0</code> and{" "}
            <code>inactive_opacity = 0.95</code>)
          </li>
        </ul>
      </div>
    </div>
  );
}
