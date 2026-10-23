export const siteConfig = {
  name: "Crodic UI",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://crodic.dev",
  ogImage: "https://crodic.dev/og.jpg",
  description:
    "Modern UI Component Library & Public Registry Platform inspired by shadcn/ui and DiceUI.",
  links: {
    github: "https://github.com/phat-nguyen-dev/crodic-ui",
  },
  navItems: [
    {
      href: "/docs",
      label: "Documentation",
    },
    {
      href: "/docs/base-ui/button",
      label: "Components",
    },
    {
      href: "/docs/components/bento-grid",
      label: "Blocks",
    },
  ],
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
