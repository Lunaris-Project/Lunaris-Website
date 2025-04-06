import Link from "next/link"
import { ArrowRight, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ApiReferencePage() {
  return (
    <div className="mx-auto w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="api-overview">API Reference</h1>
        <p className="text-lg text-muted-foreground mt-2">Comprehensive documentation for the Lunarfetch API.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="overview">Overview</h2>
        <p>
          The Lunarfetch API provides a simple way to fetch system information programmatically. It's written in Rust
          and can be used in any Rust application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="api-installation">Installation</h2>
        <p>
          To use the Lunarfetch API in your Rust project, add it as a dependency in your <code>Cargo.toml</code> file:
        </p>
        <div className="rounded-lg border bg-card overflow-hidden mt-6">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Cargo.toml</span>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          <div className="p-4 font-mono text-sm">
            <p>
              [dependencies]
              <br />
              lunarfetch = "0.1.0"
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="core-api">
          Core API
        </h2>
        <p>The core API provides functions to fetch various system information.</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" id="system-info">
          System Information
        </h3>
        <p>
          The <code>SystemInfo</code> struct contains all the system information that Lunarfetch can fetch.
        </p>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">system_info.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`pub struct SystemInfo {
    pub os: String,
    pub kernel: String,
    pub uptime: String,
    pub packages: Vec<Package>,
    pub shell: String,
    pub resolution: String,
    pub desktop_environment: String,
    pub window_manager: String,
    pub terminal: String,
    pub cpu: Cpu,
    pub gpu: Vec<Gpu>,
    pub memory: Memory,
}

pub struct Package {
    pub count: usize,
    pub manager: String,
}

pub struct Cpu {
    pub model: String,
    pub cores: usize,
    pub threads: usize,
    pub frequency: f64,
}

pub struct Gpu {
    pub model: String,
    pub vendor: String,
    pub driver: String,
}

pub struct Memory {
    pub total: u64,
    pub used: u64,
    pub free: u64,
}`}</code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" id="fetch-functions">
          Fetch Functions
        </h3>
        <p>The API provides several functions to fetch system information.</p>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">fetch.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`/// Fetch all system information
pub fn fetch_all() -> Result<SystemInfo, Error> {
    // ...
}

/// Fetch operating system information
pub fn fetch_os() -> Result<String, Error> {
    // ...
}

/// Fetch kernel information
pub fn fetch_kernel() -> Result<String, Error> {
    // ...
}

/// Fetch uptime information
pub fn fetch_uptime() -> Result<String, Error> {
    // ...
}

/// Fetch package information
pub fn fetch_packages() -> Result<Vec<Package>, Error> {
    // ...
}

/// Fetch shell information
pub fn fetch_shell() -> Result<String, Error> {
    // ...
}

/// Fetch screen resolution
pub fn fetch_resolution() -> Result<String, Error> {
    // ...
}

/// Fetch desktop environment
pub fn fetch_desktop_environment() -> Result<String, Error> {
    // ...
}

/// Fetch window manager
pub fn fetch_window_manager() -> Result<String, Error> {
    // ...
}

/// Fetch terminal
pub fn fetch_terminal() -> Result<String, Error> {
    // ...
}

/// Fetch CPU information
pub fn fetch_cpu() -> Result<Cpu, Error> {
    // ...
}

/// Fetch GPU information
pub fn fetch_gpu() -> Result<Vec<Gpu>, Error> {
    // ...
}

/// Fetch memory information
pub fn fetch_memory() -> Result<Memory, Error> {
    // ...
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="ascii-api">
          ASCII Art API
        </h2>
        <p>The ASCII Art API provides functions to fetch and display ASCII art logos.</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" id="ascii-functions">
          ASCII Functions
        </h3>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">ascii.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`/// Get ASCII art for a specific distribution
pub fn get_ascii(distro: &str) -> Result<String, Error> {
    // ...
}

/// Get ASCII art for the current distribution
pub fn get_current_ascii() -> Result<String, Error> {
    // ...
}

/// Get a list of available ASCII art logos
pub fn get_available_ascii() -> Vec<String> {
    // ...
}

/// Load ASCII art from a file
pub fn load_ascii_from_file(path: &str) -> Result<String, Error> {
    // ...
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="config-api">
          Configuration API
        </h2>
        <p>The Configuration API provides functions to load and save Lunarfetch configuration.</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" id="config-struct">
          Configuration Struct
        </h3>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">config.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`pub struct Config {
    pub general: GeneralConfig,
    pub info: InfoConfig,
    pub ascii: AsciiConfig,
    pub color: ColorConfig,
}

pub struct GeneralConfig {
    pub ascii_distro: String,
    pub color: String,
    pub separator: String,
}

pub struct InfoConfig {
    pub os: bool,
    pub kernel: bool,
    pub uptime: bool,
    pub packages: bool,
    pub shell: bool,
    pub resolution: bool,
    pub de: bool,
    pub wm: bool,
    pub terminal: bool,
    pub cpu: bool,
    pub gpu: bool,
    pub memory: bool,
}

pub struct AsciiConfig {
    pub bold: bool,
    pub small: bool,
    pub custom_file: String,
}

pub struct ColorConfig {
    pub title: String,
    pub ascii: String,
    pub separator: String,
    pub label: String,
    pub value: String,
}`}</code>
          </pre>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" id="config-functions">
          Configuration Functions
        </h3>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">config.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`/// Load configuration from the default location
pub fn load_config() -> Result<Config, Error> {
    // ...
}

/// Load configuration from a specific file
pub fn load_config_from_file(path: &str) -> Result<Config, Error> {
    // ...
}

/// Save configuration to the default location
pub fn save_config(config: &Config) -> Result<(), Error> {
    // ...
}

/// Save configuration to a specific file
pub fn save_config_to_file(config: &Config, path: &str) -> Result<(), Error> {
    // ...
}

/// Get the default configuration
pub fn default_config() -> Config {
    // ...
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="display-api">
          Display API
        </h2>
        <p>The Display API provides functions to format and display system information.</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6" id="display-functions">
          Display Functions
        </h3>
        <div className="rounded-lg border bg-card overflow-hidden mt-4">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">display.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`/// Format system information for display
pub fn format_info(info: &SystemInfo, config: &Config) -> String {
    // ...
}

/// Display system information
pub fn display_info(info: &SystemInfo, config: &Config) {
    // ...
}

/// Format ASCII art for display
pub fn format_ascii(ascii: &str, config: &Config) -> String {
    // ...
}

/// Display ASCII art
pub fn display_ascii(ascii: &str, config: &Config) {
    // ...
}

/// Format and display system information with ASCII art
pub fn display(info: &SystemInfo, ascii: &str, config: &Config) {
    // ...
}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="error-handling">
          Error Handling
        </h2>
        <p>
          The API uses a custom <code>Error</code> type for error handling.
        </p>
        <div className="rounded-lg border bg-card overflow-hidden mt-6">
          <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">error.rs</span>
            </div>
          </div>
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{`pub enum Error {
    /// IO error
    Io(std::io::Error),
    /// Parse error
    Parse(String),
    /// System error
    System(String),
    /// Configuration error
    Config(String),
    /// ASCII art error
    Ascii(String),
    /// Other error
    Other(String),
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Error::Io(err) => write!(f, "IO error: {}", err),
            Error::Parse(err) => write!(f, "Parse error: {}", err),
            Error::System(err) => write!(f, "System error: {}", err),
            Error::Config(err) => write!(f, "Configuration error: {}", err),
            Error::Ascii(err) => write!(f, "ASCII art error: {}", err),
            Error::Other(err) => write!(f, "Error: {}", err),
        }
    }
}

impl std::error::Error for Error {}`}</code>
          </pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">Examples</h2>
        <p>Check out the examples page for more information on how to use the Lunarfetch API.</p>
        <div className="mt-4">
          <Link href="/docs/lunarfetch/examples">
            <Button variant="outline" className="gap-2 group">
              View Examples
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

