import { type Registry } from "shadcn/registry"

export const blocks: Registry["items"] = [
  {
    name: "dashboard-01",
    type: "registry:block",
    description: "A dashboard with sidebar, charts and data table.",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "registry/blocks/dashboard-01/page.tsx",
        type: "registry:page",
        target: "app/dashboard/page.tsx",
      },
    ],
    categories: ["dashboard"],
  },
]
