import * as React from "react"

import {
  FileCard,
  type FileCardItem,
} from "@/registry/aoian-ui/attachments/attachments"

export default function AttachmentsFileCard() {
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
    <div className={"space-y-4"}>
      {listBox.map((item, index) => {
        return (
          <div key={index}>
            <FileCard className="bg-muted" item={item} />
          </div>
        )
      })}
    </div>
  )
}
