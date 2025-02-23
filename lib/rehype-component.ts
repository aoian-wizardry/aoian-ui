import fs from "fs"
import path from "path"
import {UnistNode, UnistTree} from "types/unist"
import {u} from "unist-builder"
import {visit} from "unist-util-visit"

import Registry from "../registry.json";


export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      // src prop overrides both name and fileName.
      const {value: srcPath} =
      (getNodeAttributeByName(node, "src") as {
        name: string
        value?: string
        type?: string
      }) || {}

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          | string
          | undefined

        if (!name && !srcPath) {
          return null
        }

        try {
          let src: string

          if (srcPath) {
            src = path.join(process.cwd(), srcPath)
          } else {

            const component = Registry.items.find((item) => item.name === name);

            if (!component) {
              return null;
            }

            src = fileName
              ? component.files.find((file) => {
              return (
                file.path.endsWith(`${fileName}.tsx`) ||
                file.path.endsWith(`${fileName}.ts`)
              )
            })?.path || component.files[0]?.path
              : component.files[0]?.path
          }

          // Read the source file.
          const filePath = src
          let source = fs.readFileSync(filePath, "utf8")

          source = source.replaceAll("export default", "export")

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === "ComponentPreview" || node.name === "BlockPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as string

        if (!name) {
          return null
        }

        try {
          const component = Registry.items.find((item) => item.name === name);

          if (!component) {
            return null;
          }

          const src = component.files[0]?.path

          // Read the source file.
          const filePath = src
          let source = fs.readFileSync(filePath, "utf8")

          source = source.replaceAll("export default", "export")

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  data: {
                    meta: `event="copy_usage_code"`,
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }

    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}


