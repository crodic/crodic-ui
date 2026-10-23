import * as React from "react";
import { Marker } from "@/components/ui/marker";

export default function MarkerDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Marker>
        <span>Marker Component</span>
      </Marker>
    </div>
  );
}
