import type { SxProps, Theme } from "@mui/material";
import { semanticColors } from "@/theme";

export const registrationReviewStyles = {
  page: {
    width: "100%",
    mx: "auto",
    pb: 3,
    direction: "rtl",
  } satisfies SxProps<Theme>,

  section: {
    mb: 3,
  } satisfies SxProps<Theme>,

  sectionTitle: {
    mb: 2,
  } satisfies SxProps<Theme>,

  card: {
    width: "100%",
    boxSizing: "border-box",
    border: `1px solid ${semanticColors.border.default}`,
    borderRadius: "16px",
    overflow: "hidden",
  } satisfies SxProps<Theme>,

  summaryRow: {
    minHeight: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    px: 2,
    py: 1,
    "& + &": {
      borderTop: `1px solid ${semanticColors.border.default}`,
    },
  } satisfies SxProps<Theme>,

  passengerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    px: 2,
    py: 2,
    "& + &": {
      borderTop: `1px solid ${semanticColors.border.default}`,
    },
  } satisfies SxProps<Theme>,

  priceRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 2,
    px: 2,
    py: 1.5,
    "& + &": {
      borderTop: `1px solid ${semanticColors.border.default}`,
    },
  } satisfies SxProps<Theme>,

  totalRow: {
    backgroundColor:"#DBEAFE",
    fontWeight: 600,
  } satisfies SxProps<Theme>,

  submitWrapper: {
    mt: 3,
  } satisfies SxProps<Theme>,
};