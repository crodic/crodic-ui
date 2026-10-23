import * as React from "react";
import { Trace } from "@/components/ui/trace";

export default function TraceDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Trace>
        <span>Trace Component</span>
      </Trace>
    </div>
  );
}
