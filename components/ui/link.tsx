import * as React from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkVariants = cva(
  "inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-primary hover:text-primary/80",
        destructive: "text-destructive hover:text-destructive/80",
        muted: "text-muted-foreground hover:text-foreground",
        ghost: "hover:text-accent-foreground",
        underline: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] py-2 px-3",
        sm: "min-h-[44px] py-1 px-2",
        lg: "min-h-[44px] py-3 px-4",
        icon: "min-h-[44px] min-w-[44px] p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LinkProps
  extends NextLinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof linkVariants> {
  children?: React.ReactNode
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <NextLink
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </NextLink>
    )
  }
)

Link.displayName = "Link"

export { Link, linkVariants } 