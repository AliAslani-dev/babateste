import type { SxProps, Theme } from "@mui/material";

/* ============================================================
 * Page Wrapper
 * ============================================================ */

/* ============================================================
 * Tours List (هر کارت یه ردیف)
 * ============================================================ */
export const toursListWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginTop: 3,
};

/* ============================================================
 * Empty State
 * ============================================================ */
export const toursListEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  paddingY: 6,
};