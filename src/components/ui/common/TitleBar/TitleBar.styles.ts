import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const titleBarStyles: Record<string, SxProps<Theme>> = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 2,
    mb: 1.5,
  },

  title: {
    minWidth: 0,
    flex: 1,
    mr:0.5
  },

  action: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 0.5,
    flexShrink: 0,
    border: 0,
    p: 0,
    ml:-0.5,
    background: "transparent",
    color: semanticColors.text.primary,
    cursor: "pointer",
  },

  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      display: "block",
    },
  },
};
