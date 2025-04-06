import Link from "next/link"
import { ArrowRight, Terminal, Code, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function LunarfetchPage() {
  return (
    <div className="mx-auto w-full space-y-6 max-w-4xl">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
          Lunarfetch
        </h1>
        <p className="text-lg text-muted-foreground">A modern system information tool for Linux.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="overview">
          Overview
        </h2>
        <p>
          Lunarfetch is a system information tool that displays information about your operating system, hardware, and
          software in a visually appealing way. It's designed to be fast, customizable, and easy to use.
        </p>
        <div className="rounded-lg border overflow-hidden mt-6">
          <div className="bg-black p-6 font-mono text-green-500">
            <pre className="text-sm">
              <code>{`
            .--.     user@hostname
      .--.  |  |     --------------
     |  |   |  |     OS: Arch Linux
     |  |   |  |     Kernel: 6.1.0-arch1-1
.----|  |---|  |     Uptime: 3 hours, 24 mins
|  .-.|  |..|  |     Packages: 1423 (pacman)
|  |  |  ||.|  |     Shell: zsh
|  |  |  ||.|  |     Resolution: 2560x1440
|  |  |  ||.|  |     DE: Hyprland
|  |  |  ||.|  |     WM: Hyprland
|  |  |  ||.|  |     Terminal: kitty
|  |  |  ||.|  |     CPU: AMD Ryzen 9 5900X (24) @ 3.7GHz
|  |  |  ||.|  |     GPU: NVIDIA GeForce RTX 3080
|  |  |  ||.|  |     Memory: 8192MiB / 32768MiB
|  |  |  ||.|  |
|  |  |  ||.|  |     ●●●●●●●●
|  |  |  ||.|  |     ●●●●●●●●
|  |  |  ||.|  |     ●●●●●●●●
|  |  |  ||.|  |     ●●●●●●●●
|  |  |  ||.|  |
'-----'--''--'
            `}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="features">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Fast & Lightweight</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Written in Rust for maximum performance and minimal resource usage.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">Customizable</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Configure what information is displayed and how it looks.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium mt-3">ASCII Art</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Beautiful ASCII art logos for various Linux distributions.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="installation">
          Installation
        </h2>
        <p>Lunarfetch is included with the HyprLuna dotfiles configuration, but you can also install it separately.</p>
        <CodeBlock
          code={`# Clone the repository
git clone https://github.com/Lunaris-Project/LunarFetch.git

# Navigate to the lunarfetch directory
cd LunarFetch

# Build and install
cargo install --path .`}
          filename="Terminal"
          showLineNumbers={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="usage">
          Usage
        </h2>
        <p>
          Using Lunarfetch is simple. Just run the <code>lunarfetch</code> command in your terminal.
        </p>
        <CodeBlock code="lunarfetch" filename="Terminal" />
        <p className="mt-4">You can also customize the output with various command-line options:</p>
        <CodeBlock
          code={`# Display help
lunarfetch --help

# Use a specific ASCII art logo
lunarfetch --ascii arch

# Hide specific information
lunarfetch --hide os kernel uptime

# Use a custom color scheme
lunarfetch --color blue`}
          filename="Terminal"
          showLineNumbers={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="configuration">
          Configuration
        </h2>
        <p>
          Lunarfetch can be configured using a configuration file located at{" "}
          <code>~/.config/lunarfetch/config.toml</code>.
        </p>
        <Tabs defaultValue="config" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="config">Configuration File</TabsTrigger>
            <TabsTrigger value="example">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="config" className="mt-4 space-y-4">
            <CodeBlock
              code={`# Lunarfetch Configuration

# General settings
[general]
ascii_distro = "auto"  # "auto" or specific distro name
color = "auto"         # "auto" or specific color name
separator = ": "       # Separator between labels and values

# Information to display
[info]
os = true
kernel = true
uptime = true
packages = true
shell = true
resolution = true
de = true
wm = true
terminal = true
cpu = true
gpu = true
memory = true

# ASCII art settings
[ascii]
bold = true
small = false
custom_file = ""  # Path to custom ASCII art file

# Color settings
[color]
title = "blue"
ascii = "blue"
separator = "white"
label = "white"
value = "blue"`}
              filename="config.toml"
              showLineNumbers={true}
              highlightLines={[5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26, 27, 28, 33, 34, 35, 36, 37]}
            />
          </TabsContent>
          <TabsContent value="example" className="mt-4 space-y-4">
            <p>
              Here's an example of a custom configuration that uses a custom ASCII art file and a custom color scheme:
            </p>
            <CodeBlock
              code={`# Custom Lunarfetch Configuration

[general]
ascii_distro = "custom"
color = "purple"
separator = " >> "

[info]
os = true
kernel = true
uptime = true
packages = true
shell = true
resolution = true
de = true
wm = true
terminal = true
cpu = true
gpu = true
memory = true

[ascii]
bold = true
small = false
custom_file = "~/.config/lunarfetch/custom_ascii.txt"

[color]
title = "purple"
ascii = "purple"
separator = "white"
label = "white"
value = "purple"`}
              filename="config.toml"
              showLineNumbers={true}
              highlightLines={[4, 5, 6, 23, 26, 27, 28, 29, 30]}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="api-reference">
          API Reference
        </h2>
        <p>Lunarfetch provides a Rust API that you can use in your own applications to fetch system information.</p>
        <div className="mt-4">
          <Link href="/docs/lunarfetch/api-reference">
            <Button variant="outline" className="gap-2 group">
              View API Reference
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="examples">
          Examples
        </h2>
        <p>Check out some examples of how to use Lunarfetch in your own scripts and applications.</p>
        <CodeBlock
          code={`use lunarfetch::{fetch_all, get_current_ascii, Config};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Load default configuration
    let config = Config::default();
    
    // Fetch system information
    let info = fetch_all()?;
    
    // Get ASCII art for current distribution
    let ascii = get_current_ascii()?;
    
    // Display information
    println!("{}", ascii);
    println!("OS: {}", info.os);
    println!("Kernel: {}", info.kernel);
    println!("Uptime: {}", info.uptime);
    
    Ok(())
}`}
          filename="example.rs"
          language="rust"
          showLineNumbers={true}
        />
        <div className="mt-4">
          <Link href="/docs/lunarfetch/examples">
            <Button variant="outline" className="gap-2 group">
              View More Examples
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="troubleshooting">
          Troubleshooting
        </h2>
        <p>
          If you're having issues with Lunarfetch, check out the troubleshooting guide for solutions to common problems.
        </p>
        <div className="rounded-lg border p-6 mt-4">
          <h3 className="text-lg font-medium">Common Issues</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <h4 className="font-medium">Missing Information</h4>
              <p className="text-sm text-muted-foreground mt-1">
                If certain information is missing, make sure you have the required dependencies installed. For example,
                to display GPU information, you need to have the appropriate drivers installed.
              </p>
            </li>
            <li>
              <h4 className="font-medium">ASCII Art Not Displaying Correctly</h4>
              <p className="text-sm text-muted-foreground mt-1">
                If the ASCII art is not displaying correctly, make sure your terminal supports Unicode characters and
                that you're using a monospace font.
              </p>
            </li>
            <li>
              <h4 className="font-medium">Colors Not Working</h4>
              <p className="text-sm text-muted-foreground mt-1">
                If colors are not working, make sure your terminal supports ANSI color codes. You can try using the{" "}
                <code>--color</code> option to specify a different color scheme.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <Link href="/docs/lunarfetch/troubleshooting">
            <Button variant="outline" className="gap-2 group">
              Troubleshooting Guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="next-steps">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/lunarfetch/api-reference"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">API Reference</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about the Lunarfetch API and how to use it in your applications.
            </p>
          </Link>
          <Link href="/docs/lunarfetch/examples" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-medium">Examples</h3>
            <p className="text-sm text-muted-foreground mt-1">
              See examples of how to use Lunarfetch in various scenarios.
            </p>
          </Link>
          <Link
            href="/docs/lunarfetch/troubleshooting"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Troubleshooting</h3>
            <p className="text-sm text-muted-foreground mt-1">Find solutions to common problems with Lunarfetch.</p>
          </Link>
          <Link href="/docs/main-dots" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-medium">Main Dots</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about the core dotfiles configuration for Hyprland.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

