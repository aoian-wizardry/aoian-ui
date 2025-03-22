"use client"

import * as React from "react"

import "react-photo-view/dist/react-photo-view.css"
import { cva } from "class-variance-authority"
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import { Button } from "@/components/ui/button"
import { cn } from "@/registry/lib/utils"

// align-items: center;
// bottom: 0;
// cursor: pointer;
// display: flex;
// height: 100px;
// justify-content: center;
// margin: auto;
// opacity: .75;
// position: absolute;
// top: 0;
// transition: opacity .2s linear;
// -webkit-user-select: none;
// -moz-user-select: none;
// user-select: none;
// width: 70px;
// z-index: 20;

function Lightbox({
  toolbarButtonClass,
  ...props
}: React.ComponentProps<typeof PhotoProvider> & {
  toolbarButtonClass?: string
}) {
  const toolbarButtonVariants = cva("h-6 w-6 [&_svg]:size-3.5")
  return (
    <PhotoProvider
      className="[&_.PhotoView-Slider\_\_ArrowLeft]:hidden [&_.PhotoView-Slider\_\_ArrowRight]:!hidden"
      maskClassName="backdrop backdrop-blur-lg !bg-transparent"
      toolbarRender={({
        rotate,
        onRotate,
        scale,
        onScale,
        onClose,
        index,
        onIndexChange,
        images,
      }) => {
        const imageLength = images.length
        return (
          <div className="space-x-2.5 px-2.5 [&+svg]:hidden">
            <Button
              size="icon"
              variant="ghost"
              disabled={index === 0}
              className={cn(toolbarButtonVariants(), toolbarButtonClass)}
              onClick={() => onIndexChange(index - 1)}
            >
              <ArrowLeft />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              disabled={index === imageLength - 1}
              className={cn(toolbarButtonVariants(), toolbarButtonClass)}
              onClick={() => onIndexChange(index + 1)}
            >
              <ArrowRight />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn(toolbarButtonVariants(), toolbarButtonClass)}
              onClick={() => onRotate(rotate + 90)}
            >
              <RotateCw />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn(toolbarButtonVariants(), toolbarButtonClass)}
              onClick={() => onScale(scale + 1)}
            >
              <ZoomIn />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn(toolbarButtonVariants(), toolbarButtonClass)}
              onClick={() => onScale(scale - 1)}
            >
              <ZoomOut />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn(toolbarButtonVariants(), toolbarButtonClass)}
              onClick={onClose}
            >
              <X />
            </Button>
          </div>
        )
      }}
      {...props}
    />
  )
}

function LightboxItem({ ...props }: React.ComponentProps<typeof PhotoView>) {
  return <PhotoView {...props} />
}

export { Lightbox, LightboxItem }
