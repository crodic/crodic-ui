import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ComponentPreview } from "./component-preview";
import { ComponentSource } from "./component-source";
import { CodeBlock } from "./code-block";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Kbd } from "@/components/ui/kbd";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const mdxComponents = {
  ComponentPreview,
  ComponentSource,
  Button,
  Badge,
  Kbd,
  AspectRatio,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Image: ({
    src,
    className,
    width,
    height,
    alt,
    ...props
  }: React.ComponentProps<"img">) => (
    <Image
      className={cn("mt-6 rounded-2xl border border-border", className)}
      src={(src as string) || ""}
      width={Number(width) || 800}
      height={Number(height) || 400}
      alt={alt || ""}
      {...props}
    />
  ),
  Tab: (props: React.ComponentProps<"div">) => <div {...props} />,
  Link,
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-card-foreground transition-colors hover:bg-muted/50 sm:p-10",
        className
      )}
      {...props}
    />
  ),
  CodeTabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs defaultValue="cli" className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  Tabs,
  TabsList: ({ className, ...props }: React.ComponentProps<typeof TabsList>) => (
    <TabsList className={cn("w-full justify-start rounded-none border-b border-border/60 bg-transparent p-0 gap-6", className)} {...props} />
  ),
  TabsTrigger: ({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "relative rounded-none border-b-2 border-b-transparent bg-transparent px-1 pb-3 text-sm font-medium text-muted-foreground shadow-none transition-none hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent className={cn("relative pt-4", className)} {...props} />
  ),
  Steps: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
      className={cn(
        "steps mb-8 border-l border-border/60 pl-6 ml-2 space-y-4",
        className
      )}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-semibold text-foreground text-sm tracking-tight mt-4 mb-2 flex items-center",
        className
      )}
      {...props}
    />
  ),
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Alert,
  AlertTitle,
  AlertDescription,
  Callout: ({
    title,
    children,
    className,
    ...props
  }: React.ComponentProps<"div"> & { title?: string }) => (
    <div
      className={cn(
        "my-6 rounded-xl border border-border/60 bg-muted/30 p-4 text-sm text-foreground",
        className
      )}
      {...props}
    >
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-muted-foreground text-xs leading-relaxed">{children}</div>
    </div>
  ),
  pre: CodeBlock,
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "scroll-m-20 text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className={cn(
        "scroll-m-20 border-b border-border/40 pb-2 text-2xl font-semibold tracking-tight text-foreground first:mt-0 mt-12 mb-4",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-8 mb-3",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight text-foreground mt-6 mb-2",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4 text-foreground/90 text-sm sm:text-base", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-4 ml-6 list-disc [&>li]:mt-1.5 text-sm sm:text-base text-foreground/90", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-4 ml-6 list-decimal [&>li]:mt-1.5 text-sm sm:text-base text-foreground/90", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("leading-7 text-foreground/90", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground", className)}
      {...props}
    />
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
    <th
      className={cn(
        "border-b border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "border-b border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ComponentProps<"code">) => {
    return (
      <code
        className={cn(
          "relative rounded-md bg-muted px-[0.35rem] py-[0.15rem] font-mono text-[0.875em] font-medium text-foreground",
          className
        )}
        {...props}
      />
    );
  },
  a: ({ className, href, ...props }: React.ComponentProps<"a">) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className={cn(
            "font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors",
            className
          )}
          {...props}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors",
          className
        )}
        {...props}
      />
    );
  },
  hr: ({ className, ...props }: React.ComponentProps<"hr">) => (
    <hr className={cn("my-8 border-border/60", className)} {...props} />
  ),
};
