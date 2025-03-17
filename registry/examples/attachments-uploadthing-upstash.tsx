import * as React from "react"
import { generateReactHelpers } from "@uploadthing/react"
import { toast } from "sonner"

import {
  Attachments,
  FileListBox,
  type AttachmentsProps,
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
import { cn, generateUUID } from "@/registry/lib/utils"
import type { UploadRouter } from "@/app/api/uploadthing/core"

const { useUploadThing, uploadFiles } = generateReactHelpers<UploadRouter>()

const maxFileCount = 6

export default function AttachmentsUploadthingUpstash() {
  const [value, setValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [attachments, setAttachments] = React.useState<Array<FileCardItem>>([])
  const [uploadQueue, setUploadQueue] = React.useState<Array<FileCardItem>>([])

  const fileItems = React.useMemo(() => {
    return [...attachments, ...uploadQueue]
  }, [attachments, uploadQueue])

  const { startUpload, routeConfig } = useUploadThing("imageUploader", {
    onClientUploadComplete: (props) => {
      console.log("uploaded", props)
      alert("uploaded successfully!")
    },
    onUploadProgress: (progress) => {
      console.log("progress", progress)
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
    onUploadBegin: (fileName) => {
      console.log("upload has begun for", fileName)
    },
  })

  console.log(routeConfig, "routeConfig")

  const handleFileChange = React.useCallback<AttachmentsProps["onFileChange"]>(
    (acceptedFiles, rejectedFiles) => {
      if ((fileItems?.length ?? 0) + acceptedFiles.length > maxFileCount) {
        toast.error(`Cannot upload more than ${maxFileCount} files`)
        return
      }
      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast.error(`File ${file.name} was rejected`)
        })
      }
      const uid = generateUUID()
      const files = (acceptedFiles || []).map((file) =>
        Object.assign(file, { customId: uid })
      )
      const newItems = files.map((file) => ({
        uid,
        name: file.name,
        size: file.size,
        percent: 0,
        contentType: file.type,
        status: "uploading",
      })) as FileCardItem[]
      console.log("files", files)
      setUploadQueue([...uploadQueue, ...newItems])
      startUpload(files)
    },
    [uploadQueue, attachments]
  )

  console.log("uploadQueue", uploadQueue)

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
        <FileListBox
          items={fileItems}
          className={cn(fileItems.length === 0 && "-mt-2")}
        />
        {fileItems.length > 0 && <div className="h-1"></div>}
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra></SenderOperationBarExtra>
          <SenderOperationBar>
            <Attachments
              multiple
              maxFileCount={maxFileCount}
              onFileChange={handleFileChange}
            />
            <SenderButton />
          </SenderOperationBar>
        </SenderOperation>
      </SenderContent>
    </Sender>
  )
}
