// @ts-nocheck
import "server-only"
import * as React from "react"

export const Components: Record<string, any> = {
  "alert-dialog": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/alert-dialog")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "alert-dialog"
    return { default: mod.default || mod[exportName] }
  }),
  "aspect-ratio": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/aspect-ratio")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "aspect-ratio"
    return { default: mod.default || mod[exportName] }
  }),
  "button-group": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/button-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "button-group"
    return { default: mod.default || mod[exportName] }
  }),
  "context-menu": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/context-menu")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "context-menu"
    return { default: mod.default || mod[exportName] }
  }),
  "dropdown-menu": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/dropdown-menu")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "dropdown-menu"
    return { default: mod.default || mod[exportName] }
  }),
  "hover-card": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/hover-card")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "hover-card"
    return { default: mod.default || mod[exportName] }
  }),
  "input-group": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/input-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-group"
    return { default: mod.default || mod[exportName] }
  }),
  "input-otp": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/input-otp")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-otp"
    return { default: mod.default || mod[exportName] }
  }),
  "navigation-menu": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/navigation-menu")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "navigation-menu"
    return { default: mod.default || mod[exportName] }
  }),
  "radio-group": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/radio-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "radio-group"
    return { default: mod.default || mod[exportName] }
  }),
  "scroll-area": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/scroll-area")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "scroll-area"
    return { default: mod.default || mod[exportName] }
  }),
  "toggle-group": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/toggle-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "toggle-group"
    return { default: mod.default || mod[exportName] }
  }),
  "native-select": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/native-select")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "native-select"
    return { default: mod.default || mod[exportName] }
  }),
  "message-scroller": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/message-scroller")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "message-scroller"
    return { default: mod.default || mod[exportName] }
  }),
  "code-block": React.lazy(async () => {
    const mod = await import("@/styles/base-nova/ui/code-block")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "code-block"
    return { default: mod.default || mod[exportName] }
  }),
}
