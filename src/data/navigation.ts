export const mainNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/apps", label: "Apps" },
  { to: "/extensions", label: "Extensions" },
  { to: "/websites", label: "Websites" },
  { to: "/youtube", label: "YouTube" },
  { to: "/instagram", label: "Instagram" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerNav = [...mainNav.slice(1), { to: "/github", label: "GitHub" }] as const;
