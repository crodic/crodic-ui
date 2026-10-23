import * as React from "react";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Label>
        <span>Label Component</span>
      </Label>
    </div>
  );
}
