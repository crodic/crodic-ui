import * as React from "react";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <DropdownMenu>
        <span>Dropdown Menu Component</span>
      </DropdownMenu>
    </div>
  );
}
