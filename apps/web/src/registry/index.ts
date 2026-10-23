import { baseComponents, type RegistryItem, type RegistryFile } from "./base-components";
import { customComponents } from "./custom-components";

export type { RegistryItem, RegistryFile };

export const registry: RegistryItem[] = [
  ...customComponents,
  ...baseComponents,
];

export function getRegistryItem(name: string): RegistryItem | undefined {
  return registry.find((item) => item.name === name);
}
