
import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const passengerCounterStyles = {
  root: {
    width: "100%",
  } satisfies SxProps<Theme>,

  title: {
    mb: 1,
    textAlign: "center",
  } satisfies SxProps<Theme>,

  counterRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    direction: "rtl",
    width: "100%",
  } satisfies SxProps<Theme>,

  actionButton: {
    width: 24,
    height: 24,
    minWidth: 24,
    p: "6px",
    borderRadius: "999px",
    flexShrink: 0,

    "&:hover": {
      backgroundColor: semanticColors.background.primary,
    },

    "&:focus, &.Mui-focusVisible, &:active": {
      backgroundColor: semanticColors.background.primary,
    },

    "&.Mui-disabled": {
      opacity: 0.4,
    },
  } satisfies SxProps<Theme>,

  countBox: {
    width: "100%",
    height: 40,
    boxSizing: "border-box",
    border: "1px solid",
    borderColor: semanticColors.border.default,
    borderRadius: "16px",
    p: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    flexShrink: 1,
  } satisfies SxProps<Theme>,

  icon: {
    fontSize: 16,
  } satisfies SxProps<Theme>,
};
