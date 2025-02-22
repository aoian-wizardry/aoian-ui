import { type Registry } from "shadcn/registry"
import { registryUrl } from '@/lib/utils'
export const ui: Registry["items"] = [
  {
    name: "bubble",
    type: "registry:ui",
    registryDependencies: ["avatar", registryUrl('loading')],
    files: [
      {
        path: "registry/aoian-ui/bubble.tsx",
        type: "registry:ui",
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
