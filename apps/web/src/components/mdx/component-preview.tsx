import * as fs from "node:fs";
import * as path from "node:path";
import { highlightCode } from "@/lib/highlight";
import { ComponentPreviewClient } from "./component-preview-client";

interface ComponentPreviewProps {
  name: string;
  description?: string;
}

export async function ComponentPreview({ name }: ComponentPreviewProps) {
  const rawName = name.replace(/-demo$/, "");

  // Priority search locations for source code
  const possiblePaths = [
    path.resolve(process.cwd(), `src/registry/default/examples/${name}.tsx`),
    path.resolve(process.cwd(), `src/registry/default/ui/${rawName}.tsx`),
    path.resolve(process.cwd(), `src/components/ui/${rawName}.tsx`),
  ];

  let code = `// Source code for ${name} not found.`;

  for (const filePath of possiblePaths) {
    if (fs.existsSync(/*turbopackIgnore: true*/ filePath)) {
      code = fs.readFileSync(/*turbopackIgnore: true*/ filePath, "utf-8");
      break;
    }
  }

  const highlightedCode = await highlightCode(code, "tsx");

  return <ComponentPreviewClient name={name} code={code} highlightedCode={highlightedCode} />;
}
