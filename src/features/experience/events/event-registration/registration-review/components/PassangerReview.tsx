"use client";

import { Box, Stack, Typography } from "@mui/material";
import { registrationReviewStyles } from "./RegistrationReview.styles";
import { RegistrationReviewData } from "../types/RegistrationReview.types";

interface PassengerReviewProps {
  data: RegistrationReviewData;
}

export default function PassengerReview({ data }: PassengerReviewProps) {
  return (
    <Box sx={registrationReviewStyles.section}>
      <Typography
        variant="demiboldSm"
        sx={registrationReviewStyles.sectionTitle}
      >
        اطلاعات مسافران
      </Typography>

      <Box sx={registrationReviewStyles.card}>
        {data.passengers.map((passenger, index) => (
          <Box
            key={`${passenger.phoneNumber}-${index}`}
            sx={registrationReviewStyles.passengerRow}
          >
            <Stack spacing={0.5} sx={{ minWidth: 0 }}>
              <Typography variant="mediumSm" sx={{ overflowWrap: "anywhere" }}>
                {passenger.fullName || "نام ثبت نشده"}
              </Typography>
            </Stack>

            <Typography
              variant="regularSm"
              sx={{ direction: "ltr", flexShrink: 0 }}
            >
              {passenger.phoneNumber || "—"}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
