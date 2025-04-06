export default function HypridleCustomizationPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Hypridle Customization</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Configure system idle behavior with Hypridle
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          Hypridle is the official idle daemon for Hyprland. It allows you to configure automated actions 
          based on system idle time, such as screen dimming, locking, and power management.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration-file">
          Configuration File
        </h2>
        <p>
          Hypridle's configuration is stored in <code className="bg-muted rounded p-1">~/.config/hypr/hypridle.conf</code>. 
          This file controls when and how your system responds to idle time.
        </p>
        <p className="mt-2">
          The configuration consists of two main parts:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><code className="bg-muted rounded p-1">general</code> - overall settings</li>
          <li><code className="bg-muted rounded p-1">listener</code> - individual actions triggered at specific idle times</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="basic-configuration">
          Basic Configuration
        </h2>
        <p>
          Here's the HyprLuna hypridle configuration that manages system idle behavior:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# General settings and commands to execute at different states
general {
    lock_cmd = pidof hyprlock || hyprlock       # avoid starting multiple hyprlock instances.
    before_sleep_cmd = loginctl lock-session    # lock before suspend.
    after_sleep_cmd = hyprctl dispatch dpms on  # to avoid having to press a key twice to turn on the display.
}

# Dim screen after 2.5 minutes of inactivity
listener {
    timeout = 150                                # 2.5min.
    on-timeout = brightnessctl -s set 10         # set monitor backlight to minimum, avoid 0 on OLED monitor.
    on-resume = brightnessctl -r                 # monitor backlight restore.
}

# Lock screen after 5 minutes of inactivity
listener {
    timeout = 300                                 # 5min
    on-timeout = loginctl lock-session            # lock screen when timeout has passed
}

# Turn off display after 5.5 minutes
listener {
    timeout = 330                                 # 5.5min
    on-timeout = hyprctl dispatch dpms off        # screen off when timeout has passed
    on-resume = hyprctl dispatch dpms on          # screen on when activity is detected after timeout has fired.
}

