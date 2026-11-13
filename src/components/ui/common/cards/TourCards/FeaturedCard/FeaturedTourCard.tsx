"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { CalendarIcon } from "@/components/ui/icons";
import UserCountIcon from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import { semanticColors } from "@/theme";

import {
  featuredTourCardStyles,
  featuredTourCardImageWrapperStyles,
  featuredTourCardBadgeStyles,
  featuredTourCardContentStyles,
  featuredTourCardTitleRowStyles,
  featuredTourCardTitleStyles,
  featuredTourCardBookmarkStyles,
  featuredTourCardDividerStyles,
  featuredTourCardInfoRowStyles,
  featuredTourCardInfoColumnStyles,
  featuredTourCardInfoItemStyles,
  featuredTourCardPriceStyles,
} from "./FeaturedTourCard.styles";

import { FeaturedTourCardProps } from "./FeaturedTourCard.types";
import { SaveButton } from "@/components/ui/SaveButton";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";

export default function FeaturedTourCard({
  image,
  title,
  badge,
  date,
  remaining,
  price,
  onBookmarkClick,
  onCardClick,
  isBookmarked,
}: FeaturedTourCardProps) {
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBookmarkClick?.();
  };

  return (
    <Box sx={featuredTourCardStyles} dir="rtl" onClick={onCardClick}>
      {/* Image Wrapper */}
      <Box sx={featuredTourCardImageWrapperStyles}>
        <Image
          src={image}
          alt={title}
          fill
          quality={100}
          sizes="(max-width: 600px) 100vw, 360px"
          style={{ objectFit: "cover" }}
        />

        {/* Badge - top right */}
        {badge && <Box sx={featuredTourCardBadgeStyles}>{badge}</Box>}
      </Box>

      {/* Content */}
      <Box sx={featuredTourCardContentStyles}>
        {/* Title row: title + bookmark */}
        <Box sx={featuredTourCardTitleRowStyles}>
          <Typography variant="mediumSm" sx={featuredTourCardTitleStyles}>
            {title}
          </Typography>

          <Box
            sx={featuredTourCardBookmarkStyles}
            onClick={handleBookmarkClick}
            role="button"
            aria-label="ذخیره تور"
          >
            <SaveButton
              isSaved={isBookmarked}
              color={semanticColors.background.primary}
              savedColor={semanticColors.background.primary}
              onSave={onBookmarkClick}
            />
          </Box>
        </Box>

        {/* Divider زیر تایتل */}
        <Box component="div" sx={featuredTourCardDividerStyles} />

        {/* Info Row */}
        <Box sx={featuredTourCardInfoRowStyles}>
          {/* Right column: date + remaining */}
          <Box sx={featuredTourCardInfoColumnStyles}>
            <Box sx={featuredTourCardInfoItemStyles}>
              <CalendarIcon width={14} height={14} />
              <Typography variant="medium2xs">{date}</Typography>
            </Box>

            <Box sx={featuredTourCardInfoItemStyles}>
              <UserCountIcon width={14} height={14} />
              <Typography variant="medium2xs">{remaining}</Typography>
            </Box>
          </Box>

          {/* Left column: price */}
          <Typography variant="boldSm" sx={featuredTourCardPriceStyles}>
            {toPersianDigits(price)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
