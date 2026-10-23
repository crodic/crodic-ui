import * as React from "react";
import { DirectionProvider } from "@/components/ui/direction";

export default function DirectionDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="p-4 text-sm text-muted-foreground border rounded-lg">Direction Provider (LTR)</div>
    </DirectionProvider>
  );
}
