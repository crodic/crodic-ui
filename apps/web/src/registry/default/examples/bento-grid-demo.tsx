import { BentoGrid, BentoGridItem } from "@/registry/default/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Shield, Rocket, Layers } from "lucide-react";

export default function BentoGridDemo() {
  const items = [
    {
      title: "Real-time Analytics",
      description: "Stream your platform telemetry with microsecond latency.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-border/50 items-center justify-center p-4">
          <Sparkles className="w-10 h-10 text-primary opacity-80" />
        </div>
      ),
      icon: <Zap className="h-5 w-5" />,
      className: "md:col-span-2",
      badge: <Badge variant="secondary">Popular</Badge>,
    },
    {
      title: "Zero Runtime Lock-in",
      description: "Own 100% of your code with headless Radix primitives.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-muted via-card to-background border border-border/50 items-center justify-center p-4">
          <Layers className="w-10 h-10 text-muted-foreground opacity-70" />
        </div>
      ),
      icon: <Rocket className="h-5 w-5" />,
      className: "md:col-span-1",
    },
    {
      title: "Enterprise Grade Security",
      description: "Strict WCAG accessibility standards and zero runtime vulnerabilities.",
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-border/50 items-center justify-center p-4">
          <Shield className="w-10 h-10 text-emerald-500 opacity-80" />
        </div>
      ),
      icon: <Shield className="h-5 w-5" />,
      className: "md:col-span-3",
      badge: <Badge variant="outline">Verified</Badge>,
    },
  ];

  return (
    <BentoGrid className="w-full">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
          badge={item.badge}
        />
      ))}
    </BentoGrid>
  );
}
