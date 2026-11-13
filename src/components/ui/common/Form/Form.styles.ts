import type { SxProps, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import { semanticColors } from "@/theme";

export const getFormStyles = (
  spacing: number,
  sx?: SxProps<Theme>
): SxProps<Theme> => ({
  display: "flex",
  flexDirection: "column",
  gap: spacing,
  width: "100%",
  ...(sx as object),
});

export const getRootErrorStyles = (): SxProps<Theme> => ({
  padding: "10px 14px",
  borderRadius: "10px",
  backgroundColor: alpha(semanticColors.status.error, 0.08),
  border: `1px solid ${alpha(semanticColors.status.error, 0.24)}`,
  color: semanticColors.status.error,
  fontSize: "13px",
  fontWeight: 500,
  lineHeight: 1.5,
});