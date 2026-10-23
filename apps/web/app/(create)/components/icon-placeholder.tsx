import * as LucideIcons from "lucide-react"

export function IconPlaceholder({
  lucide,
  className,
  ...props
}: {
  lucide?: string
  className?: string
  [key: string]: any
}) {
  const Icon =
    (lucide && (LucideIcons as any)[lucide]) || LucideIcons.SquareIcon
  return <Icon className={className} {...props} />
}
