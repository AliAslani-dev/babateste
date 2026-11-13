import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

/* ============================================================
 * Card — افقی (عکس راست، محتوا چپ)
 * ============================================================ */
export const regularCardStyles: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "row",
  gap: "7px",

  padding: "12px",

  borderRadius: "16px",
  border: "2px solid #E4E4E7",
  background: "#fff",

  overflow: "hidden",
  cursor: "pointer",
  transition: "box-shadow 0.2s ease, transform 0.2s ease",
};

/* ============================================================
 * Image — سمت راست
 * ============================================================ */
export const regularImageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: 120,
  height: 100,
  flexShrink: 0,

  borderRadius: "16px",
  overflow: "hidden",
};

/* ============================================================
 * Content — سمت چپ
 * ============================================================ */
export const regularContentStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,

  display: "flex",
  flexDirection: "column",
  gap: "6px",
};

/* ── Title Row (title + bookmark) ── */
export const regularTitleRowStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "8px",
};

export const regularTitleStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,

  color: "#09090B",
  fontWeight: 700,
  textAlign: "right",

  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  lineHeight: 1.6,
};

export const regularBookmarkStyles: SxProps<Theme> = {
  width: 22,
  height: 22,
  flexShrink: 0,

  color: "#0092B8",
  cursor: "pointer",
  marginTop: "2px",

  transition: "transform 0.15s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },
};

/* ── Description ── */
export const regularDescriptionStyles: SxProps<Theme> = {
  color: "#757575",
  fontSize: 12,
  textAlign: "right",
  lineHeight: 1.8,

  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

/* ── Divider ── */
export const regularDividerStyles: SxProps<Theme> = {
  width: "100%",
  height: 0,
  flexShrink: 0,

  border: 0,
  borderTop: "1px solid #E4E4E7",
  margin: "4px 0",
};

/* ── Stats Row ── */
export const regularStatsRowStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  // gap: "3px",
  direction: "rtl",
};

export const regularStatItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: "#757575",
};

export const regularStatTextStyles: SxProps<Theme> = {
  fontSize: 11,
  color: "#757575",
  whiteSpace: "nowrap",
};
