"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

import type { CardCategoryProps } from "./CardCategory.types";

import {
  cardCategoryStyles,
  cardCategoryIconStyles,
  cardCategoryTitleStyles,
} from "./CardCategory.styles";

export default function CardCategory({
  image,
  title,
  imageWidth = 48,
  imageHeight = 48,
  onClick,
}: CardCategoryProps) {
  return (
    <Box onClick={onClick} sx={cardCategoryStyles}>
      <Box sx={cardCategoryIconStyles(imageWidth, imageHeight)}>
        <Image
          src={image}
          alt={title}
          fill
          sizes={`${typeof imageWidth === "number" ? imageWidth : 36}px`}
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Typography variant="medium2xs" sx={cardCategoryTitleStyles}>
        {title}
      </Typography>
    </Box>
  );
}
