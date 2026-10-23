import * as fs from "node:fs";
import * as path from "node:path";
import { registry, type RegistryItem } from "../src/registry/index";

const OUTPUT_DIR = path.resolve(process.cwd(), "public/r");

function rewriteImports(content: string): string {
  return content
    // Replace import { cn } from "cn" with standard import { cn } from "@/lib/utils"
    .replace(/from\s+["']cn["']/g, 'from "@/lib/utils"')
    // Replace @/registry/default/ui/ with @/components/ui/
    .replace(/@\/registry\/default\/ui\//g, "@/components/ui/")
    // Replace @/registry/default/ with @/components/
    .replace(/@\/registry\/default\//g, "@/components/");
}

function build() {
  console.log(`Starting Registry compilation for ${registry.length} items...`);

  // Ensure output directory exists and is clean
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const indexItems: Array<{
    name: string;
    type: string;
    title: string;
    description: string;
    dependencies?: string[];
    registryDependencies?: string[];
  }> = [];

  for (const item of registry) {
    const filesWithContent = item.files.map((file) => {
      const fullPath = path.resolve(process.cwd(), file.path);
      if (!fs.existsSync(fullPath)) {
        console.warn(`Warning: File not found for item ${item.name}: ${file.path}`);
        return {
          path: file.path,
          type: file.type,
          content: "",
        };
      }

      const rawContent = fs.readFileSync(fullPath, "utf-8");
      const transformedContent = rewriteImports(rawContent);

      // Extract destination relative path for shadcn (e.g., "ui/button.tsx")
      const filename = path.basename(file.path);
      const relativeDestPath = file.type === "registry:ui" ? `ui/${filename}` : filename;

      return {
        path: relativeDestPath,
        content: transformedContent,
        type: file.type,
        target: file.target || "",
      };
    });

    const registryPayload = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies || [],
      devDependencies: item.devDependencies || [],
      registryDependencies: item.registryDependencies || [],
      files: filesWithContent,
    };

    const outputPath = path.join(OUTPUT_DIR, `${item.name}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(registryPayload, null, 2), "utf-8");

    indexItems.push({
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies,
      registryDependencies: item.registryDependencies,
    });
  }

  // Generate public/r/index.json
  const indexPath = path.join(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(indexItems, null, 2), "utf-8");

  console.log(`✅ Successfully compiled ${registry.length} components into public/r/!`);
}

build();
