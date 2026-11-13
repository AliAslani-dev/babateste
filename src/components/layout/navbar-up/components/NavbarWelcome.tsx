"use client";

import { Box, Typography } from "@mui/material";
import { useMe } from "@/features/auth";
import { navbarWelcomeStyles } from "../styles/NavbarWelcome.styles";

export default function NavbarWelcome() {
  const { data: profile } = useMe();

  return (
    <Box sx={navbarWelcomeStyles.root}>
      <Typography variant="demiboldSm">
        سلام {profile?.name ? `${profile.name} عزیز` : "عزیز"} 👋
      </Typography>

      <Typography variant="light2xs" sx={navbarWelcomeStyles.text}>
        خوش آمدید
      </Typography>
    </Box>
  );
}
