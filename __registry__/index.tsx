/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"
export const Index: Record<string, any> = {
  "index": {
    name: "index",
    description: "",
    type: "registry:style",
    registryDependencies: ["utils"],
    files: [],
    component: null,
    meta: undefined,
  },
  "bubble": {
    name: "bubble",
    description: "A bubble component for chat.",
    type: "registry:component",
    registryDependencies: ["avatar","https://ui.aoian.chat/r/loading","https://ui.aoian.chat/r/use-event"],
    files: [{
      path: "registry/aoian-ui/bubble/bubble.tsx",
      type: "registry:component",
      target: "components/aoian-ui/bubble/bubble.tsx"
    },{
      path: "registry/aoian-ui/bubble/bubble-list.tsx",
      type: "registry:component",
      target: "components/aoian-ui/bubble/bubble-list.tsx"
    },{
      path: "registry/aoian-ui/hooks/use-display-data.ts",
      type: "registry:hook",
      target: "components/aoian-ui/hooks/use-display-data.ts"
    },{
      path: "registry/aoian-ui/hooks/use-list-data.ts",
      type: "registry:hook",
      target: "components/aoian-ui/hooks/use-list-data.ts"
    },{
      path: "registry/aoian-ui/hooks/use-typed-effect.ts",
      type: "registry:hook",
      target: "components/aoian-ui/hooks/use-typed-effect.ts"
    },{
      path: "registry/aoian-ui/hooks/use-typing-config.ts",
      type: "registry:hook",
      target: "components/aoian-ui/hooks/use-typing-config.ts"
    },{
      path: "registry/aoian-ui/bubble/types.ts",
      type: "registry:file",
      target: "components/aoian-ui/bubble/types.ts"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/bubble/bubble.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "loading": {
    name: "loading",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/aoian-ui/loading.tsx",
      type: "registry:ui",
      target: "components/aoian-ui/loading.tsx"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/loading.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "prompt": {
    name: "prompt",
    description: "",
    type: "registry:ui",
    registryDependencies: undefined,
    files: [{
      path: "registry/aoian-ui/prompt/prompt.tsx",
      type: "registry:ui",
      target: "components/aoian-ui/prompt.tsx"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/prompt/prompt.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sender": {
    name: "sender",
    description: "",
    type: "registry:component",
    registryDependencies: ["toggle","button"],
    files: [{
      path: "registry/aoian-ui/sender/sender.tsx",
      type: "registry:ui",
      target: "components/aoian-ui/sender/sender.tsx"
    },{
      path: "registry/aoian-ui/sender/types.ts",
      type: "registry:ui",
      target: "components/aoian-ui/sender/types.ts"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/sender/sender.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments": {
    name: "attachments",
    description: "",
    type: "registry:ui",
    registryDependencies: ["button","carousel","tooltip","input","progress"],
    files: [{
      path: "registry/aoian-ui/attachments/attachments.tsx",
      type: "registry:ui",
      target: "components/aoian-ui/attachments.tsx"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/attachments/attachments.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "lightbox": {
    name: "lightbox",
    description: "",
    type: "registry:ui",
    registryDependencies: ["button","carousel","tooltip","input","progress"],
    files: [{
      path: "registry/aoian-ui/lightbox/lightbox.tsx",
      type: "registry:ui",
      target: "components/aoian-ui/lightbox.tsx"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/lightbox/lightbox.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "utils": {
    name: "utils",
    description: "",
    type: "registry:lib",
    registryDependencies: undefined,
    files: [{
      path: "registry/lib/utils.ts",
      type: "registry:lib",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/lib/utils.ts")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-demo": {
    name: "bubble-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-placement-avatar": {
    name: "bubble-placement-avatar",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-placement-avatar.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-placement-avatar.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-layout": {
    name: "bubble-layout",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble","button"],
    files: [{
      path: "registry/examples/bubble-layout.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-layout.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-loading": {
    name: "bubble-loading",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-loading.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-loading.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-typing": {
    name: "bubble-typing",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble","button"],
    files: [{
      path: "registry/examples/bubble-typing.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-typing.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-content-render": {
    name: "bubble-content-render",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-content-render.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-content-render.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-variant": {
    name: "bubble-variant",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-variant.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-variant.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-shape": {
    name: "bubble-shape",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-shape.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-shape.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "bubble-list-demo": {
    name: "bubble-list-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/bubble"],
    files: [{
      path: "registry/examples/bubble-list-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/bubble-list-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "loading-demo": {
    name: "loading-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/loading"],
    files: [{
      path: "registry/examples/loading-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/loading-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "prompt-demo": {
    name: "prompt-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/prompt"],
    files: [{
      path: "registry/examples/prompt-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/prompt-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "prompt-disabled": {
    name: "prompt-disabled",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/prompt"],
    files: [{
      path: "registry/examples/prompt-disabled.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/prompt-disabled.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "prompt-vertical": {
    name: "prompt-vertical",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/prompt"],
    files: [{
      path: "registry/examples/prompt-vertical.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/prompt-vertical.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "prompt-wrap": {
    name: "prompt-wrap",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/prompt"],
    files: [{
      path: "registry/examples/prompt-wrap.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/prompt-wrap.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "prompt-variant": {
    name: "prompt-variant",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/prompt"],
    files: [{
      path: "registry/examples/prompt-variant.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/prompt-variant.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sender-demo": {
    name: "sender-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender"],
    files: [{
      path: "registry/examples/sender-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/sender-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sender-horizontal": {
    name: "sender-horizontal",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender"],
    files: [{
      path: "registry/examples/sender-horizontal.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/sender-horizontal.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sender-submit-type": {
    name: "sender-submit-type",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender"],
    files: [{
      path: "registry/examples/sender-submit-type.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/sender-submit-type.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sender-custom-button": {
    name: "sender-custom-button",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender"],
    files: [{
      path: "registry/examples/sender-custom-button.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/sender-custom-button.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "sender-header": {
    name: "sender-header",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender"],
    files: [{
      path: "registry/examples/sender-header.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/sender-header.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments-demo": {
    name: "attachments-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender","https://ui.aoian.chat/r/attachments","button"],
    files: [{
      path: "registry/examples/attachments-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/attachments-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments-full-drop": {
    name: "attachments-full-drop",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender","https://ui.aoian.chat/r/attachments","button"],
    files: [{
      path: "registry/examples/attachments-full-drop.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/attachments-full-drop.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments-file-card": {
    name: "attachments-file-card",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/attachments","button"],
    files: [{
      path: "registry/examples/attachments-file-card.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/attachments-file-card.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments-images": {
    name: "attachments-images",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/attachments","button"],
    files: [{
      path: "registry/examples/attachments-images.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/attachments-images.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments-card-sender": {
    name: "attachments-card-sender",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender","https://ui.aoian.chat/r/attachments","button"],
    files: [{
      path: "registry/examples/attachments-card-sender.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/attachments-card-sender.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "attachments-uploadthing-upstash": {
    name: "attachments-uploadthing-upstash",
    description: "",
    type: "registry:example",
    registryDependencies: ["https://ui.aoian.chat/r/sender","https://ui.aoian.chat/r/attachments","button"],
    files: [{
      path: "registry/examples/attachments-uploadthing-upstash.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/attachments-uploadthing-upstash.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "lightbox-demo": {
    name: "lightbox-demo",
    description: "",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [{
      path: "registry/examples/lightbox-demo.tsx",
      type: "registry:example",
      target: ""
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/examples/lightbox-demo.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "use-event": {
    name: "use-event",
    description: "",
    type: "registry:hook",
    registryDependencies: undefined,
    files: [{
      path: "registry/aoian-ui/hooks/use-event.ts",
      type: "registry:hook",
      target: "components/aoian-ui/hooks/use-event.ts"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/aoian-ui/hooks/use-event.ts")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  "dashboard": {
    name: "dashboard",
    description: "A comprehensive and powerful AI chatbot.",
    type: "registry:block",
    registryDependencies: [],
    files: [{
      path: "registry/blocks/dashboard/page.tsx",
      type: "registry:page",
      target: "app/dashboard/page.tsx"
    }],
    component: React.lazy(async () => {
      const mod = await import("@/registry/blocks/dashboard/page.tsx")
      const exportName = Object.keys(mod).find(key => typeof mod[key] === 'function' || typeof mod[key] === 'object') || item.name
      return { default: mod.default || mod[exportName] }
    }),
    meta: undefined,
  },
  }