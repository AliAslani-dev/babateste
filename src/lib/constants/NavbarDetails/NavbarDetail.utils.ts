import { navbarDetailRoutes } from "./NavbarDetails.data";

export function getNavbarDetailTitle(pathname: string): string | null {
  const matchedRoute = Object.keys(navbarDetailRoutes)
    .filter(
      (route) =>
        pathname.startsWith(`${route}/`) &&
        pathname.slice(route.length + 1).length > 0 &&
        !pathname.slice(route.length + 1).includes("/"),
    )
    .sort((a, b) => b.length - a.length)[0];

  return matchedRoute ? navbarDetailRoutes[matchedRoute] : null;
}