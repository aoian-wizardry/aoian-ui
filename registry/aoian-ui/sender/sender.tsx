"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { ArrowLeft, ArrowUp, Globe, Square } from "lucide-react"
import Textarea, { type TextareaAutosizeProps } from "react-textarea-autosize"

import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import type { SenderProps } from "@/registry/aoian-ui/sender/types"
import { cn } from "@/registry/lib/utils"

const SenderContext = React.createContext<SenderProps | null>(null)

function useSender() {
  const context = React.useContext(SenderContext)
  if (context === null) {
    throw new Error("useSender must be used within a Sender.")
  }
  return context
}

const senderVariants = cva("w-full max-w-3xl px-2 py-4 space-y-2", {
  variants: {},
  defaultVariants: {},
})

function Sender({
  onSubmit,
  onChange,
  onFocus,
  loading,
  onBlur,
  onAbort,
  onKeyDown,
  value,
  vertical = true,
  readOnly,
  disabled,
  submitType = "enter",
  placeholder,
  className,
  ...props
}: SenderProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> &
  VariantProps<typeof senderVariants>) {
  const contextValue = React.useMemo<SenderProps>(
    () => ({
      placeholder,
      submitType,
      disabled,
      readOnly,
      value,
      onKeyDown,
      onAbort,
      onBlur,
      vertical,
      loading,
      onFocus,
      onChange,
      onSubmit,
    }),
    [
      placeholder,
      submitType,
      disabled,
      readOnly,
      value,
      onKeyDown,
      onAbort,
      onBlur,
      vertical,
      loading,
      onFocus,
      onChange,
      onSubmit,
    ]
  )

  return (
    <SenderContext value={contextValue}>
      <div {...props} className={cn(senderVariants(), className)}></div>
    </SenderContext>
  )
}

const senderContentVariants = cva(
  "relative flex px-4 py-3 w-full gap-2 rounded-2xl border border-input bg-muted",
  {
    variants: {
      vertical: {
        true: "flex-col",
        false: "flex-row items-end",
      },
    },
    defaultVariants: {
      vertical: true,
    },
  }
)

function SenderContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof senderContentVariants>) {
  const { vertical } = useSender()
  return (
    <div
      data-vertical={vertical}
      className={cn(
        "group/sender-content",
        senderContentVariants({ vertical }),
        className
      )}
      {...props}
    />
  )
}

function SenderHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof senderContentVariants>) {
  return (
    <div
      className={cn(
        "group/sender-header inline-flex items-center gap-2",
        className
      )}
      {...props}
    />
  )
}

function SenderTextArea({ className, ...props }: TextareaAutosizeProps) {
  const {
    value,
    submitType,
    onSubmit,
    onKeyDown,
    placeholder,
    readOnly,
    disabled,
    onChange,
    onFocus,
    onBlur,
  } = useSender()

  const isCompositionRef = React.useRef(false)

  const handleCompositionStart = () => (isCompositionRef.current = true)

  const handleCompositionEnd = () => {
    isCompositionRef.current = false
  }

  const handleKeyPress: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const canSubmit =
      e.key === "Enter" &&
      !isCompositionRef.current &&
      value.trim().length !== 0

    // Check for `submitType` to submit
    switch (submitType) {
      case "enter":
        if (canSubmit && !e.shiftKey) {
          e.preventDefault()
          onSubmit()
        }
        break

      case "shiftEnter":
        if (canSubmit && e.shiftKey) {
          e.preventDefault()
          onSubmit()
        }
        break
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  return (
    <Textarea
      name="sender"
      maxRows={5}
      tabIndex={0}
      onCompositionStart={handleCompositionStart}
      onCompositionEnd={handleCompositionEnd}
      placeholder={placeholder ?? "Ask a question..."}
      spellCheck={false}
      value={value}
      readOnly={readOnly}
      disabled={disabled}
      className={cn(
        "min-h-12 w-full resize-none self-center border-0 bg-transparent text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 group-data-[vertical=false]/sender-content:min-h-[22px]",
        className
      )}
      onChange={onChange}
      onKeyDown={handleKeyPress}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  )
}

function SenderOperation({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex justify-between gap-2 group-data-[vertical=false]/sender-content:self-end",
        className
      )}
      {...props}
    />
  )
}

function SenderOperationBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    />
  )
}

function SenderOperationBarExtra({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex gap-2", className)} {...props} />
}

function SenderButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { loading, value, onAbort, onSubmit, disabled } = useSender()
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className={cn("rounded-lg", loading && "animate-pulse", className)}
      disabled={(value?.length === 0 && !loading) || disabled}
      onClick={loading ? onAbort : onSubmit}
      {...props}
    >
      {loading ? <Square size={20} /> : <ArrowUp size={20} />}
    </Button>
  )
}

function SenderSearchToggle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Toggle>) {
  return (
    <Toggle
      aria-label="Toggle search mode"
      variant="outline"
      className={cn(
        "gap-1 border bg-background px-3 text-muted-foreground",
        "data-[state=on]:bg-blue-100",
        "data-[state=on]:text-blue-700",
        "data-[state=on]:border-blue-400",
        "data-[state=on]:dark:bg-blue-950",
        "data-[state=on]:dark:text-blue-300",
        "data-[state=on]:dark:border-blue-800",
        "rounded-lg",
        className
      )}
      {...props}
    >
      <Globe className="size-4" />
      <span className="text-xs">{children}</span>
    </Toggle>
  )
}

function SenderAction({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className={cn("rounded-lg hover:bg-background", className)}
      {...props}
    >
      {children}
    </Button>
  )
}

export {
  Sender,
  SenderHeader,
  SenderContent,
  SenderTextArea,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderButton,
  SenderAction,
  SenderSearchToggle,
  useSender,
}
