"use client"

import * as React from "react"
import { Paperclip } from "lucide-react"
import Dropzone, { type DropzoneProps } from "react-dropzone"

import { Button } from "@/components/ui/button"
import { cn } from "@/registry/lib/utils"

function SilentUploader(props: DropzoneProps) {
  return (
    <Dropzone {...props} noDrag noDragEventsBubbling>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <Button size={"icon"} variant={"ghost"} className={cn("rounded-lg")}>
            <input {...getInputProps()} />
            <Paperclip />
          </Button>
        </div>
      )}
    </Dropzone>
  )
}

export { SilentUploader }
