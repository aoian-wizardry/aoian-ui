"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useBubbleList } from "@/registry/aoian-ui/bubble/bubble-list"
import type { BubbleProps, BubbleRef } from "@/registry/aoian-ui/bubble/types"
import { useTypedEffect } from "@/registry/aoian-ui/hooks/use-typed-effect"
import { useTypingConfig } from "@/registry/aoian-ui/hooks/use-typing-config"
import { Loading } from "@/registry/aoian-ui/loading"

const BubbleContext = React.createContext<BubbleProps | null>(null)

function useBubble() {
  const context = React.useContext(BubbleContext)
  if (context === null) {
    throw new Error("useBubble must be used within a BubbleProvider.")
  }
  return context
}

const Bubble = React.forwardRef<
  BubbleRef,
  React.HTMLAttributes<HTMLDivElement> & BubbleProps
>(
  (
    {
      placement = "start",
      loading,
      typing,
      avatarPlaceholder,
      onTypingComplete,
      messageRender,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // ============================= Refs =============================
    const divRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle(ref, () => ({
      nativeElement: divRef.current!,
    }))

    const contextValue = React.useMemo<BubbleProps>(
      () => ({
        placement,
        avatarPlaceholder,
        loading,
        typing,
        messageRender,
        onTypingComplete,
      }),
      [
        placement,
        loading,
        typing,
        onTypingComplete,
        avatarPlaceholder,
        messageRender,
      ]
    )

    return (
      <BubbleContext.Provider value={contextValue}>
        <div
          className={cn(
            "group flex gap-2 data-[placement=end]:flex-row-reverse",
            className
          )}
          ref={divRef}
          data-placement={placement}
          {...props}
        >
          {avatarPlaceholder && <BubbleAvatar placeholder />}
          {children}
        </div>
      </BubbleContext.Provider>
    )
  }
)
Bubble.displayName = "Bubble"

type BubbleAvatarProps = {
  className?: string
  textClassName?: string
  triggerClassName?: string
  src?: string
  alt?: string
  loading?: boolean
  children?: React.ReactNode
  placeholder?: boolean
}
const BubbleAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  BubbleAvatarProps
>(
  (
    {
      textClassName,
      triggerClassName,
      className,
      src,
      alt,
      placeholder,
      loading,
      children,
    },
    ref
  ) => {
    if (placeholder) {
      return <div className={cn("invisible h-8 w-8 shrink-0", className)}></div>
    }
    return (
      <Avatar className={cn("h-8 w-8 shrink-0", className)} ref={ref}>
        <AvatarImage src={src} alt={alt ?? "@aoian"} />
        <AvatarFallback
          className={cn(
            "bg-purple-400 text-sm font-medium text-white",
            textClassName
          )}
        >
          {children}
        </AvatarFallback>
        {loading && (
          <AvatarTrigger
            className={cn("h-4 w-4 [&>svg]:size-2.5", triggerClassName)}
          >
            <Loading size="sm" className="gap-px" itemClassName="bg-white" />
          </AvatarTrigger>
        )}
      </Avatar>
    )
  }
)
BubbleAvatar.displayName = "BubbleAvatar"

const BubbleHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mb-1 text-sm text-chat-foreground", className)}
      {...props}
    />
  )
})
BubbleHeader.displayName = "BubbleHeader"

const BubbleFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("mt-2 text-sm", className)} {...props} />
})
BubbleFooter.displayName = "BubbleFooter"

const BubbleWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex min-w-0 max-w-full flex-col", className)}
      {...props}
    />
  )
})
BubbleWrapper.displayName = "BubbleWrapper"

const bubbleContentVariants = cva("text-chat-foreground px-4 py-3 text-sm", {
  variants: {
    variant: {
      filled: "bg-chat-bubble text-chat-bubble-foreground",
      outlined: "border-chat-bubble-border border",
      shadow: "dark:bg-chat-bubble shadow",
      borderless: "border-none px-0 py-0",
    },
    shape: {
      default: "rounded-xl",
      round: "rounded-[calc(20px/2+12px)]",
      corner: "rounded-xl",
    },
  },
  defaultVariants: {
    variant: "filled",
    shape: "default",
  },
})

export interface BubbleContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleContentVariants> {
  loading?: boolean
}

const BubbleContent = React.forwardRef<HTMLDivElement, BubbleContentProps>(
  ({ className, variant, shape, loading, children, ...props }, ref) => {
    const { placement, typing, onTypingComplete, messageRender } = useBubble()
    const [typingEnabled, typingStep, typingInterval, customSuffix] =
      useTypingConfig(typing)
    const { onUpdate } = useBubbleList()
    // ============================ Typing ============================
    const [typedContent, isTyping] = useTypedEffect(
      children,
      typingEnabled,
      typingStep,
      typingInterval
    )

    React.useEffect(() => {
      onUpdate?.()
    }, [typedContent])

    const triggerTypingCompleteRef = React.useRef(false)
    React.useEffect(() => {
      if (!isTyping && !loading) {
        // StrictMode will trigger this twice,
        // So we need a flag to avoid that
        if (!triggerTypingCompleteRef.current) {
          triggerTypingCompleteRef.current = true
          onTypingComplete?.()
        }
      } else {
        triggerTypingCompleteRef.current = false
      }
    }, [isTyping, loading])

    // =========================== Content ============================
    const mergedContent = messageRender
      ? messageRender(typedContent as any)
      : typedContent

    return (
      <div
        ref={ref}
        className={cn(
          bubbleContentVariants({ variant, shape }),
          shape === "corner" && placement === "end" && "rounded-tr-sm",
          shape === "corner" && placement === "start" && "rounded-tl-sm",
          className
        )}
        {...props}
      >
        {loading ? (
          <Loading itemClassName="bg-chat-bubble-foreground" className="h-5" />
        ) : (
          <>
            {mergedContent}
            {isTyping && customSuffix}
          </>
        )}
      </div>
    )
  }
)
BubbleContent.displayName = "BubbleContent"

const AvatarTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#e3b341] [&>svg]:size-3",
      className
    )}
    {...props}
  />
))
AvatarTrigger.displayName = "AvatarTrigger"

export {
  Bubble,
  BubbleAvatar,
  BubbleHeader,
  BubbleWrapper,
  BubbleContent,
  BubbleFooter,
  useBubble,
}
