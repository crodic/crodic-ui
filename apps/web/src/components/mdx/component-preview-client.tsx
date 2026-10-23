"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Terminal, RotateCw, Monitor, Tablet, Smartphone } from "lucide-react";
import { registryMap } from "@/registry/registry-map";

interface ComponentPreviewClientProps {
  name: string;
  code: string;
  highlightedCode: string;
}

type Viewport = "desktop" | "tablet" | "mobile";

export function ComponentPreviewClient({ name, code, highlightedCode }: ComponentPreviewClientProps) {
  const [copiedCode, setCopiedCode] = React.useState(false);
  const [copiedCli, setCopiedCli] = React.useState(false);
  const [viewport, setViewport] = React.useState<Viewport>("desktop");
  const [renderKey, setRenderKey] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const rawName = name.replace(/-demo$/, "");
  const Component = registryMap[name];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://crodic.dev";

  const handleCopyCli = () => {
    navigator.clipboard.writeText(`npx shadcn@latest add ${appUrl}/r/${rawName}.json`);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const viewportWidthClass = {
    desktop: "w-full",
    tablet: "max-w-[768px] mx-auto",
    mobile: "max-w-[375px] mx-auto",
  }[viewport];

  return (
    <div className="my-8 flex flex-col space-y-4">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2">
          <TabsList className="bg-transparent p-0 h-auto gap-4">
            <TabsTrigger
              value="preview"
              className="relative px-3 py-1.5 font-medium text-sm text-muted-foreground data-[state=active]:text-foreground data-[state=active]:font-semibold border-b-2 border-transparent data-[state=active]:border-primary rounded-none shadow-none bg-transparent"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative px-3 py-1.5 font-medium text-sm text-muted-foreground data-[state=active]:text-foreground data-[state=active]:font-semibold border-b-2 border-transparent data-[state=active]:border-primary rounded-none shadow-none bg-transparent"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            {/* Viewport switchers */}
            <div className="hidden sm:flex items-center rounded-lg border border-border p-0.5 bg-muted/40">
              <button
                type="button"
                onClick={() => setViewport("desktop")}
                className={`p-1.5 rounded-md transition-colors ${viewport === "desktop" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
                title="Desktop View"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("tablet")}
                className={`p-1.5 rounded-md transition-colors ${viewport === "tablet" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewport("mobile")}
                className={`p-1.5 rounded-md transition-colors ${viewport === "mobile" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"}`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Reset state button */}
            <button
              type="button"
              onClick={() => setRenderKey((k) => k + 1)}
              className="p-1.5 rounded-md border border-border text-muted-foreground hover:text-foreground transition-colors"
              title="Reset Preview"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            {/* Copy CLI button */}
            <button
              type="button"
              onClick={handleCopyCli}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-md border border-border bg-background"
              title="Copy npx shadcn add command"
            >
              {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Terminal className="w-3.5 h-3.5" />}
              <span>{copiedCli ? "Copied" : "Copy CLI"}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Interactive Preview */}
        <TabsContent value="preview" className="rounded-xl border border-border bg-card p-6 min-h-[350px] flex items-center justify-center overflow-hidden transition-all">
          <div key={renderKey} className={`w-full transition-all duration-300 flex items-center justify-center ${viewportWidthClass}`}>
            {mounted ? (
              <React.Suspense fallback={<div className="text-sm text-muted-foreground animate-pulse">Loading preview...</div>}>
                {Component ? <Component /> : <div className="text-sm text-muted-foreground">Demo component &quot;{name}&quot; not found.</div>}
              </React.Suspense>
            ) : (
              <div className="text-sm text-muted-foreground animate-pulse">Loading preview...</div>
            )}
          </div>
        </TabsContent>

        {/* Tab 2: Syntax Highlighted Code View */}
        <TabsContent value="code" className="relative rounded-xl border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-muted/60 border-b border-border text-xs text-muted-foreground">
            <span className="font-mono">{name}.tsx</span>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? "Copied" : "Copy Source"}</span>
            </button>
          </div>
          <div
            className="overflow-x-auto text-xs [&>pre]:!m-0 [&>pre]:!border-0 [&>pre]:!rounded-none"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
