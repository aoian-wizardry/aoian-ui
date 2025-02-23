import {
  Bubble,
  BubbleContent,
  BubbleWrapper,
} from "@/registry/aoian-ui/bubble/components/bubble"

export default function BubbleDemo() {
  return (
    <Bubble>
      <BubbleWrapper>
        <BubbleContent>hello world !</BubbleContent>
      </BubbleWrapper>
    </Bubble>
  )
}
