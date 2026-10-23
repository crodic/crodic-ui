"use client";

import * as React from "react";

export type Config = {
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
  installationType: "cli" | "manual";
};

export function useConfig(): [Config, (config: Config) => void] {
  const [config, setConfig] = React.useState<Config>({
    packageManager: "pnpm",
    installationType: "cli",
  });

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("crodic_config");
      if (stored) {
        setConfig(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const updateConfig = React.useCallback((next: Config) => {
    setConfig(next);
    try {
      localStorage.setItem("crodic_config", JSON.stringify(next));
    } catch {}
  }, []);

  return [config, updateConfig];
}
