import { semanticColors } from "@/theme";
import type { SxProps, Theme } from "@mui/material";

/* ============================================================
 * Wrapper
 * ============================================================ */
export const filterBarStyles: SxProps<Theme> = {
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

/* ============================================================
 * Chips Row
 * ============================================================ */
export const filterBarChipsRowStyles: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "8px",
};
//every chips filter
export const filterChipStyles = (isActive: boolean): SxProps<Theme> => ({
  height: "40px",
  minHeight: "40px",

  padding: "8px 4px",
  borderRadius: "16px",
  boxSizing: "border-box",

  backgroundColor: isActive ? "#DBEAFE" : semanticColors.background.default,
  border: `2px solid ${semanticColors.border.default}`,

  "&.MuiButton-root": {
    minWidth: "60px",
    padding: "8px 4px",
  },

  "&:hover": {
    backgroundColor: isActive ? "#DBEAFE" : semanticColors.background.default,
    borderColor: semanticColors.border.default,
  },

  "&:active": {
    backgroundColor: isActive ? "#DBEAFE" : semanticColors.background.default,
  },
});

/* ============================================================
 * Bottom Row (Sort + Filter)
 * ============================================================ */
export const filterBarBottomRowStyles: SxProps<Theme> = {
  width: "100%",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
};

//sort button
export const filterBarSortButtonStyles: SxProps<Theme> = {
  height: "40px",
  minHeight: "40px",
  padding: "8px",
  gap: "4px",
  borderRadius: "16px",
  border: `2px solid ${semanticColors.border.default}`,
  backgroundColor: semanticColors.background.default,
  boxSizing: "border-box",

  "&.MuiButton-root": {
    minWidth: "86px",
    padding: "8px",
    gap: "4px",
  },

  "&:hover": {
    backgroundColor: semanticColors.background.default,
    borderColor: semanticColors.border.default,
  },

  "&:active": {
    backgroundColor: semanticColors.background.default,
  },

  "& .MuiButton-endIcon": {
    margin: 0,
  },
};
//filter button
export const filterBarFilterButtonStyles: SxProps<Theme> = {
  width: "85px",
  minWidth: "85px",
  height: "40px",
  minHeight: "40px",
  padding: "8px",
  gap: "4px",
  borderRadius: "16px",
  border: `2px solid ${semanticColors.border.default}`,
  backgroundColor: semanticColors.background.default,
  boxSizing: "border-box",

  "&.MuiButton-root": {
    minWidth:"100px",
    height: "40px",
    minHeight: "40px",
    padding: "8px",
    gap: "4px",
  },

  "&:hover": {
    backgroundColor: semanticColors.background.default,
    borderColor: semanticColors.border.default,
  },

  "&:active": {
    backgroundColor: semanticColors.background.default,
  },

  "& .MuiButton-endIcon": {
    margin: 0,
  },
};
