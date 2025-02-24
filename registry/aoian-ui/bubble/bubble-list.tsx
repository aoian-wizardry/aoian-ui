import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Bubble,
  BubbleContent,
  BubbleWrapper,
} from "@/registry/aoian-ui/bubble/bubble"
import type {
  BubbleListProps,
  BubbleListRef,
  BubbleRef,
} from "@/registry/aoian-ui/bubble/types"
import { useDisplayData } from "@/registry/aoian-ui/hooks/use-display-data"
import { useEvent } from "@/registry/aoian-ui/hooks/use-event"
import { useListData } from "@/registry/aoian-ui/hooks/use-list-data"

interface BubbleListContextProps {
  onUpdate?: VoidFunction
}

const TOLERANCE = 1

const BubbleListContext = React.createContext<BubbleListContextProps>({})

function useBubbleList() {
  const context = React.useContext(BubbleListContext)
  if (context === null) {
    throw new Error("useBubbleList must be used within a BubbleListProvider.")
  }
  return context
}

const BubbleList = React.forwardRef<BubbleListRef, BubbleListProps>(
  ({ className, items, autoScroll = true, roles, ...props }, ref) => {
    // ============================= Refs =============================
    const listRef = React.useRef<HTMLDivElement>(null)

    const bubbleRefs = React.useRef<Record<string, BubbleRef>>({})

    // ============================ Typing ============================
    const [initialized, setInitialized] = React.useState(false)

    React.useEffect(() => {
      setInitialized(true)
      return () => {
        setInitialized(false)
      }
    }, [])

    // ============================= Data =============================
    const mergedData = useListData(items, roles)
    const [displayData, onTypingComplete] = useDisplayData(mergedData)

    // ============================ Scroll ============================
    // Is current scrollTop at the end. User scroll will make this false.
    const [scrollReachEnd, setScrollReachEnd] = React.useState(true)

    const [updateCount, setUpdateCount] = React.useState(0)

    const onInternalScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
      const target = e.target as HTMLElement

      setScrollReachEnd(
        target.scrollHeight -
          Math.abs(target.scrollTop) -
          target.clientHeight <=
          TOLERANCE
      )
    }

    React.useEffect(() => {
      if (autoScroll && listRef.current && scrollReachEnd) {
        listRef.current.scrollTo({
          top: listRef.current.scrollHeight,
        })
      }
    }, [updateCount])

    // Always scroll to bottom when data change
    React.useEffect(() => {
      if (autoScroll) {
        // New date come, the origin last one is the second last one
        const lastItemKey = displayData[displayData.length - 2]?.key
        const bubbleInst = bubbleRefs.current[lastItemKey!]

        // Auto scroll if last 2 item is visible
        if (bubbleInst) {
          const { nativeElement } = bubbleInst
          const { top, bottom } = nativeElement.getBoundingClientRect()
          const { top: listTop, bottom: listBottom } =
            listRef.current!.getBoundingClientRect()

          const isVisible = top < listBottom && bottom > listTop
          if (isVisible) {
            setUpdateCount((c) => c + 1)
            setScrollReachEnd(true)
          }
        }
      }
    }, [displayData.length])

    // ========================== Outer Ref ===========================
    React.useImperativeHandle(ref, () => ({
      nativeElement: listRef.current!,
      scrollTo: ({ key, offset, behavior = "smooth", block }) => {
        if (typeof offset === "number") {
          // Offset scroll
          listRef.current!.scrollTo({
            top: offset,
            behavior,
          })
        } else if (key !== undefined) {
          // Key scroll
          const bubbleInst = bubbleRefs.current[key]

          if (bubbleInst) {
            // Block current auto scrolling
            const index = displayData.findIndex(
              (dataItem) => dataItem.key === key
            )
            setScrollReachEnd(index === displayData.length - 1)

            // Do native scroll
            bubbleInst.nativeElement.scrollIntoView({
              behavior,
              block,
            })
          }
        }
      },
    }))

    // =========================== Context ============================
    // When bubble content update, we try to trigger `autoScroll` for sync
    const onBubbleUpdate = useEvent(() => {
      if (autoScroll) {
        setUpdateCount((c) => c + 1)
      }
    })

    const context = React.useMemo(
      () => ({
        onUpdate: onBubbleUpdate,
      }),
      []
    )

    return (
      <BubbleListContext.Provider value={context}>
        <div
          {...props}
          ref={listRef}
          className={cn("flex flex-col gap-4 overflow-y-auto", className)}
          onScroll={onInternalScroll}
        >
          {displayData.map(
            ({
              key,
              content,
              loading,
              avatar,
              header,
              footer,
              shape,
              variant,
              ...bubble
            }) => (
              <Bubble
                {...bubble}
                key={key}
                ref={(node) => {
                  if (node) {
                    bubbleRefs.current[key] = node
                  } else {
                    delete bubbleRefs.current[key]
                  }
                }}
                typing={initialized ? bubble.typing : false}
                onTypingComplete={() => {
                  bubble.onTypingComplete?.()
                  onTypingComplete(key)
                }}
              >
                <>
                  {avatar}
                  <BubbleWrapper>
                    {header}
                    <BubbleContent
                      shape={shape}
                      variant={variant}
                      loading={loading}
                    >
                      {content}
                    </BubbleContent>
                    {footer}
                  </BubbleWrapper>
                </>
              </Bubble>
            )
          )}
        </div>
      </BubbleListContext.Provider>
    )
  }
)
BubbleList.displayName = "BubbleList"

export { BubbleList, useBubbleList }
