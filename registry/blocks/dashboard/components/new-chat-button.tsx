"use client"

import * as React from "react"
import { Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NewChatButton() {
  const { open } = useSidebar()

  console.log(open)
  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="New Chat"
            className={cn(
              open &&
                "group/new-chat border border-blue-400 bg-blue-100 text-blue-700 hover:bg-blue-400 hover:text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300 hover:dark:bg-blue-800"
            )}
          >
            <Plus
              className={cn(
                open &&
                  "text-blue-700 dark:text-blue-300 group-hover/new-chat:dark:text-foreground"
              )}
            />
            <span>New Chat</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
