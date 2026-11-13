"use client";

import { Box } from "@mui/material";
import { loadingDotSx } from "../styles/chat.styles";

type Props = { delay?: number };

export function LoadingDot({ delay = 0 }: Props) {
  return <Box sx={loadingDotSx(delay)} />;
}