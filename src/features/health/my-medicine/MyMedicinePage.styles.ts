import type { SxProps, Theme } from "@mui/material/styles";
import { semanticColors } from "@/theme";

export const myMedicinePageWrapperStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: 480,
  mx: "auto",
  px: 2,
  pb: 10, // room for the fixed bottom button
  minHeight: "100vh",
  backgroundColor: "background.paper",
  display: "flex",
  flexDirection: "column",
  gap: 2,
  pt: 2,
};

export const myMedicinePageHeaderStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  direction: "rtl",
  mb: 1,
};

export const myMedicinePageTabsContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  borderRadius: "20px",
  backgroundColor: semanticColors.background.secondary,
  padding: "4px",
  direction: "rtl",
  gap: "4px",
};

export const myMedicinePageTabStyles = (active: boolean): SxProps<Theme> => ({
  flex: 1,
  height: 36,
  borderRadius: "15px",
  border: "none",
  backgroundColor: active ? semanticColors.background.default : "transparent",
  boxShadow: active ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s ease",
  padding: 0,
});

export const myMedicinePageCardsListStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
};

export const myMedicinePageAddButtonWrapperStyles: SxProps<Theme> = {
  position: "fixed",
  bottom: 15,
  left: "50%",
  transform: "translateX(-50%)",
  width: "calc(100% - 32px)",
  maxWidth: 448,
  zIndex: 10,
};
