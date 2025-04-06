export default function ThemeTemplatingPage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Theme Templating</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Create and customize theme templates for HyprLuna
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="introduction">
          Introduction
        </h2>
        <p>
          HyprLuna uses a powerful templating system to generate consistent themes across multiple applications.
          This allows you to change your entire desktop appearance by editing just a few template files or
          simply changing your wallpaper.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="template-structure">
          Template Structure
        </h2>
        <p>
          Templates are stored in <code className="bg-muted rounded p-1">~/.config/matugen/templates/</code> and are used
          to generate configuration files for various applications. Each template contains placeholders that are
          replaced with generated color values.
        </p>
        <p className="mt-2">
          The main template directories include:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><code className="bg-muted rounded p-1">gtk</code> - GTK theme templates</li>
          <li><code className="bg-muted rounded p-1">hyprland</code> - Hyprland color configuration</li>
          <li><code className="bg-muted rounded p-1">foot</code> - Terminal color schemes</li>
          <li><code className="bg-muted rounded p-1">kitty</code> - Kitty terminal theme</li>
          <li><code className="bg-muted rounded p-1">rofi</code> - Application launcher themes</li>
          <li><code className="bg-muted rounded p-1">waybar</code> - Status bar styling</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="template-syntax">
          Template Syntax
        </h2>
        <p>
          Templates use a simple syntax with variables enclosed in double curly braces. These variables
          are replaced with the actual color values when the theme is generated.
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Example template variable
foreground = {{ colors.on_surface }}

# Hexadecimal colors
accent_color = {{ colors.primary.500 }}

# RGB format
rgb_color = {{ colors.primary.500.rgb }}

# RGBA with custom alpha
border_color = rgba({{ colors.primary.500.rgb }}, 0.5)

# Other formats
hsl_color = {{ colors.primary.500.hsl }}
hsv_color = {{ colors.primary.500.hsv }}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="color-variables">
          Available Color Variables
        </h2>
        <p>
          The following color variables are available in the templates:
        </p>
        
        <h3 className="text-xl font-semibold mt-5">Primary Colors</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-muted rounded p-1">colors.primary.0</code> - Primary color, lightest shade</li>
          <li><code className="bg-muted rounded p-1">colors.primary.10</code> - Very light primary</li>
          <li><code className="bg-muted rounded p-1">colors.primary.20</code> to <code className="bg-muted rounded p-1">colors.primary.90</code> - Gradual darkening shades</li>
          <li><code className="bg-muted rounded p-1">colors.primary.95</code> and <code className="bg-muted rounded p-1">colors.primary.99</code> - Very dark primary</li>
          <li><code className="bg-muted rounded p-1">colors.primary.100</code> - Primary color, darkest shade</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-5">Accent Colors</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-muted rounded p-1">colors.secondary</code> - Secondary accent color (with same shade options as primary)</li>
          <li><code className="bg-muted rounded p-1">colors.tertiary</code> - Tertiary accent color (with same shade options)</li>
          <li><code className="bg-muted rounded p-1">colors.error</code> - Error/notification color (with same shade options)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Neutral Colors</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-muted rounded p-1">colors.neutral</code> - Grayscale/neutral color (with all shade options)</li>
          <li><code className="bg-muted rounded p-1">colors.neutral_variant</code> - Slightly colored neutral (with all shade options)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-5">Semantic Surface Colors</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><code className="bg-muted rounded p-1">colors.background</code> - Main background color</li>
          <li><code className="bg-muted rounded p-1">colors.on_background</code> - Text color on background</li>
          <li><code className="bg-muted rounded p-1">colors.surface</code> - Surface/card color</li>
          <li><code className="bg-muted rounded p-1">colors.on_surface</code> - Text color on surface</li>
          <li><code className="bg-muted rounded p-1">colors.surface_variant</code> - Alternative surface color</li>
          <li><code className="bg-muted rounded p-1">colors.on_surface_variant</code> - Text on alternative surface</li>
        </ul>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="creating-custom-templates">
          Creating Custom Templates
        </h2>
        <p>
          To create your own templates, start by copying the default ones:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Copy default templates to your config directory
