import * as React from "react";
import { Attachment } from "@/components/ui/attachment";

export default function AttachmentDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Attachment>
        <span>Attachment Component</span>
      </Attachment>
    </div>
  );
}
