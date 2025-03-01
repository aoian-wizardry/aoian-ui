import { Info, Lightbulb } from "lucide-react"

import {
  Prompt,
  PromptContent,
  PromptDescription,
  PromptIcon,
  PromptItem,
  PromptLabel,
} from "@/registry/aoian-ui/prompt/prompt"

export default function PromptDisabled() {
  return (
    <Prompt>
      <PromptItem disabled>
        <PromptIcon>
          <Lightbulb className="text-yellow-300" />
        </PromptIcon>
        <PromptContent>
          <PromptLabel>Ignite Your Creativity</PromptLabel>
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
          <PromptLabel>Uncover Background Info</PromptLabel>
          <PromptDescription>
            Help me understand the background of this topic.
          </PromptDescription>
        </PromptContent>
      </PromptItem>
    </Prompt>
  )
}
