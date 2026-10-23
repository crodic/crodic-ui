import * as React from "react";
import { Bubble } from "@/components/ui/bubble";

export default function BubbleDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Bubble>
        <span>Bubble Component</span>
      </Bubble>
    </div>
  );
}
