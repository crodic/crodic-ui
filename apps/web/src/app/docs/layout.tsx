import { source } from "@/lib/source";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsHeader } from "@/components/docs/docs-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="!flex !flex-col !min-h-screen !w-full bg-background">
      <DocsHeader />
      <div className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-start">
        <DocsSidebar tree={source.pageTree} />
        <main className="flex-1 min-w-0 py-6 lg:py-8 lg:px-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
