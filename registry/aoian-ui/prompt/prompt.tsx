"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/registry/lib/utils"

const promptVariants = cva("flex flex-col gap-3 overflow-x-scroll", {
  variants: {
    vertical: {
      true: "flex-col",
      false: "flex-row",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    vertical: false,
    wrap: false,
  },
})

function Prompt({
  className,
  vertical,
  wrap,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof promptVariants>) {
  return (
    <div
      {...props}
      className={cn(promptVariants({ vertical, wrap }), className)}
    />
  )
}

const promptItemVariants = cva(
  "flex flex-none gap-2 h-auto px-4 py-3 items-start justify-start rounded-lg",
  {
    variants: {
      variant: {
        filled: "bg-muted text-foreground",
        outlined: "border-border border",
        borderless: "border-none px-0 py-0",
      },
      disabled: {
        true: "opacity-70 cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "filled",
      disabled: false,
    },
  }
)

function PromptItem({
  className,
  disabled,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof promptItemVariants>) {
  return (
    <div
      {...props}
      className={cn(promptItemVariants({ variant, disabled }), className)}
    />
  )
}

function PromptContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        "flex min-w-0 flex-auto flex-col items-start gap-1",
        className
      )}
    />
  )
}

function PromptLabel({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      {...props}
      className={cn("text-sm font-medium text-foreground", className)}
    />
  )
}

function PromptDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p {...props} className={cn("text-muted-foreground", className)} />
}

function PromptIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={cn("pt-1 text-muted-foreground [&>svg]:size-4", className)}
    />
  )
}

export {
  Prompt,
  PromptItem,
  PromptContent,
  PromptLabel,
  PromptDescription,
  PromptIcon,
}
