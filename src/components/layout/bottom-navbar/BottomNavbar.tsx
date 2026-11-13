"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Box, Stack, Typography } from "@mui/material";

import { bottomNavbarStyles } from "./BottomNavbar.styles";
import { bottomNavbarItems } from "@/lib/constants/bottom-navbar/bottomNavbar.data";

export default function BottomNavbar() {
  const pathname = usePathname();

  const shouldShowBottomNavbar = bottomNavbarItems.some(
    (item) => pathname === item.href,
  );

  if (!shouldShowBottomNavbar) {
    return null;
  }

  return (
    <Box component="nav" sx={bottomNavbarStyles.root}>
      <Stack direction="row" sx={bottomNavbarStyles.list}>
        {bottomNavbarItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Box
              key={item.href}
              component={Link}
              href={item.href}
              aria-label={item.title}
              aria-current={isActive ? "page" : undefined}
              sx={{
                ...bottomNavbarStyles.item,
                ...(isActive && bottomNavbarStyles.itemActive),
              }}
            >
              <Icon />

              <Typography
                component="span"
                variant="demiboldXs"
                sx={bottomNavbarStyles.title}
              >
                {item.title}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}