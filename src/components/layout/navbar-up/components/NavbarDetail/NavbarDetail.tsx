
"use client";

import { Box, Typography } from "@mui/material";

import { useBackNavigation } from "@/features/auth/hooks/useBackNavigation";
import { navbarDetailStyles } from "./NavbarDetail.styles";
import { SaveButton } from "@/components/ui/SaveButton";
import { ShareButton } from "@/components/ui/ShareButton";
import { semanticColors } from "@/theme";
import { IconButton } from "@/components/ui/Button";
import { ArrowBackRoundedIcon } from "@/components/ui/icons";
import { useNavbarDetail } from "./NavbarDetailContext";

interface NavbarDetailProps {
  title?: string;
  hideActions?: boolean;
}

export default function NavbarDetail({
  title,
  hideActions = false,
}: NavbarDetailProps) {
  const { goBack } = useBackNavigation("/home");
  const { isSaved, onSave } = useNavbarDetail();

  return (
    <Box component="header" sx={navbarDetailStyles.root}>
      <IconButton
        aria-label="بازگشت"
        onClick={goBack}
        sx={navbarDetailStyles.backButton}
        shape="circle"
        size="sm"
      >
        <ArrowBackRoundedIcon />
      </IconButton>

      {title && (
        <Typography variant="mediumSm">
          {title}
        </Typography>
      )}

      {!hideActions && (
        <Box sx={navbarDetailStyles.actions}>
          <SaveButton
            isSaved={isSaved}
            savedColor={semanticColors.action.primary}
            onSave={onSave}
          />

          <ShareButton title={title ?? ""} />
        </Box>
      )}
    </Box>
  );
}
