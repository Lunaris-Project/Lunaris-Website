"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Github, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TerminalDemo } from "@/components/terminal-demo";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-20 md:py-28 lg:py-32 bg-opacity-85"
    >
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-primary/10">
              <Badge variant="secondary" className="mr-2 px-1.5 py-0.5">
                NEW
              </Badge>
              <span className="text-muted-foreground">
                HyprLuna 0.1.0 released
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
              Modern <span className="bg-gradient-to-tr from-blue-500 to-green-300 bg-clip-text text-transparent">Hyprland</span> Dotfiles
            </h1>
            <p className="text-muted-foreground max-w-[42rem] text-lg">
              A clean, minimal, and functional configuration for Hyprland.
              Optimized for developers and power users.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                href="/docs/main-dots/installation"
                className="inline-flex items-center justify-center rounded-md py-3 px-4 min-h-[44px] min-w-[44px]"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/Lunaris-Project/HyprLuna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium min-h-[44px] min-w-[44px] px-4 py-3"
                aria-label="Star HyprLuna on GitHub"
              >
                <Github className="h-5 w-5" />
                Star on GitHub
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted"
                  >
                    <span className="text-xs font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <span>Join the growing community of Hyprland users</span>
            </div>
          </div>
          <Suspense fallback={<div className="rounded-lg border h-[300px] flex items-center justify-center bg-muted"><Terminal className="h-6 w-6 animate-pulse" /></div>}>
            <TerminalDemo />
          </Suspense>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-40 right-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-indigo-900/10 blur-3xl"></div>
      <div className="absolute -bottom-7 left-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-blue-900/10 blur-3xl"></div>
    </section>
  );
} 