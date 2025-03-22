"use client"

import * as React from "react"
import Image from "next/image"
import { Info, LoaderPinwheel, Upload, X } from "lucide-react"
import Dropzone, {
  type DropzoneProps,
  type FileRejection,
} from "react-dropzone"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
import { Lightbox, LightboxItem } from "@/registry/aoian-ui/lightbox/lightbox"
import { cn, formatBytes } from "@/registry/lib/utils"

interface AttachmentsProps extends React.HTMLAttributes<HTMLDivElement> {
  accept?: DropzoneProps["accept"]
  maxSize?: DropzoneProps["maxSize"]
  maxFileCount?: DropzoneProps["maxFiles"]
  multiple?: boolean
  disabled?: boolean
  fullScreenDrop?: boolean
  onFileChange?: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void
}

function Attachments({
  onFileChange,
  accept = {
    "image/*": [],
  },
  maxSize = 1024 * 1024 * 2,
  maxFileCount = 1,
  multiple = false,
  disabled = false,
  fullScreenDrop,
  className,
  ...dropzoneProps
}: AttachmentsProps) {
  const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    onFileChange?.(acceptedFiles, rejectedFiles)
  }
  return (
    <>
      <SilentUploader
        onDrop={onDrop}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFileCount}
        multiple={maxFileCount > 1 || multiple}
        disabled={disabled}
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
              disabled={disabled}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  className={cn(
                    "group relative grid h-full w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-primary/25 px-5 py-2.5 text-center transition hover:bg-muted/25",
                    "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isDragActive && "border-primary/50",
                    disabled && "pointer-events-none opacity-60",
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

// FileCard

type FileCardItem = {
  uid?: string
  name: string
  size: number
  percent: number
  url?: string
  message?: string
  contentType?: string
  status: "error" | "done" | "uploading" | "removed"
}

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
  mode = "file",
  onDelete,
}: React.HTMLAttributes<HTMLDivElement> & {
  item: FileCardItem
  mode?: "image" | "file"
  onDelete?: (uid?: string) => void
}) {
  const { name, size, percent, status } = item

  // ============================== Name ==============================
  const [namePrefix, nameSuffix] = React.useMemo(() => {
    const nameStr = name || ""
    const match = nameStr.match(/^(.*)\.[^.]+$/)
    return match ? [match[1], nameStr.slice(match[1].length)] : [nameStr, ""]
  }, [name])

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

  if (mode === "image" && isImg && item.url) {
    return (
      <div className="group relative">
        <Image
          src={item.url}
          alt={item.name}
          width={48}
          height={48}
          loading="lazy"
          className="aspect-square shrink-0 rounded-lg object-cover"
        />
        {status === "uploading" && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
            <LoaderPinwheel className="size-4 animate-spin text-white" />
          </div>
        )}
        {status === "error" && (
          <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="size-4 text-destructive" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item?.message ?? "Upload failed"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        {status !== "uploading" && (
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onDelete?.(item?.uid)
            }}
            className="absolute -right-2 -top-2 z-20 flex size-4 cursor-pointer items-center justify-center rounded-full bg-foreground px-0 py-0 text-background opacity-0 shadow-md group-hover:opacity-100 [&_svg]:size-3"
          >
            <X />
          </Button>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "group relative flex h-[52px] w-[200px] min-w-[200px] items-center gap-1 rounded-xl bg-background p-2",
        className
      )}
    >
      {status !== "uploading" && (
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onDelete?.(item?.uid)
          }}
          className="absolute right-1 top-1 z-20 flex size-4 cursor-pointer items-center justify-center rounded-full bg-foreground px-0 py-0 text-background opacity-0 shadow-md group-hover:opacity-100 [&_svg]:size-3"
        >
          <X />
        </Button>
      )}
      <span
        className={cn(
          "flex items-center justify-center [&>svg]:size-8",
          status === "uploading" && "grayscale"
        )}
      >
        {icon}
      </span>
      <div className="inline-flex w-full flex-col truncate pr-1.5">
        <span className="min-w-0 truncate text-sm">{name}</span>
        {status === "uploading" && (
          <Progress className={"mb-2 mt-1 h-[3px]"} value={percent as number} />
        )}
        {status === "error" && (
          <div className="inline-flex items-center gap-1">
            <Info className={"size-3 text-destructive"} />
            <p className="text-xs text-destructive">
              {item?.message ?? "Upload failed"}
            </p>
          </div>
        )}
        {status === "done" && (
          <p className="text-xs text-muted-foreground">{formatBytes(size)}</p>
        )}
      </div>
    </div>
  )
}

function FileListBox({
  items,
  mode = "file",
  className,
  onDelete,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  items: FileCardItem[]
  mode?: "image" | "file"
  onDelete?: (uid?: string) => void
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
  const elementSize = 400
  return (
    <div className={cn("w-full", className)} {...props}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className={cn(
          "w-full [&>div]:overflow-visible",
          canScrollPrev &&
            "[mask-image:linear-gradient(to_right,transparent,white_8%)]",
          canScrollNext &&
            "[mask-image:linear-gradient(to_right,white_92%,transparent)]",
          canScrollPrev &&
            canScrollNext &&
            "[mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]"
        )}
      >
        {mode === "image" ? (
          <Lightbox>
            <CarouselContent className="ml-0 space-x-2">
              {items.map((item, index) =>
                item.status === "done" ? (
                  <LightboxItem key={index} src={item.url}>
                    <div>
                      <FileCard
                        mode={mode}
                        onDelete={onDelete}
                        key={index}
                        item={item}
                      />
                    </div>
                  </LightboxItem>
                ) : (
                  <FileCard
                    mode={mode}
                    onDelete={onDelete}
                    key={index}
                    item={item}
                  />
                )
              )}
            </CarouselContent>
          </Lightbox>
        ) : (
          <CarouselContent className="ml-0 space-x-2">
            {items.map((item, index) => (
              <FileCard
                mode={mode}
                onDelete={onDelete}
                key={index}
                item={item}
              />
            ))}
          </CarouselContent>
        )}
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

export {
  Attachments,
  FileListBox,
  FileCard,
  type AttachmentsProps,
  type FileCardItem,
}
