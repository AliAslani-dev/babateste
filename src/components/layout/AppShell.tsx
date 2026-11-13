"use client";

import type { ReactNode } from "react";

import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

import { BOTTOM_NAV_HEIGHT } from "./bottom-navbar/BottomNavbar.styles";
import { bottomNavbarItems } from "@/lib/constants/bottom-navbar/bottomNavbar.data";
import InstallPrompt from "../pwa/InstallPrompt";
import { semanticColors } from "@/theme";
import { NavbarDetailProvider } from "./navbar-up/components/NavbarDetail/NavbarDetailContext";

interface AppShellProps {
  children: ReactNode;
  navbar?: ReactNode;
  bottomNavbar?: ReactNode;
  hasBottomNavbar?: boolean;
  contentPadding?: number;
  contentBottomPadding?: string;
}

export default function AppShell({
  children,
  navbar,
  bottomNavbar,
  hasBottomNavbar = false,
  contentPadding = 2,
  contentBottomPadding,
}: AppShellProps) {
  const pathname = usePathname();
  const showBottomNavbar =
    hasBottomNavbar && bottomNavbarItems.some((item) => pathname === item.href);

  return (
    <NavbarDetailProvider>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100dvh",
          display: "flex",
          justifyContent: "center",
          bgcolor: semanticColors.background.secondary,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "var(--app-max-width)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: semanticColors.background.default,
            overflow: "hidden",
          }}
        >
          {/* HEADER */}
          {navbar && (
            <Box sx={{ width: "100%", flexShrink: 0, px: 2 }}>
              {navbar}
            </Box>
          )}

          {/* PAGE CONTENT */}
          <Box
            component="main"
            className="app-scroll"
            sx={{
              flex: "1 1 auto",
              minHeight: 0,
              minWidth: 0,
              width: "100%",
              overflowY: "auto",
              overflowX: "hidden",
              WebkitOverflowScrolling: "touch",
              bgcolor: semanticColors.background.default,
              px: contentPadding,
              pb:
                contentBottomPadding ??
                (showBottomNavbar
                  ? `calc(${BOTTOM_NAV_HEIGHT}px + var(--safe-bottom) + 20px)`
                  : "calc(var(--safe-bottom) + 20px)"),
              boxSizing: "border-box",
            }}
          >
            {children}
          </Box>

          {/* BOTTOM NAV */}
          {bottomNavbar}

          <InstallPrompt />
        </Box>
      </Box>
    </NavbarDetailProvider>
  );
}
