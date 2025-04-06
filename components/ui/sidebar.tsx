"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const SidebarContext = React.createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  collapsible: "icon" | "full" | false
}>({
  open: true,
  setOpen: () => undefined,
  collapsible: false,
})

interface SidebarProviderProps {
  defaultOpen?: boolean
  children: React.ReactNode
}

export function SidebarProvider({ defaultOpen = true, children }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen)

  return <SidebarContext.Provider value={{ open, setOpen, collapsible: "icon" }}>{children}</SidebarContext.Provider>
}

const sidebarVariants = cva(
  "relative flex h-full flex-col overflow-hidden border-r bg-background data-[state=closed]:w-[--sidebar-closed-width] data-[state=open]:w-[--sidebar-width] data-[state=closed]:data-[variant=inset]:border-none",
  {
    variants: {
      variant: {
        default: "",
        inset: "border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sidebarVariants> {
  collapsible?: "icon" | "full" | false
}

export function Sidebar({ className, variant, collapsible = false, ...props }: SidebarProps) {
  const { open, setOpen } = React.useContext(SidebarContext)

  return (
    <div
      className={cn(sidebarVariants({ variant }), "transition-[width] duration-300", className)}
      data-state={open ? "open" : "closed"}
      style={
        {
          "--sidebar-width": "240px",
          "--sidebar-closed-width": collapsible === "icon" ? "4rem" : "0px",
        } as React.CSSProperties
      }
      {...props}
    >
      {collapsible === "full" && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 h-7 w-7"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          <span className="sr-only">{open ? "Close sidebar" : "Open sidebar"}</span>
        </Button>
      )}
    </div>
  )
}

export function SidebarTrigger({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = React.useContext(SidebarContext)

  return (
    <Button variant="ghost" size="icon" className={cn("h-9 w-9", className)} onClick={() => setOpen(!open)} {...props}>
      {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      <span className="sr-only">{open ? "Close sidebar" : "Open sidebar"}</span>
    </Button>
  )
}

export function SidebarHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-4 py-2", className)} {...props} />
}

export function SidebarContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 overflow-auto", className)} {...props} />
}

export function SidebarFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-auto px-4 py-2", className)} {...props} />
}

export function SidebarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("py-2", className)} {...props} />
}

export function SidebarGroupLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open } = React.useContext(SidebarContext)

  if (!open) {
    return null
  }

  return <div className={cn("px-4 py-1 text-xs font-medium text-muted-foreground", className)} {...props} />
}

export function SidebarGroupContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pb-1", className)} {...props} />
}

export function SidebarMenu({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-1", className)} {...props} />
}

export function SidebarMenuItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props} />
}

interface SidebarMenuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean
  size?: "default" | "sm" | "lg"
}

export function SidebarMenuButton({ className, isActive, size = "default", ...props }: SidebarMenuButtonProps) {
  const { open } = React.useContext(SidebarContext)

  return (
    <button
      className={cn(
        "group flex w-full items-center gap-2 rounded-md border border-transparent px-2 py-1 hover:bg-accent hover:text-accent-foreground",
        isActive && "bg-accent/50 font-medium text-accent-foreground",
        size === "sm" && "py-0.5 text-sm",
        size === "lg" && "py-2 text-base",
        !open && "justify-center",
        className,
      )}
      {...props}
    />
  )
}

export function SidebarInset({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-1 flex-col overflow-hidden", className)} {...props} />
}

export function SidebarRail({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { open, setOpen, collapsible } = React.useContext(SidebarContext)

  if (collapsible !== "icon") {
    return null
  }

  return (
    <div
      className={cn(
        "absolute inset-y-0 right-0 z-10 w-1 cursor-col-resize bg-transparent transition-colors hover:bg-accent",
        className,
      )}
      onDoubleClick={() => setOpen(!open)}
      {...props}
    />
  )
}

export function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return <Separator className={cn("my-2", className)} {...props} />
}

export function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return <Input className={cn("h-9", className)} {...props} />
}

