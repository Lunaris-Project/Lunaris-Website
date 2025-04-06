export default function HyprlockCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hyprlock Customization</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Configure your lockscreen with Hyprlock
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          Hyprlock is the official lockscreen solution for Hyprland. It offers a customizable and secure way to lock your system
          while maintaining the aesthetic of your desktop environment.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration-file">
          Configuration File
        </h2>
        <p>
          Hyprlock's configuration is stored in <code className="bg-muted rounded p-1">~/.config/hypr/hyprlock.conf</code>. 
          This file controls the appearance and behavior of your lockscreen.
        </p>
        <p className="mt-2">
          The configuration is divided into several sections that control different aspects of the lockscreen:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>General settings</li>
          <li>Background configuration</li>
          <li>Input fields customization</li>
          <li>Labels and text</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="basic-configuration">
          Basic Configuration
        </h2>
        <p>
          Here's the HyprLuna hyprlock configuration that creates a beautiful lockscreen:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Font and color variables
$PMF = Speculum
$SMF = Departure Mono
$SMFS = 14
$FCOL1 = rgba(235, 215, 225, 1.0)
$WTEMP = metar get | sed 's/, /,/' | awk -v FS="Temperature: " 'NF>1{print $2}' | rev | cut -f1 -d"(" | rev | cut -f1 -d"C" | xargs
$CTEMP = echo "$(cat /sys/class/thermal/thermal_zone2/temp)/1000" | bc 
$LOAD = top -bn1 | grep "Cpu(s)" | \sed "s/.*, *\([0-9.]*\)%* id.*/\\1/" | awk '{print 100 - $1"%"}'
$WTHR = metar get | head -1 | cut -d'(' -f1

# BACKGROUND
background {
    monitor =
     path = /home/nixev/Pictures/Wallpapers/voyager-16.jpg
    blur_passes = 3
    blur_size = 3
    noise = 0.05
    contrast = 1
    brightness = 0.8
    vibrancy = 0.2
    vibrancy_darkness = 0.2
}

# GENERAL
general {
    no_fade_in = true
    no_fade_out = true
    hide_cursor = true
    grace = 0
    disable_loading_bar = true
}

# INPUT FIELD
input-field {
    monitor = 
    size = 300, 50
    outline_thickness = 2
    dots_size = 0.2 # Scale of input-field height, 0.2 - 0.8
    dots_spacing = 0.5 # Scale of dots' absolute size, 0.0 - 1.0
    dots_center = true
    dots_text_format = <b>*</b>
    outer_color = rgba(0, 0, 0, 0)
    inner_color = rgba(225, 215, 244, 0.2)
    font_color = rgba(205, 214, 244, 1)
    font_family = JetBrainsMono Nerd Font Mono
    font_size = 30
    fade_on_empty = false
    rounding = 0
    check_color = rgb(204, 136, 34)
    placeholder_text = <b><span foreground="##cdd6f4">...</span></b>
    fail_text = <b><span>!!!</span></b> 
    hide_input = false 
    position = 0, -120
    halign = center
    valign = center
}

# DATE
label {
  monitor = 
  text = cmd[update:1000] echo "<span fgalpha='75%'>$(date +"%D")</span>"
  color = $FCOL1
  font_size = 60
  font_family = $PMF
  shadow_passes = 2
  shadow_size = 2
  shadow_color = rgb(160,160,160)
  position = 355, -35
  text_align = right
  halign = center
  valign = center
}

# TIME
label {
  monitor = 
  text = cmd[update:1000] echo "$(date +"%H//%M//%S")"
  color = $FCOL1
  font_size = 110
  font_family = $PMF
  shadow_passes = 2
  shadow_size = 2
  shadow_color = rgb(160,160,160)
  position = 0, 70
  text_align = center
  halign = center
  valign = center
}

############################################
#	      CPU info
############################################

# cpu temp / load
label {
  monitor = 
  text = cmd[update:5000] echo "$($CTEMP)°C :CPU Temp<br/>$($LOAD) :CPU Load"
  color = $FCOL1 
  font_size = $SMFS
  font_family = $SMF
  shadow_passes = 2
  shadow_size = 2
  shadow_color = rgb(160,160,160)  
  position = -1120, -120
  text_align = right
  halign = right
  valign = center
}

##########################################
#	       Weather Module
##########################################

