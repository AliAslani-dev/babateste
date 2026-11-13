import Image from "next/image";
import { Box } from "@mui/material";
import { imageWrapperStyles } from "../FeaturedCard.styles";

interface Props {
  src: string;
  alt: string;
}

export const FeaturedCardImage = ({ src, alt }: Props) => (
  <Box sx={imageWrapperStyles}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 600px) 90vw, 450px"
      style={{ objectFit: "cover" }}
    />
  </Box>
);