"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import type { LoginSlideProps } from "../../types";
import {
  loginSlideRootSx,
  loginSlideContentSx,
  loginSlideHeaderSx,
  loginSlideTitleSx,
  loginSlideDescriptionSx,
  loginSlideIllustrationSx,
  loginSlideIllustrationImageSx,
} from "../../styles";

export default function LoginSlide({
  slide,
  isActive,
  isFirst,
}: LoginSlideProps) {
  return (
    <Box sx={loginSlideRootSx}>
      <Image
        src={`/images/auth/login/slide_${slide.id}/bg.png`}
        alt=""
        fill
        priority={isFirst}
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <Box sx={loginSlideContentSx}>
        <Box sx={loginSlideHeaderSx}>
          <Typography sx={loginSlideTitleSx(isActive)}>
            {slide.title}
          </Typography>

          <Typography sx={loginSlideDescriptionSx(isActive)}>
            {slide.description}
          </Typography>
        </Box>

        <Box sx={loginSlideIllustrationSx(isActive)}>
          <Box
            component={Image}
            src={`/images/auth/login/slide_${slide.id}/cover.png`}
            alt={slide.title}
            width={320}
            height={260}
            priority={isFirst}
            draggable={false}
            sx={loginSlideIllustrationImageSx}
          />
        </Box>
      </Box>
    </Box>
  );
}