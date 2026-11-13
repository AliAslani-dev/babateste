"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import {
  horizontalTourCardStyles,
  horizontalTourCardImageStyles,
  horizontalTourCardContentStyles,
  horizontalTourCardTitleStyles,
  horizontalTourCardSubtitleStyles,
} from "./HoricaontalTourCard.styles";
import { HorizontalTourCardProps } from "./HoricaontalTourCard.types";

export default function HorizontalTourCard({
  image,
  title,
  subtitle,
  onClick,
}: HorizontalTourCardProps) {
  return (
    <Box sx={horizontalTourCardStyles} dir="rtl" onClick={onClick}>
      <Box sx={horizontalTourCardImageStyles}>
        <Image
          src={image}
          alt={title}
          width={112}
          height={64}
          quality={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box sx={horizontalTourCardContentStyles}>
        <Typography variant="mediumXs" sx={horizontalTourCardTitleStyles}>
          {title}
        </Typography>

        <Typography variant="light2xs" sx={horizontalTourCardSubtitleStyles}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}
