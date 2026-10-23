import * as React from "react";
import { cn } from "@/lib/utils";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface BentoGridItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  badge,
  children,
  ...props
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition-all duration-300 p-6 bg-card border border-border/80 flex flex-col justify-between space-y-4 hover:border-primary/50 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {badge && <div className="absolute top-4 right-4 z-10">{badge}</div>}
      {header && <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">{header}</div>}
      <div className="transition-transform duration-200 group-hover/bento:translate-x-1">
        {icon && <div className="text-primary mb-2 flex items-center">{icon}</div>}
        {title && <div className="font-semibold text-foreground tracking-tight text-lg mb-1">{title}</div>}
        {description && <div className="text-sm text-muted-foreground line-clamp-2">{description}</div>}
      </div>
      {children}
    </div>
  );
}
