import type { SxProps, Theme } from "@mui/material/styles";

export const medicineFormWrapperStyles: SxProps<Theme> = {
  width: "100%",
  maxWidth: 480,
  mx: "auto",
  px: 2,
  pb: 4,
  backgroundColor: "background.paper",
  minHeight: "100vh",
};

export const medicineFormImageStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  mb: 3,
};

export const medicineFormImageBoxStyles: SxProps<Theme> = {
  width: 100,
  height: 100,
  objectFit: "contain",
};

export const medicineFormFieldsContainerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
};

export const medicineFormLabelStyles: SxProps<Theme> = {
  display: "block",
  mb: 1,
};

export const medicineFormSubmitWrapperStyles: SxProps<Theme> = {
  mt: 4,
};