mkdir -p ~/.config/matugen/templates
cp -r /usr/share/matugen/templates/* ~/.config/matugen/templates/`}</code>
        </pre>
        <p className="mt-4">
          Then, modify the files in the copied directories. Let's see a few example templates:
        </p>
        
        <h3 className="text-xl font-semibold mt-5">Hyprland Colors Template</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# ~/.config/matugen/templates/hyprland/colors.conf
$primary = rgb({{ colors.primary.500.rgb }})
$onPrimary = rgb({{ colors.on_primary.rgb }})
$primaryContainer = rgb({{ colors.primary_container.rgb }})
$onPrimaryContainer = rgb({{ colors.on_primary_container.rgb }})

$secondary = rgb({{ colors.secondary.500.rgb }})
$onSecondary = rgb({{ colors.on_secondary.rgb }})
$secondaryContainer = rgb({{ colors.secondary_container.rgb }})
$onSecondaryContainer = rgb({{ colors.on_secondary_container.rgb }})

$tertiary = rgb({{ colors.tertiary.500.rgb }})
$onTertiary = rgb({{ colors.on_tertiary.rgb }})
$tertiaryContainer = rgb({{ colors.tertiary_container.rgb }})
$onTertiaryContainer = rgb({{ colors.on_tertiary_container.rgb }})

$error = rgb({{ colors.error.500.rgb }})
$onError = rgb({{ colors.on_error.rgb }})
$errorContainer = rgb({{ colors.error_container.rgb }})
$onErrorContainer = rgb({{ colors.on_error_container.rgb }})

$background = rgb({{ colors.background.rgb }})
$onBackground = rgb({{ colors.on_background.rgb }})
$surface = rgb({{ colors.surface.rgb }})
$onSurface = rgb({{ colors.on_surface.rgb }})

$surfaceVariant = rgb({{ colors.surface_variant.rgb }})
$onSurfaceVariant = rgb({{ colors.on_surface_variant.rgb }})
$outline = rgb({{ colors.outline.rgb }})
$shadow = rgb({{ colors.shadow.rgb }})

$inverseSurface = rgb({{ colors.inverse_surface.rgb }})
$inverseOnSurface = rgb({{ colors.inverse_on_surface.rgb }})
$inversePrimary = rgb({{ colors.inverse_primary.rgb }})`}</code>
        </pre>

        <h3 className="text-xl font-semibold mt-5">Kitty Terminal Template</h3>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# ~/.config/matugen/templates/kitty/theme.conf
foreground           #{{ colors.on_background.hex }}
background           #{{ colors.background.hex }}
selection_foreground #{{ colors.on_primary.hex }}
selection_background #{{ colors.primary.500.hex }}

cursor            #{{ colors.on_primary_container.hex }}
cursor_text_color #{{ colors.primary_container.hex }}

# black
color0 #{{ colors.neutral.900.hex }}
color8 #{{ colors.neutral.700.hex }}

# red
color1 #{{ colors.error.700.hex }}
color9 #{{ colors.error.500.hex }}

# green
color2  #{{ colors.primary.700.hex }}
color10 #{{ colors.primary.500.hex }}

# yellow
color3  #{{ colors.tertiary.700.hex }}
color11 #{{ colors.tertiary.500.hex }}

# blue
color4  #{{ colors.secondary.700.hex }}
color12 #{{ colors.secondary.500.hex }}

# magenta
color5  #{{ colors.primary.300.hex }}
color13 #{{ colors.secondary.300.hex }}

# cyan
color6  #{{ colors.tertiary.300.hex }}
color14 #{{ colors.secondary.300.hex }}

# white
color7  #{{ colors.neutral.100.hex }}
color15 #{{ colors.neutral.50.hex }}

active_tab_foreground   #{{ colors.background.hex }}
active_tab_background   #{{ colors.primary.500.hex }}
inactive_tab_foreground #{{ colors.on_surface_variant.hex }}
inactive_tab_background #{{ colors.surface_variant.hex }}

active_border_color   #{{ colors.primary.500.hex }}
inactive_border_color #{{ colors.surface_variant.hex }}
bell_border_color     #{{ colors.error.500.hex }}`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="activating-templates">
          Activating Templates
        </h2>
        <p>
          To use your custom templates, ensure they are specified in the Matugen configuration:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# ~/.config/matugen/config.yml
scheme:
  tonemap: auto
  name: dynamic

outputs:
  base_dir: ~/.cache/material-you
  templates:
    - gtk
    - hyprland
    - foot
    - kitty
    - rofi
    - waybar
    - dunst

actions:
  post:
    - hyprctl reload
    # Add any other commands to reload applications
`}</code>
        </pre>
        <p className="mt-2">
          Then, generate themes as usual:
        </p>
        <pre className="rounded-md bg-muted p-4 text-sm mt-2 overflow-x-auto">
          <code>{`# Generate from wallpaper
matugen /path/to/your/wallpaper.jpg`}</code>
        </pre>
      </div>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="troubleshooting">
          Troubleshooting
        </h2>
        <p>
          If you encounter issues with your templates:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Run Matugen with the verbose flag <code className="bg-muted rounded p-1">matugen -v</code> to see detailed output</li>
          <li>Check for syntax errors in template files</li>
          <li>Verify that the variable names match exactly - they are case-sensitive</li>
          <li>Check if the generated files in <code className="bg-muted rounded p-1">~/.cache/material-you/</code> contain the expected values</li>
          <li>If your application doesn't pick up new themes, ensure it's being properly reloaded after theme generation</li>
        </ul>
      </div>
    </div>
  )
} 