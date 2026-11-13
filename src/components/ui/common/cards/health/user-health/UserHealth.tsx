"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

import { UserHealthProps } from "./UserHealth.types";

import {
  userHealthArrowStyles,
  userHealthBottomStyles,
  userHealthImageStyles,
  userHealthStyles,
  userHealthSubtitleWrapperStyles,
  userHealthTitleStyles,
  userHealthTopStyles,
} from "./UserHealth.styles";
import ChevronLeftIcon from "@/components/ui/icons/arrows/ChevronLefticon";
export default function UserHealth({
  image,
  title,
  subtitle,
  subtitleSuffix,
  text,
  titleColor,
  textColor,
  textHref,
  disabled = false,
}: UserHealthProps) {
  return (
    <Box
      sx={{
        ...userHealthStyles,
        ...(disabled && {
          opacity: 0.45,
          pointerEvents: "none",
          cursor: "not-allowed",
        }),
      }}
    >
      {/* Image + Title */}
      <Box sx={userHealthTopStyles}>
        <Box sx={userHealthImageStyles}>
          <Image src={image} alt={title} width={32} height={32} />
        </Box>

        <Typography
          sx={
            titleColor
              ? { ...userHealthTitleStyles, color: titleColor }
              : userHealthTitleStyles
          }
          variant="demiboldXs"
        >
          {title}
        </Typography>
      </Box>

      {/* Subtitle */}
      <Box sx={userHealthSubtitleWrapperStyles}>
        <Typography component="span" variant="extraBoldSm">
          {subtitle}
        </Typography>

        {subtitleSuffix && (
          <Typography component="span" variant="regular2xs">
            {subtitleSuffix}
          </Typography>
        )}
      </Box>

      {/* Text + Arrow */}
      <Box sx={userHealthBottomStyles}>
        {textHref ? (
          <Link
            href={textHref}
            style={{
              color: "inherit",
              textDecoration: "none",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <Typography
              component="span"
              variant="regularXs"
              sx={{ color: textColor }}
            >
              {text}
            </Typography>
          </Link>
        ) : (
          <Typography
            component="span"
            variant="regularXs"
            sx={{ color: textColor }}
          >
            {text}
          </Typography>
        )}

        <Box sx={userHealthArrowStyles}>
          <ChevronLeftIcon />
        </Box>
      </Box>
    </Box>
  );
}
