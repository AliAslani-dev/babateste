"use client";

import { Box, Typography } from "@mui/material";

import type { RegistrationReviewData } from "../types/RegistrationReview.types";
import { registrationReviewStyles } from "./RegistrationReview.styles";

interface PriceDetailsProps {
  data: RegistrationReviewData;
  eventPrice: number;
}

const DISCOUNT = 0;

const formatPrice = (price: number) =>
  `${Math.max(0, price).toLocaleString("fa-IR")} تومان`;

export default function PriceDetails({ data, eventPrice }: PriceDetailsProps) {
  const additionalServicesPrice =
    (data.travelInsurance100 ? 100_000 : 0) +
    (data.travelInsurance80 ? 80_000 : 0);

  const totalPrice =
    eventPrice * data.passengers.length + additionalServicesPrice - DISCOUNT;

  const rows = [
    {
      label: "هزینه ایونت",
      price: eventPrice * data.passengers.length,
    },
    {
      label: "خدمات اضافه",
      price: additionalServicesPrice,
    },
    {
      label: "تخفیف",
      price: DISCOUNT,
    },
  ];

  return (
    <Box sx={registrationReviewStyles.section}>
      <Typography
        variant="demiboldSm"
        sx={registrationReviewStyles.sectionTitle}
      >
        جزئیات مبلغ
      </Typography>

      <Box sx={registrationReviewStyles.card}>
        {rows.map((row) => (
          <Box key={row.label} sx={registrationReviewStyles.priceRow}>
            <Typography variant="mediumSm">{row.label}</Typography>

            <Typography variant="mediumSm">{formatPrice(row.price)}</Typography>
          </Box>
        ))}

        <Box
          sx={{
            ...registrationReviewStyles.priceRow,
            ...registrationReviewStyles.totalRow,
          }}
        >
          <Typography variant="demiboldSm">جمع قابل پرداخت</Typography>

          <Typography variant="demiboldSm">
            {formatPrice(totalPrice)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
