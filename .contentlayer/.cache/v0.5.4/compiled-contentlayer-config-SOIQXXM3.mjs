// node_modules/.pnpm/@shikijs+compat@1.29.2/node_modules/@shikijs/compat/dist/index.mjs
import fs from "node:fs";
import fsp from "node:fs/promises";

// node_modules/.pnpm/@shikijs+types@1.29.2/node_modules/@shikijs/types/dist/index.mjs
var ShikiError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

// node_modules/.pnpm/@shikijs+transformers@1.29.2/node_modules/@shikijs/transformers/dist/index.mjs
function transformerCompactLineOptions(lineOptions = []) {
  return {
    name: "@shikijs/transformers:compact-line-options",
    line(node, line) {
      const lineOption = lineOptions.find((o) => o.line === line);
      if (lineOption?.classes)
        this.addClassToHast(node, lineOption.classes);
      return node;
    }
  };
}
var symbol = Symbol("highlighted-lines");

// node_modules/.pnpm/@shikijs+compat@1.29.2/node_modules/@shikijs/compat/dist/index.mjs
import { bundledLanguages, bundledThemes, warnDeprecated, createHighlighter, normalizeTheme, tokenizeAnsiWithTheme } from "shiki";
import { normalizeTheme as normalizeTheme2, normalizeTheme as normalizeTheme3 } from "shiki";
var ShikiCompatError = class extends ShikiError {
  constructor(message) {
    super(message);
    this.name = "ShikiCompatError";
  }
};
var _warned = /* @__PURE__ */ new Set();
function warnOnce(message) {
  if (!_warned.has(message)) {
    console.warn(`[shiki-compat]: ${message}`);
    _warned.add(message);
  }
}
function stubFunction(name) {
  return () => {
    warnOnce(`\`${name}\` is a stub function in \`shiki-compat\` and does nothing.`);
  };
}
var setCDN = stubFunction("setCDN");
var setOnigasmWASM = stubFunction("setOnigasmWASM");
var setWasm = stubFunction("setWasm");
var setColorReplacements = stubFunction("setColorReplacements");
async function getHighlighter(options = {}) {
  warnDeprecated(`@shikijs/compat is deprecated and will be removed in v3, please migrate to the main shiki package`);
  const themes = options.themes || [];
  const langs = options.langs || [];
  if (options.theme)
    themes.unshift(options.theme);
  if (!themes.length)
    themes.push("nord");
  if (!langs.length)
    langs.push(...Object.keys(bundledLanguages));
  const shiki = await createHighlighter({
    ...options,
    themes,
    langs
  });
  const defaultTheme = shiki.getLoadedThemes()[0];
  function codeToTokensBase(code, lang, theme, options2) {
    const tokens = shiki.codeToTokensBase(code, {
      includeExplanation: true,
      lang,
      theme: theme || defaultTheme,
      ...options2
    });
    tokens.forEach((line) => {
      line.forEach((token) => {
        token.explanation || (token.explanation = []);
        delete token.offset;
      });
    });
    return tokens;
  }
  function codeToHtml(code, arg1, arg2, options2) {
    const options3 = (typeof arg1 === "string" ? options2 : arg1) || {};
    if (typeof arg1 === "string")
      options3.lang || (options3.lang = arg1);
    if (!("themes" in options3)) {
      options3.theme = "theme" in options3 ? options3.theme || defaultTheme : arg2 || defaultTheme;
    }
    if (options3.lineOptions) {
      options3.transformers || (options3.transformers = []);
      options3.transformers.push(transformerCompactLineOptions(options3.lineOptions));
    }
    return shiki.codeToHtml(code, options3);
  }
  function ansiToThemedTokens(ansi, options2 = {}) {
    const theme = shiki.getTheme(options2.theme || shiki.getLoadedThemes()[0]);
    return tokenizeAnsiWithTheme(theme, ansi);
  }
  return {
    ...shiki,
    ansiToThemedTokens,
    codeToTokensBase,
    codeToThemedTokens: codeToTokensBase,
    codeToHtml,
    ansiToHtml(code, options2) {
      return shiki.codeToHtml(code, {
        lang: "ansi",
        ...options2,
        theme: options2?.theme || defaultTheme
      });
    },
    getBackgroundColor(theme) {
      return shiki.getTheme(theme).bg;
    },
    getForegroundColor(theme) {
      return shiki.getTheme(theme).fg;
    },
    /**
     * @deprecated Not supported by Shiki
     */
    setColorReplacements(..._args) {
      throw new ShikiCompatError("`setColorReplacements` is not supported by @shikijs/compat");
    }
  };
}

