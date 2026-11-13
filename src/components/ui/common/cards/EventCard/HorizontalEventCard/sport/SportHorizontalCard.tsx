"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import {
  sportHorizontalCardStyles,
  sportHorizontalCardImageStyles,
  sportHorizontalCardContentStyles,
  sportHorizontalCardTitleStyles,
  sportHorizontalCardSubtitleStyles,
  sportHorizontalCardInfoStyles,
  sportHorizontalCardInfoItemStyles,
  sportHorizontalCardInfoTextStyles,
  sportHorizontalCardIconStyles,
  sportHorizontalCardDividerStyles,
} from "./SportHorizontalCard.styles";

import { SportHorizontalCardProps } from "./SportHorizontalCard.types";
import { CalendarIcon } from "@/components/ui/icons";
import { semanticColors } from "@/theme";

export default function SportHorizontalCard({
  image,
  title,
  subtitle,
  date,
  time,
  location,
  onClick
}: SportHorizontalCardProps) {
  return (
    <Box sx={sportHorizontalCardStyles} dir="rtl" onClick={onClick}>
      <Box sx={sportHorizontalCardImageStyles}>
        <Image
          src={image}
          alt={title}
          width={84}
          height={64}
          quality={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box sx={sportHorizontalCardContentStyles}>
        <Typography variant="mediumSm" sx={sportHorizontalCardTitleStyles}>
          {title}
        </Typography>

        <Typography variant="light2xs" sx={sportHorizontalCardSubtitleStyles}>
          {subtitle}
        </Typography>

        <Box sx={sportHorizontalCardInfoStyles}>
          <Box sx={sportHorizontalCardInfoItemStyles}>
            <CalendarIcon color={semanticColors.text.secondary}/>

            <Typography
              variant="regular2xs"
              sx={sportHorizontalCardInfoTextStyles}
            >
              {date}
            </Typography>
          </Box>

          <Typography
            component="span"
            variant="regular2xs"
            sx={sportHorizontalCardDividerStyles}
          >
            |
          </Typography>

          <Box sx={sportHorizontalCardInfoItemStyles}>
            <AccessTimeOutlinedIcon sx={sportHorizontalCardIconStyles} />

            <Typography
              variant="regular2xs"
              sx={sportHorizontalCardInfoTextStyles}
            >
              {time}
            </Typography>
          </Box>

          <Typography
            component="span"
            variant="regular2xs"
            sx={sportHorizontalCardDividerStyles}
          >
            |
          </Typography>

          <Box sx={sportHorizontalCardInfoItemStyles}>
            <LocationOnOutlinedIcon sx={sportHorizontalCardIconStyles} />

            <Typography
              variant="regular2xs"
              sx={sportHorizontalCardInfoTextStyles}
            >
              {location}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
