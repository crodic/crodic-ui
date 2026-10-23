import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="font-bold tracking-tight text-lg flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center text-xs font-black">
              C
            </span>
            Crodic UI
          </span>
        ),
      }}
      links={[
        {
          text: 'Documentation',
          url: '/docs',
          active: 'nested-url',
        },
        {
          text: 'Components',
          url: '/docs/base-ui/button',
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
