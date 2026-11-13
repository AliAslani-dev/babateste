import type { SxProps, Theme } from "@mui/material";

export const cityPickerRootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  py: "16px",
};

export const searchContainerSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  direction: "rtl",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: "20px",
  px: "12px",
  height: 36,
  backgroundColor: "background.paper",
};

export const searchIconWrapperSx: SxProps<Theme> = {
  color: "text.secondary",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  "& svg": {
    width: 18,
    height: 18,
  },
};

export const searchInputSx: SxProps<Theme> = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "inherit",
  fontSize: "12px",
  color: "text.primary",
  textAlign: "right",
  "::placeholder": { color: "text.secondary" },
};

export const sectionTitleSx: SxProps<Theme> = {
  display: "block",
  mb: "8px",
  textAlign: "right",
  fontSize: "15px",
  fontWeight: 700,
  color: "text.primary",
};

export const allCitiesTitleSx: SxProps<Theme> = {
  display: "block",
  mb: "4px",
  textAlign: "right",
  fontSize: "15px",
  fontWeight: 700,
  color: "text.primary",
};

export const popularChipsRowSx: SxProps<Theme> = {
  display: "grid",
  direction: "rtl",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "6px 8px",
};

export const popularChipSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  border: "2px solid",
  borderColor: "divider",
  borderRadius: "18px",
  px: "8px",
  height: 36,
  backgroundColor: "background.paper",
  fontFamily: "inherit",
  fontSize: "11px",
  color: "text.primary",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:active": { opacity: 0.7 },
};

export const cityListSx: SxProps<Theme> = {
  listStyle: "none",
  m: 0,
  p: 0,
};

export const cityRowSx = (_isLast?: boolean): SxProps<Theme> => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  direction: "rtl",
  gap: "6px",
  height: 39,
  cursor: "pointer",
  borderBottom: "1px solid",
  borderColor: "divider",
  "&:active": { backgroundColor: "action.hover" },
});

export const cityRowIconSx: SxProps<Theme> = {
  order: -1,
  color: "text.primary",
  display: "flex",
  alignItems: "center",
  flexShrink: 0,
  "& svg": {
    width: 16,
    height: 16,
  },
};

export const emptyStateSx: SxProps<Theme> = {
  color: "text.secondary",
  textAlign: "center",
  py: "24px",
  display: "block",
};

export const cityRowLabelSx: SxProps<Theme> = {
  color: "text.primary",
  fontSize: "12px",
};