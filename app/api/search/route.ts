import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { SearchResult } from '@/types/search';

// Function to recursively get all MDX files in the content directory
function getAllMdxFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllMdxFiles(filePath, fileList);
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to extract metadata and content from MDX files
function extractContentFromMdx(filePath: string): { 
  title: string; 
  description: string; 
  content: string;
  type: "docs" | "config" | "command" | "api" | "content";
  href: string;
} {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extract title from frontmatter or first heading
  let title = 'Untitled';
  const titleMatch = content.match(/title:\s*["'](.+?)["']/m) || content.match(/^#\s+(.+)$/m);
  if (titleMatch && titleMatch[1]) {
    title = titleMatch[1];
  }
  
  // Extract description from frontmatter
  let description = '';
  const descMatch = content.match(/description:\s*["'](.+?)["']/m);
  if (descMatch && descMatch[1]) {
    description = descMatch[1];
  } else {
    // Use first paragraph as description
    const paragraphMatch = content.match(/^(?!#|---).+$/m);
    if (paragraphMatch) {
      description = paragraphMatch[0].substring(0, 150) + (paragraphMatch[0].length > 150 ? '...' : '');
    }
  }
  
  // Determine content type based on path
  let type: "docs" | "config" | "command" | "api" | "content" = "content";
  if (filePath.includes('/docs/')) {
    type = "docs";
  } else if (filePath.includes('/config/')) {
    type = "config";
  } else if (filePath.includes('/api/')) {
    type = "api";
  } else if (filePath.includes('/commands/')) {
    type = "command";
  }
  
  // Generate href from file path
  const href = filePath
    .replace(/^.*\/content/, '') // Remove content directory prefix
    .replace(/\.(mdx|md)$/, '')  // Remove file extension
    .replace(/\/index$/, '');    // Remove index suffix
  
  return {
    title,
    description,
    content: content.replace(/---[\s\S]*?---/, '').trim(), // Remove frontmatter
    type,
    href: href || '/'
  };
}

// In-memory cache for search index
let searchIndex: SearchResult[] | null = null;

// Function to build or get search index
function getSearchIndex(): SearchResult[] {
  if (searchIndex) return searchIndex;
  
  try {
    // Path to content directory
    const contentDir = path.join(process.cwd(), 'content');
    
    // If content directory doesn't exist, return fallback data
    if (!fs.existsSync(contentDir)) {
      return getFallbackSearchData();
    }
    
    // Get all MDX files
    const mdxFiles = getAllMdxFiles(contentDir);
    
    // Extract content from each file
    searchIndex = mdxFiles.map(filePath => {
      const { title, description, content, type, href } = extractContentFromMdx(filePath);
      return { title, description, content, type, href };
    });
    
    return searchIndex;
  } catch (error) {
    console.error('Error building search index:', error);
    return getFallbackSearchData();
  }
}

// Fallback search data (original static data)
function getFallbackSearchData(): SearchResult[] {
  return [
    {
      title: "Installation Guide",
      href: "/docs/main-dots/installation",
      type: "docs",
      description: "How to install HyprLuna dotfiles",
      content: "Installation guide for HyprLuna dotfiles. Follow these steps to get your system up and running with HyprLuna."
    },
    {
      title: "Main Dots Overview",
      href: "/docs/main-dots",
      type: "docs",
      description: "Overview of the HyprLuna dotfiles",
      content: "HyprLuna dotfiles provide a complete Hyprland desktop environment with a focus on aesthetics and functionality."
    },
    {
      title: "Hyprland Configuration",
      href: "/docs/main-dots/configuration",
      type: "config",
      description: "Configure Hyprland window manager",
      content: "Learn how to configure Hyprland window manager to suit your needs. Customize animations, keybindings, and more."
    },
    {
      title: "Waybar Setup",
      href: "/docs/main-dots/waybar",
      type: "config",
      description: "Customize your Waybar status bar",
      content: "Waybar is a highly customizable status bar for Wayland. Learn how to configure it with HyprLuna."
    },
    {
      title: "Lunarfetch Overview",
      href: "/docs/lunarfetch",
      type: "docs",
      description: "System information display tool",
      content: "Lunarfetch is a system information tool that displays information about your system in a visually appealing way."
    },
    {
      title: "Lunarfetch API Reference",
      href: "/docs/lunarfetch/api-reference",
      type: "api",
      description: "API documentation for Lunarfetch",
      content: "Complete API reference for Lunarfetch. Learn how to integrate Lunarfetch into your own scripts and applications."
    },
    {
      title: "Keybindings",
      href: "/docs/main-dots/keybindings",
      type: "docs",
      description: "Keyboard shortcuts for Hyprland",
      content: "List of keyboard shortcuts for Hyprland. Learn how to navigate and control your desktop environment efficiently."
    },
    {
      title: "Theme Customization",
      href: "/docs/main-dots/themes",
      type: "config",
      description: "Customize the appearance of your desktop",
      content: "Learn how to customize the appearance of your desktop with HyprLuna themes. Change colors, fonts, and more."
    },
    {
      title: "FAQ",
      href: "/docs/advanced/troubleshooting",
      type: "docs",
      description: "Common issues and solutions",
      content: "Frequently asked questions about HyprLuna. Find solutions to common issues and problems."
    },
    {
      title: "Lunarfetch Examples",
      href: "/docs/lunarfetch/examples",
      type: "command",
      description: "Example usage of Lunarfetch",
      content: "Examples of how to use Lunarfetch in different scenarios. Learn how to customize the output and integrate it with other tools."
    },
  ];
}

// Search function
function searchContent(query: string, index: SearchResult[]): SearchResult[] {
  if (!query || query.length < 2) return [];
  
  const lowerQuery = query.toLowerCase();
  
  return index
    .filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      (item.content && item.content.toLowerCase().includes(lowerQuery))
    )
    .map(item => ({
      ...item,
      // Truncate content to a reasonable length for display
      content: item.content && item.content.length > 200 
        ? item.content.substring(0, 200) + '...' 
        : item.content
    }))
    .slice(0, 20); // Limit to 20 results for performance
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  if (!query) {
    return NextResponse.json({ results: [] });
  }
  
  const index = getSearchIndex();
  const results = searchContent(query, index);
  
  return NextResponse.json({ results });
}
