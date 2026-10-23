import * as React from "react";
import { Menubar } from "@/components/ui/menubar";

export default function MenubarDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Menubar>
        <span>Menubar Component</span>
      </Menubar>
    </div>
  );
}
