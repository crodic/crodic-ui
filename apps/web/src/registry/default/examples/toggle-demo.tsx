import * as React from "react";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Toggle>
        <span>Toggle Component</span>
      </Toggle>
    </div>
  );
}
