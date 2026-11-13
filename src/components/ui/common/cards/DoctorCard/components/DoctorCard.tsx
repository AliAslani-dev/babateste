
"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";

import type { DoctorCardProps } from "./DoctorCard.types";

import {
  doctorCardStyles,
  doctorCardImageWrapperStyles,
  doctorCardInfoStyles,
  doctorCardNameRowStyles,
  doctorCardSpecialtyStyles,
  doctorCardRatingRowStyles,
  doctorCardStarStyles,
  doctorCardRatingStyles,
  doctorCardReviewCountStyles,
  doctorCardHospitalRowStyles,
  doctorCardHospitalStyles,
  doctorCardAppointmentBadgeStyles,
  doctorCardAppointmentTextStyles,
} from "./DoctorCard.styles";

import { SaveButton } from "@/components/ui/SaveButton";
import { semanticColors } from "@/theme";

export default function DoctorCard({
  doctor,
  onClick,
  onSaveToggle,
}: DoctorCardProps) {
  return (
    <Box
      sx={doctorCardStyles}
      onClick={() => onClick?.(doctor.id)}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* تصویر پزشک */}
      <Box sx={doctorCardImageWrapperStyles}>
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="100px"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* اطلاعات پزشک */}
      <Box sx={doctorCardInfoStyles}>
        <Box sx={doctorCardNameRowStyles}>
          <Typography variant="boldSm">
            {doctor.name}
          </Typography>

          <Box
            onClick={(event) => event.stopPropagation()}
            sx={{ display: "flex", flexShrink: 0 }}
          >
            <SaveButton
              isSaved={Boolean(doctor.isSaved)}
              onSave={() => onSaveToggle?.(doctor.id)}
              color={semanticColors.background.primary}
              savedColor={semanticColors.background.primary}
            />
          </Box>
        </Box>

        {/* تخصص پزشک */}
        <Typography
          sx={doctorCardSpecialtyStyles}
          variant="mediumSm"
        >
          {doctor.specialty}
        </Typography>

        {/* امتیاز و تعداد نظرات */}
        <Box sx={doctorCardRatingRowStyles}>
          <StarRoundedIcon sx={doctorCardStarStyles} />

          <Typography
            variant="mediumXs"
            sx={doctorCardRatingStyles}
          >
            {doctor.rating.toFixed(1)}
          </Typography>

          <Typography
            variant="mediumXs"
            sx={doctorCardReviewCountStyles}
          >
            ({doctor.reviewCount} نظر)
          </Typography>
        </Box>

        {/* بیمارستان و شهر */}
        <Box sx={doctorCardHospitalRowStyles}>
          <Typography
            variant="mediumXs"
            sx={doctorCardHospitalStyles}
          >
            {doctor.hospital}
          </Typography>
        </Box>

        {/* اولین نوبت */}
        <Box sx={doctorCardAppointmentBadgeStyles}>
          <Typography
            variant="regularXs"
            sx={doctorCardAppointmentTextStyles}
          >
            اولین نوبت: فردا
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
