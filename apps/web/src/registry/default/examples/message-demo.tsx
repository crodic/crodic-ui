import * as React from "react";
import { Message } from "@/components/ui/message";

export default function MessageDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <Message>
        <span>Message Component</span>
      </Message>
    </div>
  );
}
