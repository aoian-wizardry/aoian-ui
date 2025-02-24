import { type Registry } from "shadcn/registry"

export const hooks: Registry["items"] = [
  {
    name: "use-event",
    type: "registry:hook",
    files: [
      {
        path: "registry/aoian-ui/hooks/use-event.ts",
        type: "registry:hook",
        target: "components/aoian-ui/hooks/use-event.ts",
      },
    ],
  },
]
