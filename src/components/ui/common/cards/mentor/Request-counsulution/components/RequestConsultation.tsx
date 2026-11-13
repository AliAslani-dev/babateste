"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { toPersianNumber } from "@/lib/utils";

import {
  RequestConsultaionBadgeStyles,
  RequestConsultaionButtonStyles,
  RequestConsultaionCardStyles,
  RequestConsultaionHeaderStyles,
  RequestConsultaionImageStyles,
  RequestConsultaionInfoStyles,
  RequestConsultaionMetaStyles,
  RequestConsultaionNameStyles,
  RequestConsultaionRatingIconStyles,
  RequestConsultaionRatingStyles,
  RequestConsultaionSpecialtyStyles,
  RequestConsultaionTitleStyles,
} from "./RequestConsultation.styles";

import type { RequestConsultaionCardProps } from "./RequestConsultation.types";
import UserCountIcont from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import PackageIcon from "@/components/ui/icons/RequestConsultation/PackageIcon";
import StarIcon from "@/components/ui/icons/RequestConsultation/StarIcon";
import { semanticColors } from "@/theme";
import { Button } from "@/components/ui/Button";

const FALLBACK_IMAGE_SRC = "/images/RequestConsultation/consultaion-user.png";

export default function RequestConsultaionCard({
  imageSrc,
  imageAlt,
  name,
  title,
  specialty,
  rating = 4.7,
  sessionCount,
  experience,
  buttonText = "درخواست مشاوره",
  onButtonClick,
  onCardClick,
  className,
}: RequestConsultaionCardProps) {
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const resolvedImageSrc =
    !imageSrc || failedImageSrc === imageSrc ? FALLBACK_IMAGE_SRC : imageSrc;

  return (
    <Box
      className={className}
      onClick={onCardClick}
      sx={RequestConsultaionCardStyles}
    >
      {/* ردیف اول: عکس سمت راست و اطلاعات کنار عکس */}
      <Box sx={RequestConsultaionHeaderStyles}>
        <Box
          sx={RequestConsultaionImageStyles}
        >
          <Image
            src={resolvedImageSrc}
            alt={imageAlt ?? name}
            fill
            sizes="72px"
            style={{ objectFit: "cover" }}
            onError={() => {
              if (resolvedImageSrc !== FALLBACK_IMAGE_SRC) {
                setFailedImageSrc(imageSrc);
              }
            }}
          />
        </Box>

        <Box sx={RequestConsultaionInfoStyles}>
          <Typography variant="demiboldBase" sx={RequestConsultaionNameStyles}>
            {name}
          </Typography>

          <Typography variant="mediumXs" sx={RequestConsultaionTitleStyles}>
            {title}
          </Typography>
        </Box>
      </Box>
      {/* ردیف دوم: تخصص زیر عکس و اطلاعات */}
      <Typography variant="regularXs" sx={RequestConsultaionSpecialtyStyles}>
        {specialty}
      </Typography>
      {/* ردیف سوم: امتیاز، سابقه و تعداد جلسات */}
      <Box sx={RequestConsultaionMetaStyles}>
        {/* امتیاز */}
        <Box sx={RequestConsultaionRatingStyles}>
          <Box sx={RequestConsultaionRatingIconStyles}>
            <StarIcon />
          </Box>

          <Typography component="span" variant="regularXs">
            {toPersianNumber(rating)}
          </Typography>
        </Box>

        {/* سابقه */}
        {experience !== undefined && (
          <Box sx={RequestConsultaionBadgeStyles}>
            <Box sx={RequestConsultaionRatingIconStyles}>
              <PackageIcon color={semanticColors.background.default} />
            </Box>
            <Typography component="span" variant="regularXs">
              {toPersianNumber(experience)} سال تجربه
            </Typography>
          </Box>
        )}

        {/* تعداد جلسات */}
        {sessionCount !== undefined && (
          <Box sx={RequestConsultaionBadgeStyles}>
            <Box sx={RequestConsultaionRatingIconStyles}>
              <UserCountIcont name="users" color="#FFFFFF" />
            </Box>
            <Typography component="span" variant="regularXs">
              {toPersianNumber(sessionCount)} جلسه
            </Typography>
          </Box>
        )}
      </Box>
      {/* ردیف چهارم: دکمه */}
      <Button
        fullWidth
        color="primary"
        appearance="solid"
        size="sm"
        shape="pill"
        typographyVariant="mediumSm"
        onClick={(event) => {
          event.stopPropagation();
          onButtonClick?.();
        }}
        sx={RequestConsultaionButtonStyles}
      >
        {buttonText}
      </Button>
    </Box>
  );
}