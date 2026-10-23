import { BASES } from "@/registry/bases"

export async function formatCode(code: string, styleName: string) {
  code = code.replaceAll(`@/registry/${styleName}/`, "@/components/")

  // Always rewrite the legacy tree so src-based sources render clean imports
  // regardless of the styleName in play.
  code = code.replaceAll("@/registry/new-york-v4/", "@/components/")

  for (const base of BASES) {
    code = code.replaceAll(`@/registry/bases/${base.name}/hooks/`, "@/hooks/")
    code = code.replaceAll(`@/registry/bases/${base.name}/lib/`, "@/lib/")
    code = code.replaceAll(`@/registry/bases/${base.name}/`, "@/components/")
    code = code.replaceAll(
      `@/examples/${base.name}/ui-rtl/`,
      "@/components/ui/"
    )
    code = code.replaceAll(`@/examples/${base.name}/ui/`, "@/components/ui/")
    code = code.replaceAll(`@/examples/${base.name}/lib/`, "@/lib/")
    code = code.replaceAll(`@/examples/${base.name}/hooks/`, "@/hooks/")
  }

  code = code.replace(
    /@\/styles\/([\w-]+)\/(ui-rtl|ui)\/([\w-]+)/g,
    (match, _styleName, type, component) => {
      if (type === "ui" || type === "ui-rtl") {
        return `@/components/ui/${component}`
      }

      return match
    }
  )

  code = code.replaceAll("export default", "export")

  return code
}
