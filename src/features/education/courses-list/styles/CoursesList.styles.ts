import type { SxProps, Theme } from "@mui/material";

/* ============================================================
 * Page Wrapper
 * ============================================================ */


/* ============================================================
 * Courses List (هر کارت یه ردیف)
 * ============================================================ */
export const coursesListWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginTop: 3,
};

/* ============================================================
 * Empty State
 * ============================================================ */
export const coursesListEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  paddingY: 6,
};