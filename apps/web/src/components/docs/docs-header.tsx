"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function DocsHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 w-full items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mr-4">
          <SidebarTrigger className="lg:hidden mr-1" />
          <Link href="/" className="flex items-center gap-2 font-bold text-base tracking-tight">
            <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-black shadow-xs">
              C
            </span>
            <span>Crodic UI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/docs"
            className={cn(
              "transition-colors hover:text-foreground",
              pathname === "/docs" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Documentation
          </Link>
          <Link
            href="/docs/base-ui/button"
            className={cn(
              "transition-colors hover:text-foreground",
              pathname.startsWith("/docs/base-ui") ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Components
          </Link>
          <Link
            href="/docs/components/bento-grid"
            className={cn(
              "transition-colors hover:text-foreground",
              pathname.startsWith("/docs/components") ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Blocks
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="h-9 w-9 text-muted-foreground hover:text-foreground">
            <a
              href="https://github.com/phat-nguyen-dev/crodic-ui"
              target="_blank"
              rel="noreferrer"
              title="GitHub Repository"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
