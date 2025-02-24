import React from "react"
import { Bot } from "lucide-react"

import { Switch } from "@/components/ui/switch"
import {
  Bubble,
  BubbleAvatar,
  BubbleContent,
  BubbleWrapper,
} from "@/registry/aoian-ui/bubble/bubble"

export default function BubbleLoading() {
  const [loading, setLoading] = React.useState<boolean>(true)
  return (
    <div className={"space-y-4"}>
      <Bubble>
        <BubbleAvatar loading={loading}>
          <Bot size={18} />
        </BubbleAvatar>
        <BubbleWrapper>
          <BubbleContent>Good morning, how are you?</BubbleContent>
        </BubbleWrapper>
      </Bubble>
      <Bubble>
        <BubbleAvatar>
          <Bot size={18} />
        </BubbleAvatar>
        <BubbleWrapper>
          <BubbleContent loading={loading}>
            Good morning, how are you?
          </BubbleContent>
        </BubbleWrapper>
      </Bubble>

      <div className="inline-flex items-center gap-2">
        <span>Loading state:</span>
        <Switch checked={loading} onCheckedChange={setLoading} />
      </div>
    </div>
  )
}
