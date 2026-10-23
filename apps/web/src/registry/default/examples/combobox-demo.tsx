import * as React from "react";
import { Combobox } from "@/components/ui/combobox";

export default function ComboboxDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Combobox>
        <span>Combobox Component</span>
      </Combobox>
    </div>
  );
}
