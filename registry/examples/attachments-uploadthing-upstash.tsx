import * as React from "react"
import { toast } from "sonner"

import {
  Attachments,
  FileListBox,
} from "@/registry/aoian-ui/attachments/attachments"
import { useUploadFile } from "@/registry/aoian-ui/hooks/use-upload-file"
import {
  Sender,
  SenderButton,
  SenderContent,
  SenderOperation,
  SenderOperationBar,
  SenderOperationBarExtra,
  SenderTextArea,
} from "@/registry/aoian-ui/sender/sender"

export default function AttachmentsUploadthingUpstash() {
  const [value, setValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const { onUpload, progresses, uploadedFiles, isUploading } = useUploadFile(
    "imageUploader",
    {
      defaultUploadedFiles: [],
    }
  )

  console.log(
    "progresses, uploadedFiles, isUploading",
    progresses,
    uploadedFiles,
    isUploading
  )
  const [listBox, setListBox] = React.useState([
    {
      name: "excel-file.xlsx",
      size: 111111,
      progress: false,
    },
    {
      name: "word-file.docx",
      size: 111111111,
      progress: false,
    },
    {
      name: "image-file.png",
      size: 1024,
      progress: 6,
    },
    {
      name: "pdf-file.pdf",
      size: 1024,
      progress: 10,
    },
    {
      name: "ppt-file.pptx",
      size: 10241,
      progress: 20,
    },
    {
      name: "video-file.mp4",
      size: 1024,
      progress: 30,
    },
    {
      name: "audio-file.mp3",
      size: 1024000,
      progress: 40,
    },
    {
      name: "zip-file.zip",
      size: 1024,
      progress: 50,
    },
    {
      name: "markdown-file.md",
      size: 1024,
      progress: 60,
    },
    {
      name: "python-file.py",
      size: 1024,
      progress: 70,
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
            <Attachments onUpload={onUpload} />
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
