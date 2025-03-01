import { ArrowRight, Info, Lightbulb, Rocket } from "lucide-react"

import {
  Prompt,
  PromptContent,
  PromptDescription,
  PromptIcon,
  PromptItem,
} from "@/registry/aoian-ui/prompt/prompt"

export default function PromptVariant() {
  return (
    <Prompt vertical>
      <PromptItem>
        <PromptIcon>
          <Lightbulb className="text-yellow-300" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            Got any sparks for a new project?
          </PromptDescription>
        </PromptContent>
      </PromptItem>
      <PromptItem variant="outlined">
        <PromptIcon>
          <Info className="text-blue-400" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            Help me understand the background of this topic.
          </PromptDescription>
        </PromptContent>
      </PromptItem>
      <PromptItem variant="borderless">
        <PromptIcon>
          <ArrowRight className="text-lime-300" />
        </PromptIcon>
        <PromptContent>
          <PromptDescription>
            How can I work faster and better?
          </PromptDescription>
        </PromptContent>
      </PromptItem>
    </Prompt>
  )
}
