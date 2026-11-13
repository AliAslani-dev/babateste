import type { SxProps, Theme } from "@mui/material";

// ─── Page root ────────────────────────────────────────────────────────────────
export const pageRootSx: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

// ─── Form wrapper ─────────────────────────────────────────────────────────────
export const formSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

// ─── Hero image ───────────────────────────────────────────────────────────────
export const heroWrapperSx: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  mb: "32px",
};

export const heroImageSx: SxProps<Theme> = {
  width: "100px",
  height: "100px",
  objectFit: "contain",
};

// ─── Fields list ──────────────────────────────────────────────────────────────
export const fieldsWrapperSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  flex: 1,
};

// ─── Field label ──────────────────────────────────────────────────────────────
export const fieldLabelSx: SxProps<Theme> = {
  display: "block",
  mb: "8px",
  textAlign: "right",
};

// ─── Submit wrapper ───────────────────────────────────────────────────────────
export const submitWrapperSx: SxProps<Theme> = {
  mt: "32px",
};
