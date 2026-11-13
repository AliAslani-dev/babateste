"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import {
  DayTimeCardStyles,
  DayTimeCardImageStyles,
  DayTimeCardContentStyles,
  DayTimeCardTitleStyles,
  DayTimeCardSubtitleStyles,
  DayTimeCardButtonStyles,
} from "./DayTimeCard.styles";

import { DayTimeCardProps } from "./DayTimeCard.types";

import { Button } from "@/components/ui/Button";

export default function DayTimeCard({
  image,
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
  href,
}: DayTimeCardProps) {
  return (
    <Box sx={DayTimeCardStyles} dir="rtl">
      <Box sx={DayTimeCardImageStyles}>
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

      <Box sx={DayTimeCardContentStyles}>
        <Typography variant="boldSm" sx={DayTimeCardTitleStyles}>
          {title}
        </Typography>

        <Typography variant="light2xs" sx={DayTimeCardSubtitleStyles}>
          {subtitle}
        </Typography>
      </Box>

      <Button
        color="secondary"
        shape="pill"
        icon={<ChevronLeftRoundedIcon />}
        iconPosition="end"
        size="xs"
        href={!onButtonClick ? href : undefined}
        onClick={onButtonClick}
        sx={DayTimeCardButtonStyles}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}
