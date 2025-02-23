import {type Registry} from "shadcn/registry"
import {registryUrl} from '@/lib/utils'

export const ui: Registry["items"] = [
  {
    name: "bubble",
    type: "registry:component",
    title: "Bubble",
    description: "A bubble component for chat.",
    registryDependencies: ["avatar", registryUrl('loading')],
    files: [
      {
        path: "registry/aoian-ui/bubble/components/bubble.tsx",
        type: "registry:component",
      },
      {
        path: "registry/aoian-ui/bubble/components/bubble-list.tsx",
        type: "registry:component",
      },
      {
        path: "registry/aoian-ui/bubble/hooks/use-display-data.ts",
        type: "registry:hook",
      },
      {
        path: "registry/aoian-ui/bubble/hooks/use-list-data.ts",
        type: "registry:hook",
      },
      {
        path: "registry/aoian-ui/bubble/hooks/use-typed-effect.ts",
        type: "registry:hook",
      },
      {
        path: "registry/aoian-ui/bubble/hooks/use-typing-config.ts",
        type: "registry:hook",
      },
      {
        path: "registry/aoian-ui/bubble/types.ts",
        type: "registry:file",
        target: "components/types/bubble-types.tsx"
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
      },
    ],
  },
]
