import { RegistryItem } from "./base-components";

export const customComponents: RegistryItem[] = [
  {
    name: "bento-grid",
    type: "registry:ui",
    title: "Bento Grid",
    description: "A responsive bento grid layout component with animations and header previews.",
    dependencies: ["lucide-react"],
    registryDependencies: ["badge"],
    files: [
      {
        path: "src/registry/default/ui/bento-grid.tsx",
        type: "registry:ui",
        target: "components/ui/bento-grid.tsx",
      },
    ],
    categories: ["layout"],
  },
];
