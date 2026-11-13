"use client";

import { Box, Typography } from "@mui/material";

import type { SummaryProps } from "./Summary.types";

import {
  SummaryStyles,
  SummaryItemsStyles,
  SummaryRowStyles,
  SummaryIconStyles,
  SummaryTextStyles,
  RequestButtonStyles,
} from "./Summary.styles";

import { Button } from "@/components/ui/Button";

export default function Summary({
  items,
  buttonText,
  onButtonClick,
}: SummaryProps) {
  return (
    <Box sx={SummaryStyles}>
      <Box sx={SummaryItemsStyles}>
        {items.map((item) => (
          <Box key={item.id} sx={SummaryRowStyles}>
            <Box sx={SummaryIconStyles}>{item.icon}</Box>

            <Typography variant="mediumSm" sx={SummaryTextStyles}>
              {item.label}: {item.value }
            </Typography>
          </Box>
        ))}
      </Box>

      {buttonText && onButtonClick && (
        <Button
          color="primary"
          appearance="solid"
          size="xs"
          shape="pill"
          fullWidth
          onClick={onButtonClick}
          sx={RequestButtonStyles}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  );
}
