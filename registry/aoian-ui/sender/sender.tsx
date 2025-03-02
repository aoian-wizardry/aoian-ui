"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { ArrowUp, Square } from "lucide-react"
import Textarea, { type TextareaAutosizeProps } from "react-textarea-autosize"

import { Button } from "@/components/ui/button"
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

const senderVariants = cva("mx-auto w-full max-w-3xl px-2 py-4", {
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
  "relative flex w-full flex-col gap-2 rounded-3xl border border-input bg-muted",
  {
    variants: {},
    defaultVariants: {},
  }
)

function SenderContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof senderContentVariants>) {
  return <div className={cn(senderContentVariants(), className)} {...props} />
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
      rows={2}
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
        "min-h-12 w-full resize-none border-0 bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
      className={cn("flex items-center justify-between p-3", className)}
      {...props}
    />
  )
}

function SenderOperationBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-2", className)} {...props} />
}

function SenderOperationBarExtra({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center gap-2", className)} {...props} />
}

function SenderButton({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { loading, value, onAbort, onSubmit } = useSender()
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className={cn("rounded-full", loading && "animate-pulse", className)}
      disabled={value.length === 0 && !loading}
      onClick={loading ? onAbort : onSubmit}
      {...props}
    >
      {loading ? <Square size={20} /> : <ArrowUp size={20} />}
    </Button>
  )
}

export {
  Sender,
  SenderContent,
  SenderTextArea,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderButton,
  useSender,
}
