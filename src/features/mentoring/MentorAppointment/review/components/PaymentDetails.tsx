"use client";

import { Box, Typography } from "@mui/material";

import { SESSION_FEE, formatPrice } from "../constants/review.constants";
import { sectionSx, sectionTitleSx, cardSx, detailRowSx, totalRowSx } from "./Review.styles";

// Placeholder discount — replace with value from discount code API
const DISCOUNT = 0;
const ADDITIONAL_SERVICES = 0;

export default function PaymentDetails() {
  const total = SESSION_FEE + ADDITIONAL_SERVICES - DISCOUNT;

  const rows = [
    { label: "هزینه‌ی تور",    value: formatPrice(SESSION_FEE) },
    { label: "خدمات اضافه",    value: formatPrice(ADDITIONAL_SERVICES) },
    { label: "تخفیف",          value: formatPrice(DISCOUNT) },
  ];

  return (
    <Box sx={sectionSx}>
      <Typography variant="demiboldSm" sx={sectionTitleSx}>
        جزییات پرداخت
      </Typography>

      <Box sx={cardSx}>
        {rows.map((row) => (
          <Box key={row.label} sx={detailRowSx}>
            <Typography variant="mediumSm">
              {row.label}
            </Typography>
            <Typography variant="mediumSm" color="text.secondary">
              {row.value}
            </Typography>
          </Box>
        ))}

        {/* Total row — highlighted */}
        <Box sx={totalRowSx}>
          <Typography variant="mediumSm">
            جمع قابل پرداخت
          </Typography>
          <Typography variant="mediumSm" color="text.secondary">
            {formatPrice(total)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
