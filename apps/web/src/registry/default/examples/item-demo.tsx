import * as React from "react";
import { Item } from "@/components/ui/item";

export default function ItemDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Item>
        <span>Item Component</span>
      </Item>
    </div>
  );
}
