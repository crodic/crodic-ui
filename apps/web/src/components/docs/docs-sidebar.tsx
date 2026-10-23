"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

type PageTree = typeof source.pageTree;

interface DocsSidebarProps extends React.ComponentProps<typeof Sidebar> {
  tree: PageTree;
}

export function DocsSidebar({ tree, ...props }: DocsSidebarProps) {
  const pathname = usePathname();
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Group pages from pageTree
  const sections = React.useMemo(() => {
    const list: { title: string; pages: { name: string; url: string }[] }[] = [];

    // Root pages
    const rootPages: { name: string; url: string }[] = [];

    for (const item of tree.children) {
      if (item.type === "page") {
        rootPages.push({ name: String(item.name), url: item.url });
      } else if (item.type === "folder") {
        const folderPages: { name: string; url: string }[] = [];
        for (const child of item.children) {
          if (child.type === "page") {
            folderPages.push({ name: String(child.name), url: child.url });
          }
        }
        if (folderPages.length > 0) {
          list.push({
            title: String(item.name),
            pages: folderPages,
          });
        }
      }
    }

    if (rootPages.length > 0) {
      list.unshift({
        title: "Getting Started",
        pages: rootPages,
      });
    }

    return list;
  }, [tree]);

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 border-r border-border/40 bg-background lg:block shrink-0"
      {...props}
    >
      <SidebarContent ref={contentRef} className="px-2 py-4 scrollbar-none overflow-y-auto">
        {sections.map((section) => (
          <SidebarGroup key={section.title} className="pb-4">
            <SidebarGroupLabel className="px-3 text-xs font-semibold text-foreground tracking-wider uppercase">
              {section.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.pages.map((page) => {
                  const isActive = pathname === page.url;
                  return (
                    <SidebarMenuItem key={page.url}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="h-8 px-3 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground data-[active=true]:font-medium data-[active=true]:text-foreground data-[active=true]:bg-accent/60 rounded-md"
                      >
                        <Link href={page.url}>{page.name}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
