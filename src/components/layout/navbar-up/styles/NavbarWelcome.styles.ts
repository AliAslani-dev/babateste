import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const navbarWelcomeStyles: Record<string, SxProps<Theme>> = {
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 0.5,
    whiteSpace: "nowrap",
    px: 1,
    // backgroundColor: "#FFFFFF",
    backgroundColor: semanticColors.background.default,
  },

  text: {
    // color: "#757575",
    color: semanticColors.text.secondary,
  },
};
