import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const sidebarWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1.5,
  p: 2,
  borderRadius: "20px",
  bgcolor: semanticColors.background.secondary,
  border: "1px solid",
  borderColor: "divider",
  maxHeight: { lg: "calc(100vh - 120px)" },
};

export const sidebarHeaderStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
  pb: 1,
  borderBottom: "1px solid",
  borderColor: "divider",
};

export const sidebarTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  textAlign: "right",
};

export const sidebarCountStyles: SxProps<Theme> = {
  px: 1,
  py: 0.25,
  borderRadius: "999px",
  bgcolor: semanticColors.background.default,
  color: semanticColors.text.secondary,
  typography: "mediumXs",
};

export const sidebarListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  overflowY: "auto",
  pr: 0.5,
  "&::-webkit-scrollbar": { width: 6 },
  "&::-webkit-scrollbar-thumb": {
    bgcolor: "rgba(0,0,0,0.15)",
    borderRadius: "999px",
  },
};

export const sidebarItemStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 1.5,
  px: 1.5,
  py: 1.25,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "14px",
  bgcolor: semanticColors.background.default,
  cursor: "pointer",
  textAlign: "right",
  transition: "all 160ms ease",
  "&:hover": {
    borderColor: semanticColors.action.primary,
  },
};

export const sidebarItemActiveStyles: SxProps<Theme> = {
  bgcolor: semanticColors.action.primary,
  borderColor: semanticColors.action.primary,
  "& *": { color: "#fff" },
  "&:hover": { borderColor: semanticColors.action.primary },
};

export const sidebarIndexStyles = (active: boolean): SxProps<Theme> => ({
  flexShrink: 0,
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  typography: "boldSm",
  bgcolor: active
    ? "rgba(255,255,255,0.18)"
    : semanticColors.background.secondary,
  color: active ? "#fff" : semanticColors.text.secondary,
});

export const sidebarItemContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 0.25,
  minWidth: 0,
  flex: 1,
};

export const sidebarItemTitleStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const sidebarItemMetaStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  typography: "mediumXs",
};

export const sidebarPlayIconStyles: SxProps<Theme> = {
  flexShrink: 0,
  fontSize: 18,
  opacity: 0.9,
};