// @ts-nocheck
import "server-only"
import * as React from "react"

export const Components: Record<string, any> = {
  "alert-dialog": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/alert-dialog")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "alert-dialog"
    return { default: mod.default || mod[exportName] }
  }),
  "aspect-ratio": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/aspect-ratio")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "aspect-ratio"
    return { default: mod.default || mod[exportName] }
  }),
  "button-group": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/button-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "button-group"
    return { default: mod.default || mod[exportName] }
  }),
  "context-menu": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/context-menu")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "context-menu"
    return { default: mod.default || mod[exportName] }
  }),
  "dropdown-menu": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/dropdown-menu")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "dropdown-menu"
    return { default: mod.default || mod[exportName] }
  }),
  "hover-card": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/hover-card")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "hover-card"
    return { default: mod.default || mod[exportName] }
  }),
  "input-group": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/input-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-group"
    return { default: mod.default || mod[exportName] }
  }),
  "input-otp": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/input-otp")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-otp"
    return { default: mod.default || mod[exportName] }
  }),
  "navigation-menu": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/navigation-menu")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "navigation-menu"
    return { default: mod.default || mod[exportName] }
  }),
  "radio-group": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/radio-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "radio-group"
    return { default: mod.default || mod[exportName] }
  }),
  "scroll-area": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/scroll-area")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "scroll-area"
    return { default: mod.default || mod[exportName] }
  }),
  "toggle-group": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/toggle-group")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "toggle-group"
    return { default: mod.default || mod[exportName] }
  }),
  "native-select": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/native-select")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "native-select"
    return { default: mod.default || mod[exportName] }
  }),
  "message-scroller": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/message-scroller")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "message-scroller"
    return { default: mod.default || mod[exportName] }
  }),
  "code-block": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/ui/code-block")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "code-block"
    return { default: mod.default || mod[exportName] }
  }),
  "accordion-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/accordion-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "accordion-example"
    return { default: mod.default || mod[exportName] }
  }),
  "alert-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/alert-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "alert-example"
    return { default: mod.default || mod[exportName] }
  }),
  "alert-dialog-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/alert-dialog-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "alert-dialog-example"
    return { default: mod.default || mod[exportName] }
  }),
  "aspect-ratio-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/aspect-ratio-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "aspect-ratio-example"
    return { default: mod.default || mod[exportName] }
  }),
  "avatar-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/avatar-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "avatar-example"
    return { default: mod.default || mod[exportName] }
  }),
  "badge-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/badge-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "badge-example"
    return { default: mod.default || mod[exportName] }
  }),
  "breadcrumb-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/breadcrumb-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "breadcrumb-example"
    return { default: mod.default || mod[exportName] }
  }),
  "button-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/button-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "button-example"
    return { default: mod.default || mod[exportName] }
  }),
  "button-group-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/button-group-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "button-group-example"
    return { default: mod.default || mod[exportName] }
  }),
  "calendar-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/calendar-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "calendar-example"
    return { default: mod.default || mod[exportName] }
  }),
  "card-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/card-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "card-example"
    return { default: mod.default || mod[exportName] }
  }),
  "carousel-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/carousel-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "carousel-example"
    return { default: mod.default || mod[exportName] }
  }),
  "chart-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/chart-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "chart-example"
    return { default: mod.default || mod[exportName] }
  }),
  "checkbox-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/checkbox-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "checkbox-example"
    return { default: mod.default || mod[exportName] }
  }),
  "collapsible-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/collapsible-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "collapsible-example"
    return { default: mod.default || mod[exportName] }
  }),
  "combobox-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/combobox-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "combobox-example"
    return { default: mod.default || mod[exportName] }
  }),
  "command-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/command-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "command-example"
    return { default: mod.default || mod[exportName] }
  }),
  "context-menu-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/context-menu-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "context-menu-example"
    return { default: mod.default || mod[exportName] }
  }),
  "dialog-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/dialog-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "dialog-example"
    return { default: mod.default || mod[exportName] }
  }),
  "drawer-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/drawer-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "drawer-example"
    return { default: mod.default || mod[exportName] }
  }),
  "dropdown-menu-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/dropdown-menu-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "dropdown-menu-example"
    return { default: mod.default || mod[exportName] }
  }),
  "empty-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/empty-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "empty-example"
    return { default: mod.default || mod[exportName] }
  }),
  "field-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/field-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "field-example"
    return { default: mod.default || mod[exportName] }
  }),
  "hover-card-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/hover-card-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "hover-card-example"
    return { default: mod.default || mod[exportName] }
  }),
  "input-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/input-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-example"
    return { default: mod.default || mod[exportName] }
  }),
  "input-group-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/input-group-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-group-example"
    return { default: mod.default || mod[exportName] }
  }),
  "input-otp-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/input-otp-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "input-otp-example"
    return { default: mod.default || mod[exportName] }
  }),
  "item-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/item-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "item-example"
    return { default: mod.default || mod[exportName] }
  }),
  "kbd-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/kbd-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "kbd-example"
    return { default: mod.default || mod[exportName] }
  }),
  "label-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/label-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "label-example"
    return { default: mod.default || mod[exportName] }
  }),
  "menubar-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/menubar-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "menubar-example"
    return { default: mod.default || mod[exportName] }
  }),
  "native-select-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/native-select-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "native-select-example"
    return { default: mod.default || mod[exportName] }
  }),
  "navigation-menu-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/navigation-menu-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "navigation-menu-example"
    return { default: mod.default || mod[exportName] }
  }),
  "pagination-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/pagination-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "pagination-example"
    return { default: mod.default || mod[exportName] }
  }),
  "popover-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/popover-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "popover-example"
    return { default: mod.default || mod[exportName] }
  }),
  "progress-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/progress-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "progress-example"
    return { default: mod.default || mod[exportName] }
  }),
  "radio-group-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/radio-group-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "radio-group-example"
    return { default: mod.default || mod[exportName] }
  }),
  "resizable-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/resizable-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "resizable-example"
    return { default: mod.default || mod[exportName] }
  }),
  "scroll-area-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/scroll-area-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "scroll-area-example"
    return { default: mod.default || mod[exportName] }
  }),
  "select-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/select-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "select-example"
    return { default: mod.default || mod[exportName] }
  }),
  "separator-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/separator-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "separator-example"
    return { default: mod.default || mod[exportName] }
  }),
  "sheet-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/sheet-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sheet-example"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/sidebar-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-example"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-icon-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/sidebar-icon-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-icon-example"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-inset-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/sidebar-inset-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-inset-example"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-floating-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/sidebar-floating-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-floating-example"
    return { default: mod.default || mod[exportName] }
  }),
  "skeleton-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/skeleton-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "skeleton-example"
    return { default: mod.default || mod[exportName] }
  }),
  "slider-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/slider-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "slider-example"
    return { default: mod.default || mod[exportName] }
  }),
  "sonner-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/sonner-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sonner-example"
    return { default: mod.default || mod[exportName] }
  }),
  "spinner-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/spinner-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "spinner-example"
    return { default: mod.default || mod[exportName] }
  }),
  "switch-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/switch-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "switch-example"
    return { default: mod.default || mod[exportName] }
  }),
  "table-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/table-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "table-example"
    return { default: mod.default || mod[exportName] }
  }),
  "tabs-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/tabs-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "tabs-example"
    return { default: mod.default || mod[exportName] }
  }),
  "textarea-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/textarea-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "textarea-example"
    return { default: mod.default || mod[exportName] }
  }),
  "toggle-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/toggle-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "toggle-example"
    return { default: mod.default || mod[exportName] }
  }),
  "toggle-group-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/toggle-group-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "toggle-group-example"
    return { default: mod.default || mod[exportName] }
  }),
  "tooltip-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/tooltip-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "tooltip-example"
    return { default: mod.default || mod[exportName] }
  }),
  "component-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/component-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "component-example"
    return { default: mod.default || mod[exportName] }
  }),
  "attachment-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/attachment-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "attachment-example"
    return { default: mod.default || mod[exportName] }
  }),
  "bubble-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/bubble-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "bubble-example"
    return { default: mod.default || mod[exportName] }
  }),
  "questionnaire-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/questionnaire-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "questionnaire-example"
    return { default: mod.default || mod[exportName] }
  }),
  "marker-example": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/examples/marker-example")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "marker-example"
    return { default: mod.default || mod[exportName] }
  }),
  "code-block-example": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/examples/code-block-example"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "code-block-example"
    return { default: mod.default || mod[exportName] }
  }),
  "preview-02": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/preview-02/index")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "preview-02"
    return { default: mod.default || mod[exportName] }
  }),
  "login-01": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/login-01/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "login-01"
    return { default: mod.default || mod[exportName] }
  }),
  "login-02": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/login-02/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "login-02"
    return { default: mod.default || mod[exportName] }
  }),
  "login-03": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/login-03/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "login-03"
    return { default: mod.default || mod[exportName] }
  }),
  "login-04": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/login-04/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "login-04"
    return { default: mod.default || mod[exportName] }
  }),
  "login-05": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/login-05/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "login-05"
    return { default: mod.default || mod[exportName] }
  }),
  "signup-01": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/signup-01/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "signup-01"
    return { default: mod.default || mod[exportName] }
  }),
  "signup-02": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/signup-02/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "signup-02"
    return { default: mod.default || mod[exportName] }
  }),
  "signup-03": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/signup-03/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "signup-03"
    return { default: mod.default || mod[exportName] }
  }),
  "signup-04": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/signup-04/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "signup-04"
    return { default: mod.default || mod[exportName] }
  }),
  "signup-05": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/signup-05/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "signup-05"
    return { default: mod.default || mod[exportName] }
  }),
  "dashboard-01": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/dashboard-01/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "dashboard-01"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-01": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-01/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-01"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-02": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-02/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-02"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-03": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-03/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-03"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-04": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-04/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-04"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-05": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-05/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-05"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-06": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-06/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-06"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-07": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-07/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-07"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-08": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-08/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-08"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-09": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-09/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-09"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-10": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-10/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-10"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-11": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-11/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-11"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-12": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-12/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-12"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-13": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-13/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-13"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-14": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-14/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-14"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-15": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-15/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-15"
    return { default: mod.default || mod[exportName] }
  }),
  "sidebar-16": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/blocks/sidebar-16/page")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "sidebar-16"
    return { default: mod.default || mod[exportName] }
  }),
  "use-mobile": React.lazy(async () => {
    const mod = await import("@/registry/bases/radix/hooks/use-mobile")
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "use-mobile"
    return { default: mod.default || mod[exportName] }
  }),
  "use-highlighted-code": React.lazy(async () => {
    const mod = await import(
      "@/registry/bases/radix/hooks/use-highlighted-code"
    )
    const exportName =
      Object.keys(mod).find(
        (key) => typeof mod[key] === "function" || typeof mod[key] === "object"
      ) || "use-highlighted-code"
    return { default: mod.default || mod[exportName] }
  }),
}
