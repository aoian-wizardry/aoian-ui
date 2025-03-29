"use client"

import * as React from "react"
import { History, MoreHorizontal, Trash2, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { isMobile, open } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton tooltip="History">
            <History />
            <span>History</span>
          </SidebarMenuButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuAction showOnHover>
                <MoreHorizontal />
                <span className="sr-only">More</span>
              </SidebarMenuAction>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align={isMobile ? "end" : "start"}
            >
              <DropdownMenuItem>
                <Trash2 className="text-muted-foreground" />
                <span>Clear History</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      {open && (
        <SidebarMenu>
          {projects.map((item) => (
            <SidebarMenuItem key={item.name}>
              <a
                className="flex cursor-pointer flex-col rounded border border-transparent p-2 hover:bg-muted"
                href="/search/g7SQMti2zpbbeyMu"
              >
                <div className="flex items-center space-x-3 pr-3">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-fast-forward text-green-500"
                    >
                      <polygon points="13 19 22 12 13 5 13 19"></polygon>
                      <polygon points="2 19 11 12 2 5 2 19"></polygon>
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-grow flex-col">
                    <div className="select-none truncate text-xs font-medium">
                      Simple Greeting: Hello
                    </div>
                    <div className="truncate text-xs text-muted-foreground">
                      Today, 04:34 PM
                    </div>
                  </div>
                </div>
              </a>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal className="text-sidebar-foreground/70" />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      )}
    </SidebarGroup>
  )
}
