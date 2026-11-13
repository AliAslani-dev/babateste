"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CalendarIcon } from "@/components/ui/icons";

import { Button } from "@/components/ui/Button";

import {
  verticalTourCardStyles,
  verticalTourCardImageStyles,
  verticalTourCardTitleStyles,
  verticalTourCardDividerStyles,
  verticalTourCardInfoStyles,
  verticalTourCardInfoItemStyles,
  verticalTourCardInfoTextStyles,
  verticalTourCardFooterStyles,
  verticalTourCardPriceStyles,
  verticalTourCardButtonStyles,
} from "./VerticalTourCard.styles";

import { VerticalTourCardProps } from "./VerticalTourCard.types";
import UserCountIcont from "@/components/ui/icons/cards/event-card/UsersCountIcon";
import { toPersianDigits } from "@/lib/utils/toPersianNumber";

export default function VerticalTourCard({
  image,
  title,
  date,
  remaining,
  price,
  onButtonClick,
  href,
}: VerticalTourCardProps) {
  return (
    <Box sx={verticalTourCardStyles} dir="rtl">
      {/* Image */}
      <Box sx={verticalTourCardImageStyles}>
        <Image
          src={image}
          alt={title}
          width={196}
          height={119}
          quality={100}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Title */}
      <Typography variant="boldSm" sx={verticalTourCardTitleStyles}>
        {title}
      </Typography>

      {/* Divider */}
      <Box component="div" sx={verticalTourCardDividerStyles} />

      {/* Tour Info */}
      <Box sx={verticalTourCardInfoStyles}>
        <Box sx={verticalTourCardInfoItemStyles}>
          <CalendarIcon width={14} height={14} />

          <Typography variant="medium2xs" sx={verticalTourCardInfoTextStyles}>
            {date}
          </Typography>
        </Box>

        <Box sx={verticalTourCardInfoItemStyles}>
          {/* <PersonOutlineOutlinedIcon sx={verticalTourCardInfoIconStyles} /> */}
          <UserCountIcont width={14} height={14} />
          <Typography variant="medium2xs" sx={verticalTourCardInfoTextStyles}>
            {remaining.toLocaleString("fa-IR")} نفر باقیمانده
          </Typography>
        </Box>
      </Box>

      {/* Price + Button */}
      <Box sx={verticalTourCardFooterStyles}>
        <Typography variant="boldSm" sx={verticalTourCardPriceStyles}>
          {toPersianDigits(price)}
        </Typography>

        <Button
          color="primary"
          appearance="solid"
          size="xs"
          shape="pill"
          icon={<ArrowBackIcon />}
          iconPosition="start"
          onClick={onButtonClick}
          sx={verticalTourCardButtonStyles}
          aria-label="مشاهده تور"
        />
      </Box>
    </Box>
  );
}
