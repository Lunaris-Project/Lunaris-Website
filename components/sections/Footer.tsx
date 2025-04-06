"use client";

import Link from "next/link";
import { Github, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <Terminal className="h-5 w-5 text-primary" />
            <span>HYPRLUNA</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            A modern, minimal, and functional dotfiles configuration for
            Hyprland.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="/docs"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="Documentation"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/docs/main-dots"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="Main Dots Documentation"
              >
                Main Dots
              </Link>
            </li>
            <li>
              <Link
                href="/docs/lunarfetch"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="Lunarfetch Documentation"
              >
                Lunarfetch
              </Link>
            </li>
            <li>
              <Link
                href="/docs/troubleshooting"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="FAQ and Troubleshooting"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Community</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="https://github.com/Lunaris-Project/HyprLuna"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="GitHub Repository"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/hyprland"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="Discord Server"
              >
                Discord
              </Link>
            </li>
            <li>
              <Link
                href="https://www.reddit.com/r/hyprland/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="Reddit Community"
              >
                Reddit
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link
                href="https://github.com/Lunaris-Project/HyprLuna/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] inline-flex items-center"
                aria-label="MIT License"
              >
                License
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 border-t pt-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} HyprLuna. MIT License.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/Lunaris-Project/HyprLuna"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://discord.gg/qnAHD9keWr"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Discord Server"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              <span className="sr-only">Discord</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 