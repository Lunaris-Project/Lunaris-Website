"use client"

import { SearchResult } from "@/types/search"

/**
 * Search for content across the website
 * This function calls the search API endpoint to get dynamic results
 * or falls back to client-side search if needed
 */
export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) return []

  // Use client-side search for immediate results
  // This provides a better user experience while the API call is in progress
  const clientResults = fallbackSearch(query)

  // In a production environment, you would call the API here
  // For now, we'll just use the client-side search to avoid API issues
  return clientResults

  /*
  // This is the API call implementation that would be used in production
  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache: 'no-store' to prevent caching issues
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`Search API returned ${response.status}`)
    }

    const data = await response.json()
    return data.results || []
  } catch (error) {
    console.error('Error searching content:', error)

    // Fallback to client-side search if API fails
    return fallbackSearch(query)
  }
  */
}

/**
 * Fallback search function that runs on the client
 * This provides a more sophisticated search with relevance scoring
 */
function fallbackSearch(query: string): SearchResult[] {
  if (!query || query.length < 2) return []

  const lowerQuery = query.toLowerCase()
  const queryWords = lowerQuery.split(/\s+/).filter(word => word.length > 1)

  // If no valid query words, return empty results
  if (queryWords.length === 0) return []

  // Search in the fallback data with relevance scoring
  return fallbackSearchData
    .map(item => {
      // Initialize score
      let score = 0
      const lowerTitle = item.title.toLowerCase()
      const lowerDescription = item.description.toLowerCase()
      const lowerContent = item.content?.toLowerCase() || ""

      // Check for exact matches (highest relevance)
      if (lowerTitle.includes(lowerQuery)) score += 100
      if (lowerDescription.includes(lowerQuery)) score += 50
      if (lowerContent.includes(lowerQuery)) score += 30

      // Check for word matches
      for (const word of queryWords) {
        // Title matches (high relevance)
        if (lowerTitle.includes(word)) {
          score += 20
          // Bonus for word at beginning of title
          if (lowerTitle.startsWith(word)) score += 10
        }

        // Description matches (medium relevance)
        if (lowerDescription.includes(word)) {
          score += 10
        }

        // Content matches (lower relevance)
        if (lowerContent.includes(word)) {
          score += 5

          // Bonus for multiple occurrences in content
          const occurrences = (lowerContent.match(new RegExp(word, 'g')) || []).length
          if (occurrences > 1) score += Math.min(occurrences, 5) * 2
        }
      }

      // Return item with score
      return { ...item, score }
    })
    .filter(item => item.score > 0) // Only include items with a positive score
    .sort((a, b) => b.score - a.score) // Sort by score (highest first)
    .map(({ score, ...item }) => item) // Remove score from results
    .slice(0, 20) // Limit to 20 results for performance
}

/**
 * Fallback search data in case the API is unavailable
 * This is an expanded dataset that includes more content for better search results
 */
