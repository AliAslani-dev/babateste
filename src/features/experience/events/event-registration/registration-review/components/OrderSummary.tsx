"use client";

import { Box, Typography } from "@mui/material";

import { registrationReviewStyles } from "./RegistrationReview.styles";
import { RegistrationReviewData } from "../types/RegistrationReview.types";

interface OrderSummaryProps {
  data: RegistrationReviewData;
}

export default function OrderSummary({ data }: OrderSummaryProps) {
  const selectedServices = [
    data.travelInsurance100 && "بیمه مسافرتی ۱۰۰ هزار تومان",
    data.travelInsurance80 && "بیمه مسافرتی ۸۰ هزار تومان",
  ].filter(Boolean);

  return (
    <Box sx={registrationReviewStyles.section}>
      <Typography
        variant="demiboldSm"
        sx={registrationReviewStyles.sectionTitle}
      >
        خلاصه سفارش
      </Typography>

      <Box sx={registrationReviewStyles.card}>
        <Box sx={registrationReviewStyles.summaryRow}>
          <Typography variant="mediumSm">تعداد مسافران</Typography>
          <Typography variant="mediumSm">
            {data.passengers.length.toLocaleString("fa-IR")} نفر
          </Typography>
        </Box>

        <Box sx={registrationReviewStyles.summaryRow}>
          <Typography variant="mediumSm">خدمات اضافه</Typography>
          <Box sx={{ textAlign: "left", minWidth: 0 }}>
            {selectedServices.length > 0 ? (
              selectedServices.map((service) => (
                <Typography
                  variant="regularSm"
                  sx={{ overflowWrap: "anywhere" }}
                >
                  {service}
                </Typography>
              ))
            ) : (
              <Typography variant="regularSm">ندارد</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
