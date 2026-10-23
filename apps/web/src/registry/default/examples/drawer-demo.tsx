import * as React from "react";
import { Drawer } from "@/components/ui/drawer";

export default function DrawerDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Drawer>
        <span>Drawer Component</span>
      </Drawer>
    </div>
  );
}
