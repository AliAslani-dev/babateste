
import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const smartReminderStyles: SxProps<Theme> = {
  width:"100%",
  minHeight: "110px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "16px",
  padding: "16px",

  backgroundColor: semanticColors.background.default,
border: `1px solid var(--border-default, ${semanticColors.border.default}) `,
 borderRadius: "16px",

  direction: "rtl",
};

export const smartReminderIconStyles: SxProps<Theme> = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const smartReminderContentStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export const smartReminderTitleStyles: SxProps<Theme> = {
  margin: 0,
};

export const smartReminderDescriptionStyles: SxProps<Theme> = {
  margin: 0,
  whiteSpace: "pre-line",
  overflowWrap: "anywhere",
};
