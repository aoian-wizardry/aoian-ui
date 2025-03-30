"use client"

import { useEffect } from "react"
import { Message, useChat } from "@ai-sdk/react"
import { toast } from "sonner"

import { CHAT_ID } from "@/lib/constants"
import { Model } from "@/registry/lib/types/models"

import { ChatMessages } from "./chat-messages"
import { ChatPanel } from "./chat-panel"

export function Chat({
  id,
  savedMessages = [],
  query,
  models,
}: {
  id: string
  savedMessages?: Message[]
  query?: string
  models?: Model[]
}) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    setMessages,
    stop,
    append,
    data,
    setData,
  } = useChat({
    initialMessages: savedMessages,
    id: CHAT_ID,
    body: {
      id,
    },
    onFinish: () => {
      window.history.replaceState({}, "", `/search/${id}`)
    },
    onError: (error) => {
      toast.error(`Error in chat: ${error.message}`)
    },
    sendExtraMessageFields: false, // Disable extra message fields
  })

  useEffect(() => {
    setMessages(savedMessages)
  }, [id])

  const onQuerySelect = (query: string) => {
    append({
      role: "user",
      content: query,
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData(undefined) // reset data to clear tool call
    handleSubmit(e)
  }

  return (
    <div className="stretch mx-auto flex w-full max-w-3xl flex-col pb-60 pt-14">
      <ChatMessages
        messages={messages}
        data={data}
        onQuerySelect={onQuerySelect}
        isLoading={isLoading}
        chatId={id}
      />
      <ChatPanel
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={onSubmit}
        isLoading={isLoading}
        messages={messages}
        setMessages={setMessages}
        stop={stop}
        query={query}
        append={append}
        models={models}
      />
    </div>
  )
}
