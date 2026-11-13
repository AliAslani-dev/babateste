"use client";

import Image from "next/image";

import { Box, Typography } from "@mui/material";

import {
  progressCardStyles,
  progressCardImageStyles,
  progressCardContentStyles,
  progressCardTitleStyles,
  progressCardButtonStyles,
} from "./ProgressCard.styles";

import { ProgressCardProps } from "./ProgressCard.types";

import { ProgressBar } from "@/components/ui/progress-bar";
import { Button } from "@/components/ui/Button";
import ChevronLeftIcon from "@/components/ui/icons/arrows/ChevronLefticon";

export default function ProgressCard({
  image,
  title,
  percentage,
  buttonLabel,
  onButtonClick,
  href,
}: ProgressCardProps) {
  return (
    <Box sx={progressCardStyles} dir="rtl">
      {/* Image */}
      <Box sx={progressCardImageStyles}>
        <Image
          src={image}
          alt={title}
          width={64}
          height={64}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Title + Progress */}
      <Box sx={progressCardContentStyles}>
        <Typography variant="mediumXs" sx={progressCardTitleStyles}>
          {title}
        </Typography>

        <ProgressBar percentage={percentage} />
      </Box>

      {/* Button */}

      <Button
        color="secondary"
        shape="pill"
        icon={<ChevronLeftIcon />}
        iconPosition="end"
        size="xs"
        href={!onButtonClick ? href : undefined}
        onClick={onButtonClick}
        sx={progressCardButtonStyles}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}
