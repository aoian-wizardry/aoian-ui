import * as React from "react"
import { toast } from "sonner"

import {
  Attachments,
  FileListBox,
  type FileCardItem,
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

export default function AttachmentsCardSender() {
  const [value, setValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [listBox] = React.useState<FileCardItem[]>([
    {
      name: "excel-file.xlsx",
      size: 111111,
      status: "done",
      percent: 0,
    },
    {
      name: "word-file.docx",
      size: 111111111,
      status: "done",
      percent: 0,
    },
    {
      name: "image-file.png",
      size: 1024,
      status: "done",
      percent: 0,
    },
    {
      name: "pdf-file.pdf",
      size: 1024,
      status: "error",
      percent: 0,
    },
    {
      name: "ppt-file.pptx",
      size: 10241,
      status: "uploading",
      percent: 10,
    },
    {
      name: "video-file.mp4",
      size: 1024,
      status: "uploading",
      percent: 20,
    },
    {
      name: "audio-file.mp3",
      size: 1024000,
      status: "uploading",
      percent: 30,
    },
    {
      name: "zip-file.zip",
      size: 1024,
      status: "uploading",
      percent: 40,
    },
    {
      name: "markdown-file.md",
      size: 1024,
      status: "uploading",
      percent: 50,
    },
    {
      name: "python-file.py",
      size: 1024,
      status: "uploading",
      percent: 60,
    },
  ])

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
        <FileListBox items={listBox} />
        <div className="h-2"></div>
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra></SenderOperationBarExtra>
          <SenderOperationBar>
            <Attachments />
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
