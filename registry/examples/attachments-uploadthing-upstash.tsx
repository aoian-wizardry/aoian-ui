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

const { uploadFiles } = generateReactHelpers<UploadRouter>()

const maxFileCount = 6

export default function AttachmentsUploadthingUpstash() {
  const [value, setValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [attachments, setAttachments] = React.useState<Array<FileCardItem>>([])
  const [uploadQueue, setUploadQueue] = React.useState<Array<FileCardItem>>([])
  const [isUploading, setIsUploading] = React.useState(false)

  const fileItems = React.useMemo(() => {
    return [...attachments, ...uploadQueue]
  }, [attachments, uploadQueue])

  const updateUploadProgress = (uid: string, progress: number) => {
    setUploadQueue((prevQueue) =>
      prevQueue.map((item) =>
        item.uid === uid
          ? { ...item, percent: progress > 100 ? 100 : progress }
          : item
      )
    )
  }

  const onUpload = async (files: File[], uids: string[]) => {
    setIsUploading(true)
    try {
      const res = await uploadFiles("imageUploader", {
        files,
        input: uids,
        onUploadProgress: ({ file, progress }) => {
          const uid = uids[files.indexOf(file)]
          console.log("uid:", uid, progress)
          updateUploadProgress(uid, progress)
        },
      })
      // 处理上传完成后的逻辑
      const completedItems: FileCardItem[] = res.map((item) => ({
        uid: item.customId as string,
        name: item.name,
        size: item.size,
        contentType: item.type,
        percent: 100,
        status: "done",
        url: item.ufsUrl,
      }))

      setAttachments((prev) => [...prev, ...completedItems])
      setUploadQueue((prev) => {
        const completedUids = new Set(completedItems.map((item) => item.uid))
        return prev.filter((item) => !completedUids.has(item.uid))
      })
    } catch (err) {
      // toast.error(getErrorMessage(err))
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileChange = React.useCallback<
    NonNullable<AttachmentsProps["onFileChange"]>
  >(
    async (acceptedFiles, rejectedFiles) => {
      if ((fileItems?.length ?? 0) + acceptedFiles.length > maxFileCount) {
        toast.error(`Cannot upload more than ${maxFileCount} files`)
        return
      }
      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast.error(`File ${file.name} was rejected`)
        })
      }
      let uids: string[] = []
      const files = (acceptedFiles || []).map((file) => {
        const uid = generateUUID()
        uids.push(uid)
        return Object.assign(file, { uid })
      })
      const newItems = files.map((file, index) => ({
        uid: uids[index],
        name: file.name,
        size: file.size,
        percent: 0,
        contentType: file.type,
        status: "uploading",
      })) as FileCardItem[]
      setUploadQueue([...uploadQueue, ...newItems])
      await onUpload(files, uids)
    },
    [uploadQueue, attachments]
  )

  const handleDelete = (uid?: string) => {
    setAttachments((prev) => prev.filter((item) => item.uid !== uid))
  }

  return (
    <Sender
      submitType="shiftEnter"
      placeholder="Press Shift + Enter to send message"
      loading={isLoading}
      disabled={isUploading}
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
          onDelete={handleDelete}
          className={cn(fileItems.length === 0 && "-mt-2")}
        />
        {fileItems.length > 0 && <div className="h-1"></div>}
        <SenderTextArea />
        <SenderOperation>
          <SenderOperationBarExtra></SenderOperationBarExtra>
          <SenderOperationBar>
            <Attachments
              accept={{
                "image/*": [],
                "application/pdf": [],
              }}
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
