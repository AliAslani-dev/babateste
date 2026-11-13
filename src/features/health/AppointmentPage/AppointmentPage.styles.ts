import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const appointmentStyles = {
  page: {
    p: 2,
    pb: 3,
    boxSizing: "border-box",
    minHeight: "calc(100dvh - 56px - var(--safe-bottom, 0px) - 20px)",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  } satisfies SxProps<Theme>,

  loading: {
    p: 6,
    textAlign: "center",
  } satisfies SxProps<Theme>,

  error: {
    m: 3,
  } satisfies SxProps<Theme>,

  daysContainer: {
    display: "flex",
    gap: 1,
    overflowX: "auto",
    direction: "rtl",
    pb: 1,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  } satisfies SxProps<Theme>,

  dayItem: (selected: boolean): SxProps<Theme> => ({
    boxSizing: "border-box",
    width: 77,
    minWidth: 77,
    height: 60,
    p: "4px",
    borderRadius: "16px",
    border: `2px solid ${semanticColors.border.default}`,
    bgcolor: selected ? "#DBEAFE" : "transparent",
    color: "text.primary",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    flexShrink: 0,
    transition: "background-color 0.2s, border-color 0.2s",
  }),

  timeSection: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  } satisfies SxProps<Theme>,

  timeSectionTitle: {
    textAlign: "right",
    mb: 1,
  } satisfies SxProps<Theme>,
  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    width: "100%",
    gap: 1,
  } satisfies SxProps<Theme>,

  timeItem: (selected: boolean): SxProps<Theme> => ({
    boxSizing: "border-box",
    width: 77,
    minWidth: 0,
    height: 52,
    py: "12px",
    px: "4px",
    borderRadius: "16px",
    border: `2px solid ${semanticColors.border.default}`,
    bgcolor: selected ? "#DBEAFE" : "transparent",
    color: "text.primary",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s, border-color 0.2s",
  }),

  emptyTimes: {
    textAlign: "center",
    py: 4,
    color: "text.secondary",
  } satisfies SxProps<Theme>,

  continueButton: {
    mt: "auto",
    borderRadius: 4,
    py: 1.5,
    bgcolor: semanticColors.action.primary,
  } satisfies SxProps<Theme>,
};
