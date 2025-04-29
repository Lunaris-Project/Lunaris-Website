"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ChevronRight, Terminal, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/code-block";

export default function Installation() {
  return (
    <section id="installation" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 text-sm bg-primary/10"
          >
            Installation
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Up and running in minutes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[42rem] text-lg">
            Simple installation process with clear instructions.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Suspense fallback={<div className="rounded-lg border p-4 h-[200px] flex items-center justify-center bg-muted"><Terminal className="h-6 w-6 animate-pulse" /></div>}>
            <Tabs defaultValue="manual" className="w-full">
              <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50">
                <TabsTrigger
                  value="manual"
                  className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  Manual Install
                </TabsTrigger>
                <TabsTrigger
                  value="automatic"
                  className="rounded-md data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  Automatic Install
                </TabsTrigger>
              </TabsList>
              <TabsContent value="manual" className="mt-6 space-y-4">
                {/* <div className="space-y-4">
                  <Suspense fallback={<div className="rounded-lg border p-4 h-[100px] flex items-center justify-center bg-muted"><Code className="h-6 w-6 animate-pulse" /></div>}>
                    <CodeBlock
                      code="git clone https://github.com/Lunaris-Project/HyprLuna.git ~/HyprLuna"
                      filename="1. Clone the repository"
                    />
                  </Suspense>
                  
                </div> */}
                <div className="rounded-xl border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold">- Visit our installation page: <Link className="text-blue-500 underline hover:text-blue-600" href="/docs/main-dots/installation">Install HyprLuna</Link></h3>
                  <br />
                  <h3 className="text-lg font-bold">- Additional steps:</h3>
                  <p className="mt-2 text-muted-foreground">
                    After installation, you may want to customize specific
                    aspects of your setup:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Edit{" "}
                        <code className="text-primary">
                          ~/.config/hypr/hyprland.conf
                        </code>{" "}
                        for window management settings
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Modify{" "}
                        <code className="text-primary">
                          ~/.ags/config.json
                        </code>{" "}
                        for configure your AGS settings
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        For more information about Configuring your setup, visit the docs
                        <Link className="text-blue-500 underline hover:text-blue-600 ml-1" href="/docs">View Documentation</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="automatic" className="mt-6 space-y-4">
                <Suspense fallback={<div className="rounded-lg border p-4 h-[100px] flex items-center justify-center bg-muted"><Code className="h-6 w-6 animate-pulse" /></div>}>
                  <CodeBlock code="# Soon not ready yet" filename="Terminal" />
                </Suspense>
                <div className="rounded-xl border bg-card p-6 shadow-md">
                  <h3 className="text-lg font-bold">What this does:</h3>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Installs all required dependencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Configures Hyprland with optimal settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Sets up complementary tools (ags, matugen, etc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>
                        Creates backups of your existing configurations
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </Suspense>
        </div>
      </div>
    </section>
  );
} 