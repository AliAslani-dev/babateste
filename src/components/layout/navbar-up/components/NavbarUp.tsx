"use client";

import { usePathname } from "next/navigation";

import { Box, Typography } from "@mui/material";

import { bottomNavbarItems } from "@/lib/constants/bottom-navbar/bottomNavbar.data";

import NavbarHomeHeader from "./NavbarHomeHeader";
import NavbarWelcome from "./NavbarWelcome";

import { navbarUpStyles } from "../styles/NavbarUp.styles";
import { navbarHomeStyles } from "../styles/NavbarHome.styles";

import { useBackNavigation } from "@/features/auth/hooks/useBackNavigation";
import { ArrowBackRoundedIcon } from "@/components/ui/icons";
import { getRouteTitle } from "@/lib/constants/navbar-up/navbarUp.utils";

export default function NavbarUp() {
  const pathname = usePathname();
  const { goBack } = useBackNavigation("/home");

  const isHomePage = pathname === "/home" || pathname === "/";

  const isBottomNavbarRoute = bottomNavbarItems.some(
    (item) => pathname === item.href,
  );

  // Home باید NavbarUp خودش را داشته باشد.
  // سایر routeهای BottomNavbar نباید NavbarUp داشته باشند.
  if (!isHomePage && isBottomNavbarRoute) {
    return null;
  }

  const pageTitle = getRouteTitle(pathname);

  return (
    <Box component="header" sx={navbarUpStyles.root}>
      {isHomePage ? (
        <Box sx={navbarHomeStyles.root}>
          <NavbarHomeHeader />
          <NavbarWelcome />
        </Box>
      ) : (
        <Box sx={navbarUpStyles.innerHeader}>
          <Typography sx={navbarUpStyles.pageTitle} variant="demiboldBase">
            {pageTitle}
          </Typography>

          <Box
            component="button"
            type="button"
            aria-label="بازگشت"
            onClick={goBack}
            sx={navbarUpStyles.backButton}
          >
            <ArrowBackRoundedIcon />
          </Box>
        </Box>
      )}
    </Box>
  );
}
