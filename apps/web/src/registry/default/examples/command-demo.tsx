import * as React from "react";
import { Command } from "@/components/ui/command";

export default function CommandDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Command>
        <span>Command Component</span>
      </Command>
    </div>
  );
}
