"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import {
  recommendationHealthStyles,
  recommendationHealthImageStyles,
  recommendationHealthContentStyles,
  recommendationHealthTitleStyles,
  recommendationHealthTextStyles,
} from "./RecommendationHealth.styles";

import { RecommendationHealthProps } from "./RecommendationHealth.types";

export default function RecommendationHealth({
  image,
  title,
  text,
  onClick,
}: RecommendationHealthProps) {
  return (
    <Box
      sx={{
        ...recommendationHealthStyles,
        cursor: onClick ? "pointer" : "default",
      }}
      dir="rtl"
      onClick={onClick}
      role="button"
      tabIndex={onClick ? 0 : undefined}
    >
      <Box sx={recommendationHealthImageStyles}>
        <Image
          src={image}
          alt={title}
          width={56}
          height={56}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box sx={recommendationHealthContentStyles}>
        <Typography
          variant="mediumXs"
          sx={recommendationHealthTitleStyles}
        >
          {title}
        </Typography>

        <Typography
          variant="light2xs"
          sx={recommendationHealthTextStyles}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}