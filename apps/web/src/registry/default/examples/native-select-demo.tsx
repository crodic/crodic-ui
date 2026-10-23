import * as React from "react";
import { NativeSelect } from "@/components/ui/native-select";

export default function NativeSelectDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <NativeSelect>
        <span>Native Select Component</span>
      </NativeSelect>
    </div>
  );
}
