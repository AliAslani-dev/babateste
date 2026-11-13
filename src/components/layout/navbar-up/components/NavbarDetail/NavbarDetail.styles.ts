import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const navbarDetailStyles: Record<string, SxProps<Theme>> = {
  root: {
    width: "100%",
    minWidth: 0,
    minHeight: 56,
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    direction: "rtl",

    py: 1,
    bgcolor: semanticColors.background.default,
    color: semanticColors.text.primary,
  },

  backButton: {
    position: "absolute",

    "& svg": {
      fontSize: 16,
      transform: "rotate(180deg)",
    },
  },

  title: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: "50%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: semanticColors.text.primary,
  },

  actions: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    gap: 1,
  },

  actionButton: {
    width: 32,
    height: 32,
    p: 0,
    color: semanticColors.text.primary,
    "&:hover": {
      bgcolor: semanticColors.background.secondary,
    },
  },
};
