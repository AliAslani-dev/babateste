// src/components/ui/CardService/CardService.tsx
"use client";

import Image from "next/image";
import { Box, Card, Typography } from "@mui/material";
import { cardServiceStyles } from "./styles";
import type { CardServiceProps } from "./types";
import { IconButton } from "../Button";
import ArrowLeftIcon from "../icons/cards/service-card/ArrowLeftIcon";

export default function CardService({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  onClick,
}: CardServiceProps) {
  return (
    <Box sx={cardServiceStyles.outerWrapper}>
      <Card elevation={0} sx={cardServiceStyles.card}>

        {/* ─── Title + subtitle ─── */}
        <Box sx={cardServiceStyles.textBlock}>
          <Typography variant="mediumSm" sx={cardServiceStyles.title}>
            {title}
          </Typography>
          <Typography variant="light2xs" sx={cardServiceStyles.subtitle}>
            {subtitle}
          </Typography>
        </Box>

        {/* ─── Bottom row: image left, button right ─── */}
        <Box sx={cardServiceStyles.bottomRow}>

          {/* 3D image — bottom left, overflows card bottom */}
          <Box sx={cardServiceStyles.imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Circle arrow button — bottom right */}
          <IconButton
            onClick={onClick}
            disableRipple
            aria-label="مشاهده"
            sx={cardServiceStyles.button}
          >
            <ArrowLeftIcon  />
          </IconButton>

        </Box>
      </Card>
    </Box>
  );
}
