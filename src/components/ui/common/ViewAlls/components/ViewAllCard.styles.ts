import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

export const ViewAllStyles: SxProps<Theme> = {
  width: "100%",
  height: "64px",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "8px 16px",
  backgroundColor: " #DBEAFE",
  border: `2px solid var(--border-default, ${semanticColors.border.default})`,
  borderRadius: "16px",
  cursor: "pointer",
  textAlign: "right",
  marginTop:"16px"
};

export const ViewAllLayersIconStyles: SxProps<Theme> = {
  width: "36px",
  height: "36px",
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const ViewAllContentStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "4px",
};

export const ViewAllTitleStyles: SxProps<Theme> = {
  width: "100%",
  margin: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: semanticColors.text.primary,
};

export const ViewAllSubtitleStyles: SxProps<Theme> = {
  width: "100%",
  margin: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: semanticColors.text.secondary,
};

export const ViewAllChevronStyles: SxProps<Theme> = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: semanticColors.text.primary,
};
