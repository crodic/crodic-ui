import * as React from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <NavigationMenu>
        <span>Navigation Menu Component</span>
      </NavigationMenu>
    </div>
  );
}
