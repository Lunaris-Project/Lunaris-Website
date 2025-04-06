"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Community() {
  return (
    <section id="community" className="relative py-20 md:py-28">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm">
            Community
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Join the community
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[42rem] text-lg">
            Connect with other HyprLuna users and contributors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl border bg-card p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Github className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-bold text-xl">GitHub</h3>
            <p className="mt-2 text-muted-foreground">
              Star the repository, report issues, and contribute to the
              project.
            </p>
            <div className="mt-4">
              <Link
                href="https://github.com/Lunaris-Project/HyprLuna"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium min-h-[44px] min-w-[44px] px-4 py-3"
                aria-label="Visit the HyprLuna repository on GitHub"
              >
                <Github className="h-5 w-5" />
                Visit Repository
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl border bg-card p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-xl">Discord</h3>
            <p className="mt-2 text-muted-foreground">
              Join our Discord server to chat with other users and get help.
            </p>
            <div className="mt-4">
              <Link
                href="https://discord.gg/qnAHD9keWr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium min-h-[44px] min-w-[44px] px-4 py-3"
                aria-label="Join the HyprLuna Discord server"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Join Discord
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl border bg-card p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 11a9 9 0 0 0 9-9"></path>
                <circle cx="12" cy="11" r="1"></circle>
              </svg>
            </div>
            <h3 className="mt-4 font-bold text-xl">Reddit</h3>
            <p className="mt-2 text-muted-foreground">
              Join the r/hyprland subreddit to share your setup and get
              inspiration.
            </p>
            <div className="mt-4">
              <Link
                href="https://www.reddit.com/r/hyprland/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium min-h-[44px] min-w-[44px] px-4 py-3"
                aria-label="Visit the Hyprland Subreddit"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Visit Subreddit
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 