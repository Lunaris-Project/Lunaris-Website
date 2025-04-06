"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, Code, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Documentation() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm">
            Documentation
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Comprehensive guides
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[42rem] text-lg">
            Detailed documentation to help you get the most out of your
            setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-xl">Main Dots</h3>
              <p className="mt-2 text-muted-foreground">
                Learn how to configure and customize your HyprLuna dotfiles
                for the perfect desktop experience.
              </p>
              <div className="mt-6">
                <Link href="/docs/main-dots">
                  <Button className="gap-2 group">
                    Read Documentation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl border bg-card p-6 hover:shadow-lg transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-xl">Lunarfetch</h3>
              <p className="mt-2 text-muted-foreground">
                Explore the system fetch capabilities of Lunarfetch,
                including API references and examples.
              </p>
              <div className="mt-6">
                <Link href="/docs/lunarfetch">
                  <Button className="gap-2 group">
                    Read Documentation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 