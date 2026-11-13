import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const featuredTourCardStyles: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",

  borderRadius: "16px",
  border: `1px solid var(--border-brand-subtle, ${semanticColors.border.default})`,
  background: semanticColors.background.default,

  overflow: "hidden",
  position: "relative",

  cursor: "pointer",
  transition: "box-shadow 0.2s ease, transform 0.2s ease",


};

/* ===== Image ===== */
export const featuredTourCardImageWrapperStyles: SxProps<Theme> = {
  width: "100%",
  height: 140,
  position: "relative",
  flexShrink: 0,
};

export const featuredTourCardBadgeStyles: SxProps<Theme> = {
  position: "absolute",
  top: 12,
  right: 12,
  padding: "4px 12px",
  borderRadius: "999px",
  background: semanticColors.background.default,
  color: semanticColors.text.primary,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1.6,

  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  zIndex: 2,
};

/* ===== Content ===== */
export const featuredTourCardContentStyles: SxProps<Theme> = {
  width: "100%",
  padding: "12px 16px 16px",

  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

/* ===== Title row (title + bookmark) ===== */
export const featuredTourCardTitleRowStyles: SxProps<Theme> = {
  width: "100%",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "8px",
};

export const featuredTourCardTitleStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,

  color: semanticColors.text.primary,
  textAlign: "right",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const featuredTourCardBookmarkStyles: SxProps<Theme> = {
  width: 28,
  height: 28,
  flexShrink: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "8px",
  background: "transparent",
  border: "none",

  cursor: "pointer",
  color: semanticColors.icon.primary,

  transition: "background 0.15s ease",

  "&:hover": {
    background: semanticColors.background.secondary ?? "rgba(0,0,0,0.04)",
  },
};

/* ===== Divider زیر تایتل ===== */
export const featuredTourCardDividerStyles: SxProps<Theme> = {
  width: "100%",
  height: 0,
  flexShrink: 0,

  border: 0,
  borderTop: `1px solid var(--border-default, ${semanticColors.border.default})`,

  margin: 0,
};

/* ===== Info row (date/remaining + price) ===== */
export const featuredTourCardInfoRowStyles: SxProps<Theme> = {
  width: "100%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",

  gap: "8px",
};

export const featuredTourCardInfoColumnStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  minWidth: 0,
};

export const featuredTourCardInfoItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "6px",

  color: semanticColors.text.secondary,
  whiteSpace: "nowrap",
};

export const featuredTourCardPriceStyles: SxProps<Theme> = {
  color: semanticColors.text.primary,
  whiteSpace: "nowrap",
  textAlign: "left",
};