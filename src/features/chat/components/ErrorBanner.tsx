"use client";

import { Box, Typography } from "@mui/material";
import { errorBoxSx, errorTextSx } from "../styles/chat.styles";

type Props = { message: string };

export function ErrorBanner({ message }: Props) {
  if (!message) return null;

  return (
    <Box sx={errorBoxSx}>
      <Typography sx={errorTextSx}>{message}</Typography>
    </Box>
  );
}