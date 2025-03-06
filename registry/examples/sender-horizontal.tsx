import * as React from "react"
import { toast } from "sonner"

import {
  Sender,
  SenderButton,
  SenderContent,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderSearchToggle,
  SenderTextArea,
} from "@/registry/aoian-ui/sender/sender"

export default function SenderDemo() {
  const [value, setValue] = React.useState("")
  const [isSearchMode, setIsSearchMode] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Sender
      vertical={false}
      loading={isLoading}
      value={value}
      onChange={(e) => {
        setValue(e?.target?.value)
      }}
      onSubmit={() => {
        setIsLoading(true)
        setTimeout(() => {
          toast.success(value)
          setValue("")
          setIsLoading(false)
        }, 3000)
      }}
    >
      <SenderContent>
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra>
            <SenderSearchToggle
              pressed={isSearchMode}
              onPressedChange={setIsSearchMode}
            >
              Search
            </SenderSearchToggle>
          </SenderOperationBarExtra>
          <SenderOperationBar>
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
