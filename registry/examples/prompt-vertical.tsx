import { Info, Lightbulb, Rocket, Smile, TriangleAlert } from "lucide-react"

import {
  Prompt,
  PromptContent,
  PromptDescription,
  PromptIcon,
  PromptItem,
} from "@/registry/aoian-ui/prompt/prompt"

export default function PromptVertical() {
  return (
    <Prompt vertical>
      <PromptItem disabled>
        <PromptIcon>
          <Lightbulb className="text-yellow-300" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            Got any sparks for a new project?
          </PromptDescription>
        </PromptContent>
      </PromptItem>
      <PromptItem>
        <PromptIcon>
          <Info className="text-blue-400" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            Help me understand the background of this topic.
          </PromptDescription>
        </PromptContent>
      </PromptItem>
      <PromptItem>
        <PromptIcon>
          <Rocket className="text-purple-500" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            How can I work faster and better?
          </PromptDescription>
        </PromptContent>
      </PromptItem>
      <PromptItem>
        <PromptIcon>
          <Smile className="text-green-400" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            Why do not ants get sick? Because they have tiny ant-bodies!
          </PromptDescription>
        </PromptContent>
      </PromptItem>
      <PromptItem>
        <PromptIcon>
          <TriangleAlert className="text-red-400" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            How to solve common issues? Share some tips!
          </PromptDescription>
        </PromptContent>
      </PromptItem>
    </Prompt>
  )
}
