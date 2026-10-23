import * as React from "react";
import Link from "next/link";
import { ComponentPreview } from "./component-preview";
import { cn } from "@/lib/utils";

export const mdxComponents = {
  ComponentPreview,
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight mb-4", className)} {...props} />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
    <h2 className={cn("scroll-m-20 border-b border-border/40 pb-2 text-2xl font-semibold tracking-tight first:mt-0 mt-10 mb-4", className)} {...props} />
  ),
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3 className={cn("scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-3", className)} {...props} />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4 className={cn("scroll-m-20 text-lg font-semibold tracking-tight mt-6 mb-2", className)} {...props} />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-4 text-foreground/90", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-4 ml-6 list-disc [&>li]:mt-1.5", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-4 ml-6 list-decimal [&>li]:mt-1.5", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("leading-7 text-foreground/90", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote className={cn("mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground", className)} {...props} />
  ),
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
      <table className={cn("w-full text-sm", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr className={cn("m-0 border-t border-border p-0 even:bg-muted/40", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th className={cn("border-b border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td className={cn("border-b border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)} {...props} />
  ),
  code: ({ className, ...props }: React.ComponentProps<"code">) => (
    <code className={cn("relative rounded bg-muted/80 px-[0.3rem] py-[0.15rem] font-mono text-sm font-medium", className)} {...props} />
  ),
  a: ({ className, href, ...props }: React.ComponentProps<"a">) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className={cn("font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80", className)}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn("font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80", className)}
        {...props}
      />
    );
  },
  hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
    <hr className={cn("my-8 border-border/60", className)} {...props} />
  ),
};
