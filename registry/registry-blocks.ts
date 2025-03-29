import { type Registry } from "shadcn/registry"

export const blocks: Registry["items"] = [
  {
    name: "dashboard",
    type: "registry:block",
    description: "A comprehensive and powerful AI chatbot.",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "registry/blocks/dashboard/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
    ],
    categories: ["dashboard"],
  },
]
