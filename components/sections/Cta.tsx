"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export default function Cta() {
  return (
    <section className="relative py-20 md:py-28 bg-muted/40">
      <div className="container relative z-10">
        <div className="rounded-xl border bg-card p-8 md:p-10 shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold md:text-3xl">
                Ready to transform your desktop?
              </h3>
              <p className="mt-2 text-muted-foreground text-lg">
                Join hundreds of developers using HyprLuna for a better
                workflow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </div>
    </section>
  );
} 