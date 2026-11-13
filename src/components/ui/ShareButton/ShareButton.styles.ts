import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const shareButtonStyles: Record<string, SxProps<Theme>> = {
  button: {
    width: 32,
    height: 32,
    p: 0,
    color: semanticColors.text.primary,
    "&:hover": {
      bgcolor: semanticColors.background.secondary,
    },
  },
};