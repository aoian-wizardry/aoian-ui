import { type Registry } from "shadcn/registry"

import { registryUrl } from "@/lib/utils"

export const ui: Registry["items"] = [
  {
    name: "bubble",
    type: "registry:component",
    title: "Bubble",
    description: "A bubble component for chat.",
    registryDependencies: [
      "avatar",
      registryUrl("loading"),
      registryUrl("use-event"),
    ],
    files: [
      {
        path: "registry/aoian-ui/bubble/bubble.tsx",
        type: "registry:component",
        target: "components/aoian-ui/bubble/bubble.tsx",
      },
      {
        path: "registry/aoian-ui/bubble/bubble-list.tsx",
        type: "registry:component",
        target: "components/aoian-ui/bubble/bubble-list.tsx",
      },
      {
        path: "registry/aoian-ui/hooks/use-display-data.ts",
        type: "registry:hook",
        target: "components/aoian-ui/hooks/use-display-data.ts",
      },
      {
        path: "registry/aoian-ui/hooks/use-list-data.ts",
        type: "registry:hook",
        target: "components/aoian-ui/hooks/use-list-data.ts",
      },
      {
        path: "registry/aoian-ui/hooks/use-typed-effect.ts",
        type: "registry:hook",
        target: "components/aoian-ui/hooks/use-typed-effect.ts",
      },
      {
        path: "registry/aoian-ui/hooks/use-typing-config.ts",
        type: "registry:hook",
        target: "components/aoian-ui/hooks/use-typing-config.ts",
      },
      {
        path: "registry/aoian-ui/bubble/types.ts",
        type: "registry:file",
        target: "components/aoian-ui/bubble/types.ts",
      },
    ],
  },
  {
    name: "loading",
    type: "registry:ui",
    files: [
      {
        path: "registry/aoian-ui/loading.tsx",
        type: "registry:ui",
        target: "components/aoian-ui/loading.tsx",
      },
    ],
  },
  {
    name: "prompt",
    type: "registry:ui",
    files: [
      {
        path: "registry/aoian-ui/prompt/prompt.tsx",
        type: "registry:ui",
        target: "components/aoian-ui/prompt.tsx",
      },
    ],
  },
  {
    name: "sender",
    type: "registry:ui",
    dependencies: ["react-textarea-autosize"],
    files: [
      {
        path: "registry/aoian-ui/sender/sender.tsx",
        type: "registry:ui",
        target: "components/aoian-ui/sender.tsx",
      },
    ],
  },
  {
    name: "attachments",
    type: "registry:ui",
    dependencies: ["react-dropzone"],
    registryDependencies: [
      "button",
      "carousel",
      "tooltip",
      "input",
      "progress",
    ],
    files: [
      {
        path: "registry/aoian-ui/attachments/attachments.tsx",
        type: "registry:ui",
        target: "components/aoian-ui/attachments.tsx",
      },
    ],
  },
  {
    name: "lightbox",
    type: "registry:ui",
    dependencies: ["react-photo-view"],
    registryDependencies: [
      "button",
      "carousel",
      "tooltip",
      "input",
      "progress",
    ],
    files: [
      {
        path: "registry/aoian-ui/lightbox/lightbox.tsx",
        type: "registry:ui",
        target: "components/aoian-ui/lightbox.tsx",
      },
    ],
  },
]
