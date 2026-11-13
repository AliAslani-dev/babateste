import type { SxProps, Theme } from "@mui/material";

export const FavoriteItemCardStyles: SxProps<Theme> = {
  width: "100%",
  height: 78,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "4px",
  padding: "8px",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "16px",
  backgroundColor: "background.paper",
  direction: "rtl",
  cursor: "pointer",
};

export const FavoriteItemCardImageStyles: SxProps<Theme> = {
  position: "relative",
  width: 58,
  height: 58,
  minWidth: 58,
  flexShrink: 0,
  overflow: "hidden",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "16px",
  boxSizing: "border-box",
};

export const FavoriteItemCardContentStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "4px",
  overflow: "hidden",
};

export const FavoriteItemCardTitleStyles: SxProps<Theme> = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const FavoriteItemCardSubtitleStyles: SxProps<Theme> = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const FavoriteItemCardSaveStyles: SxProps<Theme> = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};