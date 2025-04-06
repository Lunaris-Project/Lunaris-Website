import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export default function KeybindingsPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
          Keybindings
        </h1>
        <p className="text-lg text-muted-foreground">Keyboard shortcuts and mouse bindings for HyprLuna.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="overview">
          Overview
        </h2>
        <p>
          HyprLuna comes with a comprehensive set of keybindings designed to make your workflow more efficient. These
          keybindings are carefully chosen to be intuitive and easy to remember.
        </p>
        <p>
          The main modifier key used in HyprLuna is the <code>SUPER</code> key, which is typically the Windows key or
          Command key on your keyboard. This is referred to as <code>$mainMod</code> in the configuration.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="essentials">
          Essentials for Beginners
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Terminal & App Launcher</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + T</code>
                  </td>
                  <td className="py-2">Launch foot (terminal)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER</code>
                  </td>
                  <td className="py-2">Open app launcher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Actions</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + R</code>
                  </td>
                  <td className="py-2">Refresh wallpaper</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + C</code>
                  </td>
                  <td className="py-2">Pick color (Hex) to clipboard</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>PRINT</code>
                  </td>
                  <td className="py-2">Screenshot to clipboard</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>CTRL + PRINT</code>
                  </td>
                  <td className="py-2">Screenshot to clipboard & file</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + S</code>
                  </td>
                  <td className="py-2">Screen snip to clipboard</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + ALT + S</code>
                  </td>
                  <td className="py-2">Screen snip to editor</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + T</code>
                  </td>
                  <td className="py-2">Screen snip to text (OCR)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Recording</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + R</code>
                  </td>
                  <td className="py-2">Record region (no sound)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + ALT + R</code>
                  </td>
                  <td className="py-2">Record screen (with sound)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Session</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + L</code>
                  </td>
                  <td className="py-2">Lock screen</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + L</code>
                  </td>
                  <td className="py-2">Suspend system</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="window-management">
          Window Management
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Window Controls</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + Q</code>
                  </td>
                  <td className="py-2">Close active window</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + ALT + Q</code>
                  </td>
                  <td className="py-2">Pick and kill a window</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + mouse drag</code>
                  </td>
                  <td className="py-2">Move window</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + right mouse drag</code>
                  </td>
                  <td className="py-2">Resize window</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Window Arrangement</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + arrow keys</code>
                  </td>
                  <td className="py-2">Move focus in direction</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + arrow keys</code>
                  </td>
                  <td className="py-2">Move window in direction</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + -/+</code>
                  </td>
                  <td className="py-2">Adjust window split ratio</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + SPACE</code>
                  </td>
                  <td className="py-2">Toggle floating window</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + F</code>
                  </td>
                  <td className="py-2">Toggle fullscreen</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + D</code>
                  </td>
                  <td className="py-2">Toggle fullscreen (preserve gaps)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + F</code>
                  </td>
                  <td className="py-2">Toggle fake fullscreen</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + CTRL + W</code>
                  </td>
                  <td className="py-2">Toggle all windows floating</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Rofi Menus</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + E</code>
                  </td>
                  <td className="py-2">Mini file browser</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + V</code>
                  </td>
                  <td className="py-2">Clipboard history</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + .</code>
                  </td>
                  <td className="py-2">Emoji picker</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + TAB</code>
                  </td>
                  <td className="py-2">App launcher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="workspace-navigation">
          Workspace Navigation
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Workspace Switching</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + [1-9,0]</code>
                  </td>
                  <td className="py-2">Switch to workspace 1-10</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + mouse_scroll</code>
                  </td>
                  <td className="py-2">Cycle through workspaces</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>CTRL + SUPER + arrow left/right</code>
                  </td>
                  <td className="py-2">Focus workspace left/right</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + Page_Up/Down</code>
                  </td>
                  <td className="py-2">Focus workspace left/right</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + S</code>
                  </td>
                  <td className="py-2">Toggle special workspace</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Workspace Management</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + [1-9,0]</code>
                  </td>
                  <td className="py-2">Move window to workspace 1-10</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + mouse_scroll</code>
                  </td>
                  <td className="py-2">Move window to workspace left/right</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + Page_Up/Down</code>
                  </td>
                  <td className="py-2">Move window to workspace left/right</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + S</code>
                  </td>
                  <td className="py-2">Move window to special workspace</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + P</code>
                  </td>
                  <td className="py-2">Pin window (appears on all workspaces)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="widgets">
          Widgets
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Widget Controls</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>CTRL + SUPER + R</code>
                  </td>
                  <td className="py-2">Restart widgets</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER (hold)</code>
                  </td>
                  <td className="py-2">Toggle overview/launcher</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + A</code>
                  </td>
                  <td className="py-2">Toggle right sidebar</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + 1</code>
                  </td>
                  <td className="py-2">View color scheme and options</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + 2</code>
                  </td>
                  <td className="py-2">Toggle recorder</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + 3</code>
                  </td>
                  <td className="py-2">Toggle music widget</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + N</code>
                  </td>
                  <td className="py-2">Toggle right sidebar</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + W</code>
                  </td>
                  <td className="py-2">Launch wallpaper selector</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + M</code>
                  </td>
                  <td className="py-2">Launch music widget</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ,</code>
                  </td>
                  <td className="py-2">View color scheme and options</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + /</code>
                  </td>
                  <td className="py-2">Show keybindings cheatsheet</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + CTRL + SHIFT + Delete</code>
                  </td>
                  <td className="py-2">Toggle power menu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="media">
          Media Controls
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Media Playback</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + N</code>
                  </td>
                  <td className="py-2">Next track</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + B</code>
                  </td>
                  <td className="py-2">Previous track</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + P</code>
                  </td>
                  <td className="py-2">Play/pause media</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="applications">
          Applications
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Application Shortcuts</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + B</code>
                  </td>
                  <td className="py-2">Launch browser</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + G</code>
                  </td>
                  <td className="py-2">Launch GitHub Desktop</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + O</code>
                  </td>
                  <td className="py-2">Launch Obsidian</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + C</code>
                  </td>
                  <td className="py-2">Launch Cursor</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + CTRL + S</code>
                  </td>
                  <td className="py-2">Launch Spotify</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + E</code>
                  </td>
                  <td className="py-2">Launch Nautilus (file manager)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + I</code>
                  </td>
                  <td className="py-2">Launch GNOME Settings</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>CTRL + SUPER + V</code>
                  </td>
                  <td className="py-2">Launch pavucontrol (volume mixer)</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>CTRL + SHIFT + Escape</code>
                  </td>
                  <td className="py-2">Launch system monitor (btop)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="bar-mode">
          Bar Mode Switching
        </h2>
        <div className="rounded-lg border overflow-hidden">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Bar Controls</h3>
          </div>
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 font-medium">Keybinding</th>
                  <th className="text-left py-2 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + X</code>
                  </td>
                  <td className="py-2">Cycle between horizontal bars</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + SHIFT + X</code>
                  </td>
                  <td className="py-2">Cycle between vertical bars</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-sm">
                    <code>SUPER + ALT + X</code>
                  </td>
                  <td className="py-2">Toggle bar position</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customizing">
          Customizing Keybindings
        </h2>
        <p>
          You can customize the keybindings by editing the <code>~/.config/hypr/keybinds.conf</code> file. The syntax
          for keybindings in Hyprland is as follows:
        </p>
        <CodeBlock code="bind = MODS, key, dispatcher, params" filename="Syntax" />
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
          <li>
            <code>MODS</code>: Modifier keys (SUPER, SHIFT, ALT, CTRL)
          </li>
          <li>
            <code>key</code>: The key to bind (e.g., A, B, RETURN, SPACE)
          </li>
          <li>
            <code>dispatcher</code>: The action to perform (e.g., exec, killactive, workspace)
          </li>
          <li>
            <code>params</code>: Parameters for the dispatcher (e.g., application name, workspace number)
          </li>
        </ul>
        <p>
          For more information on keybindings, refer to the{" "}
          <a
            href="https://wiki.hyprland.org/Configuring/Binds/"
            className="text-primary hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Hyprland documentation
          </a>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="next-steps">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/main-dots/configuration"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Configuration</h3>
            <p className="text-sm text-muted-foreground mt-1">Learn how to configure HyprLuna to your liking.</p>
          </Link>
          <Link
            href="/docs/main-dots/customization"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Customization</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Customize the appearance and behavior of your Hyprland setup.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

