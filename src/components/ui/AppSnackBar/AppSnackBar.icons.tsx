import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import type { ReactNode } from "react";
import type { AppSnackbarType } from "./AppSnackbar.types";
import { SnackbarDefaultIconStyles } from "./AppSnakBar.styles";

const WarningIcon = () => (
  <Box
    sx={{
      position: "relative",
      width: "20px",
      height: "18px",
      flex: "0 0 20px",
      bgcolor: "#FDC700",
      clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
    }}
  >
    <Box
      component="span"
      sx={{
        position: "absolute",
        top: "5px",
        left: 0,
        width: "100%",
        color: "#000000",
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: 1,
        textAlign: "center",
      }}
    >
      !
    </Box>
  </Box>
);

const InfoIcon = () => (
  <Box
    sx={{
      width: "20px",
      height: "20px",
      flex: "0 0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      bgcolor: "#0092B8",
      color: "#000000",
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: 1,
    }}
  >
    i
  </Box>
);

export const defaultSnackbarIcons: Record<AppSnackbarType, ReactNode> = {
  success: <CheckIcon sx={SnackbarDefaultIconStyles} />,
  error: <CloseIcon sx={SnackbarDefaultIconStyles} />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
  loading: <AutorenewIcon sx={SnackbarDefaultIconStyles} />,
};