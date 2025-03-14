import * as React from "react"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { generateReactHelpers } from "@uploadthing/react"
import { toast } from "sonner"
// types
import type {
  AnyFileRoute,
  ClientUploadedFileData,
  UploadFilesOptions,
} from "uploadthing/types"
import { z } from "zod"

import { type OurFileRouter } from "@/app/api/uploadthing/core"

export type UploadedFile<T = unknown> = ClientUploadedFileData<T>

interface UseUploadFileOptions<TFileRoute extends AnyFileRoute>
  extends Pick<
    UploadFilesOptions<TFileRoute>,
    "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"
  > {
  defaultUploadedFiles?: UploadedFile[]
}

const { uploadFiles } = generateReactHelpers<OurFileRouter>()

export function getErrorMessage(err: unknown) {
  const unknownError = "Something went wrong, please try again later."
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return errors.join("\n")
  } else if (err instanceof Error) {
    return err.message
  } else if (isRedirectError(err)) {
    throw err
  } else {
    return unknownError
  }
}

export function useUploadFile(
  endpoint: keyof OurFileRouter,
  {
    defaultUploadedFiles = [],
    ...props
  }: UseUploadFileOptions<OurFileRouter[keyof OurFileRouter]> = {}
) {
  const [uploadedFiles, setUploadedFiles] =
    React.useState<UploadedFile[]>(defaultUploadedFiles)
  const [progresses, setProgresses] = React.useState<Record<string, number>>({})
  const [isUploading, setIsUploading] = React.useState(false)

  async function onUpload(files: File[]) {
    setIsUploading(true)
    try {
      const res = await uploadFiles(endpoint, {
        ...props,
        files,
        onUploadProgress: ({ file, progress }) => {
          console.log("progress", progress)
          setProgresses((prev) => {
            return {
              ...prev,
              [file.name]: progress,
            }
          })
        },
      })

      setUploadedFiles((prev) => (prev ? [...prev, ...res] : res))
    } catch (err) {
      toast.error(getErrorMessage(err))
    } finally {
      setProgresses({})
      setIsUploading(false)
    }
  }

  return {
    onUpload,
    uploadedFiles,
    progresses,
    isUploading,
  }
}
