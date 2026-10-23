import * as React from "react";
import { ContextMenu } from "@/components/ui/context-menu";

export default function ContextMenuDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <ContextMenu>
        <span>Context Menu Component</span>
      </ContextMenu>
    </div>
  );
}
