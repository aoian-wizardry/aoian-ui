"use client"

import * as React from "react"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Icons } from "@/registry/blocks/dashboard/components/icons"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex aspect-square size-8 items-center justify-center">
            <Icons.logo className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Aoian UI</span>
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
