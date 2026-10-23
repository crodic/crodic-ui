import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ScrollAreaDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <ScrollArea>
        <span>Scroll Area Component</span>
      </ScrollArea>
    </div>
  );
}
