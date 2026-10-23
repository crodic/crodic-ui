import * as React from "react";
import { RadioGroup } from "@/components/ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <RadioGroup>
        <span>Radio Group Component</span>
      </RadioGroup>
    </div>
  );
}
