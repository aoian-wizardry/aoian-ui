import { type Registry } from "shadcn/registry"
import { registryUrl } from "@/lib/utils"

export const examples: Registry["items"] = [
  {
    name: "bubble-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
