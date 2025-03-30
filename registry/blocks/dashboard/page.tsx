import { generateId } from "ai"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/registry/blocks/dashboard/components/app-sidebar"
import { Chat } from "@/registry/blocks/dashboard/components/chat"
import { getModels } from "@/registry/lib/config/models"

export default async function Page() {
  const id = generateId()
  const models = await getModels()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="stretch mx-auto flex w-full max-w-3xl flex-col pb-60 pt-14">
          <Chat id={id} models={models} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
