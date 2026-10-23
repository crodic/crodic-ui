import { source } from "@/lib/source";
import { DocsSidebar } from "@/components/docs-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="flex-1 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <SidebarProvider
          className="min-h-[calc(100vh-3.5rem)] items-start"
          style={
            {
              "--sidebar-width": "16rem",
            } as React.CSSProperties
          }
        >
          <DocsSidebar tree={source.pageTree} />
          <div className="flex-1 min-w-0 py-6 lg:py-8 lg:px-8">
            {children}
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
