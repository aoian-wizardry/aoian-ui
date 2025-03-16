import * as React from "react"
import { toast } from "sonner"

import {
  Attachments,
  type AttachmentsProps,
} from "@/registry/aoian-ui/attachments/attachments"
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

  const handleFileChange: AttachmentsProps["onFileChange"] = (
    acceptedFiles,
    rejectedFiles
  ) => {
    try {
      toast.success("Files:" + JSON.stringify(acceptedFiles))
      if (rejectedFiles.length > 0) {
        toast.error("Error:" + JSON.stringify(rejectedFiles))
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Sender
      placeholder="Send a message..."
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
            <Attachments onFileChange={handleFileChange} />
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
