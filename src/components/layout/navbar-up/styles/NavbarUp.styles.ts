import { colors, semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const navbarUpStyles: Record<string, SxProps<Theme>> = {
  root: {
    width: "100%",
    minWidth: 0,
    flexShrink: 0,
    // bgcolor: "#FFFFFF",
    bgcolor:semanticColors.background.default,
    color:semanticColors.text.primary,
    // color: "#09090B",
    boxSizing: "border-box",
    direction: "rtl",
  },

  innerHeader: {
    width: "100%",
    minHeight: 56,
    // px: 2,
    py: 1,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  pageTitle: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
  },

  backButton: {
    position: "absolute",
    right: 1,
    top: "50%",
    transform: "translateY(-50%)",

    width: 21.5,
    height: 21.5,
    minWidth: 21.5,

    // border: "1px solid #18181B",
    border:`1px solid ${semanticColors.text.primary}`,
    borderRadius: "50%",

    bgcolor: "transparent",
    // color: "#18181B",
    color:semanticColors.text.primary,

    p: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",

    "&:hover": {
      bgColor:semanticColors.background.default,
      // bgcolor: "#FFFFFF",
    },

    "&:active": {
      // bgcolor: "#E4E4E7",
       bgcolor: colors.neutral[100],
    },

    "& svg": {
      fontSize: 14,
      transform: "rotate(180deg)",
    },
  },
};
