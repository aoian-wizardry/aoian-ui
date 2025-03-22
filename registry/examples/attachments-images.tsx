import * as React from "react"

import {
  FileCard,
  type FileCardItem,
} from "@/registry/aoian-ui/attachments/attachments"

export default function AttachmentsFileCard() {
  const [listBox] = React.useState<FileCardItem[]>([
    {
      name: "image-file.png",
      size: 1024,
      status: "done",
      percent: 0,
      url: "https://avatars.githubusercontent.com/u/9461149?s=48&v=4",
    },
    {
      name: "image-file.png",
      size: 1024,
      status: "uploading",
      percent: 0,
      url: "https://avatars.githubusercontent.com/u/9461149?s=48&v=4",
    },
    {
      name: "image-file.png",
      size: 1024,
      status: "error",
      message: "The file is too large.",
      percent: 0,
      url: "https://avatars.githubusercontent.com/u/9461149?s=48&v=4",
    },
  ])
  return (
    <div className={"inline-flex gap-2"}>
      {listBox.map((item, index) => {
        return (
          <div key={index}>
            <FileCard mode="image" className="bg-muted" item={item} />
          </div>
        )
      })}
    </div>
  )
}