# temp in celsius & conditions
label {
  monitor = 
  text = cmd[] echo "Temp: $($WTEMP)°C<br/>Location: $($WTHR)"
  color = $FCOL1
  font_size = $SMFS
  font_family = $SMF
  shadow_passes = 2
  shadow_size = 2
  shadow_color = rgb(160,160,160)  
  position = 1120, -120
  text_align = left
  halign = left
  valign = center
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration-breakdown">
          Configuration Breakdown
        </h2>
        
        <h3 className="text-xl font-semibold">Variables</h3>
        <p>
          The configuration uses variables for easy customization:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">$PMF</code> and <code className="bg-muted rounded p-1">$SMF</code>: Font families for primary and secondary elements
          </li>
          <li>
            <code className="bg-muted rounded p-1">$SMFS</code>: Font size for secondary elements
          </li>
          <li>
            <code className="bg-muted rounded p-1">$FCOL1</code>: Primary text color
          </li>
          <li>
            Shell commands for dynamic content:
            <ul className="list-disc pl-5 mt-1">
              <li><code className="bg-muted rounded p-1">$WTEMP</code>: Current weather temperature</li>
              <li><code className="bg-muted rounded p-1">$CTEMP</code>: CPU temperature</li>
              <li><code className="bg-muted rounded p-1">$LOAD</code>: CPU load percentage</li>
              <li><code className="bg-muted rounded p-1">$WTHR</code>: Weather conditions</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Background</h3>
        <p>
          The background section configures a blurred, slightly modified wallpaper:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Uses a specific wallpaper image</li>
          <li>Applies moderate blur (3 passes with size 3)</li>
          <li>Adds light noise (0.05) for texture</li>
          <li>Adjusts brightness to 80% of original</li>
          <li>Adds vibrancy effect for more dynamic colors</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">General Settings</h3>
        <p>
          The general settings focus on a clean, immediate lock experience:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Disables fade animations (immediate lock/unlock)</li>
          <li>Hides cursor for a cleaner look</li>
          <li>Sets grace period to 0 (locks immediately)</li>
          <li>Disables the loading bar</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Input Field</h3>
        <p>
          The password input field is configured for both style and usability:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>300×50 pixel size</li>
          <li>Subtle 2px outline</li>
          <li>Customized password dots (centered, bold asterisks)</li>
          <li>Semi-transparent background (rgba(225, 215, 244, 0.2))</li>
          <li>JetBrains Mono font for clear text input</li>
          <li>Position slightly above center (0, -120)</li>
          <li>Custom placeholder and failure messages</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="info-labels">
          Dynamic Information Labels
        </h2>
        <p>
          The lockscreen displays multiple information labels with live data:
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Clock and Date</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Large centered time display (110px) in format HH//MM//SS</li>
          <li>Smaller date display with reduced opacity for subtlety</li>
          <li>Both use the Speculum font with subtle shadows for readability</li>
          <li>Time updates every second using <code className="bg-muted rounded p-1">cmd[update:1000]</code></li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4">System Information</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>CPU temperature and load displayed in the bottom-left corner</li>
          <li>Updates every 5 seconds using shell commands</li>
          <li>Uses the secondary font (Departure Mono) at smaller size</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4">Weather Information</h3>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Current temperature and location displayed in the bottom-right corner</li>
          <li>Data obtained using the <code className="bg-muted rounded p-1">metar</code> command</li>
          <li>Formatted with HTML tags for line breaks and styling</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customization-tips">
          Customization Tips
        </h2>
        <p>
          To personalize this lockscreen for your system:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Change the wallpaper:</strong> Modify the <code className="bg-muted rounded p-1">path</code> in the background section to use your preferred image.
          </li>
          <li>
            <strong>Adjust fonts:</strong> Replace the font variables (<code className="bg-muted rounded p-1">$PMF</code> and <code className="bg-muted rounded p-1">$SMF</code>) with fonts installed on your system.
          </li>
          <li>
            <strong>Fix weather module:</strong> The weather module requires the <code className="bg-muted rounded p-1">metar</code> command. If not installed, modify or remove this section.
          </li>
          <li>
            <strong>CPU temperature:</strong> The CPU temperature reading might need adjustment based on your system. Check the path <code className="bg-muted rounded p-1">/sys/class/thermal/thermal_zone2/temp</code> and modify if necessary.
          </li>
          <li>
            <strong>Position elements:</strong> Adjust the <code className="bg-muted rounded p-1">position</code>, <code className="bg-muted rounded p-1">halign</code>, and <code className="bg-muted rounded p-1">valign</code> values to fit your display resolution.
          </li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="troubleshooting">
          Troubleshooting
        </h2>
        <p>
          If you encounter issues with Hyprlock:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Run Hyprlock manually from a terminal to see any error messages</li>
          <li>Check your configuration file for syntax errors</li>
          <li>Make sure image paths are correct and accessible</li>
          <li>Verify that shell commands used in labels work when run directly in terminal</li>
        </ul>
      </div>
    </div>
  )
} 