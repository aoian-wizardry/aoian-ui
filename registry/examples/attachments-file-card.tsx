import * as React from "react"

import { FileCard } from "@/registry/aoian-ui/attachments/attachments"

export default function AttachmentsFileCard() {
  const [listBox, setListBox] = React.useState([
    {
      name: "excel-file.xlsx",
      size: 111111,
      progress: 0,
    },
    {
      name: "word-file.docx",
      size: 111111111,
      progress: 10,
    },
    {
      name: "image-file.png",
      size: 1024,
      progress: 20,
    },
    {
      name: "pdf-file.pdf",
      size: 1024,
      progress: 30,
    },
    {
      name: "ppt-file.pptx",
      size: 10241,
      progress: 40,
    },
    {
      name: "video-file.mp4",
      size: 1024,
      progress: false,
    },
    {
      name: "audio-file.mp3",
      size: 1024000,
      progress: 50,
    },
    {
      name: "zip-file.zip",
      size: 1024,
      progress: 60,
    },
    {
      name: "markdown-file.md",
      size: 1024,
      progress: 70,
    },
    {
      name: "python-file.py",
      size: 1024,
      progress: 80,
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
