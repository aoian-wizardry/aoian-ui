import { type Registry } from "shadcn/registry"

export const hooks: Registry["items"] = [
  {
    name: "use-event",
    type: "registry:hook",
    files: [
      {
        path: "registry/hooks/use-event.tsx",
        type: "registry:hook",
      },
    ],
  },
]
