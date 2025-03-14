"use client"

import * as React from "react"
import { Upload } from "lucide-react"
import Dropzone, {
  type DropzoneProps,
  type FileRejection,
} from "react-dropzone"
import { toast } from "sonner"

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import { DropArea } from "@/registry/aoian-ui/attachments/drop-area"
import {
  AudioIcon,
  ExcelIcon,
  ImageIcon,
  MarkdownIcon,
  PdfIcon,
  PptIcon,
  TextIcon,
  VideoIcon,
  WordIcon,
  ZipIcon,
} from "@/registry/aoian-ui/attachments/icons"
import { SilentUploader } from "@/registry/aoian-ui/attachments/silent-uploader"
import { useControllableState } from "@/registry/aoian-ui/hooks/use-controllable-state"
import { cn, formatBytes } from "@/registry/lib/utils"

interface AttachmentsProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Value of the uploader.
   * @type File[]
   * @default undefined
   * @example value={files}
   */
  value?: File[]

  /**
   * Function to be called when the value changes.
   * @type (files: File[]) => void
   * @default undefined
   * @example onValueChange={(files) => setFiles(files)}
   */
  onValueChange?: (files: File[]) => void

  /**
   * Function to be called when files are uploaded.
   * @type (files: File[]) => Promise<void>
   * @default undefined
   * @example onUpload={(files) => uploadFiles(files)}
   */
  onUpload?: (files: File[]) => Promise<void>

  /**
   * Accepted file types for the uploader.
   * @type { [key: string]: string[]}
   * @default
   * ```ts
   * { "image/*": [] }
   * ```
   * @example accept={["image/png", "image/jpeg"]}
   */
  accept?: DropzoneProps["accept"]

  /**
   * Maximum file size for the uploader.
   * @type number | undefined
   * @default 1024 * 1024 * 2 // 2MB
   * @example maxSize={1024 * 1024 * 2} // 2MB
   */
  maxSize?: DropzoneProps["maxSize"]

  /**
   * Maximum number of files for the uploader.
   * @type number | undefined
   * @default 1
   * @example maxFileCount={4}
   */
  maxFileCount?: DropzoneProps["maxFiles"]

  /**
   * Whether the uploader should accept multiple files.
   * @type boolean
   * @default false
   * @example multiple
   */
  multiple?: boolean

  /**
   * Whether the uploader is disabled.
   * @type boolean
   * @default false
   * @example disabled
   */
  disabled?: boolean
  /**
   * Whether to enable full-screen dragging
   * @type boolean
   * @default false
   * @example disabled
   */
  fullScreenDrop?: boolean
}

