import * as React from "react"
import { toast } from "sonner"

import { Attachments } from "@/registry/aoian-ui/attachments/attachments"
import {
  Sender,
  SenderButton,
  SenderContent,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderTextArea,
} from "@/registry/aoian-ui/sender/sender"

export default function AttachmentsDemo() {
  const [value, setValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  async function onUpload(files: File[]) {
    try {
      console.log("files", files)
      toast.success(JSON.stringify(files))
    } catch (e) {
      console.log(e)
    }
  }

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
      <SenderContent>
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra></SenderOperationBarExtra>
          <SenderOperationBar>
            <Attachments onUpload={onUpload} />
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
