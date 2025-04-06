"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Github, Menu, Terminal, X, Book, Zap, Layers, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SearchBar } from "@/components/search";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export const navItems = [
  {
    label: "Home",
    href: "#hero",
    section: "hero",
    icon: (
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
  },
  {
    label: "Features",
    href: "#features",
    section: "features",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    label: "Showcase",
    href: "#showcase",
    section: "showcase",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    label: "Installation",
    href: "#installation",
    section: "installation",
    icon: <Download className="h-4 w-4" />,
  },
  {
    label: "Community",
    href: "#community",
    section: "community",
    icon: (
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 font-bold">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Terminal className="h-5 w-5 " />
              <span className="absolute -right-1 -top-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
              </span>
            </div>
            <span className="text-lg">HyprLuna</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center relative max-w-sm">
          <SearchBar />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.section
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/docs"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Lunaris-Project/HyprLuna"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] px-3 py-2"
            aria-label="GitHub Repository"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
          <ModeToggle />
          <div className="flex md:hidden items-center gap-2">
            <Suspense fallback={<div className="rounded-md p-2"><Menu className="h-5 w-5" /></div>}>
              <Sheet >
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="left" 
                  className="w-[60vw] h-[70%] max-w-sm top-[50%] translate-y-[-50%] bg-secondary/20 backdrop-blur-md rounded-r-lg"
                  hideCloseButton
                  style={{
                    position: 'fixed',
                    bottom: 'auto',
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-2 font-bold">
                        <Terminal className="h-5 w-5 text-primary" />
                        <span>HyprLuna</span>
                      </div>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Close menu</span>
                        </Button>
                      </SheetTrigger>
                    </div>
                    
                    <div className="py-4">
                      <SearchBar />
                    </div>
                    
                    <ScrollArea className="flex-1 py-4">
                      <div className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 py-2 text-sm transition-colors hover:text-primary ${
                              activeSection === item.section
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {item.icon}
                            {item.label}
                          </Link>
                        ))}
                        <Link
                          href="/docs"
                          className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Book className="h-4 w-4" />
                          Documentation
                        </Link>
                      </div>
                    </ScrollArea>
                  </div>
                </SheetContent>
              </Sheet>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
} 