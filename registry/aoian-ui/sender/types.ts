import * as React from "react"

export type SenderProps = {
  value: string
  loading?: boolean
  readOnly?: boolean
  disabled?: boolean
  vertical?: boolean
  submitType?: "enter" | "shiftEnter" | false
  onSubmit: VoidFunction
  onAbort?: () => void
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>
  placeholder?: string
}
