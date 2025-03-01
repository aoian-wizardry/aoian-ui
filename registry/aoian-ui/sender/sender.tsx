"use client"

import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { ArrowUp, Square } from "lucide-react"
import Textarea from "react-textarea-autosize"

import { Button } from "@/components/ui/button"
import { cn } from "@/registry/lib/utils"

const senderVariants = cva("mx-auto w-full", {
  variants: {},
  defaultVariants: {},
})

function Sender({
  className,
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
  ...props
}: React.ComponentProps<"div"> & {
  value: string
  loading?: boolean
  readOnly?: boolean
  disabled?: boolean
  submitType?: "enter" | "shiftEnter" | false
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onAbort?: () => void
  onChange?: (e?: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>
  placeholder?: string
} & VariantProps<typeof senderVariants>) {
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
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

    const textarea = e.target as HTMLTextAreaElement
    // Check for `submitType` to submit
    switch (submitType) {
      case "enter":
        if (canSubmit && !e.shiftKey) {
          e.preventDefault()
          textarea.form?.requestSubmit()
        }
        break

      case "shiftEnter":
        if (canSubmit && e.shiftKey) {
          e.preventDefault()
          textarea.form?.requestSubmit()
        }
        break
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  return (
    <div {...props} className={cn(senderVariants(), className)}>
      <form
        onSubmit={onSubmit}
        className={cn("mx-auto w-full max-w-3xl px-2 py-4")}
      >
        <div className="relative flex w-full flex-col gap-2 rounded-3xl border border-input bg-muted">
          <Textarea
            ref={inputRef}
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
            className="min-h-12 w-full resize-none border-0 bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            onChange={(e) => {
              onChange?.(e)
            }}
            onKeyDown={handleKeyPress}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          {/* Bottom menu area */}
          <div className="flex items-center justify-between p-3">
            {/*<div className="flex items-center gap-2">*/}
            {/*  <ModelSelector models={models || []} />*/}
            {/*  <SearchModeToggle />*/}
            {/*</div>*/}
            <div className="flex items-center gap-2">
              {/*{messages.length > 0 && (*/}
              {/*  <Button*/}
              {/*    variant="outline"*/}
              {/*    size="icon"*/}
              {/*    onClick={handleNewChat}*/}
              {/*    className="group shrink-0 rounded-full"*/}
              {/*    type="button"*/}
              {/*    disabled={isLoading}*/}
              {/*  >*/}
              {/*    <MessageCirclePlus className="size-4 transition-all group-hover:rotate-12" />*/}
              {/*  </Button>*/}
              {/*)}*/}
              <Button
                type={loading ? "button" : "submit"}
                size={"icon"}
                variant={"outline"}
                className={cn(loading && "animate-pulse", "rounded-full")}
                disabled={value.length === 0 && !loading}
                onClick={loading ? onAbort : undefined}
              >
                {loading ? <Square size={20} /> : <ArrowUp size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export { Sender }
