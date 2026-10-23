"use client";

import * as React from "react";
import { Terminal } from "lucide-react";
import { CopyButton } from "./copy-button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.ComponentProps<"pre"> {
  "data-language"?: string;
}

export function CodeBlock({
  children,
  className,
  "data-language": language,
  ...props
}: CodeBlockProps) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://crodic.dev";

  // Recursively extract text from children
  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(extractText).join("");
    if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
      return extractText(node.props.children);
    }
    return "";
  };

  const rawCode = extractText(children).trim();
  // Dynamically replace https://crodic.dev with the APP_URL from .env
  const processedCode = rawCode.replaceAll("https://crodic.dev", appUrl);

  const isCliCommand =
    processedCode.startsWith("npx shadcn@latest add") ||
    processedCode.startsWith("pnpm dlx shadcn") ||
    processedCode.includes("shadcn@latest add");

  if (isCliCommand) {
    const rawTarget = processedCode
      .replace(/^npx shadcn@latest add\s*/, "")
      .replace(/^pnpm dlx shadcn@latest add\s*/, "")
      .replace(/^bunx --bun shadcn@latest add\s*/, "")
      .trim();

    const commands: Record<"pnpm" | "npm" | "yarn" | "bun", string> = {
      pnpm: `pnpm dlx shadcn@latest add ${rawTarget}`,
      npm: `npx shadcn@latest add ${rawTarget}`,
      yarn: `npx shadcn@latest add ${rawTarget}`,
      bun: `bunx --bun shadcn@latest add ${rawTarget}`,
    };

    return (
      <div className="relative my-6 rounded-xl border border-border bg-muted/40 dark:bg-muted/20 overflow-hidden">
        <Tabs defaultValue="pnpm" className="gap-0">
          <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-3 py-1.5">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <TabsList className="h-7 bg-transparent p-0 gap-1">
                {(["pnpm", "npm", "yarn", "bun"] as const).map((pm) => (
                  <TabsTrigger
                    key={pm}
                    value={pm}
                    className="h-6 px-2 text-xs font-medium rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs"
                  >
                    {pm}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {(["pnpm", "npm", "yarn", "bun"] as const).map((pm) => (
            <TabsContent key={pm} value={pm} className="m-0 relative p-4">
              <CopyButton value={commands[pm]} />
              <pre className="font-mono text-xs sm:text-sm text-foreground overflow-x-auto pr-10">
                <code>{commands[pm]}</code>
              </pre>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  }

  return (
    <div className="relative my-6 rounded-xl border border-border bg-muted/40 dark:bg-muted/20 overflow-hidden">
      <CopyButton value={processedCode} />
      <pre
        className={cn(
          "font-mono text-xs sm:text-sm p-4 overflow-x-auto text-foreground pr-10",
          className
        )}
        data-language={language}
        {...props}
      >
        {/* Replace https://crodic.dev in rendered children */}
        {renderReplacedChildren(children, appUrl)}
      </pre>
    </div>
  );
}

function renderReplacedChildren(
  children: React.ReactNode,
  appUrl: string
): React.ReactNode {
  if (typeof children === "string") {
    return children.replaceAll("https://crodic.dev", appUrl);
  }
  if (Array.isArray(children)) {
    return children.map((child, i) => (
      <React.Fragment key={i}>
        {renderReplacedChildren(child, appUrl)}
      </React.Fragment>
    ));
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return React.cloneElement(children, {
      ...children.props,
      children: renderReplacedChildren(children.props.children, appUrl),
    });
  }
  return children;
}