# Suspend system after 30 minutes
listener {
    timeout = 1800                                # 30min
    on-timeout = systemctl suspend                # suspend pc
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration-breakdown">
          Configuration Breakdown
        </h2>
        
        <h3 className="text-xl font-semibold">General Section</h3>
        <p>
          The <code className="bg-muted rounded p-1">general</code> section defines commands to execute at different system states:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            <code className="bg-muted rounded p-1">lock_cmd</code>: Uses <code className="bg-muted rounded p-1">pidof</code> to check if hyprlock is already running before starting it, preventing multiple instances.
          </li>
          <li>
            <code className="bg-muted rounded p-1">before_sleep_cmd</code>: Locks the session before the system goes to sleep.
          </li>
          <li>
            <code className="bg-muted rounded p-1">after_sleep_cmd</code>: Turns the display back on after waking from sleep, preventing the need to press a key twice.
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Idle Timeline</h3>
        <p>
          The configuration sets up a progressive idle timeline:
        </p>
        
        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-sm text-left border">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th scope="col" className="px-6 py-3">Time</th>
                <th scope="col" className="px-6 py-3">Action</th>
                <th scope="col" className="px-6 py-3">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4">2.5 minutes (150s)</td>
                <td className="px-6 py-4">Dim screen (10% brightness)</td>
                <td className="px-6 py-4">Power saving, indication of inactivity</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">5 minutes (300s)</td>
                <td className="px-6 py-4">Lock session</td>
                <td className="px-6 py-4">Security, prevent unauthorized access</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-4">5.5 minutes (330s)</td>
                <td className="px-6 py-4">Turn off display (DPMS off)</td>
                <td className="px-6 py-4">Energy saving, extend display life</td>
              </tr>
              <tr>
                <td className="px-6 py-4">30 minutes (1800s)</td>
                <td className="px-6 py-4">Suspend system</td>
                <td className="px-6 py-4">Maximum power saving</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          This progressive approach provides a balance between usability and power efficiency:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2 text-sm text-muted-foreground">
          <li>Short inactivity causes minimal interruption (just dimming)</li>
          <li>Medium inactivity secures the system (locking)</li>
          <li>Extended inactivity maximizes power saving (suspending)</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="brightness-handling">
          Brightness Handling
        </h2>
        <p>
          Note the careful handling of brightness with <code className="bg-muted rounded p-1">brightnessctl</code>:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            The configuration avoids setting brightness to 0% (<code className="bg-muted rounded p-1">set 10</code>), which is important for OLED displays
            to prevent potential damage.
          </li>
          <li>
            When activity is detected, <code className="bg-muted rounded p-1">brightnessctl -r</code> restores the previous brightness rather than
            setting a fixed value, preserving user preference.
          </li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="timeout-options">
          Timeout Options
        </h2>
        <p>
          You can configure different actions at various timeout thresholds:
        </p>
        
        <h3 className="text-xl font-semibold mt-5">Screen Dimming</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`listener {
    timeout = 300 # 5 minutes
    on-timeout = brightnessctl -s set 20%
    on-resume = brightnessctl -s set 100%
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Screen Locking</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`listener {
    timeout = 600 # 10 minutes
    on-timeout = hyprlock
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Display Power Management</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Turn off displays after 15 minutes
listener {
    timeout = 900 # 15 minutes
    on-timeout = hyprctl dispatch dpms off
    on-resume = hyprctl dispatch dpms on
}`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">System Suspension</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Suspend after 20 minutes
listener {
    timeout = 1200 # 20 minutes
    on-timeout = systemctl suspend
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="advanced-configuration">
          Advanced Configuration
        </h2>
        <p>
          Here's a more advanced configuration with additional features:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`general {
    idle_timeout = 300 # 5 minutes
    lock_cmd = hyprlock
    unlock_cmd = notify-send "Welcome back!"
    
    # Prevent locking when watching videos or listening to music
    ignore_dbus_inhibit = false
    
    # Additional options
    max_history_size = 10 # Maximum amount of logged events
}

# Show notification at initial idle
listener {
    timeout = 290 # Just before idle_timeout
    on-timeout = notify-send "System will idle soon" "Moving the mouse will reset the timer"
}

# Dim screen at idle (before locking)
listener {
    timeout = 300 # 5 minutes
    on-timeout = brightnessctl -s set 40%
    on-resume = brightnessctl -s set 100%
}

# Dim further after another minute
listener {
    timeout = 360 # 6 minutes
    on-timeout = brightnessctl -s set 20%
    on-resume = brightnessctl -s set 100%
}

# Lock screen
listener {
    timeout = 600 # 10 minutes
    on-timeout = hyprlock
}

# Turn off displays after locking
listener {
    timeout = 660 # 11 minutes
    on-timeout = hyprctl dispatch dpms off
    on-resume = hyprctl dispatch dpms on
}

# Suspend system after 20 minutes of inactivity
listener {
    timeout = 1200 # 20 minutes
    on-timeout = systemctl suspend
}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="custom-scripts">
          Custom Scripts
        </h2>
        <p>
          You can use custom scripts for more complex idle behaviors:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Use a custom script to handle idle
listener {
    timeout = 300 # 5 minutes
    on-timeout = ~/.config/hypr/scripts/on-idle.sh
    on-resume = ~/.config/hypr/scripts/on-resume.sh
}`}</code>
        </pre>
        <p className="mt-2">
          Example of a custom idle script (<code className="bg-muted rounded p-1">~/.config/hypr/scripts/on-idle.sh</code>):
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`#!/bin/bash

# Save current brightness
current_brightness=$(brightnessctl g)
echo $current_brightness > /tmp/pre_idle_brightness

# Check if on battery
on_battery=$(cat /sys/class/power_supply/BAT0/status)
if [ "$on_battery" = "Discharging" ]; then
    # Aggressive power saving on battery
    brightnessctl -s set 10%
    hyprctl keyword animations:enabled false
else
    # Just dim a bit when on AC power
    brightnessctl -s set 40%
fi

# Notify user
notify-send "System idle" "Power saving mode activated"
`}</code>
        </pre>
        <p className="mt-2">
          Example resume script (<code className="bg-muted rounded p-1">~/.config/hypr/scripts/on-resume.sh</code>):
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`#!/bin/bash

# Restore previous brightness
if [ -f /tmp/pre_idle_brightness ]; then
    previous_brightness=$(cat /tmp/pre_idle_brightness)
    brightnessctl -s set $previous_brightness
else
    # Default if we can't find saved brightness
    brightnessctl -s set 100%
fi

# Re-enable animations
hyprctl keyword animations:enabled true

# Cleanup
rm -f /tmp/pre_idle_brightness
`}</code>
        </pre>
        <p className="mt-2 text-muted-foreground text-sm">
          Remember to make your scripts executable with <code className="bg-muted rounded p-1">chmod +x ~/.config/hypr/scripts/on-idle.sh</code>.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="troubleshooting">
          Troubleshooting
        </h2>
        <p>
          Common issues with Hypridle and their solutions:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>System never idles:</strong> Check if any application is inhibiting idle (like video players). Try setting <code className="bg-muted rounded p-1">ignore_dbus_inhibit = true</code> temporarily to test.
          </li>
          <li>
            <strong>Commands not executing:</strong> Test your commands directly in the terminal to ensure they work properly.
          </li>
          <li>
            <strong>Wrong timing:</strong> The timeouts are cumulative from system start, not relative to each other. Ensure your timeouts are in ascending order.
          </li>
          <li>
            <strong>System suspends during video playback:</strong> Set <code className="bg-muted rounded p-1">ignore_dbus_inhibit = false</code> to respect media player idle inhibition.
          </li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-center">
          <p className="text-sm">
            Please provide your hypridle configuration file and I'll document it in detail.
          </p>
        </div>
      </div>
    </div>
  )
} 