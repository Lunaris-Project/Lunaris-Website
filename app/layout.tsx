import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "HyprLuna | Modern Hyprland Configuration",
  description: "HyprLuna is a modern, elegant, and feature-rich Hyprland configuration that's easy to install and customize.",
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(var(--background))" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(var(--background))" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  openGraph: {
    title: "HyprLuna | Modern Hyprland Configuration",
    description: "HyprLuna is a modern, elegant, and feature-rich Hyprland configuration that's easy to install and customize.",
    url: "https://hyprluna.com",
    siteName: "HyprLuna",
    images: [
      {
        url: "/Light.web",
        width: 1200,
        height: 630,
        alt: "HyprLuna | Modern Hyprland Configuration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HyprLuna | Modern Hyprland Configuration",
    description: "HyprLuna is a modern, elegant, and feature-rich Hyprland configuration that's easy to install and customize.",
    images: ["/Light.web"],  
  },
  category: "utilities",
  creator: "Nixev | Lunaris-Project",
  keywords: ["Hyprland", "Configuration", "Customization", "HyprLuna", "Nixev", "Lunaris-Project", "Hypr","lunaris","lunaris-project","nixev","Luna","Hyde","hyprdots","neovim","vim","dotfiles","dotfile","dotfile-manager","dotfile-manager-linux","dotfile-manager-macos","dotfile-manager-windows","dotfile-manager-linux-macos-windows","dotfile-manager-linux-macos-windows-android-ios","dotfile-manager-linux-macos-windows-android-ios-web","dotfile-manager-linux-macos-windows-android-ios-web-desktop","dotfile-manager-linux-macos-windows-android-ios-web-desktop-mobile","dotfile-manager-linux-macos-windows-android-ios-web-desktop-mobile-tablet","hyprluna","hyprluna-dotfiles","hyprluna-dotfile-manager","hyprluna-dotfile-manager-linux","hyprluna-dotfile-manager-macos","hyprluna-dotfile-manager-windows","hyprluna-dotfile-manager-linux-macos-windows","hyprluna-dotfile-manager-linux-macos-windows-android-ios","hyprluna-dotfile-manager-linux-macos-windows-android-ios-web","hyprluna-dotfile-manager-linux-macos-windows-android-ios-web-desktop","hyprluna-dotfile-manager-linux-macos-windows-android-ios-web-desktop-mobile","hyprluna-dotfile-manager-linux-macos-windows-android-ios-web-desktop-mobile-tablet",],
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