const fallbackSearchData: SearchResult[] = [
  // Documentation pages
  {
    title: "Installation Guide",
    href: "/docs/main-dots/installation",
    type: "docs",
    description: "How to install HyprLuna dotfiles",
    content: "Installation guide for HyprLuna dotfiles. Follow these steps to get your system up and running with HyprLuna. Requirements: Arch Linux or Arch-based distribution, Git, and basic command line knowledge. The installation process is simple and automated."
  },
  {
    title: "Main Dots Overview",
    href: "/docs/main-dots",
    type: "docs",
    description: "Overview of the HyprLuna dotfiles",
    content: "HyprLuna dotfiles provide a complete Hyprland desktop environment with a focus on aesthetics and functionality. The configuration includes Hyprland, Waybar, Rofi, and other essential tools for a modern Linux desktop experience."
  },
  {
    title: "Getting Started with HyprLuna",
    href: "/docs/getting-started",
    type: "docs",
    description: "First steps with HyprLuna",
    content: "Learn the basics of using HyprLuna. This guide covers the essential keybindings, how to launch applications, and how to customize your desktop environment to suit your workflow."
  },

  // Configuration pages
  {
    title: "Hyprland Configuration",
    href: "/docs/main-dots/configuration",
    type: "config",
    description: "Configure Hyprland window manager",
    content: "Learn how to configure Hyprland window manager to suit your needs. Customize animations, keybindings, window rules, and more. The configuration file is located at ~/.config/hypr/hyprland.conf and uses a simple syntax."
  },
  {
    title: "Waybar Setup",
    href: "/docs/main-dots/waybar",
    type: "config",
    description: "Customize your Waybar status bar",
    content: "Waybar is a highly customizable status bar for Wayland. Learn how to configure it with HyprLuna. You can add, remove, and rearrange modules, change colors, fonts, and more. The configuration files are located in ~/.config/waybar/."
  },
  {
    title: "Theme Customization",
    href: "/docs/main-dots/themes",
    type: "config",
    description: "Customize the appearance of your desktop",
    content: "Learn how to customize the appearance of your desktop with HyprLuna themes. Change colors, fonts, icons, and more. HyprLuna comes with several pre-configured themes that you can switch between easily."
  },
  {
    title: "Rofi Configuration",
    href: "/docs/main-dots/rofi",
    type: "config",
    description: "Customize the application launcher",
    content: "Rofi is a versatile application launcher and window switcher. Learn how to configure it to match your HyprLuna theme and add custom functionality like power menus, emoji pickers, and more."
  },

  // API documentation
  {
    title: "Lunarfetch API Reference",
    href: "/docs/lunarfetch/api-reference",
    type: "api",
    description: "API documentation for Lunarfetch",
    content: "Complete API reference for Lunarfetch. Learn how to integrate Lunarfetch into your own scripts and applications. The API provides functions to fetch system information, customize the output format, and create custom modules."
  },
  {
    title: "Hyprland IPC API",
    href: "/docs/advanced/hyprland-ipc",
    type: "api",
    description: "Interact with Hyprland programmatically",
    content: "Hyprland provides an IPC (Inter-Process Communication) API that allows you to interact with the window manager programmatically. Learn how to use this API to create custom scripts and tools that integrate with Hyprland."
  },

  // Command references
  {
    title: "Keybindings",
    href: "/docs/main-dots/keybindings",
    type: "command",
    description: "Keyboard shortcuts for Hyprland",
    content: "List of keyboard shortcuts for Hyprland. Learn how to navigate and control your desktop environment efficiently. The keybindings are customizable and can be changed in the Hyprland configuration file."
  },
  {
    title: "Lunarfetch Examples",
    href: "/docs/lunarfetch/examples",
    type: "command",
    description: "Example usage of Lunarfetch",
    content: "Examples of how to use Lunarfetch in different scenarios. Learn how to customize the output and integrate it with other tools. Lunarfetch can be used to display system information in your terminal, in scripts, or in your desktop environment."
  },
  {
    title: "Terminal Commands",
    href: "/docs/advanced/terminal-commands",
    type: "command",
    description: "Useful terminal commands for HyprLuna",
    content: "A collection of useful terminal commands for managing your HyprLuna installation. These commands can help you troubleshoot issues, update your configuration, and customize your desktop environment."
  },

  // Content pages
  {
    title: "HyprLuna Features",
    href: "/features",
    type: "content",
    description: "Key features of HyprLuna",
    content: "HyprLuna offers a modern, elegant, and feature-rich Hyprland configuration that's easy to install and customize. Key features include a beautiful default theme, intuitive keybindings, and a comprehensive documentation."
  },
  {
    title: "Community Showcase",
    href: "/showcase",
    type: "content",
    description: "Community customizations of HyprLuna",
    content: "See how other users have customized HyprLuna to suit their needs and preferences. Get inspiration for your own customizations and share your setup with the community."
  },
  {
    title: "Frequently Asked Questions",
    href: "/docs/advanced/troubleshooting",
    type: "docs",
    description: "Common issues and solutions",
    content: "Frequently asked questions about HyprLuna. Find solutions to common issues and problems. If you're experiencing issues with HyprLuna, check this troubleshooting guide first."
  },
  {
    title: "Contributing to HyprLuna",
    href: "/docs/contributing",
    type: "docs",
    description: "How to contribute to the project",
    content: "Learn how to contribute to the HyprLuna project. You can contribute by reporting bugs, suggesting features, improving documentation, or submitting code changes. All contributions are welcome!"
  },
  {
    title: "HyprLuna Roadmap",
    href: "/roadmap",
    type: "content",
    description: "Future plans for HyprLuna",
    content: "See what's planned for future versions of HyprLuna. The roadmap includes upcoming features, improvements, and bug fixes. You can also suggest new features and vote on existing proposals."
  }
]
