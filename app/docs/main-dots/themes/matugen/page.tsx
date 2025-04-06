export default function MatugenThemePage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Matugen Theming</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Create dynamic Material You themes from your wallpapers
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          Matugen is a tool that generates Material You color schemes from images. HyprLuna integrates Matugen
          to create cohesive system-wide themes based on your wallpaper, providing a dynamic and unified look.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="how-it-works">
          How It Works
        </h2>
        <p>
          When you change your wallpaper in HyprLuna, Matugen automatically:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Extracts the dominant colors from your wallpaper</li>
          <li>Generates a complete Material You color palette</li>
          <li>Creates theme files for various applications (GTK, QT, terminal, etc.)</li>
          <li>Applies the new theme system-wide</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="installation">
          Installation
        </h2>
        <p>
          Matugen is pre-installed with HyprLuna. However, if you need to install it manually:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Using paru (AUR helper)
paru -S matugen-git

# Or using yay
yay -S matugen-git`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="usage">
          Usage
        </h2>
        <p>
          To manually generate a theme from an image:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Generate from wallpaper
matugen /path/to/your/wallpaper.jpg`}</code>
        </pre>
        <p className="mt-4">
          In HyprLuna, changing the wallpaper automatically triggers Matugen:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Set a new wallpaper
swww img /path/to/your/wallpaper.jpg

# Or using the HyprLuna script
ch-wallpaper /path/to/your/wallpaper.jpg`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration">
          Configuration
        </h2>
        <p>
          You can customize Matugen behavior by editing its configuration file:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Edit the configuration
$EDITOR ~/.config/matugen/config.yml`}</code>
        </pre>
        <p className="mt-4">Here's a sample configuration with common settings:</p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Matugen config.yml example
scheme:
  # Tone mapping method
  tonemap: auto
  # Color scheme name
  name: dynamic

# Output directory settings
outputs:
  # Where to store generated themes
  base_dir: ~/.cache/material-you
  
  # Which theme templates to generate
  templates:
    - gtk
    - hyprland
    - foot
    - alacritty
    - kitty
    - rofi
    - waybar

actions:
  # Run after theme generation
  post:
    - gsettings set org.gnome.desktop.interface color-scheme prefer-dark
    - hyprctl reload`}</code>
        </pre>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="customizing-templates">
          Customizing Templates
        </h2>
        <p>
          Matugen uses template files to generate themes. You can customize these templates to change how colors are applied:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Copy the default templates: <code className="bg-muted rounded p-1">cp -r /usr/share/matugen/templates ~/.config/matugen/</code></li>
          <li>Edit the template files in <code className="bg-muted rounded p-1">~/.config/matugen/templates/</code></li>
          <li>Matugen will use your custom templates instead of the defaults</li>
        </ol>
        <p className="mt-2 text-sm text-muted-foreground">
          Template files use a simple syntax with placeholders like <code className="bg-muted rounded p-1">{`{{ colors.primary.500 }}`}</code> that get replaced with the generated colors.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="troubleshooting">
          Troubleshooting
        </h2>
        <p>
          If you encounter issues with Matugen:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Check if Matugen is installed: <code className="bg-muted rounded p-1">which matugen</code></li>
          <li>Verify that your image format is supported (JPG, PNG, WebP)</li>
          <li>Run Matugen with verbose output: <code className="bg-muted rounded p-1">matugen -v /path/to/wallpaper.jpg</code></li>
          <li>Check if the output directories exist and are writable</li>
          <li>Try with a different image to see if the issue is with a specific wallpaper</li>
        </ul>
      </div>
    </div>
  )
} 