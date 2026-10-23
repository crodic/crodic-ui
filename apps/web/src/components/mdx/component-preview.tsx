"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Terminal } from "lucide-react";
import { registryMap } from "@/registry/registry-map";

interface ComponentPreviewProps {
  name: string;
  description?: string;
}

export function ComponentPreview({ name, description }: ComponentPreviewProps) {
  const [copied, setCopied] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const Component = registryMap[name];

  const handleCopy = () => {
    const rawName = name.replace(/-demo$/, "");
    navigator.clipboard.writeText(`npx shadcn@latest add https://crodic.dev/r/${rawName}.json`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 flex flex-col space-y-4">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
            title="Copy CLI command"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy CLI"}</span>
          </button>
        </div>

        <TabsContent value="preview" className="rounded-xl border bg-card p-6 min-h-[300px] flex items-center justify-center">
          {mounted ? (
            <React.Suspense fallback={<div className="text-sm text-muted-foreground animate-pulse">Loading preview...</div>}>
              {Component ? <Component /> : <div className="text-sm text-muted-foreground">Demo component &quot;{name}&quot; not found.</div>}
            </React.Suspense>
          ) : (
            <div className="text-sm text-muted-foreground animate-pulse">Loading preview...</div>
          )}
        </TabsContent>

        <TabsContent value="code" className="rounded-xl border bg-muted/40 p-4 font-mono text-xs overflow-x-auto">
          <div className="flex items-center gap-2 text-muted-foreground mb-3 font-sans font-medium text-xs">
            <Terminal className="w-4 h-4 text-primary" />
            <span>Installation via shadcn CLI</span>
          </div>
          <code className="text-foreground">
            npx shadcn@latest add https://crodic.dev/r/{name.replace(/-demo$/, "")}.json
          </code>
        </TabsContent>
      </Tabs>
    </div>
  );
}
