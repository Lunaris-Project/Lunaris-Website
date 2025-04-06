export default function AnimationsCustomizationPage() {
  return (
    <div className="w-full max-w-full space-y-6">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Animations</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Customize Hyprland animations for a smooth desktop experience
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p className="w-full">
          Hyprland offers highly customizable animations that can enhance your desktop experience. HyprLuna comes with 
          a special animation profile called "Lunaric" which provides smooth, modern transitions for all window operations.
        </p>
        <p className="mt-2 w-full">
          In the modular configuration approach of HyprLuna, animations are defined in a separate file: 
          <code className="bg-muted rounded p-1">~/.config/hypr/hyprland/animations/Lunaric.conf</code>
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="lunaric-config">
          Lunaric Animation Configuration
        </h2>
        <p className="w-full">
          The Lunaric animation profile in HyprLuna provides a set of carefully tuned bezier curves and animations:
        </p>
        <div className="w-full overflow-x-auto">
          <pre className="rounded-md bg-muted p-4 text-sm mt-2">
            <code>{`animations {
    enabled = true
    # Animation curves

    bezier = linear, 0, 0, 1, 1
    bezier = md3_standard, 0.2, 0, 0, 1
    bezier = md3_decel, 0.05, 0.7, 0.1, 1
    bezier = md3_accel, 0.3, 0, 0.8, 0.15
    bezier = overshot, 0.05, 0.9, 0.1, 1.1
    bezier = crazyshot, 0.1, 1.5, 0.76, 0.92 
    bezier = hyprnostretch, 0.05, 0.9, 0.1, 1.0
    bezier = menu_decel, 0.1, 1, 0, 1
    bezier = menu_accel, 0.38, 0.04, 1, 0.07
    bezier = easeInOutCirc, 0.85, 0, 0.15, 1
    bezier = easeOutCirc, 0, 0.55, 0.45, 1
    bezier = easeOutExpo, 0.16, 1, 0.3, 1
    bezier = softAcDecel, 0.26, 0.26, 0.15, 1
    bezier = md2, 0.4, 0, 0.2, 1 # use with .2s duration

    # Animation configs
    animation = windows, 1, 3, md3_decel, popin 60%
    animation = windowsIn, 1, 3, md3_decel, popin 60%
    animation = windowsOut, 1, 3, md3_accel, popin 60%
    animation = border, 1, 10, default
    animation = fade, 1, 3, md3_decel
    animation = layers, 1, 2, md3_decel, slide
    animation = layersIn, 1, 3, menu_decel, slide
    animation = layersOut, 1, 1.6, menu_accel
    animation = fadeLayersIn, 1, 2, menu_decel
    animation = fadeLayersOut, 1, 4.5, menu_accel
    animation = workspaces, 1, 7, menu_decel, slide
    animation = workspaces, 1, 2.5, softAcDecel, slide
    animation = workspaces, 1, 7, menu_decel, slidefade 15%
    animation = specialWorkspace, 1, 3, md3_decel, slidefadevert 15%
    animation = specialWorkspace, 1, 3, md3_decel, slidevert
}`}</code>
          </pre>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="bezier-breakdown">
          Bezier Curve Breakdown
        </h2>
        <p className="w-full">
          Bezier curves define the timing and movement style of animations. Here's what each curve in Lunaric does:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2 w-full">
          <li>
            <strong>linear</strong>: A constant-speed curve with no easing
          </li>
          <li>
            <strong>md3_standard</strong>: Material Design 3 standard curve for most animations
          </li>
          <li>
            <strong>md3_decel</strong>: Material Design 3 deceleration curve, smooths out endings
          </li>
          <li>
            <strong>md3_accel</strong>: Material Design 3 acceleration curve, for quick starts
          </li>
          <li>
            <strong>overshot</strong>: Creates an effect that slightly overshoots the target before settling
          </li>
          <li>
            <strong>crazyshot</strong>: An exaggerated overshoot for more dramatic animations
          </li>
          <li>
            <strong>hyprnostretch</strong>: Similar to overshot but without the stretching effect
          </li>
          <li>
            <strong>menu_decel/menu_accel</strong>: Specialized for menu animations
          </li>
          <li>
            <strong>easeInOutCirc/easeOutCirc</strong>: Circular easing functions for smooth transitions
          </li>
          <li>
            <strong>easeOutExpo</strong>: Exponential ease-out for quick start, gradual end
          </li>
          <li>
            <strong>softAcDecel</strong>: Soft acceleration-deceleration curve
          </li>
          <li>
            <strong>md2</strong>: Material Design 2 curve, optimized for 0.2s durations
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="animation-types">
          Animation Types
        </h2>
        <p className="w-full">
          Lunaric configures specific animations for different window events:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2 w-full">
          <li>
            <strong>windows</strong>: General window animations use the <code className="bg-muted rounded p-1">md3_decel</code> curve with a 60% pop-in effect
          </li>
          <li>
            <strong>windowsIn/windowsOut</strong>: Specialized animations for window creation and destruction
          </li>
          <li>
            <strong>border</strong>: Border animations use the default curve with a longer duration (10)
          </li>
          <li>
            <strong>fade</strong>: Fade animations use the <code className="bg-muted rounded p-1">md3_decel</code> curve
          </li>
          <li>
            <strong>layers/layersIn/layersOut</strong>: Animations for layer changes (like when opening overlay menus)
          </li>
          <li>
            <strong>fadeLayersIn/fadeLayersOut</strong>: Fade animations specifically for layers
          </li>
          <li>
            <strong>workspaces</strong>: Multiple workspace switching animations are defined, using different curves and effects:
            <ul className="list-disc pl-5 mt-1 w-full">
              <li>A smooth slide with <code className="bg-muted rounded p-1">menu_decel</code> curve (duration: 7)</li>
              <li>A quicker slide using <code className="bg-muted rounded p-1">softAcDecel</code> curve (duration: 2.5)</li>
              <li>A slide with fade effect (15%) using <code className="bg-muted rounded p-1">menu_decel</code> curve</li>
            </ul>
          </li>
          <li>
            <strong>specialWorkspace</strong>: Animations for special workspaces with vertical slide effects
          </li>
        </ul>
        <p className="mt-2 w-full">
          <strong>Note:</strong> Having multiple definitions for the same animation type (like workspaces) allows for different animations based on the context.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="material-design">
          Material Design Influence
        </h2>
        <p className="w-full">
          The Lunaric animation profile is heavily influenced by Material Design principles, with many curves 
          based on Material Design 3 specifications:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2 w-full">
          <li>
            <strong>md3_standard</strong>, <strong>md3_decel</strong>, and <strong>md3_accel</strong> are direct implementations of Material Design 3 motion curves
          </li>
          <li>
            <strong>md2</strong> references the older Material Design 2 specification
          </li>
          <li>
            The overall animation timing and style creates a cohesive, modern feel consistent with contemporary design principles
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization">
          Customization Tips
        </h2>
        <p className="w-full">
          Here are some suggestions for customizing Lunaric animations:
        </p>
        <ul className="list-disc pl-5 space-y-1 w-full">
          <li>
            <strong>Adjust animation speed:</strong> The third parameter in each animation definition controls its duration (lower = faster).
            For example, change <code className="bg-muted rounded p-1">animation = windows, 1, 3, md3_decel, popin 60%</code> to 
            <code className="bg-muted rounded p-1">animation = windows, 1, 2, md3_decel, popin 60%</code> for faster window animations.
          </li>
          <li>
            <strong>Change animation style:</strong> Replace the bezier curve name to change the animation feel. 
            For example, try <code className="bg-muted rounded p-1">animation = windows, 1, 3, crazyshot, popin 60%</code> for more dramatic window animations.
          </li>
          <li>
            <strong>Adjust pop-in amount:</strong> The percentage in <code className="bg-muted rounded p-1">popin 60%</code> can be adjusted to make windows appear from a smaller or larger initial size.
          </li>
          <li>
            <strong>Create custom bezier curves:</strong> Define your own curves with 
            <code className="bg-muted rounded p-1">bezier = customName, x1, y1, x2, y2</code> where the four parameters control the curve shape.
          </li>
          <li>
            <strong>Switch animation profiles:</strong> HyprLuna's modular system lets you easily switch between different animation sets.
            Edit your main <code className="bg-muted rounded p-1">hyprland.conf</code> to source a different file like 
            <code className="bg-muted rounded p-1">source=~/.config/hypr/hyprland/animations/Smooth.conf</code>.
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="performance">
          Performance Considerations
        </h2>
        <p className="w-full">
          While animations enhance the visual experience, they can impact performance on older hardware. Here are some tips:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2 w-full">
          <li>
            Reduce animation complexity by using simpler bezier curves like <code className="bg-muted rounded p-1">linear</code>
          </li>
          <li>
            Decrease animation duration by using lower values for the third parameter in animation definitions
          </li>
          <li>
            Remove the duplicated workspace animations if you don't need the variation
          </li>
          <li>
            If needed, disable animations entirely with <code className="bg-muted rounded p-1">{`animations { enabled = false }`}</code>
          </li>
          <li>
            For specific high-performance scenarios, create a minimal animation profile with only essential animations
          </li>
        </ul>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-md w-full">
          <p className="text-sm">
            <strong>Note:</strong> The Lunaric animation profile is designed to work well with HyprLuna's overall aesthetic and other configuration components.
            If you modify it, consider how the changes will interact with window decoration settings, transitions, and general feel of the desktop.
          </p>
        </div>
      </div>
    </div>
  );
}


