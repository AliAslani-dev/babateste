import type { SxProps, Theme } from "@mui/material";

export const RegistrationReviewPageStyles = {
  page: {
    width: "100%",
    minHeight: "100dvh",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    px: 2,
  } satisfies SxProps<Theme>,

  content: {
    width: "100%",
    maxWidth: 480,
    mx: "auto",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  } satisfies SxProps<Theme>,

  fieldsContainer: {
    width: "100%",
    flex: 1,
    direction: "rtl",
    display: "flex",
    flexDirection: "column",
  } satisfies SxProps<Theme>,

  submitWrapper: {
    mt: "auto",
    pt: 3,
    pb: 2,
    flexShrink: 0,
  } satisfies SxProps<Theme>,
};