/**
 * Intended information architecture. Pages are built one at a time; any
 * route not yet implemented lands on the brand-styled not-found page.
 */
export const routes = {
  home: "/",
  archive: "/archive",
  membership: "/membership",
  salon: "/salon",
  findTheDoor: "/salon#find-the-door",
  signIn: "/sign-in",
  apply: "/apply",
  visit: "/visit",
} as const;

export const navLinks = [
  { href: routes.archive, label: "The Archive" },
  { href: routes.membership, label: "Membership" },
  { href: routes.salon, label: "The Salon" },
] as const;
