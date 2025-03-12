import * as React from "react"
import { Ellipsis, Image } from "lucide-react"
import { toast } from "sonner"

import {
  Attachments,
  FileListBox,
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
  const [listBox, setListBox] = React.useState([
    {
      name: "123.png",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.aa",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.pdf",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.docx",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.ppt",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.xls",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.md",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.zip",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.mp4",
      size: 1024,
      progress: 0,
    },
    {
      name: "123.mp3",
      size: 1024,
      progress: 0,
    },
  ])

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
        <FileListBox items={listBox} />
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra></SenderOperationBarExtra>
          <SenderOperationBar>
            <Attachments fullScreenDrop onUpload={onUpload} />
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
