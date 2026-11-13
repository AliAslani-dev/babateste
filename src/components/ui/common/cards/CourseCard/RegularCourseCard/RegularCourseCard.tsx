
"use client";

import { Box } from "@mui/material";

import type { RegularCourseCardProps } from "./RegularCourseCard.types";
import {
  regularCardStyles,
  regularContentStyles,
  regularDividerStyles,
} from "./RegularCourseCard.styles";

import { RegularCourseCardImage } from "./components/RegularCourseCardImage";
import { RegularCourseCardTitle } from "./components/RegularCourseCardTitle";
import { RegularCourseCardStats } from "./components/RegularCourseCardStats";
import { RegularCourseCardDescription } from "./components/RegularCourseCardDescription";

export default function RegularCourseCard({
  imageSrc,
  imageAlt,
  title,
  stats,
  description,
  isSaved = false,
  onBookmarkClick,
  onCardClick,
}: RegularCourseCardProps) {
  return (
    <Box sx={regularCardStyles} dir="rtl" onClick={onCardClick}>
      <RegularCourseCardImage src={imageSrc} alt={imageAlt} />

      <Box sx={regularContentStyles}>
        <RegularCourseCardTitle
          title={title}
          isSaved={isSaved}
          onBookmarkClick={onBookmarkClick}
        />

        <RegularCourseCardDescription description={description} />

        <Box component="div" sx={regularDividerStyles} />

        <RegularCourseCardStats stats={stats} />
      </Box>
    </Box>
  );
}
