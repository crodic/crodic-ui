"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyButtonProps extends React.ComponentProps<typeof Button> {
  value: string;
}

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
    } catch {
      // fallback
    }
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "absolute top-3 right-3 z-10 h-7 w-7 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all rounded-md",
        className
      )}
      onClick={copyToClipboard}
      title="Copy to clipboard"
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500 transition-all" />
      ) : (
        <Copy className="h-3.5 w-3.5 transition-all" />
      )}
    </Button>
  );
}
