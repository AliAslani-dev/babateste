"use client";

import Image from "next/image";

import { Box, Typography } from "@mui/material";
import Button from "@/components/ui/Button/Button";
import type { HamdamCardProps } from "./HamdamCard.types";

import {
  hamdamCardStyles,
  hamdamCardContentStyles,
  hamdamCardImageWrapperStyles,
  hamdamCardButtonStyles,
} from "./HamdamCard.styles";
import { semanticColors } from "@/theme";

export default function HamdamCard({
  image,
  imageAlt = "",
  title,
  subtitle,
  buttonText,
  buttonIcon,
  onButtonClick,
  buttonHref = "./hamdam",
  imageWidth = 120,
  imageHeight = 120,
  className,
}: HamdamCardProps) {
  return (
    <Box sx={hamdamCardStyles} className={className}>
      <Box sx={hamdamCardContentStyles}>
        <Typography
          variant="boldSm"
          sx={{ color: semanticColors.background.default }}
        >
          {title}
        </Typography>

        <Typography
          variant="regularXs"
          sx={{ color: semanticColors.background.default }}
        >
          {subtitle}
        </Typography>

        <Button
          shape="pill"
          typographyVariant="mediumSm"
          icon={buttonIcon}
          onClick={onButtonClick}
          href={buttonHref}
          size="lg"
          sx={hamdamCardButtonStyles}
        >
          {buttonText}
        </Button>
      </Box>

      <Box
        sx={{
          ...hamdamCardImageWrapperStyles,
        }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes={`${imageWidth}px`}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
  );
}
