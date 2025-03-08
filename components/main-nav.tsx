"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6 text-accent-foreground" />
        <span className="hidden font-bold text-accent-foreground lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex hidden items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-accent-foreground/80",
            pathname === "/docs"
              ? "text-accent-foreground"
              : "text-accent-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-accent-foreground/80",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-accent-foreground"
              : "text-accent-foreground/80"
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}
