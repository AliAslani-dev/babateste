"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import { regularImageWrapperStyles } from "../RegularCourseCard.styles";

interface Props {
  src: string;
  alt: string;
}

export const RegularCourseCardImage = ({ src, alt }: Props) => (
  <Box sx={regularImageWrapperStyles}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="140px"
      style={{ objectFit: "cover" }}
    />
  </Box>
);