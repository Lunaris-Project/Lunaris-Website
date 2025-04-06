"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Monitor, Command, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export const features = [
  {
    icon: <Terminal className="h-6 w-6" />,
    title: "Optimized Workflow",
    description:
      "Carefully configured keybindings and workspace rules for maximum productivity.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Developer Focused",
    description:
      "Pre-configured development tools and terminal emulators with sensible defaults.",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Multi-Monitor Support",
    description:
      "Seamless multi-monitor setup with intelligent workspace management.",
  },
  {
    icon: <Command className="h-6 w-6" />,
    title: "Intuitive Keybindings",
    description:
      "Logical and easy-to-remember keyboard shortcuts for all operations.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Beautiful Themes",
    description:
      "Carefully crafted light and dark themes with consistent styling across applications.",
  },
  {
    icon: (
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
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: "Auto Dark Mode",
    description:
      "Automatic theme switching based on time of day or system preferences.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-0"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm bg-primary/10"
          >
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything you need
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[42rem] text-lg">
            Carefully crafted features that enhance your workflow.
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2">
          {features.map((feature, index) => {
            // Define grid areas based on index
            const gridAreas = [
              "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
              "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
              "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
              "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
              "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
            ];
            
            // Use the first 5 features for the grid layout
            if (index > 4) return null;
            
            return (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`min-h-[14rem] list-none ${gridAreas[index]}`}
              >
                <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="relative flex h-full flex-col justify-between gap-6 bg-card overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#161616] md:p-6 group">
                    <div className="absolute inset-0"></div>
                    <div className="relative z-10 flex flex-1 flex-col justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="mt-4 font-bold text-xl text-balance">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
} 