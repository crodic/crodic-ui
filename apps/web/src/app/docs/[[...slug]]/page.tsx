import { source } from "@/lib/source";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { findNeighbour } from "fumadocs-core/page-tree";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { DocsTableOfContents } from "@/components/docs/docs-toc";
import { Button } from "@/components/ui/button";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <div className="flex items-start justify-between gap-8">
      <div className="w-full min-w-0 max-w-4xl flex-1">
        {/* Header */}
        <div className="space-y-2 pb-6 border-b border-border/40 mb-8">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {page.data.title}
          </h1>
          {page.data.description && (
            <p className="text-lg text-muted-foreground">
              {page.data.description}
            </p>
          )}
        </div>

        {/* MDX Body */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDX components={mdxComponents} />
        </div>

        {/* Prev / Next Pagination */}
        <div className="flex items-center justify-between border-t border-border/40 pt-8 mt-12">
          {neighbours.previous ? (
            <Button variant="outline" size="sm" asChild className="gap-2">
              <Link href={neighbours.previous.url}>
                <ChevronLeft className="h-4 w-4" />
                <span>{neighbours.previous.name}</span>
              </Link>
            </Button>
          ) : (
            <div />
          )}

          {neighbours.next ? (
            <Button variant="outline" size="sm" asChild className="gap-2 ml-auto">
              <Link href={neighbours.next.url}>
                <span>{neighbours.next.name}</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Sticky Table of Contents on the right */}
      {page.data.toc && page.data.toc.length > 0 && (
        <aside className="hidden xl:block w-64 shrink-0">
          <DocsTableOfContents toc={page.data.toc} />
        </aside>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} - Crodic UI`,
    description: page.data.description,
  };
}
