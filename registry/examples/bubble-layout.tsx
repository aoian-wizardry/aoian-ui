import { Bot, Copy, Ellipsis, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Bubble,
  BubbleAvatar,
  BubbleContent,
  BubbleFooter,
  BubbleHeader,
  BubbleWrapper,
} from "@/registry/aoian-ui/bubble/bubble"

export default function BubbleLayout() {
  return (
    <Bubble>
      <BubbleAvatar>
        <Bot size={18} />
      </BubbleAvatar>
      <BubbleWrapper>
        <BubbleHeader>Aoian UI</BubbleHeader>
        <BubbleContent>Good morning, how are you?</BubbleContent>
        <BubbleFooter className={"space-x-2"}>
          <Button
            variant="ghost"
            className="text-chat-muted-foreground h-6 w-6 !p-0"
          >
            <Copy />
          </Button>
          <Button
            variant="ghost"
            className="text-chat-muted-foreground h-6 w-6 !p-0"
          >
            <RefreshCw />
          </Button>{" "}
          <Button
            variant="ghost"
            className="text-chat-muted-foreground h-6 w-6 !p-0"
          >
            <Ellipsis />
          </Button>
        </BubbleFooter>
      </BubbleWrapper>
    </Bubble>
  )
}
