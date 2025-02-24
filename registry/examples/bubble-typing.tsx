import React from "react"
import { Bot } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Bubble,
  BubbleAvatar,
  BubbleContent,
  BubbleWrapper,
} from "@/registry/aoian-ui/bubble/bubble"

const text = "Aoian UI love you! "

export default function BubbleTyping() {
  const [repeat, setRepeat] = React.useState(1)
  return (
    <div className={"grow space-y-4"}>
      <Bubble typing={{ step: 2, interval: 50 }}>
        <BubbleAvatar>
          <Bot size={18} />
        </BubbleAvatar>
        <BubbleWrapper>
          <BubbleContent>{text.repeat(repeat)}</BubbleContent>
        </BubbleWrapper>
      </Bubble>
      <Bubble typing={{ step: 2, interval: 50, suffix: <>💗</> }}>
        <BubbleAvatar>
          <Bot size={18} />
        </BubbleAvatar>
        <BubbleWrapper>
          <BubbleContent>{text.repeat(repeat)}</BubbleContent>
        </BubbleWrapper>
      </Bubble>

      <Button
        onClick={() => {
          setRepeat((ori) => (ori < 5 ? ori + 1 : 1))
        }}
      >
        Repeat {repeat} Times
      </Button>
    </div>
  )
}
