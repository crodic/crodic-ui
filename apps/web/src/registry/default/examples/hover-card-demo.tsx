import * as React from "react";
import { HoverCard } from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <HoverCard>
        <span>Hover Card Component</span>
      </HoverCard>
    </div>
  );
}
