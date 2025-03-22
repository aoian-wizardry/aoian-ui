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
  {
    name: "bubble-placement-avatar",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-placement-avatar.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-layout",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble"), "button"],
    files: [
      {
        path: "registry/examples/bubble-layout.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-loading",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-loading.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-typing",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble"), "button"],
    files: [
      {
        path: "registry/examples/bubble-typing.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-content-render",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    dependencies: ["markdown-it"],
    files: [
      {
        path: "registry/examples/bubble-content-render.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-variant",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-variant.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-shape",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-shape.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bubble-list-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("bubble")],
    files: [
      {
        path: "registry/examples/bubble-list-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "loading-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("loading")],
    files: [
      {
        path: "registry/examples/loading-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "prompt-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("prompt")],
    files: [
      {
        path: "registry/examples/prompt-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "prompt-disabled",
    type: "registry:example",
    registryDependencies: [registryUrl("prompt")],
    files: [
      {
        path: "registry/examples/prompt-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "prompt-vertical",
    type: "registry:example",
    registryDependencies: [registryUrl("prompt")],
    files: [
      {
        path: "registry/examples/prompt-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "prompt-wrap",
    type: "registry:example",
    registryDependencies: [registryUrl("prompt")],
    files: [
      {
        path: "registry/examples/prompt-wrap.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "prompt-variant",
    type: "registry:example",
    registryDependencies: [registryUrl("prompt")],
    files: [
      {
        path: "registry/examples/prompt-variant.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sender-demo",
    type: "registry:example",
    registryDependencies: [registryUrl("sender")],
    files: [
      {
        path: "registry/examples/sender-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sender-horizontal",
    type: "registry:example",
    registryDependencies: [registryUrl("sender")],
    files: [
      {
        path: "registry/examples/sender-horizontal.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sender-submit-type",
    type: "registry:example",
    registryDependencies: [registryUrl("sender")],
    files: [
      {
        path: "registry/examples/sender-submit-type.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sender-custom-button",
    type: "registry:example",
    registryDependencies: [registryUrl("sender")],
    files: [
      {
        path: "registry/examples/sender-custom-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sender-header",
    type: "registry:example",
    registryDependencies: [registryUrl("sender")],
    files: [
      {
        path: "registry/examples/sender-header.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "attachments-demo",
    type: "registry:example",
    registryDependencies: [
      registryUrl("sender"),
      registryUrl("attachments"),
      "button",
    ],
    files: [
      {
        path: "registry/examples/attachments-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "attachments-full-drop",
    type: "registry:example",
    registryDependencies: [
      registryUrl("sender"),
      registryUrl("attachments"),
      "button",
    ],
    files: [
      {
        path: "registry/examples/attachments-full-drop.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "attachments-file-card",
    type: "registry:example",
    registryDependencies: [registryUrl("attachments"), "button"],
    files: [
      {
        path: "registry/examples/attachments-file-card.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "attachments-images",
    type: "registry:example",
    registryDependencies: [registryUrl("attachments"), "button"],
    files: [
      {
        path: "registry/examples/attachments-images.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "attachments-card-sender",
    type: "registry:example",
    registryDependencies: [
      registryUrl("sender"),
      registryUrl("attachments"),
      "button",
    ],
    files: [
      {
        path: "registry/examples/attachments-card-sender.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "attachments-uploadthing-upstash",
    type: "registry:example",
    registryDependencies: [
      registryUrl("sender"),
      registryUrl("attachments"),
      "button",
    ],
    files: [
      {
        path: "registry/examples/attachments-uploadthing-upstash.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "lightbox-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "registry/examples/lightbox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
]
