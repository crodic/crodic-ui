export const siteConfig = {
  name: "Crodic UI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/og.jpg`,
  description:
    "Composable, accessible components with thoughtful defaults. Build your own component library with code you can customize, extend, and make your own.",
  links: {
    twitter: "https://twitter.com/crodic_ui",
    github: "https://github.com/crodic-ui",
  },
  navItems: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/docs/installation",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/charts/area",
      label: "Charts",
    },
    {
      href: "/docs/directory",
      label: "Directory",
    },
    {
      href: "/typeset",
      label: "Typeset",
    },
    {
      href: "/create",
      label: "Create",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
