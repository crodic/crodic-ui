import Link from "next/link";
import { ArrowRight, Code, Sparkles, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-8 flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-black">
              C
            </span>
            <span>Crodic UI</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/docs/base-ui/button" className="text-muted-foreground hover:text-foreground transition-colors">
              Components
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-border bg-muted/50 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Next.js 16 + React 19 + Tailwind CSS v4</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl text-balance mb-6">
          Modern UI Component Library & <span className="text-muted-foreground font-semibold">Public Registry</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-balance mb-10">
          A design system and commercial-grade registry inspired by shadcn/ui and DiceUI. Built on top of Radix UI primitives with zero runtime lock-in.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/docs/base-ui/button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-background font-medium hover:bg-muted/50 transition-colors"
          >
            <Code className="w-4 h-4" />
            <span>Browse Components</span>
          </Link>
        </div>

        <div className="w-full max-w-xl mx-auto p-4 rounded-xl border border-border bg-muted/30 font-mono text-sm text-left flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto text-muted-foreground">
            <Terminal className="w-4 h-4 shrink-0 text-primary" />
            <span>npx shadcn@latest add https://crodic.dev/r/button.json</span>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        <p>Built with Next.js, React 19, Tailwind CSS v4, and Radix UI.</p>
      </footer>
    </div>
  );
}
