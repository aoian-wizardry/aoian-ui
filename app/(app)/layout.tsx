import {SiteHeader} from "@/components/site-header"
import React from "react";

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({children}: AppLayoutProps) {
  return (
    <div data-wrapper="" className="flex flex-1 flex-col relative">
      <SiteHeader/>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  )
}

