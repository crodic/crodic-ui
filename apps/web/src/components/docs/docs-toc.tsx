"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  title?: React.ReactNode;
  url: string;
  depth: number;
}

interface DocsTOCProps {
  toc: TOCItem[];
  className?: string;
}

export function DocsTableOfContents({ toc, className }: DocsTOCProps) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!toc?.length) return;

    const ids = toc.map((item) => item.url.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0% 0% -75% 0%" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      }
    };
  }, [toc]);

  if (!toc?.length) return null;

  return (
    <div className={cn("sticky top-20 flex flex-col gap-2 p-4 text-sm", className)}>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        On This Page
      </p>
      <nav className="flex flex-col space-y-2">
        {toc.map((item) => {
          const isActive = item.url === `#${activeId}`;
          return (
            <a
              key={item.url}
              href={item.url}
              className={cn(
                "text-xs transition-colors hover:text-foreground no-underline line-clamp-1",
                item.depth === 3 && "pl-3",
                item.depth === 4 && "pl-6",
                isActive
                  ? "font-medium text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
