import type { SxProps, Theme } from "@mui/material";

/* ============================================================
 * Page Wrapper
 * ============================================================ */

/* ============================================================
 * events List (هر کارت یه ردیف)
 * ============================================================ */
export const eventsListWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginTop: 3,
};

/* ============================================================
 * Empty State
 * ============================================================ */
export const eventsListEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  paddingY: 6,
};