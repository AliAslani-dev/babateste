
"use client";

import { Box, Typography } from "@mui/material";

import {
  regularTitleRowStyles,
  regularTitleStyles,
} from "../RegularCourseCard.styles";

import { SaveButton } from "@/components/ui/SaveButton";
import { semanticColors } from "@/theme";

interface Props {
  title: string;
  isSaved?: boolean;
  onBookmarkClick?: () => void;
}

export const RegularCourseCardTitle = ({
  title,
  isSaved = false,
  onBookmarkClick,
}: Props) => {
  return (
    <Box sx={regularTitleRowStyles}>
      <Typography variant="boldSm" sx={regularTitleStyles}>
        {title}
      </Typography>

      <Box
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <SaveButton
          isSaved={isSaved}
          onSave={onBookmarkClick}
          color={semanticColors.background.primary}
          savedColor={semanticColors.background.primary}
        />
      </Box>
    </Box>
  );
};
