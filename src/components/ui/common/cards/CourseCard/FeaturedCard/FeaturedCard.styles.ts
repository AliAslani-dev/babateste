import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

/* ============================================================
 * Card
 * ============================================================ */
export const cardStyles: SxProps<Theme> = {
  width: "100%",
  borderRadius: "20px",
  border: `2px solid ${semanticColors.border.default}`,
  boxShadow: "none",
  overflow: "hidden",
  bgcolor: semanticColors.background.default,
};

/* ============================================================
 * Image
 * ============================================================ */
export const imageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: "calc(100% - 48px)",
  height: "145px",
  mx: "24px",
  mt: "14px",
  borderRadius: "20px",
  overflow: "hidden",
};

/* ============================================================
 * Title
 * ============================================================ */
export const titleWrapperStyles: SxProps<Theme> = {
  width: "100%",
  px: 3,
};

export const titleStyles: SxProps<Theme> = {
  mt: 1.5,
  mb: 1.5,
  width: "100%",
  textAlign: "center",
  display: "block",
};

/* ============================================================
 * Divider
 * ============================================================ */
export const dividerStyles: SxProps<Theme> = {
  mx: 3,
  mt: 1.5,
  borderColor: semanticColors.border.default,
};

/* ============================================================
 * Content
 * ============================================================ */
export const contentStyles: SxProps<Theme> = {
  px: 3,
  pt: 1.5,
  pb: 2,
  direction: "rtl",
  textAlign: "justify",
  textAlignLast: "right",
};

/* ============================================================
 * Stats
 * ============================================================ */
export const statsRowStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1,
  direction: "rtl",
};

export const statItemStyles: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  color: semanticColors.text.secondary,
};

export const statTextStyles: SxProps<Theme> = {
  color: semanticColors.text.secondary,
  whiteSpace: "nowrap",
};

/* ============================================================
 * Description
 * ============================================================ */
export const descriptionStyles: SxProps<Theme> = {
  width: "100%",
  mt: 1.5,
  direction: "rtl",
  textAlign: "justify",
  textAlignLast: "right",
  lineHeight: 2.2,
  wordBreak: "break-word",
  overflowWrap: "anywhere",
  color: semanticColors.text.secondary,
  // Make nested HTML (<p>, <div>, <span>) follow the same RTL rules
  "& p, & div, & span": {
    direction: "rtl",
    textAlign: "justify",
    textAlignLast: "right",
    margin: 0,
  },
  "& p + p": {
    marginTop: "8px",
  },
};

/* ============================================================
 * Action
 * ============================================================ */
export const actionWrapperStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  mt: 1.5,
};