import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  return (
    <div className="w-full max-w-full space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" id="overview">
          Installation
        </h1>
        <p className="text-lg text-muted-foreground">How to install HyprLuna dotfiles on your system.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="prerequisites">
          Prerequisites
        </h2>
        <p>Before installing HyprLuna, make sure you have the following prerequisites:</p>
        <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
          <li>A Linux distribution (Arch Linux or Arch-based distributions are recommended)</li>
          <li>Git installed on your system</li>
          <li>Basic knowledge of terminal commands</li>
        </ul>
        <div className="rounded-lg border p-4 bg-muted/40 mt-4">
          <h3 className="text-lg font-medium">Note</h3>
          <p className="text-sm text-muted-foreground mt-1">
            HyprLuna is primarily designed for Arch Linux and Arch-based distributions. While it may work on other
            distributions, some features may not work as expected.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="installation-methods">
          Installation Guide
        </h2>
        <p>Follow these steps to install HyprLuna on your system:</p>

        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Step 1: Install AUR Helper</h3>
            <p className="mt-2 text-muted-foreground">We need to install an AUR helper first (better use paru):</p>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`sudo pacman -S --needed base-devel
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si`}
                filename="Terminal"
                showLineNumbers={true}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Step 2: Install Required Packages</h3>
            <p className="mt-2 text-muted-foreground">Then we need to install the needed packages:</p>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`paru -S hyprland axel bc coreutils cliphist cmake curl rofi-wayland rsync wget ripgrep jq npm meson typescript gjs xdg-user-dirs brightnessctl ddcutil pavucontrol wireplumber libdbusmenu-gtk3 playerctl swww git gobject-introspection glib2-devel gvfs glib2 glibc gtk3 gtk-layer-shell libpulse pam gnome-bluetooth-3.0 gammastep libsoup3 libnotify networkmanager power-profiles-daemon upower adw-gtk-theme-git qt5ct qt5-wayland fontconfig ttf-readex-pro ttf-jetbrains-mono-nerd ttf-material-symbols-variable-git apple-fonts ttf-space-mono-nerd ttf-rubik-vf ttf-gabarito-git fish foot starship polkit-gnome gnome-keyring gnome-control-center blueberry webp-pixbuf-loader gtksourceview3 yad ydotool xdg-user-dirs-gtk tinyxml2 gtkmm3 gtksourceviewmm cairomm xdg-desktop-portal xdg-desktop-portal-gtk xdg-desktop-portal-hyprland gradience python-libsass python-pywalfox matugen-bin python-build python-pillow python-pywal python-setuptools-scm python-wheel swappy wf-recorder grim tesseract tesseract-data-eng slurp dart-sass python-pywayland python-psutil hypridle hyprutils hyprlock wlogout wl-clipboard hyprpicker ghostty ttf-noto-sans-cjk-vf noto-fonts-emoji metar ttf-material-symbols-variable-git`}
                filename="Terminal"
                showLineNumbers={true}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Step 3: Install Latest AGS v1</h3>
            <p className="mt-2 text-muted-foreground">We need to install the latest ags v1 repo:</p>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`git clone --recursive https://github.com/Lunaris-Project/agsv1
cd agsv1
makepkg -si`}
                filename="Terminal"
                showLineNumbers={true}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Step 4: Create Backup (Optional)</h3>
            <p className="mt-2 text-muted-foreground">
              Create a backup of your existing configuration (not needed for fresh installations):
            </p>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`mkdir -p ~/HyprLuna-User-Bak
cp -r ~/.config ~/HyprLuna-User-Bak/
cp -r ~/.local ~/HyprLuna-User-Bak/
cp -r ~/.fonts ~/HyprLuna-User-Bak/ 2>/dev/null || echo "No .fonts directory to backup"
cp -r ~/.ags ~/HyprLuna-User-Bak/ 2>/dev/null || echo "No .ags directory to backup"
cp -r ~/Pictures ~/HyprLuna-User-Bak/`}
                filename="Terminal"
                showLineNumbers={true}
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight">Step 5: Clone and Setup HyprLuna</h3>
            <p className="mt-2 text-muted-foreground">Clone the HyprLuna repository and set up the configuration:</p>
            <div className="overflow-x-auto">
              <CodeBlock
                code={`git clone https://github.com/Lunaris-Project/HyprLuna.git ~/HyprLuna
cd ~/HyprLuna
cp -r .config ~/
cp -r .local ~/
cp -r .cursor ~/
cp -r .vscode ~/
cp -r .fonts ~/ 2>/dev/null || echo "No .fonts directory to copy"
cp -r .ags ~/ 2>/dev/null || echo "No .ags directory to copy"
cp -r Pictures ~/
chmod +x ~/.config/hypr/scripts/*
chmod +x ~/.config/ags/scripts/hyprland/*
sh ~/.config/ags/scripts/color_generation/wallpapers.sh -r`}
                filename="Terminal"
                showLineNumbers={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="post-installation">
          Post-Installation
        </h2>
        <p>After installing HyprLuna, you need to log out and log back in to apply the changes. You can do this by:</p>
        <ol className="mt-4 space-y-2 list-decimal list-inside text-muted-foreground">
          <li>Logging out of your current session</li>
          <li>Selecting Hyprland as your desktop environment from the login screen</li>
          <li>Logging in with your username and password</li>
        </ol>
        <p className="mt-4">
          Once you're logged in, you should see the HyprLuna desktop environment. You can start using it right away!
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="troubleshooting">
          Troubleshooting
        </h2>
        <p>If you encounter any issues during installation, here are some common problems and their solutions:</p>
        <div className="rounded-lg border overflow-hidden mt-4">
          <div className="bg-muted/40 px-4 py-2 border-b">
            <h3 className="font-medium">Common Issues</h3>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h4 className="font-medium">Permission Denied</h4>
              <p className="text-sm text-muted-foreground mt-1">
                If you get a "permission denied" error when running the installation scripts, make sure they are
                executable:
              </p>
              <div className="overflow-x-auto">
                <CodeBlock code="chmod +x ~/.config/hypr/scripts/*" filename="Terminal" />
              </div>
            </div>
            <div>
              <h4 className="font-medium">Missing Dependencies</h4>
              <p className="text-sm text-muted-foreground mt-1">
                If you're missing dependencies, make sure you've installed all the required packages listed in Step 2.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Hyprland Not Starting</h4>
              <p className="text-sm text-muted-foreground mt-1">
                If Hyprland doesn't start after installation, check the logs:
              </p>
              <div className="overflow-x-auto">
                <CodeBlock code="cat ~/.local/share/hyprland/hyprland.log" filename="Terminal" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4">
          For more troubleshooting information, refer to the{" "}
          <Link href="/docs/advanced/troubleshooting" className="text-primary hover:underline">
            Troubleshooting Guide
          </Link>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight" id="next-steps">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/docs/main-dots" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-medium">Main Dots</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about the core dotfiles configuration for Hyprland.
            </p>
          </Link>
          <Link
            href="/docs/main-dots/keybindings"
            className="rounded-lg border p-4 hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-medium">Keybindings</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn the keyboard shortcuts for navigating and controlling Hyprland.
            </p>
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
          <Link href="/docs/lunarfetch" className="rounded-lg border p-4 hover:bg-muted/50 transition-colors">
            <h3 className="text-lg font-medium">Lunarfetch</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Learn about the system fetch tool included with HyprLuna.
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

