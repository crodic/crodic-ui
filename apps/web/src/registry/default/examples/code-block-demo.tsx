import * as React from "react";
import { CodeBlock } from "@/components/ui/code-block";

export default function CodeBlockDemo() {
  return (
    <div className="flex items-center justify-center p-6 border rounded-lg bg-card">
      <CodeBlock>
        <span>Code Block Component</span>
      </CodeBlock>
    </div>
  );
}
