import * as React from "react"

/**
 * Return typed content and typing status when typing is enabled.
 * Or return content directly.
 */

function isString(str: any): str is string {
  return typeof str === "string"
}

export function useTypedEffect(
  content: React.ReactNode | object,
  typingEnabled: boolean,
  typingStep: number,
  typingInterval: number
): [typedContent: React.ReactNode | object, isTyping: boolean] {
  const [prevContent, setPrevContent] = React.useState<
    React.ReactNode | object
  >("")
  const [typingIndex, setTypingIndex] = React.useState<number>(1)

  const mergedTypingEnabled = typingEnabled && isString(content)

  // Reset typing index when content changed
  React.useLayoutEffect(() => {
    setPrevContent(content)
    if (!mergedTypingEnabled && isString(content)) {
      setTypingIndex(content.length)
    } else if (
      isString(content) &&
      isString(prevContent) &&
      content.indexOf(prevContent) !== 0
    ) {
      setTypingIndex(1)
    }
  }, [content])

  // Start typing
  React.useEffect(() => {
    if (mergedTypingEnabled && typingIndex < content.length) {
      const id = setTimeout(() => {
        setTypingIndex((prev) => prev + typingStep)
      }, typingInterval)

      return () => {
        clearTimeout(id)
      }
    }
  }, [typingIndex, typingEnabled, content])

  const mergedTypingContent = mergedTypingEnabled
    ? content.slice(0, typingIndex)
    : content

  return [
    mergedTypingContent,
    mergedTypingEnabled && typingIndex < content.length,
  ]
}
