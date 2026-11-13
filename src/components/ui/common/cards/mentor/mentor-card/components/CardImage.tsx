import Image from "next/image";
import { Box } from "@mui/material";
import { imageWrapperStyles } from "../MentorCard.styles";

interface CardImageProps {
  src: string;
  alt: string;
  size?: number;
}

export const CardImage = ({ src, alt, size = 80 }: CardImageProps) => (
  <Box sx={imageWrapperStyles}>
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
      priority
    />
  </Box>
);