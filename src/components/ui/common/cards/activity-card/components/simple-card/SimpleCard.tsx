"use client";

import Image from "next/image";

import { Box, Typography } from "@mui/material";

import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

import {
  SimpleCardStyles,
  SimpleCardImageStyles,
  SimpleCardContentStyles,
  SimpleCardTitleStyles,
  SimpleCardSubtitleStyles,
  SimpleCardButtonStyles,
} from "./SimpleCard.styles";

import { SimpleCardProps } from "./SimpleCard.types";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function SimpleCard({
  image,
  title,
  subtitle,
  onButtonClick,
  href,
  disabled = false,
}: SimpleCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (disabled) return;

    if (href) {
      router.push(href);
      return;
    }

    onButtonClick?.();
  };

  return (
    <Box
      onClick={handleClick}
      role={href ? "link" : undefined}
      tabIndex={href && !disabled ? 0 : undefined}
      onKeyDown={(event) => {
        if (href && !disabled && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          handleClick();
        }
      }}
      sx={{
        ...SimpleCardStyles,
        opacity: disabled ? 0.6 : 1,
        pointerEvents: disabled ? "none" : "auto",
        cursor: disabled ? "default" : "pointer",
      }}
      dir="rtl"
    >
      <Box sx={SimpleCardImageStyles}>
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

      <Box sx={SimpleCardContentStyles}>
        <Typography variant="boldSm" sx={SimpleCardTitleStyles}>
          {title}
        </Typography>

        <Typography variant="regularXs" sx={SimpleCardSubtitleStyles}>
          {subtitle}
        </Typography>
      </Box>

      <Button
        color="secondary"
        shape="pill"
        icon={<ChevronLeftRoundedIcon />}
        iconPosition="end"
        size="xs"
        href={!disabled && !onButtonClick ? href : undefined}
        onClick={disabled ? undefined : handleClick}
        disabled={disabled}
        sx={SimpleCardButtonStyles}
      />
    </Box>
  );
}
