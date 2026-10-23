"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";
import { GitHubLink } from "@/components/github-link";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Separator } from "@/components/ui/separator";

export function SiteHeader() {
  const pageTree = source.pageTree;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex items-center gap-2">
          <Link href="/" className="mr-6 flex items-center gap-2 font-bold text-base tracking-tight">
            <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-black shadow-xs">
              C
            </span>
            <span>{siteConfig.name}</span>
          </Link>
          <MainNav items={siteConfig.navItems} />
        </div>

        <MobileNav
          tree={pageTree}
          items={siteConfig.navItems}
          className="flex md:hidden mr-2"
        />

        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search placeholder / button */}
          </div>
          <nav className="flex items-center gap-1">
            <GitHubLink />
            <Separator orientation="vertical" className="h-4 mx-1" />
            <ModeSwitcher />
          </nav>
        </div>
      </div>
    </header>
  );
}
