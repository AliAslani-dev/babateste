import type { SxProps, Theme } from "@mui/material";

/* ============================================================
 * Page Wrapper
 * ============================================================ */

/* ============================================================
 * Plans List (هر کارت یه ردیف)
 * ============================================================ */
export const PlansListWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginTop: 3,
};

/* ============================================================
 * Empty State
 * ============================================================ */
export const PlansListEmptyStyles: SxProps<Theme> = {
  textAlign: "center",
  paddingY: 6,
};