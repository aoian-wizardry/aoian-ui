import * as React from "react"
import { Ellipsis, Image } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Sender,
  SenderButton,
  SenderContent,
  SenderHeader,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderSearchToggle,
  SenderTextArea,
} from "@/registry/aoian-ui/sender/sender"

export default function SenderHeaderDemo() {
  const [value, setValue] = React.useState("")
  const [isSearchMode, setIsSearchMode] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Sender
      submitType="shiftEnter"
      placeholder="Press Shift + Enter to send message"
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
      <SenderHeader>
        <SenderSearchToggle
          pressed={isSearchMode}
          onPressedChange={setIsSearchMode}
        >
          Search
        </SenderSearchToggle>
        <Button variant="outline">
          <Image />
          Image
        </Button>
        <Button variant="outline">
          <Ellipsis />
          More
        </Button>
      </SenderHeader>
      <SenderContent>
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra></SenderOperationBarExtra>
          <SenderOperationBar>
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
