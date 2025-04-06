import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export default function ExamplesPage() {
  return (
    <div className="mx-auto w-full space-y-6 max-w-4xl">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
          Lunarfetch Examples
        </h1>
        <p className="text-lg text-muted-foreground">Examples and use cases for Lunarfetch.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="basic-usage">
          Basic Usage
        </h2>
        <p>
          The simplest way to use Lunarfetch is to run it without any arguments. This will display system information
          with the default configuration.
        </p>
        <CodeBlock code="lunarfetch" filename="Terminal" />
        <p className="mt-4">You can also specify a custom ASCII art logo:</p>
        <CodeBlock code="lunarfetch --ascii arch" filename="Terminal" />
        <p className="mt-4">Or hide specific information:</p>
        <CodeBlock code="lunarfetch --hide os kernel uptime" filename="Terminal" />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="custom-configuration">
          Custom Configuration
        </h2>
        <p>
          You can create a custom configuration file at <code>~/.config/lunarfetch/config.toml</code> to customize
          Lunarfetch's behavior.
        </p>
        <CodeBlock
          code={`# Custom Lunarfetch Configuration

[general]
ascii_distro = "arch"
color = "blue"
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

[color]
title = "blue"
ascii = "blue"
separator = "white"
label = "white"
value = "blue"`}
          filename="~/.config/lunarfetch/config.toml"
          showLineNumbers={true}
        />
        <p className="mt-4">
          With this configuration, Lunarfetch will use the Arch Linux ASCII art logo, blue color scheme, and a custom
          separator.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="custom-ascii-art">
          Custom ASCII Art
        </h2>
        <p>
          You can create your own ASCII art logo and use it with Lunarfetch. Create a text file with your ASCII art and
          specify it in the configuration:
        </p>
        <CodeBlock
          code={`# ASCII art file: ~/.config/lunarfetch/custom_ascii.txt

  /\\
 /  \\
/    \\
------
|    |
|    |
------`}
          filename="~/.config/lunarfetch/custom_ascii.txt"
        />
        <p className="mt-4">Then update your configuration to use this custom ASCII art:</p>
        <CodeBlock
          code={`[general]
ascii_distro = "custom"

[ascii]
custom_file = "~/.config/lunarfetch/custom_ascii.txt"`}
          filename="~/.config/lunarfetch/config.toml"
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="scripting">
          Scripting with Lunarfetch
        </h2>
        <p>
          You can use Lunarfetch in scripts to display system information. Here's an example of a bash script that uses
          Lunarfetch:
        </p>
        <CodeBlock
          code={`#!/bin/bash

echo "Welcome to your system!"
echo "Here's some information about your system:"
echo ""
lunarfetch --hide packages resolution de wm terminal
echo ""
echo "Have a great day!"`}
          filename="welcome.sh"
          language="bash"
          showLineNumbers={true}
        />
        <p className="mt-4">You can also use Lunarfetch's output in other scripts:</p>
        <CodeBlock
          code={`#!/bin/bash

# Get system information
OS=$(lunarfetch --raw os)
KERNEL=$(lunarfetch --raw kernel)
CPU=$(lunarfetch --raw cpu)

# Use the information
echo "Your system is running $OS with kernel $KERNEL"
echo "Your CPU is $CPU"

# Check if the system is Arch-based
if [[ $OS == *"Arch"* ]]; then
  echo "You're running an Arch-based system!"
fi`}
          filename="system_check.sh"
          language="bash"
          showLineNumbers={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="rust-api">
          Using the Rust API
        </h2>
        <p>
          Lunarfetch provides a Rust API that you can use in your own applications. Here's an example of a simple Rust
          application that uses the Lunarfetch API:
        </p>
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
          filename="main.rs"
          language="rust"
          showLineNumbers={true}
        />
        <p className="mt-4">Here's a more advanced example that customizes the configuration:</p>
        <CodeBlock
          code={`use lunarfetch::{fetch_all, get_ascii, Config, AsciiConfig, ColorConfig, GeneralConfig, InfoConfig};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Create a custom configuration
    let config = Config {
        general: GeneralConfig {
            ascii_distro: "arch".to_string(),
            color: "blue".to_string(),
            separator: ": ".to_string(),
        },
        info: InfoConfig {
            os: true,
            kernel: true,
            uptime: true,
            packages: false,
            shell: true,
            resolution: false,
            de: false,
            wm: true,
            terminal: false,
            cpu: true,
            gpu: true,
            memory: true,
        },
        ascii: AsciiConfig {
            bold: true,
            small: false,
            custom_file: "".to_string(),
        },
        color: ColorConfig {
            title: "blue".to_string(),
            ascii: "blue".to_string(),
            separator: "white".to_string(),
            label: "white".to_string(),
            value: "blue".to_string(),
        },
    };
    
    // Fetch system information
    let info = fetch_all()?;
    
    // Get ASCII art for Arch Linux
    let ascii = get_ascii("arch")?;
    
    // Display information
    println!("{}", ascii);
    println!("OS: {}", info.os);
    println!("Kernel: {}", info.kernel);
    println!("Uptime: {}", info.uptime);
    println!("Shell: {}", info.shell);
    println!("WM: {}", info.window_manager);
    println!("CPU: {}", info.cpu.model);
    println!("GPU: {}", info.gpu[0].model);
    println!("Memory: {} / {}", info.memory.used, info.memory.total);
    
    Ok(())
}`}
          filename="advanced.rs"
          language="rust"
          showLineNumbers={true}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="integration">
          Integration with Other Tools
        </h2>
        <p>
          Lunarfetch can be integrated with other tools to create a more comprehensive system information display. Here
          are some examples:
        </p>
        <h3 className="text-xl font-semibold tracking-tight mt-6">Terminal Welcome Message</h3>
        <p>
          You can add Lunarfetch to your shell's configuration file to display system information when you open a
          terminal:
        </p>
        <CodeBlock
          code={`# Add to ~/.bashrc or ~/.zshrc
lunarfetch`}
          filename="~/.bashrc"
          language="bash"
        />
        <h3 className="text-xl font-semibold tracking-tight mt-6">System Monitoring Dashboard</h3>
        <p>
          You can combine Lunarfetch with other tools like <code>htop</code>, <code>btop</code>, or <code>glances</code>{" "}
          to create a system monitoring dashboard:
        </p>
        <CodeBlock
          code={`#!/bin/bash

# Display system information
lunarfetch

# Wait for user input
read -p "Press Enter to continue..."

# Launch system monitor
btop`}
          filename="system_dashboard.sh"
          language="bash"
          showLineNumbers={true}
        />
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
          <Link
            href="/docs/lunarfetch/troubleshooting"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Troubleshooting</h3>
            <p className="text-sm text-muted-foreground mt-1">Find solutions to common problems with Lunarfetch.</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

