import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const SummaryStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const SummaryItemsStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

export const SummaryRowStyles: SxProps<Theme> = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: "8px",
  direction: "rtl",
};

export const SummaryIconStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  color: semanticColors.text.secondary,

  "& svg": {
    width: 20,
    height: 20,
    color: "inherit",
  },
};

export const SummaryTextStyles: SxProps<Theme> = {
  minWidth: 0,
  color: semanticColors.text.secondary,
  textAlign: "right",
  direction: "rtl",
};


export const RequestButtonStyles: SxProps<Theme> = {

  height: 40,






};

