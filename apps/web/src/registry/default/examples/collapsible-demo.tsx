import * as React from "react";
import { Collapsible } from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Collapsible>
        <span>Collapsible Component</span>
      </Collapsible>
    </div>
  );
}