// contentlayer.config.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import { visit as visit3 } from "unist-util-visit";

// lib/rehype-component.ts
import fs2 from "fs";
import path from "path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

// registry.json
var registry_default = {
  name: "aoian/ui",
  homepage: "https://ui.aoian.chat",
  items: [
    {
      name: "index",
      type: "registry:style",
      dependencies: [
        "tailwindcss-animate",
        "class-variance-authority",
        "lucide-react"
      ],
      registryDependencies: [
        "utils"
      ],
      files: [],
      tailwind: {
        config: {
          theme: {
            extend: {
              colors: {
                chat: {
                  DEFAULT: "hsl(var(--chat-background))",
                  foreground: "hsl(var(--chat-foreground))",
                  secondary: "hsl(var(--chat-secondary-background))",
                  "secondary-foreground": "hsl(var(--chat-secondary-foreground))",
                  primary: "hsl(var(--chat-primary-background))",
                  "primary-foreground": "hsl(var(--chat-primary-foreground))",
                  border: "hsl(var(--chat-border))",
                  bubble: {
                    DEFAULT: "hsl(var(--chat-bubble-background))",
                    foreground: "hsl(var(--chat-bubble-foreground))",
                    border: "hsl(var(--chat-bubble-border))"
                  }
                }
              }
            }
          },
          plugins: [
            'require("tailwindcss-animate")'
          ]
        }
      },
      cssVars: {
        light: {
          "--chat-background": "225 40% 96%",
          "--chat-foreground": "235 44% 15%",
          "--chat-secondary-background": "0 0% 100%",
          "--chat-secondary-foreground": "78 89% 105%",
          "--chat-primary-background": "0 0% 100%",
          "--chat-primary-foreground": "217 71% 15%",
          "--chat-border": "217 71% 15%",
          "--chat-bubble-background": "220 13% 95%",
          "--chat-bubble-foreground": "216 15% 36%",
          "--chat-bubble-border": "230 13% 91%"
        },
        dark: {
          "--chat-background": "210 8% 9%",
          "--chat-foreground": "300 2% 92%",
          "--chat-secondary-background": "240 1% 14%",
          "--chat-secondary-foreground": "0 1% 74%",
          "--chat-primary-background": "0 0% 18%",
          "--chat-primary-foreground": "0 0% 100%",
          "--chat-border": "0 1% 28%",
          "--chat-bubble-background": "0 0% 20%",
          "--chat-bubble-foreground": "0 1% 79%",
          "--chat-bubble-border": "0 1% 28%"
        }
      }
    },
    {
      name: "bubble",
      type: "registry:component",
      title: "Bubble",
      description: "A bubble component for chat.",
      registryDependencies: [
        "avatar",
        "https://ui.aoian.chat/r/loading",
        "https://ui.aoian.chat/r/use-event"
      ],
      files: [
        {
          path: "registry/aoian-ui/bubble/bubble.tsx",
          type: "registry:component",
          target: "components/aoian-ui/bubble/bubble.tsx"
        },
        {
          path: "registry/aoian-ui/bubble/bubble-list.tsx",
          type: "registry:component",
          target: "components/aoian-ui/bubble/bubble-list.tsx"
        },
        {
          path: "registry/aoian-ui/hooks/use-display-data.ts",
          type: "registry:hook",
          target: "components/aoian-ui/hooks/use-display-data.ts"
        },
        {
          path: "registry/aoian-ui/hooks/use-list-data.ts",
          type: "registry:hook",
          target: "components/aoian-ui/hooks/use-list-data.ts"
        },
        {
          path: "registry/aoian-ui/hooks/use-typed-effect.ts",
          type: "registry:hook",
          target: "components/aoian-ui/hooks/use-typed-effect.ts"
        },
        {
          path: "registry/aoian-ui/hooks/use-typing-config.ts",
          type: "registry:hook",
          target: "components/aoian-ui/hooks/use-typing-config.ts"
        },
        {
          path: "registry/aoian-ui/bubble/types.ts",
          type: "registry:file",
          target: "components/aoian-ui/bubble/types.ts"
        }
      ]
    },
    {
      name: "loading",
      type: "registry:ui",
      files: [
        {
          path: "registry/aoian-ui/loading.tsx",
          type: "registry:ui",
          target: "components/aoian-ui/loading.tsx"
        }
      ]
    },
    {
      name: "prompt",
      type: "registry:ui",
      files: [
        {
          path: "registry/aoian-ui/prompt/prompt.tsx",
          type: "registry:ui",
          target: "components/aoian-ui/prompt.tsx"
        }
      ]
    },
    {
      name: "sender",
      type: "registry:ui",
      dependencies: [
        "react-textarea-autosize"
      ],
      files: [
        {
          path: "registry/aoian-ui/sender/sender.tsx",
          type: "registry:ui",
          target: "components/aoian-ui/sender.tsx"
        }
      ]
    },
    {
      name: "attachments",
      type: "registry:ui",
      dependencies: [
        "react-dropzone"
      ],
      files: [
        {
          path: "registry/aoian-ui/attachments/attachments.tsx",
          type: "registry:ui",
          target: "components/aoian-ui/attachments.tsx"
        }
      ]
    },
    {
      name: "utils",
      type: "registry:lib",
      dependencies: [
        "clsx",
        "tailwind-merge"
      ],
      files: [
        {
          path: "registry/lib/utils.ts",
          type: "registry:lib"
        }
      ]
    },
    {
      name: "bubble-demo",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-demo.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-placement-avatar",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-placement-avatar.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-layout",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble",
        "button"
      ],
      files: [
        {
          path: "registry/examples/bubble-layout.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-loading",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-loading.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-typing",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble",
        "button"
      ],
      files: [
        {
          path: "registry/examples/bubble-typing.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-content-render",
      type: "registry:example",
      dependencies: [
        "markdown-it"
      ],
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-content-render.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-variant",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-variant.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-shape",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-shape.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "bubble-list-demo",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/bubble"
      ],
      files: [
        {
          path: "registry/examples/bubble-list-demo.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "loading-demo",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/loading"
      ],
      files: [
        {
          path: "registry/examples/loading-demo.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "prompt-demo",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/prompt"
      ],
      files: [
        {
          path: "registry/examples/prompt-demo.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "prompt-disabled",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/prompt"
      ],
      files: [
        {
          path: "registry/examples/prompt-disabled.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "prompt-vertical",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/prompt"
      ],
      files: [
        {
          path: "registry/examples/prompt-vertical.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "prompt-wrap",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/prompt"
      ],
      files: [
        {
          path: "registry/examples/prompt-wrap.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "prompt-variant",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/prompt"
      ],
      files: [
        {
          path: "registry/examples/prompt-variant.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "sender-demo",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/sender"
      ],
      files: [
        {
          path: "registry/examples/sender-demo.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "sender-horizontal",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/sender"
      ],
      files: [
        {
          path: "registry/examples/sender-horizontal.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "sender-submit-type",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/sender"
      ],
      files: [
        {
          path: "registry/examples/sender-submit-type.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "sender-custom-button",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/sender"
      ],
      files: [
        {
          path: "registry/examples/sender-custom-button.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "sender-header",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/sender"
      ],
      files: [
        {
          path: "registry/examples/sender-header.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "attachments-demo",
      type: "registry:example",
      registryDependencies: [
        "https://ui.aoian.chat/r/sender"
      ],
      files: [
        {
          path: "registry/examples/attachments-demo.tsx",
          type: "registry:example"
        }
      ]
    },
    {
      name: "use-event",
      type: "registry:hook",
      files: [
        {
          path: "registry/aoian-ui/hooks/use-event.ts",
          type: "registry:hook",
          target: "components/aoian-ui/hooks/use-event.ts"
        }
      ]
    }
  ]
};

// lib/rehype-component.ts
function rehypeComponent() {
  return async (tree) => {
    visit(tree, (node) => {
      const { value: srcPath } = getNodeAttributeByName(node, "src") || {};
      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value;
        const fileName = getNodeAttributeByName(node, "fileName")?.value;
        if (!name && !srcPath) {
          return null;
        }
        try {
          let src;
          if (srcPath) {
            src = path.join(process.cwd(), srcPath);
          } else {
            const component = registry_default.items.find((item) => item.name === name);
            if (!component) {
              return null;
            }
            src = fileName ? component.files.find((file) => {
              return file.path.endsWith(`${fileName}.tsx`) || file.path.endsWith(`${fileName}.ts`);
            })?.path || component.files[0]?.path : component.files[0]?.path;
          }
          const filePath = src;
          let source = fs2.readFileSync(filePath, "utf8");
          source = source.replaceAll("export default", "export");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
      if (node.name === "ComponentPreview" || node.name === "BlockPreview") {
        const name = getNodeAttributeByName(node, "name")?.value;
        if (!name) {
          return null;
        }
        try {
          const component = registry_default.items.find((item) => item.name === name);
          if (!component) {
            return null;
          }
          const src = component.files[0]?.path;
          const filePath = src;
          let source = fs2.readFileSync(filePath, "utf8");
          source = source.replaceAll("export default", "export");
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"]
                  },
                  data: {
                    meta: `event="copy_usage_code"`
                  },
                  children: [
                    {
                      type: "text",
                      value: source
                    }
                  ]
                })
              ]
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}
function getNodeAttributeByName(node, name) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

// lib/rehype-npm-command.ts
import { visit as visit2 } from "unist-util-visit";
function rehypeNpmCommand() {
  return (tree) => {
    visit2(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm install")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm install",
          "yarn add"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm install",
          "pnpm add"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm install",
          "bun add"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npx create-",
          "yarn create "
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx create-",
          "pnpm create "
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm create")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm create",
          "yarn create"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm create",
          "pnpm create"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npm create",
          "bun create"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npx") && !node.properties?.["__rawString__"]?.startsWith("npx create-")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand;
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npx",
          "pnpm dlx"
        );
        node.properties["__bunCommand__"] = npmCommand.replace(
          "npx",
          "bunx --bun"
        );
      }
      if (node.properties?.["__rawString__"]?.startsWith("npm run")) {
        const npmCommand = node.properties?.["__rawString__"];
        node.properties["__npmCommand__"] = npmCommand;
        node.properties["__yarnCommand__"] = npmCommand.replace(
          "npm run",
          "yarn"
        );
        node.properties["__pnpmCommand__"] = npmCommand.replace(
          "npm run",
          "pnpm"
        );
        node.properties["__bunCommand__"] = npmCommand.replace("npm run", "bun");
      }
    });
  };
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var LinksProperties = defineNestedType(() => ({
  name: "LinksProperties",
  fields: {
    doc: {
      type: "string"
    },
    api: {
      type: "string"
    }
  }
}));
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    },
    links: {
      type: "nested",
      of: LinksProperties
    },
    featured: {
      type: "boolean",
      default: false,
      required: false
    },
    component: {
      type: "boolean",
      default: false,
      required: false
    },
    toc: {
      type: "boolean",
      default: true,
      required: false
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }
            if (codeEl.data?.meta) {
              const regex = /event="([^"]*)"/;
              const match = codeEl.data?.meta.match(regex);
              if (match) {
                node.__event__ = match ? match[1] : null;
                codeEl.data.meta = codeEl.data.meta.replace(regex, "");
              }
            }
            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          getHighlighter,
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ],
      () => (tree) => {
        visit3(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }
            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }
            preElement.properties["__withMeta__"] = node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;
            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
            if (node.__event__) {
              preElement.properties["__event__"] = node.__event__;
            }
            if (node.__style__) {
              preElement.properties["__style__"] = node.__style__;
            }
          }
        });
      },
      rehypeNpmCommand,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section"
          }
        }
      ]
    ]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SOIQXXM3.mjs.map
