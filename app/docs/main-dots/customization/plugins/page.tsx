export default function PluginsCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hyprland Plugins</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Extend Hyprland functionality with plugins
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          Hyprland supports plugins that can extend its functionality in various ways. This page covers how to install,
          configure, and use plugins with your Hyprland environment.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="plugin-basics">
          Plugin Basics
        </h2>
        <p>
          Plugins in Hyprland are loaded using the <code className="bg-muted rounded p-1">plugin</code> directive in your configuration.
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Example plugin loading
plugin {
    hyprbars {
        bar_color = rgb(2a2a2a)
        bar_height = 28
        col.text = rgb(eeeeee)
        background_color = rgb(111111)
        button_size = 10
        hyprbars-button = rgb(eeeeee), 12, 󰖭, hyprctl dispatch killactive
        hyprbars-button = rgb(eeeeee), 12, , hyprctl dispatch fullscreen 1
        hyprbars-button = rgb(eeeeee), 12, 󰖯, hyprctl dispatch movetoworkspacesilent special
    }
    
    hyprwinwrap {
        class = kitty-bg
    }
    
    borders-plus-plus {
        add_borders = 1
        col.border_1 = rgb(ffffff)
        col.border_2 = rgb(2222ff)
        border_size_1 = 5
        border_size_2 = 10
        natural_rounding = yes
    }
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="popular-plugins">
          Popular Plugins
        </h2>
        <p>
          Here are some popular plugins you might want to use with Hyprland:
        </p>
        
        <h3 className="text-xl font-semibold mt-4">hyprbars</h3>
        <p>
          Adds window titlebars with window control buttons.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">hyprwinwrap</h3>
        <p>
          Allows setting windows as wallpapers.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">borders-plus-plus</h3>
        <p>
          Enhances window borders with multiple border layers and additional customization.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">hyprland-plugins</h3>
        <p>
          A collection of various plugins maintained by the community.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="plugin-basics">
          HyprLuna Plugin Configuration
        </h2>
        <p>
          Here's the HyprLuna plugin configuration:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Plugin configuration
plugin {
    hyprbars {
        bar_height = 25
        hyprbars-button = rgb(ffffff), 13, , hyprctl dispatch killactive
        hyprbars-button = rgb(ffffff), 13, , hyprctl dispatch fullscreen 1
        hyprbars-button = rgb(ffffff), 13, 󰩨, hyprctl dispatch movetoworkspacesilent special
        bar_color = rgb(101010)
        col.text = rgb(ffffff)
        bar_text_font = Dama Pro Italic
        bar_text_size = 14
        bar_part_of_window = true
        position = top
    }
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="hyprbars-config">
          Hyprbars Configuration Breakdown
        </h2>
        <p>
          HyprLuna uses the Hyprbars plugin to add customized window titlebars:
        </p>
        
        <h3 className="text-xl font-semibold">Titlebar Appearance</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">bar_height = 25</code>: Sets the titlebar height to 25 pixels
          </li>
          <li>
            <code className="bg-muted rounded p-1">bar_color = rgb(101010)</code>: Sets a dark gray background color for the titlebar
          </li>
          <li>
            <code className="bg-muted rounded p-1">col.text = rgb(ffffff)</code>: Uses white text for the window title
          </li>
          <li>
            <code className="bg-muted rounded p-1">bar_text_font = Dama Pro Italic</code>: Uses the Dama Pro Italic font for the window title
          </li>
          <li>
            <code className="bg-muted rounded p-1">bar_text_size = 14</code>: Sets the title text size to 14 pixels
          </li>
          <li>
            <code className="bg-muted rounded p-1">bar_part_of_window = true</code>: Makes the titlebar part of the window rather than floating
          </li>
          <li>
            <code className="bg-muted rounded p-1">position = top</code>: Places the titlebar at the top of the window
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Window Control Buttons</h3>
        <p>
          HyprLuna configures three control buttons in the titlebar:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">hyprbars-button = rgb(ffffff), 13, , hyprctl dispatch killactive</code>: Close button with an 'X' icon
          </li>
          <li>
            <code className="bg-muted rounded p-1">hyprbars-button = rgb(ffffff), 13, , hyprctl dispatch fullscreen 1</code>: Fullscreen toggle button
          </li>
          <li>
            <code className="bg-muted rounded p-1">hyprbars-button = rgb(ffffff), 13, 󰩨, hyprctl dispatch movetoworkspacesilent special</code>: Button to move the window to a special workspace
          </li>
        </ul>
        <p className="mt-2">
          Each button is configured with:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>White color (rgb(ffffff))</li>
          <li>13 pixel size</li>
          <li>A unique icon from a Nerd Font</li>
          <li>A Hyprland command to execute when clicked</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="installing-hyprbars">
          Installing Hyprbars
        </h2>
        <p>
          To use the Hyprbars plugin as configured in HyprLuna, you'll need to:
        </p>
        <ol className="list-decimal pl-5 space-y-1 mt-2">
          <li>
            <strong>Install the plugin:</strong> You can install Hyprbars from its GitHub repository:
            <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
              <code>{`git clone https://github.com/hyprwm/hyprbars
cd hyprbars
sudo make install`}</code>
            </pre>
          </li>
          <li>
            <strong>Install required fonts:</strong> For the icons to display correctly, you need a Nerd Font installed. HyprLuna specifically uses Dama Pro Italic for text.
          </li>
          <li>
            <strong>Add the plugin configuration:</strong> Copy the plugin configuration to your <code className="bg-muted rounded p-1">hyprland.conf</code> file.
          </li>
          <li>
            <strong>Restart Hyprland:</strong> Use <code className="bg-muted rounded p-1">hyprctl reload</code> or restart your session.
          </li>
        </ol>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization-tips">
          Customization Tips
        </h2>
        <p>
          Here are some suggestions for customizing your Hyprbars plugin:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Change button icons:</strong> You can use any icon from Nerd Fonts by replacing the icon character in each <code className="bg-muted rounded p-1">hyprbars-button</code> definition.
          </li>
          <li>
            <strong>Customize button actions:</strong> Modify the <code className="bg-muted rounded p-1">hyprctl dispatch</code> commands to perform different actions when buttons are clicked.
          </li>
          <li>
            <strong>Add more buttons:</strong> Add additional <code className="bg-muted rounded p-1">hyprbars-button</code> entries for more functionality, such as minimizing or pinning windows.
          </li>
          <li>
            <strong>Change titlebar colors based on window state:</strong> Advanced users can create scripts that dynamically update titlebar colors based on window focus state or application type.
          </li>
          <li>
            <strong>Use gradients:</strong> Hyprbars supports gradient colors using the format <code className="bg-muted rounded p-1">bar_color = rgb(1a1a1a) rgb(2a2a2a) 45deg</code>.
          </li>
          <li>
            <strong>Move to bottom:</strong> Change <code className="bg-muted rounded p-1">position = bottom</code> to place the titlebar at the bottom of windows.
          </li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="other-plugins">
          Other Recommended Plugins
        </h2>
        <p>
          While not currently used in HyprLuna, these plugins can further enhance your Hyprland experience:
        </p>
        
        <h3 className="text-xl font-semibold mt-4">hyprwinwrap</h3>
        <p>
          Allows setting windows as wallpapers, perfect for video wallpapers or terminal displays.
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`plugin {
    hyprwinwrap {
        class = mpv-wallpaper
    }
}`}</code>
        </pre>
        
        <h3 className="text-xl font-semibold mt-4">borders-plus-plus</h3>
        <p>
          Enhances window borders with multiple layers and additional customization.
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`plugin {
    borders-plus-plus {
        add_borders = 1
        col.border_1 = rgb(ffffff)
        col.border_2 = rgb(2222ff)
        border_size_1 = 5
        border_size_2 = 10
        natural_rounding = yes
    }
}`}</code>
        </pre>
        
        <h3 className="text-xl font-semibold mt-4">hyprtrails</h3>
        <p>
          Adds trailing effects to your cursor movements for a more dynamic look.
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`plugin {
    hyprtrails {
        color = rgb(8839ef)
        trail_length = 10
        trail_resolution = 100
        trail_width = 5.0
    }
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-center">
          <p className="text-sm">
            Please provide your plugin configuration file and I'll document it in detail.
          </p>
        </div>
      </div>
    </div>
  )
} 