function Attachments({
  value: valueProp,
  onValueChange,
  onUpload,
  accept = {
    "image/*": [],
    "application/pdf": [],
  },
  maxSize = 1024 * 1024 * 2,
  maxFileCount = 1,
  multiple = false,
  disabled = false,
  fullScreenDrop,
  className,
  ...dropzoneProps
}: AttachmentsProps) {
  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  })

  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (!multiple && maxFileCount === 1 && acceptedFiles.length > 1) {
        toast.error("Cannot upload more than 1 file at a time")
        return
      }

      if ((files?.length ?? 0) + acceptedFiles.length > maxFileCount) {
        toast.error(`Cannot upload more than ${maxFileCount} files`)
        return
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )

      const updatedFiles = files ? [...files, ...newFiles] : newFiles

      setFiles(updatedFiles)

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast.error(`File ${file.name} was rejected`)
        })
      }

      if (
        onUpload &&
        updatedFiles.length > 0 &&
        updatedFiles.length <= maxFileCount
      ) {
        const target =
          updatedFiles.length > 0 ? `${updatedFiles.length} files` : `file`

        toast.promise(onUpload(updatedFiles), {
          loading: `Uploading ${target}...`,
          success: () => {
            setFiles([])
            return `${target} uploaded`
          },
          error: `Failed to upload ${target}`,
        })
      }
    },

    [files, maxFileCount, multiple, onUpload, setFiles]
  )

  function onRemove(index: number) {
    if (!files) return
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
    onValueChange?.(newFiles)
  }

  // Revoke preview url when component unmounts
  React.useEffect(() => {
    return () => {
      if (!files) return
      files.forEach((file) => {
        if (isFileWithPreview(file)) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isDisabled = disabled || (files?.length ?? 0) >= maxFileCount

  return (
    <>
      <SilentUploader
        onDrop={onDrop}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFileCount}
        multiple={maxFileCount > 1 || multiple}
        disabled={isDisabled}
      />
      {fullScreenDrop && (
        <DropArea getDropContainer={() => document.body}>
          <div className="h-full w-full backdrop-blur">
            <Dropzone
              onDrop={onDrop}
              accept={accept}
              maxSize={maxSize}
              maxFiles={maxFileCount}
              multiple={maxFileCount > 1 || multiple}
              disabled={isDisabled}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  className={cn(
                    "group relative grid h-full w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-primary/25 px-5 py-2.5 text-center transition hover:bg-muted/25",
                    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isDragActive && "border-primary/50",
                    isDisabled && "pointer-events-none opacity-60",
                    className
                  )}
                  {...dropzoneProps}
                >
                  <input {...getInputProps()} />
                  {isDragActive && (
                    <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
                      <div className="rounded-full border border-dashed p-3">
                        <Upload
                          className="size-7 text-muted-foreground"
                          aria-hidden="true"
                        />
                      </div>
                      <h2 className="font-medium text-accent-foreground">
                        Drag & Drop files here
                      </h2>
                      <p className="font-medium text-muted-foreground">
                        Support file type: image, video, audio, document, etc.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
        </DropArea>
      )}
    </>
  )
}

function isFileWithPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string"
}

// FileCard
const IMG_EXTS = ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"]

const PRESET_FILE_ICONS: {
  ext: string[]
  icon: React.ReactElement
}[] = [
  {
    icon: <ExcelIcon />,
    ext: ["xlsx", "xls"],
  },
  {
    icon: <ImageIcon />,
    ext: IMG_EXTS,
  },
  {
    icon: <MarkdownIcon />,
    ext: ["md", "mdx"],
  },
  {
    icon: <PdfIcon />,
    ext: ["pdf"],
  },
  {
    icon: <PptIcon />,
    ext: ["ppt", "pptx"],
  },
  {
    icon: <WordIcon />,
    ext: ["doc", "docx"],
  },
  {
    icon: <ZipIcon />,
    ext: ["zip", "rar", "7z", "tar", "gz"],
  },
  {
    icon: <VideoIcon />,
    ext: ["mp4", "avi", "mov", "wmv", "flv", "mkv"],
  },
  {
    icon: <AudioIcon />,
    ext: ["mp3", "wav", "flac", "ape", "aac", "ogg"],
  },
]

function matchExt(suffix: string, ext: string[]) {
  return ext.some((e) => suffix.toLowerCase() === `.${e}`)
}

function FileCard({
  className,
  item,
}: React.HTMLAttributes<HTMLDivElement> & {
  item: { name: string; size: number; progress: number | boolean }
}) {
  const { name, size, progress } = item

  // ============================== Name ==============================
  const [namePrefix, nameSuffix] = React.useMemo(() => {
    const nameStr = name || ""
    const match = nameStr.match(/^(.*)\.[^.]+$/)
    return match ? [match[1], nameStr.slice(match[1].length)] : [nameStr, ""]
  }, [name])

  const isShowProgress = React.useMemo(
    () => typeof item.progress === "number",
    [item.progress]
  )

  const isImg = React.useMemo(
    () => matchExt(nameSuffix, IMG_EXTS),
    [nameSuffix]
  )

  const [icon] = React.useMemo(() => {
    for (const { ext, icon } of PRESET_FILE_ICONS) {
      if (matchExt(nameSuffix, ext)) {
        return [icon]
      }
    }
    return [<TextIcon key="defaultIcon" />]
  }, [nameSuffix])

  return (
    <div
      className={cn(
        "flex min-w-[180px] items-center rounded-xl bg-background p-2",
        className
      )}
    >
      <span className="flex items-center justify-center [&>svg]:size-8">
        {icon}
      </span>
      <div className="mt-[2px] w-full pr-1.5">
        <h4 className="text-sm">{name}</h4>
        {isShowProgress ? (
          <Progress className={"mt-1 h-[3px]"} value={progress as number} />
        ) : (
          <p className="text-xs text-muted-foreground">{formatBytes(size)}</p>
        )}
      </div>
    </div>
  )
}

function FileListBox({
  items,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  items: { name: string; size: number; progress: number | boolean }[]
}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <div className={cn("", className)} {...props}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className={cn(
          "w-full",
          canScrollPrev &&
            "[mask-image:linear-gradient(to_right,transparent,white_8%)]",
          canScrollNext &&
            "[mask-image:linear-gradient(to_right,white_92%,transparent)]",
          canScrollPrev &&
            canScrollNext &&
            "[mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]"
        )}
      >
        <CarouselContent className="ml-0 space-x-2">
          {items.map((item, index) => (
            <FileCard key={index} item={item} />
          ))}
        </CarouselContent>
        {canScrollPrev && (
          <CarouselPrevious className="left-2 size-6 rounded-lg" />
        )}
        {canScrollNext && (
          <CarouselNext className="right-2 size-6 rounded-lg" />
        )}
      </Carousel>
    </div>
  )
}

export { Attachments, FileListBox, FileCard }
