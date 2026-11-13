
"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { SaveButton } from "@/components/ui/SaveButton";

import type { FavoriteItemCardProps } from "./FavoriteCard.types";

import {
  FavoriteItemCardStyles,
  FavoriteItemCardImageStyles,
  FavoriteItemCardContentStyles,
  FavoriteItemCardTitleStyles,
  FavoriteItemCardSubtitleStyles,
  FavoriteItemCardSaveStyles,
} from "./FavoriteCard.styles";

const FALLBACK_IMAGE_SRC = "/images/RequestConsultation/consultaion-user.png";

export default function FavoriteItemCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  isSaved = true,
  onSaveToggle,
  onClick,
}: FavoriteItemCardProps) {
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);

  const resolvedImageSrc =
    !imageSrc || failedImageSrc === imageSrc
      ? FALLBACK_IMAGE_SRC
      : imageSrc;

  return (
    <Box onClick={onClick} sx={FavoriteItemCardStyles}>
      <Box sx={FavoriteItemCardImageStyles}>
        <Image
          src={resolvedImageSrc}
          alt={imageAlt ?? title}
          fill
          sizes="58px"
          style={{ objectFit: "cover" }}
          onError={() => {
            if (resolvedImageSrc !== FALLBACK_IMAGE_SRC) {
              setFailedImageSrc(imageSrc);
            }
          }}
        />
      </Box>

      <Box sx={FavoriteItemCardContentStyles}>
        <Typography
          variant="mediumXs"
          sx={FavoriteItemCardTitleStyles}
        >
          {title}
        </Typography>

        <Typography
          variant="regular2xs"
          sx={FavoriteItemCardSubtitleStyles}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box
        sx={FavoriteItemCardSaveStyles}
        onClick={(event) => event.stopPropagation()}
      >
        <SaveButton
          isSaved={isSaved}
          onSave={onSaveToggle}
        />
      </Box>
    </Box>
  );
}
