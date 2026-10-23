// @ts-nocheck
import "server-only"

import * as React from "react"

const shards: Record<
  string,
  {
    load: () => Promise<{ Components: Record<string, any> }>
    names: Set<string>
  }
> = {
  "new-york-v4": {
    load: () => import("./new-york-v4"),
  },
  "radix-nova": {
    load: () => import("./radix-nova"),
  },
  "base-nova": {
    load: () => import("./base-nova"),
  },
}

const cache = new Map<string, any>()

export function getComponent(styleName: string, name: string) {
  let targetShardKey = "radix-nova"
  if (styleName.startsWith("base-") || styleName === "base") {
    targetShardKey = "base-nova"
  } else if (styleName === "new-york-v4" || styleName === "new-york") {
    targetShardKey = "new-york-v4"
  }

  const shard = shards[targetShardKey]
  if (!shard) {
    return undefined
  }

  const cacheKey = `${targetShardKey}:${name}`
  let component = cache.get(cacheKey)
  if (!component) {
    component = React.lazy(async () => {
      const { Components } = await shard.load()
      return { default: Components[name] }
    })
    cache.set(cacheKey, component)
  }

  return component
}
