import * as React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <AspectRatio>
        <span>Aspect Ratio Component</span>
      </AspectRatio>
    </div>
  );
}
