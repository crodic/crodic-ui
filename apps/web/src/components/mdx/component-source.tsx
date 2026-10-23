import * as React from "react";
import fs from "fs";
import path from "path";
import { highlightCode } from "@/lib/highlight";
import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";

interface ComponentSourceProps {
  name?: string;
  src?: string;
  title?: string;
  className?: string;
}

export async function ComponentSource({
  name,
  src,
  title,
  className,
}: ComponentSourceProps) {
  if (!name && !src) return null;

  const possiblePaths = [
    name ? path.resolve(/*turbopackIgnore: true*/ process.cwd(), `src/components/ui/${name}.tsx`) : "",
    name ? path.resolve(/*turbopackIgnore: true*/ process.cwd(), `src/registry/default/ui/${name}.tsx`) : "",
    src ? path.resolve(/*turbopackIgnore: true*/ process.cwd(), src) : "",
  ].filter(Boolean);

  let code = "";
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      code = fs.readFileSync(p, "utf-8");
      break;
    }
  }

  if (!code) {
    code = `// Component source for ${name || src} not found.`;
  }

  const displayTitle = title || (name ? `components/ui/${name}.tsx` : src);
  const highlightedCode = await highlightCode(code, "tsx");

  return (
    <div className={cn("relative my-6 rounded-xl border border-border bg-muted/40 dark:bg-muted/20 overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border text-xs text-muted-foreground font-mono">
        <span>{displayTitle}</span>
        <CopyButton value={code} className="top-1.5 right-2" />
      </div>
      <div
        className="max-h-[450px] overflow-y-auto p-4 font-mono text-xs [&>pre]:!m-0 [&>pre]:!p-0 [&>pre]:!border-0 [&>pre]:!bg-transparent"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
}
